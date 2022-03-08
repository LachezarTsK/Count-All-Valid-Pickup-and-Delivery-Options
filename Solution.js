
/**
 * @param {number} n
 * @return {number}
 */
var countOrders = function (n) {
    const MODULO = Math.pow(10, 9) + 7;
    let orderSequences = 1;
    for (let orderNumber = 1; orderNumber <= n; orderNumber++) {
        orderSequences *= orderNumber * (2 * orderNumber - 1);
        orderSequences %= MODULO;
    }
    return orderSequences;
};
