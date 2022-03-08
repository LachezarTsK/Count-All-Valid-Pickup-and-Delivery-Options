
using namespace std;

class Solution {  
    inline static const int MODULO = pow(10, 9) + 7;
  
public:
    int countOrders(int totalOrders) {
        long orderSequences = 1;
        for (int orderNumber = 1; orderNumber <= totalOrders; orderNumber++) {
            orderSequences *= orderNumber * (2 * orderNumber - 1);
            orderSequences %= MODULO;
        }
        
        // 'return orderSequences' will also work since there is an implicit conversion 
        // from 'long' to 'int'. static_cast<int> is for the sake of completeness.
        return static_cast<int> (orderSequences);
    }
};
