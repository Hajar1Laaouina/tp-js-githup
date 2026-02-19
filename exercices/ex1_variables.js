function infosEtudiant(nom, note) {
    if (note >= 10) {
        return nom + " : Admis";
    } else {
        return nom + " : Ajourné";
    }
}

// Exemple d'utilisation
console.log(infosEtudiant("Hajar", 18)); 
console.log(infosEtudiant("Salma", 5));   