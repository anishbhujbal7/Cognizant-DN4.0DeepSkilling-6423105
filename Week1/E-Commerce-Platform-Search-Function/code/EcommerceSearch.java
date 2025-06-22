public class EcommerceSearch {
    public static void main(String[] args) {
        Product[] products = {
            new Product(105, "Laptop", "Electronics"),
            new Product(203, "Book", "Education"),
            new Product(301, "Shirt", "Clothing"),
            new Product(150, "Phone", "Electronics"),
            new Product(89, "Watch", "Accessories")
        };
        
        Product[] sortedProducts = products.clone();
        SearchAlgorithms.sortProductsById(sortedProducts);
        
        int searchId = 150;
        
        long startTime = System.nanoTime();
        Product linearResult = SearchAlgorithms.linearSearch(products, searchId);
        long linearTime = System.nanoTime() - startTime;
        
        startTime = System.nanoTime();
        Product binaryResult = SearchAlgorithms.binarySearch(sortedProducts, searchId);
        long binaryTime = System.nanoTime() - startTime;
        
        System.out.println("Linear Search Result: " + (linearResult != null ? linearResult.productName : "Not found"));
        System.out.println("Binary Search Result: " + (binaryResult != null ? binaryResult.productName : "Not found"));
        System.out.println("Linear Search Time: " + linearTime + " ns");
        System.out.println("Binary Search Time: " + binaryTime + " ns");
    }
}