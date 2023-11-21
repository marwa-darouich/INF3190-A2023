from flask import Flask, render_template, request, redirect

app = Flask(__name__)


# Route pour afficher le formulaire
@app.route("/", methods=["GET", "POST"])
def form():
    # Affiche le template du formulaire
    return render_template("formulaire.html"), 200


# Route pour soumettre le formulaire
@app.route("/submit", methods=["GET", "POST"])
def submit():
    if request.method == "GET":
        # Si la méthode est GET, affiche le formulaire
        return render_template("formulaire.html"), 200
    else:
        # Si la méthode est POST, récupère les données du formulaire
        nom = request.form["nom"]
        prenom = request.form["prenom"]
        age = request.form["age"]

        # Vérifie si les champs ne sont pas vides
        if nom == "" or prenom == "" or age == "":
            erreur = "Le champ ne peut être vide!"
            return render_template("formulaire.html", nom=nom, prenom=prenom,
                                   age=age, erreur=erreur), 400
        else:
            # Si les champs ne sont pas vides, écrit les données dans un fichier log
            log = open("log.txt", "a", encoding="utf8")
            log.write(nom + ", " + prenom + ", " + age + "\n")
            log.close()

            # Redirige vers la page de liste
            return redirect("/liste"), 301


# Route pour afficher la liste des résultats
@app.route("/liste")
def liste():
    # Initialise la liste de résultats
    resultats = []

    # Lit le fichier log pour récupérer les données
    log = open("log.txt", "r", encoding="utf8")
    lignes = log.readlines()
    log.close()

    # Parcourt chaque ligne du fichier log et découpe les données
    for ligne in lignes:
        decouper = ligne.split(", ")  # ["nom", "prenom", "age"]
        resultats.append(decouper)

    # Affiche le template de la liste avec les résultats
    return render_template("liste.html", resultats=resultats,
                           len=len(resultats))


# Gestionnaire d'erreur pour la page non trouvée (404)
@app.errorhandler(404)
def page_not_found(error):
    return render_template("404.html"), 404