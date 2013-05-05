#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <errno.h>
#include <unistd.h>
#include <fcntl.h>
#include <sys/ioctl.h>
#include <linux/hdreg.h>
#include <openssl/md5.h>

char * md5_identity(void *data, int len)
{
    unsigned char hash[16];
    char* result;
    int ptr,i;

    result = (char*)malloc(sizeof(char)*512);
    memset(result, 0, sizeof(result));
    MD5_CTX ctx;
    MD5_Init(&ctx);
    MD5_Update(&ctx,(char*)data,len);
    MD5_Final(hash,&ctx);

    ptr = 0;
    for(i=0;i<16;i++)
    {
        ptr += sprintf(result+ptr, "%02x", hash[i]);
    }
    return result;
}

int main(int argc, char *argv[])
{
    static struct hd_driveid hd;
    char * md5_id;
    int fd;

    if (geteuid() >  0) 
    {
        printf("ERROR: Must be root to use\n");
        exit(1);
    }

    if ((fd = open(argv[1], O_RDONLY|O_NONBLOCK)) < 0) 
    {
        printf("ERROR: Cannot open device %s\n", argv[1]);
        exit(1);
    }

    if (!ioctl(fd, HDIO_GET_IDENTITY, &hd)) 
    {
        md5_id = md5_identity(&hd, sizeof(hd));

        printf("  Hard Disk Model:   %.40s\n", hd.model);
        printf("    Serial Number:   %.20s\n", hd.serial_no);
        printf("Identity with MD5:   %s\n", md5_id);
        free(md5_id);
    }
    else if (errno == -ENOMSG)
    {
        printf("No hard disk identification information available\n");
    }
    else 
    {
        perror("ERROR: HDIO_GET_IDENTITY");
        exit(1);
    }
    return 0;
}
