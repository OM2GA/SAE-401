
# DataViz

Création d'un site web en react avec API symfony pour visualiser grâce a des graphique Chart.js des données sur les département francais




## Installation du projet

Une fois le projet installer sur votre ordinateur



# Lancer le projet rapidement

```bash
cd frontend
```

Installer les dépendance

```bash
npm install
```

Start the server

```bash
npm run dev
```

# Lancer le projet entierement en local

Télécharger la base de données **Dataviz2.sql**

Importer ce fichier sql sur MySQL avec un **xamp** ou **wamp**


### Dans le projet


```bash
cd backend
```
Installer les dépendance

```bash
composer install
```
Lancer le serveur symfony

```bash
symfony serve
```

Apres ca normallement le serveur web est lancer sur l'url 
http://127.0.0.1:8000/

Pour tester si l'api fonctionne tester ce lien sur un navigateur
```bash
http://127.0.0.1:8000/api/stats/region/corse/2023
```

Si les statisque sur la corse s'affiche bien cela signifie que l'api fonctionne 

Ensuite, dans ouvrez un nouveau terminal a la racine du projet pour ne pas fermer celui ou le serveur avec symfony est lancé

```bash
cd frontend
```
Installer les dépendance si ce n'est pas déjà fait

```bash
npm install
```

Dans le fichier apiCall.js remplacer 

Cette ligne :
```bash
const response = await axios.get(`https://darkgray-crane-237519.hostingersite.com/api/stats/region/${region}/${annee}`)
```

par :

```bash
const response = await axios.get(`http://127.0.0.1:8000/api/stats/region/${region}/${annee}`)
```

Ensuite, Lancez le serveur 

```bash
npm run dev
```

