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
        head = insertRecur(val, index, head);
    
    } //Yeh method public interface hai jo directly user ya main function se call
    // hota hai. Iska kaam sirf itna hai ki yeh recursion ko start kare aur first node (head) ke saath call kare.

    private Node insertRecur(int val, int index, Node node){
        if(index == 0){
            //Base Case: Jab index == 0 ho jata hai, toh hum ek new node create 
            //karte hain  aur uska next pointer node par set kar dete hain.
            Node temp = new Node(val,node);
            size++;
            return temp;
        }
        //Recursive Case: Agar index == 0 nahi hai, toh function apne aage ke 
        //node ko (node.next) ke saath insertRecur(val, index-1, node.next) ko 
        //call karta hai aur is process ko tab tak continue karta hai jab tak 
        //index zero na ho jaye.
        node.next = insertRecur(val, index-1, node.next);
        return node;
    }


    public void display(){
        Node temp = head;
        while(temp!=null){
            System.err.print(temp.val + " -> ");
            temp= temp.next;
        }
        System.err.println("END");
    }
    
    public Node deleteDublicate(){
        Node current = head;
        
        
        while (current != null && current.next != null) {
            if (current.val == current.next.val) {
                current.next = current.next.next; 
            } else {
                current = current.next; // Move to the next node
            }
        }
        return current;
    }
}