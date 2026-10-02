import java.util.*;

public class naturalNum {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number : ");
        
        int num = sc.nextInt();
        int i = 0;

        while(i < num){
            System.out.println(i);
            i++;
        }
    }
}
