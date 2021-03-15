# Prueba Mercado Libre - Frontend

[![mercado-libre](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/scvdyh&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/scvdyh/runs)


_Frontend que nos permite conectarnos con el API GATEWAY [ml-api-gateway](https://github.com/marcosnope/ml-api-gateway) para buscar productos y entrar al detalle de cada uno de ellos._


## Comenzando 🚀

**Haz click [AQUÍ](https://mercado-libre.vercel.app/) para visualizar el demo de la aplicación 🤓.**

_Este Frontend esta desplegado en [vercel](https://vercel.com/)_

### Pre-requisitos 📋

```
npm install
```

Para conectarnos con el API-GATEWAY [ml-api-gateway](https://github.com/marcosnope/ml-api-gateway) lo hacemos a través de la variable de entorno:
```
REACT_APP_URL=https://ml-api-gateway.herokuapp.com
```
Si desea conectarse localmente al API-GATEWAY debe descargar el proyecto [ml-api-gateway](https://github.com/marcosnope/ml-api-gateway), correr el comando:
```
npm start
```
La API está configurada para que corra en el puerto **:4000** para esto, la variable de entorno deberá quedar de la siguiente manera:
```
REACT_APP_URL=http://localhost:4000
```

## Ejecutando las pruebas ⚙️

_Este proyecto cuenta con el desarrollo de pruebas e2e básicas desarrolladas con [cypress](https://www.cypress.io) incluidas dentro del proyecto con el fin de darle una pequeña cobertura al código._

* En el siguiente link encontrarán el pull de pruebas ejecutadas con su respectiva evidencia:

* * **[Pull de pruebas](https://dashboard.cypress.io/projects/scvdyh/runs/3/test-results/9c8bf8c2-1d37-4e5e-9bb3-0431c422efcb)** 🔩

* * **[Video de referencia](https://dashboard.cypress.io/projects/scvdyh/runs/3/test-results/9c8bf8c2-1d37-4e5e-9bb3-0431c422efcb/video)** 🖇️📢

## Despliegue 📦

El proyecto fue configurado para que tuviera un despliegue automático en [vercel](https://mercado-libre.vercel.app) una vez se haya hecho push en master.

## Construido con 🛠️

* Html
* Scss
* React js

## Autor ✒️


* **Marcos Nope** - *Desarrollador Frontend* - [github](https://github.com/marcosnope)
