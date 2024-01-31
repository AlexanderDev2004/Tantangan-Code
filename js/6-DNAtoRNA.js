// 6/336
// function DNAtoRNA(dna) {
//   let rna = '';
//   for (let i = 0; i < dna.length; i++) {
//     rna += dna[i] === 'T' ? 'U' : dna[i];
    // rna += dna[i] === 'T' ? 'U' : dna[i];
//   }
//   return rna;
// }


const DNAtoRNA = (dna) => dna.split('T').join('U');

  console.log(DNAtoRNA("TTTT"));