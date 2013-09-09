CC := g++
FLAGS := -lpthread 

main : main.cc Singleton.hxx
	$(CC) -o main main.cc $(FLAGS)

.PHONY : clean
clean :
	rm main
