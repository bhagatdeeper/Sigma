public class DecimalToBinary {
    
    public static void DecToBin(int a){
        int pow = 0;
        int binNum = 0;

        while(a > 0){
            int rem = a % 2;
            binNum = binNum + rem*(int)Math.pow(10, pow);
            a = a / 2;
            pow++;
        }
        System.out.println(binNum);
    }

    public static void main(String[] args) {
        DecToBin(13);
    }
}
