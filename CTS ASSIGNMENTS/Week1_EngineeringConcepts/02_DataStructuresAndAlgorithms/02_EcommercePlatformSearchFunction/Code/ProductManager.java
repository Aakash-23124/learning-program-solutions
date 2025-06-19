import java.util.ArrayList;
import java.util.Scanner;

public class ProductManager {
    ArrayList<Product> list = new ArrayList<>();

    public void addProduct(Scanner sc) {
        System.out.print("Enter Product ID: ");
        int id = sc.nextInt();
        sc.nextLine();

        for (Product p : list) {
            if (p.getId() == id) {
                System.out.println("Product with this ID already exists.");
                return;
            }
        }

        System.out.print("Enter Product Name: ");
        String name = sc.nextLine();

        System.out.print("Enter Category: ");
        String type = sc.nextLine();

        list.add(new Product(id, name, type));
        System.out.println("Product added successfully.");
    }

    public int linearSearch(int id) {
        for (int i = 0; i < list.size(); i++) {
            if (list.get(i).getId() == id) return i;
        }
        return -1;
    }

    public int binarySearch(int id) {
        list.sort((a, b) -> Integer.compare(a.getId(), b.getId()));
        int low = 0, high = list.size() - 1;
        while (low <= high) {
            int mid = (low + high) / 2;
            if (list.get(mid).getId() == id) return mid;
            if (list.get(mid).getId() < id) low = mid + 1;
            else high = mid - 1;
        }
        return -1;
    }

    public void showProduct(int id) {
        int idx = binarySearch(id);
        if (idx != -1) {
            Product p = list.get(idx);
            System.out.println("ProductId: " + p.getId());
            System.out.println("ProductName: " + p.getName());
            System.out.println("Category: " + p.getType());
        } else {
            System.out.println("Product not found.");
        }
    }

    public void showAll() {
        if (list.isEmpty()) {
            System.out.println("No products to display.");
        } else {
            System.out.println("ProductId\tProductName\tCategory");
            for (Product p : list) {
                System.out.println(p.getId() + "\t\t" + p.getName() + "\t\t" + p.getType());
            }
        }
    }
}
