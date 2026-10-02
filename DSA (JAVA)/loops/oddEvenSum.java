import java.util.*;

public class oddEvenSum{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int even = 0;
        int odd = 0;

        System.out.print("Enter a number : ");
        int n = sc.nextInt();

        for(int i = 0; i < n; i++){
            System.out.print("Enter " + n + " number(s) : ");
            int num = sc.nextInt();
            if(num % 2 == 0){
                even += num;
            } else {
                odd += num;
            }
        }
        System.out.println("Sum of even numbers : " + even);
        System.out.println("Sum of odd numbers : " + odd);
    }
}