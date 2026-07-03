import java.util.Arrays;
import java.util.Comparator;

public class SearchAlgorithms {

    // Linear Search
    public static Product linearSearch(Product[] products, int productId) {

        for (Product product : products) {

            if (product.productId == productId) {
                return product;
            }

        }

        return null;
    }

    // Binary Search
    public static Product binarySearch(Product[] products, int productId) {

        int left = 0;
        int right = products.length - 1;

        while (left <= right) {

            int mid = (left + right) / 2;

            if (products[mid].productId == productId) {
                return products[mid];
            }

            if (products[mid].productId < productId) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }

        }

        return null;
    }

    public static void displayProduct(Product product) {

        if (product != null) {

            System.out.println("Product ID   : " + product.productId);
            System.out.println("Product Name : " + product.productName);
            System.out.println("Category     : " + product.category);

        } else {

            System.out.println("Product not found.");

        }

    }

    public static void main(String[] args) {

        Product[] products = {

                new Product(101, "Laptop", "Electronics"),
                new Product(104, "Shoes", "Fashion"),
                new Product(103, "Watch", "Accessories"),
                new Product(102, "Phone", "Electronics")

        };

        System.out.println("===== Linear Search =====");

        Product linearResult = linearSearch(products, 103);
        displayProduct(linearResult);

        Arrays.sort(products, Comparator.comparingInt(product -> product.productId));

        System.out.println("\n===== Binary Search =====");

        Product binaryResult = binarySearch(products, 103);
        displayProduct(binaryResult);

    }
}
