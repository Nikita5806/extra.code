//stock
function maxProfit(prices) {
    if (!prices.length) return 0;

    let minPrice = Infinity;
    let maxProfit = 0;

    for (let price of prices) {
        if (price < minPrice) {
            minPrice = price;
        } else if (price - minPrice > maxProfit) {
            maxProfit = price - minPrice;
        }
    }

    return maxProfit;
}

// Reading input from stdin
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on("line", (line) => {
    input.push(line);
}).on("close", () => {
    const N = parseInt(input[0].trim(), 10);
    const prices = input[1].trim().split(" ").map(Number);
    
    console.log(maxProfit(prices));
});

//two sum 67
size = int(input())
arr = list(map(int, input().split()))
target = int(input())

ref = {}  # Dictionary to store values and their indices

for idx, val in enumerate(arr):
    rem = target - val  # Find the required complement
    if rem in ref:
        print(ref[rem], idx)  # Print the indices of the two numbers
        break
    ref[val] = idx  # Store the index of the current number

//gcd
import math
import functools

def find_gcd(arr):
    return functools.reduce(math.gcd, arr)


n = int(input())  
arr = list(map(int, input().split()))  


print(find_gcd(arr))
