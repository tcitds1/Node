import java.util.Arrays;
class QuickSort {
    public static void qSort(int[] arr, int head, int tail) {
        if (head >= tail || arr == null || arr.length <= 1) {
            return;
        }
        int i = head, j = tail, pivot = arr[(head + tail) / 2];
        while (i <= j) {
            while (arr[i] < pivot) {
                ++i;
            }
            while (arr[j] > pivot) {
                --j;
            }
            System.out.println("i" + " " + i);
            System.out.println("j" + " " + j);
            if (i < j) {
                System.out.print("arr" + i + ": " + arr[i] + "  ");
                System.out.print("pivot: " + pivot + "  ");
                System.out.println("arr" + j + ": " + arr[j]);
                int t = arr[i];
                arr[i] = arr[j];
                arr[j] = t;
                ++i;
                --j;
            } else if (i == j) {
                ++i;
            }
        }
        qSort(arr, head, j);
        qSort(arr, i, tail);
    }

    public static void main(String[] args) {
        int[] arr = new int[]{1, 4, 8, 3, 55, 13, 4, 9, 2, 9, 4, 10};
        qSort(arr, 0, arr.length - 1);
        System.out.println(Arrays.toString(arr));
    }
}