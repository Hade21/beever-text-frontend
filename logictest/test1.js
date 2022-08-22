let words = "beever";

// Buatlah skema logika untuk memuat kata diatas menjadi berbentuk seperti berikut :
// b
// be
// bee
// beev
// beeve
// beever

let output = "";
for (let i = 1; i <= words.length; i++) {
  for (let j = 0; j < i; j++) {
    output += words[j];
  }
  output += "\n";
}

console.log(output);
