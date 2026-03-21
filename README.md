# DataViz

Création d'un site web en react avec API symfony pour visualiser grâce a des graphique Chart.js des données sur les département francais

---

# Prérequis

- PHP 8.5.1

---
## Installation du projet

Une fois le projet téléchargé sur votre ordinateur :

---

# Lancer le frontend rapidement

```bash
cd frontend
```

Installer les dépendances :

```bash
npm install
```

Lancer le serveur :

```bash
npm run dev
```

---

# Lancer le projet entièrement en local

## Base de données

1. Télécharger la base de données Dataviz2.sql  
2. Importer ce fichier dans MySQL via XAMPP ou WAMP

---

## Backend (Symfony)

Dans le dossier du projet :

```bash
cd backend
```

Installer les dépendances :

```bash
composer install
```

Lancer le serveur Symfony :

```bash
symfony serve
```

Le serveur sera accessible à l’adresse :

```
http://127.0.0.1:8000/
```

---

## Vérifier que l’API fonctionne

Ouvrir ce lien dans votre navigateur :

```
http://127.0.0.1:8000/api/stats/region/corse/2023
```

Si les statistiques de la Corse s’affichent correctement, l’API fonctionne.

---

## Frontend (connexion à l’API locale)

Ouvrir un nouveau terminal à la racine du projet (sans fermer celui du backend) :

```bash
cd frontend
```

Installer les dépendances si ce n’est pas déjà fait :

```bash
npm install
```

---

## Configuration de l’API

Dans le fichier apiCall.js, remplacer :

```bash
const response = await axios.get(`https://darkgray-crane-237519.hostingersite.com/api/stats/region/${region}/${annee}`)
```

par :

```bash
const response = await axios.get(`http://127.0.0.1:8000/api/stats/region/${region}/${annee}`)
```

---

## Lancer le frontend

```bash
npm run dev
```

---
Le projet est maintenant entièrement fonctionnel en local.
