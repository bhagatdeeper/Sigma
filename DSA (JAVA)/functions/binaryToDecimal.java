public class binaryToDecimal {

    public static int BinToDec(int a){
        int bin = a;
        int pow = 0;
        int dec = 0;

        while(bin > 0){
            int lastDigit = bin % 10;
            int temp = lastDigit * (int)Math.pow(2, pow);
            dec += temp;
            pow++;
            bin /= 10;
        }
        return dec;
    }

    public static void main(String[] args) {
        int dec = BinToDec(1010);
        System.out.print(dec);
    }
}
