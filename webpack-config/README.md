Pour ajouter Typescript a la compilation : 

- Ajouter un tsconfig.json a la racine du projet
- Installer typescript @types/react @types/react-dom tslint tslint-immutable en **dev**


- Ajouter `'.ts', '.tsx',` au `resolve.extensions` de la config webpack  
- Modifier le `rules[0].test` par `/\.(ts|js)x?$/`

Mettre en place `tsconfig.json`, et `tslint.json` selon vos préférences

Ajouter dans les presets de `babel.config.json` `"@babel/preset-typescript",` et roulez ! 