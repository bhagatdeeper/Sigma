import java.util.*;

public class fibonacci {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int p1 = 0;
        int p2 = 1;
        System.out.print("Enter a number : ");
        int n = sc.nextInt();

        if(n == 0){
            System.out.print(n);
        } else if (n == 1) {
            System.out.print(n);
        } else{
            System.out.println("0\n" + "1");
        }
        for(int i = 2; i <= n; i++){
            int fib = p1 + p2;
            p1 = p2;
            p2 = fib;
            System.out.println(fib);
        }
    }
}
