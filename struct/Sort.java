// 归并排序算法, 氛围两部分
// 1.分离，2.合并
// 分离参数，array[], start, end, result[]
// 合并参数，array[], start1, end1, start2, end2, result[]

import java.util.Arrays;
class Sort {
  static void merge_sort_recursive(int[] arr, int[] result, int start, int end) {
    if (start >= end)
      return;
    int mid = (start + end) / 2;
    int start1 = start, end1 = mid;
    int start2 = mid + 1, end2 = end;
    merge_sort_recursive(arr, result, start1, end1);
    merge_sort_recursive(arr, result, start2, end2);
    merge(arr, start1, end1, start2, end2, result);
  }
  public static void merge(int[] arr, int start1, int end1, int start2, int end2, int[] result) {
    int k = start1;
    int bk = start1;
    while(start1 <= end1 && start2 <= end2) {
      result[k++] = arr[start1] < arr[start2] ? arr[start1++] : arr[start2++];
    }
    while(start1 <= end1) {
      result[k++] = arr[start1++];
    }
    while(start2 <= end2) {
      result[k++] = arr[start2++];
    }
    while(bk <= end2) {
      arr[bk] = result[bk];
      bk++;
    }
  }
  public static void merge_sort(int[] arr) {
    int len = arr.length;
    int[] result = new int[len];
    merge_sort_recursive(arr, result, 0, len - 1);
  }
  public static void main(String[] argus){
    int[] array = {1,3,2,4,56,29,10,2140,432,13,22,12};
    merge_sort(array);
    System.out.println(Arrays.toString(array));
  }
}