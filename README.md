
# Optime WebSocket Apps.

Servicio creado en NodeJS para generar Polls, Q&A y (multi-room) Chats

### Requisitos

Hardware mínimo requerido:

+ CPU: Procesador dual de 64 bit tipo Intel Sandybridge de 2.5 Ghz.
+ RAM: Mínimo 32 GB.
+ Disco duro: Mayor de 1 TB de uno de los siguientes tipos:
    + SATA.
    + SAS.
    + SSD.

Para más información sobre los requisitos mínimos se puede encontrar [aquí](https://www.juniper.net/documentation/en_US/nfv2.1/topics/reference/ccpe-servers-hardware-spec.html).

### Instalación

El software requerido para la aplicación es el siguiente:

+ [Ubuntu](https://ubuntu.com/download/server) - Sistema Linux.
+ [Node.js](https://nodejs.org/es/) - Entorno de ejecución para JavaScript.
+ [MySQL](https://www.mysql.com/) - Bases de datos relacional.
+ [Redis](https://redis.io/) - Redis is an open source, in-memory data structure store.

Para la instalación del proyecto en producción utilice el siguiente comando.

```bash
npm install --only=prod
```

Para la instalarlo en desarrollo utilice el siguiente comando.

```bash
npm install --only=dev
```

### Configuración

Copie el archivo **.env.example** y renombre la copia como **.env**, luego complete las variables de entorno que están en el archivo, ejemplo.

```dosini
# Debug.
APP_DEBUG=false

# Service.
SERVICE_HOST=
SERVICE_NAME=
SERVICE_KEY=
SERVICE_PORT=
SERVICE_TIMEOUT=

# Database.
DB_HOST=
DB_USER=
DB_PASSWORD=
DB_DATABASE=
DB_CONNECTION_LIMIT=1
DB_QUEUE_LIMIT=
DB_DELAY=

# Redis.
REDIS_SERVICE=false
REDIS_HOST=
REDIS_PORT=

# Endpoint.
BACKEND_URL=

# HTTPS.
USE_HTTPS=false
TLS_KEY_PATH=
TLS_CERT_PATH=
```

Las siguientes variables son para configurar el servicio donde van a funcionar los sockets.

```dosini
SERVICE_HOST=127.0.0.1
SERVICE_NAME=example
SERVICE_KEY=secret
SERVICE_PORT=2020
SERVICE_TIMEOUT=15000
```

Indique la URL para los Endpoints de ebright.

```dosini
BACKEND_URL=http://example.com
```

Debe completar las siguientes variables para conectar el servicio con MySQL.

```dosini
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=example
DB_DATABASE=example
DB_CONNECTION_LIMIT=1
DB_QUEUE_LIMIT=5
DB_DELAY=5000
```

Para que el servicio se pueda comunicar con otras instancias utilizando Redis, es necesario lo siguiente.

```dosini
REDIS_SERVICE=true
REDIS_HOST=127.0.0.1
REDIS_PORT=6378
```

Finalmente, para activar el HTTPS se debe habilitar utilizando las variables a continuación.

```dosini
USE_HTTPS=true
TLS_KEY_PATH=[Ruta del archivo con la clave privada]
TLS_CERT_PATH=[Ruta del archivo o certificado]
```

### Ejecución

En producción debe utilizarse el siguiente comando para iniciar el servidor.

```bash
npm start
npm start --port=2020
```

Ejecute el siguiente comando cuando necesite trabajar en desarrollo.

```bash
npm run dev
npm run dev -- --port=2020
```

### Dependencias:

+ [axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js.
+ [chalk](https://github.com/chalk/chalk#readme) - Terminal string styling done right.
+ [dotenv](https://github.com/motdotla/dotenv#readme) - Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.
+ [Express](http://expressjs.com/) - Web framework for Node.js
+ [minimist](https://github.com/substack/minimist) - This module is the guts of optimist's argument parser without all the fanciful decoration.
+ [mysql2](https://github.com/sidorares/node-mysql2#readme) - MySQL client for Node.js with focus on performance.
+ [sequelize](https://sequelize.org/master/index.html) - Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server.
+ [socket.io](https://socket.io/) - Socket.IO bidirectional and event-based communication real-time.
+ [socket.io-redis](https://github.com/socketio/socket.io-redis#readme) - The socket.io-redis adapter you can run multiple socket.io instances in different processes or servers.
+ [socketio-jwt](https://github.com/auth0-community/auth0-socketio-jwt#readme) - Authenticate socket.io incoming connections with JWTs.
+ [winston](https://github.com/winstonjs/winston#installation) - A logger for just about everything.

### Dependencias (Desarrollo):

+ [Mocha](https://mochajs.org/) - Mocha is a test framework running on Node.js and in the browser.
+ [nodemon](https://nodemon.io/) - Nodemon is a utility that automatically restart your server. (Instalación Manual).
+ [sequelize-cli](https://github.com/sequelize/cli#installation) - The Sequelize Command Line Interface (CLI).