public class practiceSLL {
    private Node head;
    private Node tail;
    private int size;

    public practiceSLL() {
        this.head = null; // Initialize head to null
        this.tail = null; // Initialize tail to null
        this.size = 0;    // Initialize size to 0
    }

    // Node class definition
    public class Node {
        private int val;
        private Node next;

        public Node(int val) {
            this.val = val;
            this.next = null; // Initializes next as null
        }

        public Node(int val, Node next) {
            this.val = val;
            this.next = next; // Initializes next with the provided node
        }
    }

    // Insert node at the beginning of the list
    public void insertAtFirst(int val) {
        Node node = new Node(val);
        node.next = head;
        head = node;

        if (tail == null) { // If the list was empty, update tail
            tail = node;
        }
        size++;
    }

    public void insertAtLast(int val){
        if(head== null){
            insertAtFirst(val);
            return;
        }
        Node node = new Node(val);
        tail.next = node;
        tail=node;
        size++;
    }
    // Recursive insertion at a specific index
    public void insertRecur(int val, int index) {
        head = insertRecur(val, index, head);
    }

    private Node insertRecur(int val, int index, Node node) {
        if (index == 0) {
            Node temp = new Node(val, node); // Create new node
            size++;
            return temp; // Return new node
        }
        node.next = insertRecur(val, index - 1, node.next); // Recurse for next node
        return node; // Return the current node
    }

    // Display the linked list
    public void display() {
        Node temp = head;
        while (temp != null) {
            System.out.print(temp.val + " -> ");
            temp = temp.next;
        }
        System.out.println("END");
    }



    //question 1 :  Remove duplicates from the linked list
    public void deleteDublicate() {
        Node current = head; // Start with the head of the list
        while (current != null && current.next != null) {
            if (current.val == current.next.val) {
                current.next = current.next.next; // Skip the duplicate
            } else {
                current = current.next; // Move to the next node
            }
        }
    }



    // question 2 : merge two linked list:

    public practiceSLL merge(practiceSLL first,practiceSLL second){

        Node f = first.head;
        Node s = second.head;

        practiceSLL ans = new practiceSLL();

        while(f!= null && s!=null){
            if(f.val < s.val){
                ans.insertAtLast(f.val);
                f= f.next;
                size++;
            }else{
                ans.insertAtLast(s.val);
                s= s.next;
                size++;
            }
        }
        while(f!=null){
            ans.insertAtLast(f.val);
            f=f.next;
        }
        while(s!=null){
            ans.insertAtLast(s.val);
            s=s.next;
        }

        return ans;

    }

    // question 3 : detect cycle in LL 
    public boolean hasCycle(Node head){
        Node fast = head;
        Node slow = head;

        while(fast != null && fast.next != null){
            fast = fast.next.next;
            slow = slow.next;
            if(fast == slow){
                return true;
            }
        }
        return false;
    }

//   Question 4: length of the cycle 

    public int lengthCycle(Node head){
        Node fast= head;
        Node slow= head;
        while(fast != null && fast.next != null){
            fast = fast.next.next;
            slow = slow.next.next;
            if(fast == slow){
                // calculate length
                Node temp = slow;
                int length=0;
                do{
                    temp = slow.next;
                    length ++;

                }while(temp != slow);
                return length;
            }
        }
        return 0;
    }


    public static void main(String[] args) {
        // practiceSLL list = new practiceSLL(); 
        // list.insertAtFirst(15);
        // list.insertAtFirst(18);
        // list.insertAtFirst(18);
        // list.insertAtFirst(18);
        // list.insertAtFirst(19);
        // list.insertAtFirst(19);
        // list.insertAtFirst(20);
        // list.insertRecur(88, 2); // Inserting 88 at index 2

        // System.out.println("Original list:");
        // list.display(); // Display original list

        // list.deleteDublicate(); // Remove duplicates

        // System.out.println("New list after removing duplicates:");
        // list.display(); // Display updated list

        practiceSLL list1 = new practiceSLL(); 
        list1.insertAtLast(15); // Use insertAtLast for correct ordering
        list1.insertAtLast(18);
        list1.insertAtLast(19);
        
        practiceSLL list2 = new practiceSLL();
        list2.insertAtLast(16); // Use insertAtLast for correct ordering
        list2.insertAtLast(17);
        list2.insertAtLast(20);

        System.out.println("List 1:");
        list1.display();

        System.out.println("List 2:");
        list2.display();

        // Merging the two lists
        practiceSLL mergedList = list1.merge(list1, list2);
        System.out.println("Merged List:");
        mergedList.display();
    }
}
