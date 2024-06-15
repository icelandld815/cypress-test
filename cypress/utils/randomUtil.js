export function randomNum(length = 6) {
    let min = 1;
    let max = 9;
    for (let i = 1; i < length; i++) {
        min *= 10;
        max = max * 10 + 9;
    }
    return Math.floor(Math.random() * (max - min + 1) + min);
}

