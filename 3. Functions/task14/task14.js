// Write a JavaScript function to convert an amount into coins.

function amountToCoins(num) {
    let coins = [10, 5, 2, 1]
    let convertedCoins = [];

    for (let i = 0; i < coins.length; i++) {
        while (num >= coins[i]) {
            convertedCoins.push(coins[i]);
            num -= coins[i];
        }
    }

    return convertedCoins;
}

console.log(amountToCoins(19));
