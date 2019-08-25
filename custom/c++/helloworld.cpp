#include <iostream>
using namespace std;
int main()
{
    int a = 5;
    // int *b = &a;
    // cout<< b <<endl;
    // cout << "Hello, world!" << endl;
    // int *z = &a;
    // *z = 22;
    int c[] = {1,2,3,4,5};
    cout<< *(c+1);
    return 0;
}