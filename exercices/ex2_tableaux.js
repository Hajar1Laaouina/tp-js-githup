let notes = [12, 8, 15, 10, 7];

let somme = 0;
for (let i = 0; i < notes.length; i++) {
    somme += notes[i];
}
let moyenne = somme / notes.length;

let meilleure = notes[0];
for (let i = 1; i < notes.length; i++) {
    if (notes[i] > meilleure) {
        meilleure = notes[i];
    }
}
