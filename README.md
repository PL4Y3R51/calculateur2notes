# ISC1 — Calculateur de Notes

Calculateur de moyennes pour le programme ISC1, basé sur le fichier Excel de Ludovic Peyter.

## Utilisation

Ouvrez simplement `index.html` dans votre navigateur — aucun serveur requis.

Vous pouvez aussi le servir avec n'importe quel serveur HTTP statique :

```bash
# Python
python -m http.server 8080

# Node.js (npx)
npx serve .
```

## Fonctionnalités

- **Saisie des notes** : ajoutez vos notes avec leurs coefficients pour chaque branche
- **Examen & bonus** : champs optionnels par branche
- **Calcul automatique** : moyennes par branche, par module (arrondi au 0.5), et générales
- **Semestres** : moyennes séparées Automne / Printemps
- **Sauvegarde locale** : les données sont stockées dans le `localStorage` du navigateur
- **Export / Import JSON** : sauvegardez ou restaurez vos données dans un fichier

## Formules

Les calculs reproduisent exactement les formules du fichier Excel :

- **Moyenne de branche** = moyenne pondérée des notes + bonus (plafond 6), moyennée avec l'examen si présent
- **Moyenne de module** = moyenne pondérée des moyennes de branches (arrondies à 0.1), arrondie au 0.5 le plus proche (MROUND)
- **Moyenne générale** = moyenne pondérée des moyennes de modules par leurs coefficients

## Structure du programme

Tout est contenu dans un seul fichier `index.html` (HTML + CSS + JS). La structure du cursus ISC1 est définie dans la constante `CURRICULUM` au début du script — modifiable pour d'autres programmes.
