public class Queue {
    protected int[] data;
    protected int front;
    protected int end;
    protected int size;
    protected static final int DEFAULT_SIZE = 10;
    public Queue(){
        this(DEFAULT_SIZE);
    }
    public Queue(int size) {
        this.data = new int[size];
    }
    public boolean isFull(){
        return size == data.length;
    }
    public boolean isEmpty(){
        return size ==0;
    }
    public boolean insert(int item){
        if(isFull()){
            return false;
        }
        data[end++]=item;
        size+=1;
        return true;
    }
    public int remove() throws Exception{
        if(isEmpty()){
            throw new Exception("Empty Queue");
        }
        int removed = data[0];
        for(int i=1;i<end;i++){
            data[i-1]=data[i];
        }end --;
        return removed;
    }
    public void display(){
        if(isEmpty()){
            System.out.println("Empty queue");
            return;
        }
        for(int i=0;i<end;i++){
            System.out.print(data[i]+ "->");
        }
        System.out.println("END");
    }
    public static void main(String[]args){

        Queue queue = new Queue();
        for(int i=0;i<10;i++){
            queue.insert(i);
        }
        queue.display();
    }

}
