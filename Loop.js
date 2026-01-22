
const Joueurs = [];

function NouveauJoueur(joueur, tableauDeJoueur) {
    if (Joueurs.type === "PVP") {
        AddJoueurAuTableur(joueur, tableauDeJoueur)
    }
    return
}
function AddJoueurAuTableau(joueur, tableauDeJoueur) {
    for (let i = 0; i < tableauDeJoueur.lengt; i++) {
        if (tableauDeJoueur[i].name === joueur.name) {
            break
            return
        } else {
            tableauDeJoueur[tableauDeJoueur.lengt] = joueur
        }
    }
}

const j = { type: "PVP", name: "Herv" };

NouveauJoueur(j, Joueurs)
