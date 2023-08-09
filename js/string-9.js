let str = "ABDULAZIZ";

let strFF = str.split("");

  for (let i in strFF) {
    if (strFF[i] !== strFF[i].toLowerCase()) {
      strFF[i] = strFF[i].toLowerCase();
    }
  }

let strENd = strFF.toString().replaceAll(",", "");

console.log(strENd);