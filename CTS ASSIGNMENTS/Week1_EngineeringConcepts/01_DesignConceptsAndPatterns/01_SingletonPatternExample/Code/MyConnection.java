// trying singleton design pattern example

public class MyConnection {

    // static instance
    private static MyConnection con;

    // private constructor
    private MyConnection() {
        System.out.println("Object Created!");
    }

    // static method to get instance
    public static MyConnection getCon() {
        if (con == null) {
            con = new MyConnection();
        }
        return con;
    }
}