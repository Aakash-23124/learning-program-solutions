import java.util.Scanner;

public class Manager {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        ProductManager manager = new ProductManager();
        boolean on = true;

        System.out.println("Welcome to Product Manager System");

        while (on) {
            System.out.println("\nMenu:");
            System.out.println("1. Add Product");
            System.out.println("2. Search (Linear)");
            System.out.println("3. Search (Binary)");
            System.out.println("4. Display All");
            System.out.println("5. Exit");
            System.out.print("Enter choice: ");

            int ch = sc.nextInt();
            sc.nextLine();

            switch (ch) {
                case 1:
                    manager.addProduct(sc);
                    break;
                case 2:
                    System.out.print("Enter ID to search (Linear): ");
                    int lid = sc.nextInt();
                    int lidx = manager.linearSearch(lid);
                    if (lidx != -1) {
                        System.out.println("Found at index: " + lidx);
                        manager.showProduct(lid);
                    } else {
                        System.out.println("Product not found.");
                    }
                    break;
                case 3:
                    System.out.print("Enter ID to search (Binary): ");
                    int bid = sc.nextInt();
                    int bidx = manager.binarySearch(bid);
                    if (bidx != -1) {
                        System.out.println("Found at index: " + bidx);
                        manager.showProduct(bid);
                    } else {
                        System.out.println("Product not found.");
                    }
                    break;
                case 4:
                    manager.showAll();
                    break;
                case 5:
                    on = false;
                    System.out.println("Exiting program.");
                    break;
                default:
                    System.out.println("Invalid option. Try again.");
            }
        }

        sc.close();
    }
}
