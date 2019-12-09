class BinarySearch {
    public static int search(int[] arr, int e) {
        int middle, head = 0, tail = arr.length - 1;
        while (head <= tail) {
            middle = (head + tail) / 2;
            if (arr[middle] == e) {
                return middle;
            } else if (e < arr[middle]) {
                tail = middle - 1;
            } else {
                head = middle + 1;
            }
        }
        return -1;
    }
    public static void main(String[] argus) {
        int[] arr = {1,3,4,5,6,7,8,9,10,29,33,33};
        int index = search(arr, 4);
        System.out.print(index);
    }
}