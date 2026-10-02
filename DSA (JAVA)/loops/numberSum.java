import java.util.*;

public class numberSum {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number : ");
        
        int num = sc.nextInt();
        int i = 0;
        int sum = 0;

        while(i < num){
            sum += i;
            i++;
        }
        System.out.println(sum);
    }
}
