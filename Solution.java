
public class Solution {

    static final int MODULO = (int) Math.pow(10, 9) + 7;

    public int countOrders(int n) {
        long orderSequences = 1;
        for (int orderNumber = 1; orderNumber <= n; orderNumber++) {
            orderSequences *= orderNumber * (2 * orderNumber - 1);
            orderSequences %= MODULO;
        }
        return (int) orderSequences;
    }
}
