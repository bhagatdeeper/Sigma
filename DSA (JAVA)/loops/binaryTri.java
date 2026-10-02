public class binaryTri {
    public static void main(String[] args) {
        int n = 5, a = 1, b = 0;
        for(int i = 1; i <= n; i++){
            for(int j = 1; j <= i; j++){
                if(i % 2 != 0){
                    System.out.print(a);
                    System.out.print(b);
                } else{
                    System.out.print(b);
                    System.out.print(a);
                }
            }
            System.out.println();
        }
    }
}
