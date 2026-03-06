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

## Structure du projet

```
index.html          Page principale (saisie des notes)
stats.html          Page statistiques (graphiques)
css/styles.css      Styles partagés (light + dark mode)
js/curriculum.js    Structure du cursus ISC1
js/state.js         Gestion du localStorage
js/calculations.js  Moteur de calcul des moyennes
js/app.js           Rendu et interactions (page notes)
js/stats.js         Graphiques Chart.js (page stats)
js/theme.js         Bascule dark mode
```

La structure du cursus ISC1 est définie dans la constante `CURRICULUM` dans `js/curriculum.js` — modifiable pour d'autres programmes.

## Crédits

Basé sur le fichier Excel de Ludovic Peyter. Cette interface web a été entièrement créée avec l'IA.
