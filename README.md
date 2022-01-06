# webpay-nodejs-example

## Carpetas
1. v2: Ejemplo usando el [sdk v2](https://github.com/TransbankDevelopers/transbank-sdk-nodejs/releases/tag/2.1.3) de Transbank
2. v3: Ejemplo usando la [sdk v3](https://github.com/TransbankDevelopers/transbank-sdk-nodejs/releases/tag/3.0.0)de la libreria de transbank

### Como usar

Ingresar en el directorio en donde se clono el repositorio

```sh
1. cd v2 o cd v3
2. npm i
3. node prueba.js
```

Se visualizará por la consola el siguiente resultado:
```JSON
{
  token: '01ab411f19290ffab2e3631e68b04df806994bbd247c45dbf965864a026ac4a4',
  url: 'https://webpay3gint.transbank.cl/webpayserver/initTransaction'
}
```