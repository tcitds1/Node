import java.util.Arrays;
class Sort {
  public void bubble (int[] array, int n) {
    for (int i = 0; i < n; n++) {
      boolean mark = true;
      for (int j = 0; j <n-1-i; j++) {
        if (array[j] > array[j + 1]) {
          int temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
          mark = false;
        }
      }
      if (mark) {
        break;
      }
    }
  }

  // 插入排序要点
  public static int[] insertSort(int[] array, int n) {
    if (n <= 1) {
      return array;
    }
    for (int i = 1; i < n; i++) {
      int value = array[i];
      int j = i - 1;
      for (; j >= 0; j--) {
        if (array[j] > value) {
          array[j + 1] = array[j];
        } else {
          break;
        }
      }
      array[j + 1] = value;
    }
    return array;
  }
  

  // 选择排序
  // 1 2 3 4 5
  public static int[] selectSort(int[] array, int n) {
    for (int i = 0; i < n; i++) {
      int minIndex = i;
      for (int j = i + 1; j < n; j++) {
        if (array[minIndex] > array[j]) {
          minIndex = j;
        }
      }
      int temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
    return array;
  }

  public static void main(String[] argus) {
    int arr[] = {1,5,6,2,4,7,2,10};
    int[] result = selectSort(arr, 8);
    System.out.println(Arrays.toString(result));
  }
}