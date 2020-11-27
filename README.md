# party-aws-amplify

### Desplegar en Amplify Console

[![amplifybutton](https://oneclick.amplifyapp.com/button.svg)](https://console.aws.amazon.com/amplify/home#/deploy?repo=https://github.com/delineas/aws-amplify-party)

### Desarrollo en local

1. Descarga

```sh
git clone https://github.com/delineas/aws-amplify-party
```

2. Instalación de dependencias
```sh
npm install
```

3. Inicializar el proyecto de Amplify y lanzar cambios de infraestructura

```sh
amplify init

# Te hará varias preguntas

amplify push
```

4. Ejecutar servidor local

```sh
npm run serve
```
