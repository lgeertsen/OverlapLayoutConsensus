CC = g++
CFLAGS = -W -Wall
SRCS = overlap.cpp
OBJS = $(SRCS:.cpp = .o)
BIN = overlap
EXT = *.o

all: $(OBJS)
	clear;
	$(CC) -o $(BIN) $(OBJS)

%.o: %.cpp
	$(CC) -c $< -o $@ $(CFLAGS)

clean:
	rm -f $(EXT) $(BIN)

