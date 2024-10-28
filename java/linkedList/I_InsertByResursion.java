public class I_InsertByResursion {
    public static void main(String[] args) {
        SLL list = new SLL();
        list.insertAtFirst(15);
        list.insertAtFirst(19);
        list.insertAtFirst(18);
        list.insertRecur(88,2);
        list.display();

    }
}
