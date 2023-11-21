function trierParNom() {
    // Obtient la référence à l'élément de tableau dans le document
    var tableau = document.getElementById("table");

    // Récupère les lignes du tableau
    var lignes = tableau.rows;

    // Indicateur pour contrôler la boucle de tri
    var permutation, index, doitPermuter;

    // Boucle de tri
    do {
        // Initialise l'indicateur de permutation à faux
        permutation = false;

        // Parcours des lignes du tableau
        for (index = 1; index < lignes.length - 1; index++) {
            // Initialise l'indicateur de permutation pour la paire actuelle
            doitPermuter = false;

            // Récupère les cellules actuelle et suivante
            var celluleActuelle = lignes[index].getElementsByTagName("td")[0];
            var celluleSuivante = lignes[index + 1].getElementsByTagName("td")[0];

            // Compare les valeurs dans les cellules et détermine si elles doivent être échangées
            if (celluleActuelle.innerHTML.toLowerCase() > celluleSuivante.innerHTML.toLowerCase()) {
                doitPermuter = true;

                // Échange les lignes dans le tableau
                lignes[index].parentNode.insertBefore(lignes[index + 1], lignes[index]);

                // Indique qu'une permutation a eu lieu
                permutation = true;
            }
        }
    } while (permutation); // Continue la boucle tant qu'il y a des permutations
}
