public class product {
    public static int multiply(int a, int b){
        int product = a * b;
        return product;  
    }
    public static void main(String[] args) {
        int a = 5, b = 10;
        int product = multiply(a, b);
        System.out.println("Product : " + product);
    }
}
