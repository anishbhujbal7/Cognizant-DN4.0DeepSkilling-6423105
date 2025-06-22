class SearchAlgorithms {
    
    public static Product linearSearch(Product[] products, int targetId) {
        for (Product product : products) {
            if (product.productId == targetId) {
                return product;
            }
        }
        return null;
    }
    
    public static Product binarySearch(Product[] sortedProducts, int targetId) {
        int left = 0;
        int right = sortedProducts.length - 1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (sortedProducts[mid].productId == targetId) {
                return sortedProducts[mid];
            }
            
            if (sortedProducts[mid].productId < targetId) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return null;
    }

    public static void sortProductsById(Product[] products) {
        for (int i = 1; i < products.length; i++) {
            Product key = products[i];
            int j = i - 1;
            
            while (j >= 0 && products[j].productId > key.productId) {
                products[j + 1] = products[j];
                j = j - 1;
            }
            products[j + 1] = key;
        }
    }

}