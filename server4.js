const path = require('path')
const {createReadStream} = require('fs')
const {createServer} = require('http')

// configuramos con una variable de entorno el puerto
const {PORT = 3000} = process.env

const HTML_CONTENT_TYPE = 'text/html'
const CSS_CONTENT_TYPE = 'text/css'
const JS_CONTENT_TYPE = 'text/javascript'

const PUBLIC_FOLDER = path.join(__dirname, '../public')
// creamos un requestListener para pasarle a nuestro servidor
const requestListener = (req, res) => {
  const {url} = req
  let statusCode = 200
  let contentType = HTML_CONTENT_TYPE
  let stream

  // si estamos pidiendo la ruta principal, devolvemos el contenido del index.html
  if (url === '/') {
    stream = createReadStream(`${PUBLIC_FOLDER}/index.html`)
  } else if (url.match("\.css$")) { // para los archivos CSS
    contentType = CSS_CONTENT_TYPE
    stream = createReadStream(`${PUBLIC_FOLDER}${url}`)
  } else if (url.match("\.js$")) { // para los archivos JavaScript
    contentType = JS_CONTENT_TYPE
    stream = createReadStream(`${PUBLIC_FOLDER}${url}`)
  } else { // si llegamos aquí, es un 404
    statusCode = 404
  }

  // escribimos las cabeceras de la respuesta dependiendo de la request
  res.writeHead(statusCode, {'Content-Type': contentType})
  // si tenemos un stream, lo enviamos a la respuesta
  if (stream) stream.pipe(res)
  // si no, devolvemos un string diciendo que no hemos encontrado nada
  else return res.end('Not found')
}

// creamos un servidor con el requestListener
const server = createServer(requestListener)

// hacemos que el servidor escuche el puerto configurado
server.listen(PORT)
