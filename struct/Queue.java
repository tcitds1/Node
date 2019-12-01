class Queue {
  private int n;
  private String[] items;
  private int head = 0;
  private int tail = 0;
  public void initQueue(n) {
    this.n = n;
    this.items = new String[n];
  }
  // public void enqueue(String item) {
  //   if (this.n == tail) {
  //     return;
  //   }
  //   this.items[this.tail] = item;
  //   this.tail++;
  // }
  public boolean enqueue(String item) {
    if (n == tail) {
      if (head == 0) {
        return false
      } else {
        int back = head;
        for (int i = 0; i<tail; i++) {
          items[i - head]  = items[i]
        }
        tail -= head;
        head = 0;
      }
    }
    items[tail] = item;
    tail ++;
    return true;
  }
  public String dequeue() {
    if (this.head == this.tail) {
      return null;
    }
    String outItem = this.items[this.head];
    this.head ++;
    return outItem
  }
}