#include <iostream>
#include <vector>
using namespace std;

// 8 directions: R, L, D, U, DR, DL, UR, UL
int dx[] = {0, 0, 1, -1, 1, 1, -1, -1};
int dy[] = {1, -1, 0, 0, 1, -1, 1, -1};

bool isValid(int x, int y, int n) {
    return x >= 0 && x < n && y >= 0 && y < n;
}

int countoccurrence(int n, string grid[], string word) {
    int count = 0;
    int len = word.length();

    for (int i = 0; i < n; ++i) {
        for (int j = 0; j < n; ++j) {

            for (int dir = 0; dir < 8; ++dir) {
                int x = i, y = j;
                int k;

                // Match the word in the current direction
                for (k = 0; k < len; ++k) {
                    if (!isValid(x, y, n) || grid[x][y] != word[k]) break;
                    x += dx[dir];
                    y += dy[dir];
                }

                if (k == len) count++;
            }
        }
    }

    return count;
}
