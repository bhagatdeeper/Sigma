public class factorial {
    public static int fact(int a){
        int fact = 1;
        for(int i = 1; i <= a; i++){
            fact *= i;
        }
        return fact;
    }
    public static void main(String[] args) {
        int a = 5;
        int fact = fact(a);
        System.out.println(fact);
    }
}
