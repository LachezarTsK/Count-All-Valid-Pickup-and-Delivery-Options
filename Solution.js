
/**
 * @param {number} totalOrders
 * @return {number}
 */
var countOrders = function (totalOrders) {
    const MODULO = Math.pow(10, 9) + 7;
    let orderSequences = 1;
    for (let orderNumber = 1; orderNumber <= totalOrders; orderNumber++) {
        orderSequences *= orderNumber * (2 * orderNumber - 1);
        orderSequences %= MODULO;
    }
    return orderSequences;
};
