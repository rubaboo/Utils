import sys
import socket

from consts import DNS_SERVER, BAD_IP, DNS_PORT, MAX_WAIT_TIMES, TIMEOUT

def is_bad_ip(ip_str):
    return ip_str in BAD_IP

def encode_dns_request(domain):
    res = ">:" + "\x01\x00\x00\x01\x00\x00\x00\x00\x00\x00"
    domain = domain.split('.')
    for d in domain:
        res += chr(len(d)) + d
    res += "\x00\x00\x01\x00\x01"
    return res

def decode_dns_response(data):
    return '.'.join(str(ord(i)) for i in data[-4:])

def resolve(domain):
    for dns in DNS_SERVER:
        print 'dns server: %s' % dns
        address = (dns, DNS_PORT)
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        msg = encode_dns_request(domain)
        s.sendto(msg, address)
        s.settimeout(TIMEOUT)

        for i in xrange(MAX_WAIT_TIMES):
            
            try:
                data = s.recv(4096)
                ip = decode_dns_response(data)
                
                if ip in BAD_IP:
                    print 'BAD IP > %s' % ip
                else:
                    print ip
                
            except socket.timeout:
                break
        print '-' * 20

def main():
    if len(sys.argv) < 2:
        exit(-1)
    domain = sys.argv[1]

    resolve(domain)

if __name__ == '__main__':
    main()
