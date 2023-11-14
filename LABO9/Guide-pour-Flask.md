## Introduction a Flask

Pensez à l'Internet comme un vaste univers numérique rempli de ressources variées telles que des sites web,
des images, des vidéos et plus encore. Chacune de ces ressources a une adresse unique pour pouvoir être localisée, 
un peu comme une maison sur Terre a une adresse physique. Cette adresse unique est appelée une URL, ce qui signifie 
Uniform Resource Locator.

Pour comprendre une URL, imaginez-la comme une série d'informations qui vous guident vers votre destination sur Internet :

Le protocole de communication : C'est la méthode de communication utilisée pour accéder à la ressource. 
Pensez-y comme au mode de transport que vous choisissez pour vous rendre à une destination. 
Vous avez peut-être entendu parler de protocoles comme HTTP ou HTTPS. HTTP est comme une route normale, 
tandis que HTTPS est comme une route sécurisée. Ces protocoles définissent comment les données sont échangées 
entre votre navigateur et le serveur web.

Le nom du domaine ou l'adresse IP : C'est l'adresse de la ressource que vous recherchez. C'est un peu comme 
l'adresse d'une maison sur une rue. Par exemple, "uqam.ca" est le nom de domaine de l'Université du Québec à 
Montréal, et il nous dit où trouver cette université sur Internet.

Le port : Vous pouvez le considérer comme la porte d'entrée de la maison. Pour le protocole HTTP, le port 
par défaut est 80, mais parfois, d'autres ports sont spécifiés dans l'URL pour accéder à des services spécifiques sur le serveur.

La route : La route est le chemin que vous suivez pour atteindre une ressource spécifique sur le serveur. 
Chaque ressource a son propre chemin unique.

Les paramètres : Ce sont des informations supplémentaires que vous pouvez fournir pour personnaliser votre 
demande. Cela peut inclure des informations telles que des mots-clés de recherche ou des valeurs spécifiques 
pour personnaliser l'affichage de la page.

Jinja est un outil magique qui facilite la communication entre le serveur 
(où se trouvent les scripts Python) et le navigateur (où se trouvent les fichiers HTML). Au lieu de créer 
des pages web directement dans le backend (côté serveur), Jinja utilise des modèles.

Ces modèles sont comme des fichiers HTML spéciaux avec des instructions Jinja. Ils sont conçus pour 
afficher des informations dynamiques. Ces fichiers sont stockés dans un répertoire appelé "templates", 
situé au même niveau que les scripts Python contenant les routes de l'application.


### Pour lancer l'application :

1. On commence par installer `flask` :

```
  $ pip install flask
```

2. On import les variables d'environnement nécessaires :

```
$ export FLASK_APP=app.py
$ export FLASK_DEBUG=1

```
3. On lance l'application :

```
$ flask run
```