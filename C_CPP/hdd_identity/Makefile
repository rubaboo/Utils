CC := gcc
LDFLAGS := -lcrypto

hdd_identity : hdd_identity.c
	$(CC) -o hdd_identity hdd_identity.c $(LDFLAGS)
	
.PHONY : clean
clean :
	rm hdd_identity
