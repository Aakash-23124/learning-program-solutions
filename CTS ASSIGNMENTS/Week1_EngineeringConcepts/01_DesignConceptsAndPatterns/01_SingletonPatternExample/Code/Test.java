class Check {
    public static void main(String[] args) {

        MyConnection c1 = MyConnection.getCon();
        MyConnection c2 = MyConnection.getCon();

        if (c1 == c2) {
            System.out.println("Same object");
        } else {
            System.out.println("Different object");
        }
    }
}