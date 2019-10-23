#include <iostream>
using namespace std;

int find(char* a, int n, char key) {
  // 边界条件处理，如果a为空，或者n<=0，说明数组中没有数据，就不用while循环比较了
  if(a == NULL || n <= 0) {
    return -1;
  }
  
  int i = 0;
  // 这里有两个比较操作：i<n和a[i]==key.
  while (i < n) {
    if (a[i] == key) {
      return i;
    }
    ++i;
  }
  
  return -1;
}

int main() {
  char greeting[] = "Hello";
  int result = find(greeting, 5, 'l');
  cout<<result<<endl;
}