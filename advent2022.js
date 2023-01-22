const fs = require('fs');
const readline = require('readline');

async function problemOne() {
    let largest = 0;

    const rl = readline.createInterface({
        input: fs.createReadStream('input.txt'),
        crlfDelay: Infinity,
    });

    let sum = 0;

    rl.on('line', (line) => {
        if(line.length) {
            sum += +line;
        } else {
            console.log(line);
            if (sum > largest) {
                largest = sum;
            }
            sum = 0;
        }
    });

    await new Promise((res) => rl.once('close', res));
    console.log("Largest calories:", largest);
}

problemOne();