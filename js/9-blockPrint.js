function blockPrint(input){
    if (!input.trim().length) return "";
    let res = "";
    let dip = input.toLowerCase().trim();
    for(let i = 0; i < 7; i++) {
      res += dip.split("").map(s => alpha.get(s)[i]).join(" ").trimEnd();
      if (i < 6) res += "\n";
    }  
    return res;
  }
  console.log(blockPrint("heLLo WorLD"));