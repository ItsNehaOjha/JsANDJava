public class SLL{

    private Node head;
    private Node tail;
    private int size ;

    public SLL(){
        this.size =0;
    }

    public class Node{
        private int val;
        private Node next;
        public Node(int val){
            this.val=val;
        }
        public Node(int val, Node next){
            this.val=val;
            this.next=null;
        }
    }
    public int getSize() {
        return size; 
    }
    public void insertAtFirst(int val){
        Node node = new Node(val);
        node.next = head;
        head= node;

        if(tail==head){
            tail=node;
        }
        size+=1;

    }

    public void insertLast(int val){
        if(tail == null){
            insertAtFirst(val);
            return;
        }

        Node node = new Node(val);
        tail.next= node;
        tail = node;
        size++;
    }

    // insert node at given place 

    public void insertAtPlace(int val, int index){
        if(index == 0){
            insertAtFirst(val);
        }
        if(index == size){
            insertLast(val);
        }
        Node temp = head;
        for(int i=1; i< index;i++){
            temp= temp.next;
        }
        Node node = new Node (val, temp.next);
        temp.next= node;
        size++;

    }

    // insertion by recursion at particular index

    public void insertRecur(int val, int index){
        
    }

    public void display(){
        Node temp = head;
        while(temp!=null){
            System.err.print(temp.val + " -> ");
            temp= temp.next;
        }
        System.err.println("END");
    }
}