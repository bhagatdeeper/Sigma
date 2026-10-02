import java.util.*;

public class taxCalc {
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter your income : ");
        Float income = sc.nextFloat();
        Float tax;

        if(income < 500000){
            System.out.println("Tax : 0%");
            System.out.println("Income : " + income);
        }
        else if(income >= 500000 && income < 1000000){
            System.out.println("Tax : 20%");
            tax = income*0.2f;
            income -= tax;
            System.out.println("Income : " + income);
        }
        else if(income >= 1000000){
            System.out.println("Tax : 30%");
            tax = income*0.3f;
            income -= tax;
            System.out.println("Income : " + income*0.3);
        }
    }
}
