##### Deploy en GitHub Pages

1) `npm install --save-dev gh-pages`
2) Crear una clave en el `package.json`

```json
    "homepage": "https://<user>.github.io/intro-react-todomachine"

```

3) Crar un `script`

```json    
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
```