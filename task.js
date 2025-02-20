// Liste des tâches
let taches = [
    { id: 1, description: "Partir à la salle de gym", jour: "mardi", heure: "20h00", isDone: false },
    { id: 2, description: "Finir le cours JS", jour: "jeudi", heure: "10h00", isDone: false },
    { id: 3, description: "Projet Réseaux", jour: "mercredi", heure: "09h00", isDone: false },
    { id: 4, description: "Partir à la mosquée", jour: "vendredi", heure: "13h00", isDone: false },
    { id: 5, description: "Football au centre", jour: "samedi", heure: "18h00", isDone: false }
];

// Fonction pour générer et afficher les tâches
function genererTache() {
    const tacheContainer = document.querySelector(".task");
    tacheContainer.innerHTML = ""; // Nettoyer l'affichage avant de recharger

    taches.forEach((tache) => {
        const tacheElement = document.createElement("article");

        const idElement = document.createElement("span");
        idElement.textContent = `${tache.id}`;

        const descriptionElement = document.createElement("span");
        descriptionElement.textContent = `${tache.description}`;

        const jourElement = document.createElement("span");
        jourElement.textContent = `${tache.jour}`;

        const heureElement = document.createElement("span");
        heureElement.textContent = `${tache.heure}`;

        const btnSupprimer = document.createElement("button");
        btnSupprimer.textContent = "Supprimer";
        btnSupprimer.setAttribute("class", "btn btn-danger")
        btnSupprimer.dataset.id = tache.id; // Stocker l'ID dans le bouton

        // Ajouter les éléments à l'article
        tacheElement.appendChild(idElement);
        tacheElement.appendChild(descriptionElement);
        tacheElement.appendChild(jourElement);
        tacheElement.appendChild(heureElement);
        tacheElement.appendChild(btnSupprimer);

        // Ajouter l'article au conteneur
        tacheContainer.appendChild(tacheElement);
    });

    // Ré-écouter les événements après chaque mise à jour
    addListenerBtnSupprimer();
}

// Fonction pour ajouter un écouteur aux boutons "Supprimer"
function addListenerBtnSupprimer() {
    document.querySelectorAll(".task button").forEach((btn) => {
        btn.addEventListener("click", function (event) {
            const id = parseInt(event.target.dataset.id); // Récupérer l'ID de la tâche
            taches = taches.filter(tache => tache.id !== id); // Supprimer la tâche
            genererTache(); // Rafraîchir l'affichage
        });
    });
}

// Afficher les tâches initiales
genererTache();

// Écouter l'ajout de nouvelle tâche
document.querySelector(".formulaire-tache").addEventListener("submit", (event) => {
    event.preventDefault();

    // Récupération des valeurs du formulaire
    const idString = document.querySelector("[name='tache-id']").value;
    const id = parseInt(idString);
    const description = document.querySelector("[name='description']").value;
    const jour = document.querySelector("[name='jour']").value;
    const heure = document.querySelector("[name='heure']").value;

    // Ajouter la nouvelle tâche
    taches.push({ id, description, jour, heure, isDone: false });

    // Rafraîchir l'affichage
    genererTache();
});


