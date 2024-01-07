function santaGifts(input) {
    let N = Number(input[0]);
    let M = Number(input[1]);
    let S = Number(input[2]);

    let result = [];

    for (let i = M; i >= N; i--) {
        if (i % 2 === 0 && i % 3 === 0 && i !== S) {
            result.push(i);
        }
        if (i === "") {
            break;
        }
    }

    console.log(result.join(' '));
}
santaGifts(["20", "1000", "36"]);
santaGifts(["1", "30", "15"]);
