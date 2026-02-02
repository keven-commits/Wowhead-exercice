const Joueurs = [
    { type: "PVP", name: "Herv" },
    { type: "PVE", name: "Kev" },
    { type: "PVP", name: "Herv" }
];

const joueursPVP = [];

function ajouterJoueursPVP(listeJoueurs, tableauFinal) {
    for (let i = 0; i < listeJoueurs.length; i++) {
        if (listeJoueurs[i].type === "PVP") {
            ajouterSiAbsent(listeJoueurs[i], tableauFinal);
        }
    }
}

function ajouterSiAbsent(joueur, tableau) {
    for (let i = 0; i < tableau.length; i++) {
        if (tableau[i].name === joueur.name) {
            return; // déjà présent
        }
    }
    tableau[tableau.length] = joueur; // ajout
}

// appel
ajouterJoueursPVP(Joueurs, joueursPVP);

console.log(joueursPVP);
