public class alphPyr {
    public static void main(String[] args) {
        char alph = 'A';
        int n = 4;
        for(int i = 1; i <= n; i++){
            for(int j = 1; j <= i; j++){
                System.out.print(alph + " ");
                alph++;
            }
            System.out.println();
        }
    }
}
