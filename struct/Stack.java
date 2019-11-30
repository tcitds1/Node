class Stack {
  private int count;
  private int n;
  private String[] items;
  
  public void initStack(int n) {
    this.items = new String[n];
    this.count = 0;
    this.n = n;
  }
  
  public void push(String item) {
    if (this.n == this.count) {
      System.out.println("栈空间不够la");
      return;
    }
    this.items[count] = item;
    this.count++;
  }

  public String pop() {
    if (this.count == 0) {
      return null;
    }
    String popItem = this.items[count - 1];
    this.count--;
    return popItem;
  }

  static public void main(String argus[]) {
  }
}