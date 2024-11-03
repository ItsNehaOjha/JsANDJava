public class CircularQueue{
    protected int[] data;
    protected static final int DEFAULT_SIZE = 10;
    protected int front =0;
    protected int end= 0;
    private int size =0;
    public CircularQueue(){
        this(DEFAULT_SIZE);
    }
    public CircularQueue(int size){
        this.data = new int[size];
    }
    //isfull method
    public boolean isFull(){
        return end == data.length;
    }
    // isEmpty() methoD
    public boolean isEmpty(){
        return size ==0;
    }

    //enqueue method:

    public boolean insert(int item){
        if(isFull()){
            return false;
        }
        data[end++] = item;
        end= end%data.length;
        size+=1;
        return true;
    }

    //dequeue method
    public int remove() throws Exception{
        if(isEmpty()){
            throw new Exception("Queue is empty");
        }
        int removed = data[front++];
        front=front %data.length;
        size--;
        return removed;
    }
    //peek method
    public int front() throws Exception{
        if(isEmpty()){
            throw new Exception("Queue is empty");
        }
        return data[front];
    }
    //display method
    public void display(){
        if(isEmpty()){
            System.out.println("Empty");
            return;
        }
        int i=front;
        do{
            System.out.print(data[i] +" -> ");
            i++;
            i%=data.length;
        }while(i != end);
        System.out.println("END");
    }

    public static void main(String[]args){
        System.out.println("Hello");
        CircularQueue queue = new CircularQueue();
        for(int i=0;i<10;i++){
            queue.insert(i);
        }
        try {
            queue.remove();
            System.out.println("Front element: " + queue.front());
            queue.remove();
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    
        queue.display();
    }
}