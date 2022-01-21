---
jupytext:
  cell_metadata_filter: all,-hidden,-heading_collapsed
  formats: md:myst
  notebook_metadata_filter: all,-language_info,-toc,-jupytext.text_representation.jupytext_version,-jupytext.text_representation.format_version
  text_representation:
    extension: .md
    format_name: myst
kernelspec:
  display_name: Python 3
  language: python
  name: python3
notebookname: quiz JavaScript
version: '1.0'
---

# quiz

**évaluez la cellule suivante** pour faire apparaitre le quiz sur le cours #3 sur JavaScript

**affichage avec *scrollbar***  
il se peut que le quiz apparaisse **dans une petite fenêtre** - c'est à dire ne vous
montre qu'une grosse dizaine de lignes, avec une *scrollbar* sur le coté pour faire
défiler le contenu  
c'est l'affichage normal de Jupyter pour les cellules qui ont un *output* un peu long  
ça n'est pas très pratique ici, souvenez-vous que vous pouvez forcer l'affichage entier
(sans la *scrollbar*) en **cliquant dans la marge gauche** en face du quiz

```{code-cell} ipython3
:hide_input: false
:tags: [raises-exception]

from nbautoeval import run_yaml_quiz
run_yaml_quiz("3-js", "quiz")
```

****

```{code-cell} ipython3
# si nécessaire, un rappel du mode d'emploi
from nbautoeval import quiz_help
quiz_help("fr")
```
