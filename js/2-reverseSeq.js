// 2/336

// const reverseSeq = n => {
//     const result = [];
//     for (let i =n; i >= 1; i--) {
//         result.push(i);
//     }
    
//     return result;
// };

reverseSeq = (n) => {
    return Array(n).fill(1).map((el, i) => i + 1)
    .reverse();
}

console.log(reverseSeq(5));