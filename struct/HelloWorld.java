import java.util.Arrays;
class HelloWorld {
    public static void main(String[] argus) {
        int[] arrays = {1,2,4,5,2,8,9};
        int[] temp = new int[7];
        merge(arrays, 0, 3, 7, temp);
    }
    public static int[] mergeSort(int[] arrays, int L, int R) {
        
    }
    public static void merge(int[] arrays, int left, int middle, int right, int[] temp) {
        int i = 0, j = middle + 1;
        int llength = middle - left;
        int rlenght = right - middle + 1;
        int t = 0;
        for (; (i <= llength && j <= right); ) {
            if (arrays[i] < arrays[j]) {
                temp[t++] = arrays[i++];
            } else {
                temp[t++] = arrays[j++];
            }
        }
        while(i < llength) {
            temp[t++] = arrays[i++];
        }
        while(j < right) {
            temp[t++] = arrays[j++];
        }
        System.out.print(Arrays.toString(temp));
    }
}