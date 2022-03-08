
public class Solution {

    static final int MODULO = (int) Math.pow(10, 9) + 7;

    public int countOrders(int totalOrders) {
        long orderSequences = 1;
        for (int orderNumber = 1; orderNumber <= totalOrders; orderNumber++) {
            orderSequences *= orderNumber * (2 * orderNumber - 1);
            orderSequences %= MODULO;
        }
        return (int) orderSequences;
    }
}
