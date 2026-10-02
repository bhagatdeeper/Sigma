import java.util.Scanner;

public class binomialCoefficient {
    public static double fact(double n){
        double fact = 1;
        for(int i = 1; i <= n; i++){
            fact *= i;
        }
        return fact;
    }

    public static double binocoeff(double n, double r){
        double factn = fact(n), factr = fact(r), factnr = fact(n-r), bicof;
        bicof = factn / (factr * factnr);
        System.out.print(bicof);
        return 0;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double n, r;
        System.out.print("Enter n: ");
        n = sc.nextInt();
        System.out.print("Enter r: ");
        r = sc.nextInt();
        binocoeff(n, r);
    }
}
