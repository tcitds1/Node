#include <iostream>
using namespace std;
int find(char *str, int n, char key) {
  char temp = str[n-1];
  str[n-1] = key;
  int i = 0;
  while(str[i] != key) {
    i++;
  }
  str[n-1] = temp;
  if ( i == n - 1) {
    return -1;
  } else {
    return i;
  }
}
int main() {
  char greeting[] = "Hello";
  int re = find(greeting, 5, 'l');
  cout<<re<<endl;
  return 0;
}