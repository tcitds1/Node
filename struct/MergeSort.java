class MergeSort {
  public static void main(String[] argus) {
    int a = 1 / 2;
    System.out.println(a);
  }

  public void merge(int[] arrays, int L, int M, int R) {

    // //左边的数组的大小
    // int[] leftArray = new int[M - L];

    // //右边的数组大小
    // int[] rightArray = new int[R - M + 1];

    // //往这两个数组填充数据
    // for (int i = L; i < M; i++) {
    // leftArray[i - L] = arrays[i];
    // }
    // for (int i = M; i <= R; i++) {
    // rightArray[i - M] = arrays[i];
    // }

    // int i = 0, j = 0;
    // // arrays数组的第一个元素
    // int k = L;

    // //比较这两个数组的值，哪个小，就往数组上放
    // while (i < leftArray.length && j < rightArray.length) {

    // //谁比较小，谁将元素放入大数组中,移动指针，继续比较下一个
    // if (leftArray[i] < rightArray[j]) {
    // arrays[k] = leftArray[i];

    // i++;
    // k++;
    // } else {
    // arrays[k] = rightArray[j];
    // j++;
    // k++;
    // }
    // }

    // //如果左边的数组还没比较完，右边的数都已经完了，那么将左边的数抄到大数组中(剩下的都是大数字)
    // while (i < leftArray.length) {
    // arrays[k] = leftArray[i];
    // i++;
    // k++;
    // }
    // //如果右边的数组还没比较完，左边的数都已经完了，那么将右边的数抄到大数组中(剩下的都是大数字)
    // while (j < rightArray.length) {
    // arrays[k] = rightArray[j];
    // k++;
    // j++;
    // }
  }
}