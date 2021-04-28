
# No Pain No Gain.

Api para registrar usuarios por sede

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

+ [Node.js](https://nodejs.org/es/) - Entorno de ejecución para JavaScript.
+ [MySQL](https://www.mysql.com/) - Bases de datos relacional.

Para la instalación del proyecto utilice el siguiente comando.

```bash
npm install 
```

### Configuración

En la carpeta db, conseguira la base de datos con la informacion minima necesaria para el funcionamiento.
Esta base de datos tendra un usuario administrador por defecto, necesario para el inicio de sesion

identifica: 12345
password: Testing123

Ademas tendra una ciudad y una sede por defecto.

Dentro del proyecto en la carpeta db encontraras un archico llamado connection.js, en este deberas modificar las variables :
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'gym'
por los valores de tu sistema.

### Ejecución

Para ejecutar el proyecto luego de ser instalado y configurado utilizar el siguiente comando

```bash
npm start
```

Esto ejecutara el proyecto en la siguiente url:

```bash
http://127.0.0.1:3001
``` 
### EndPoints

Este sistema cuenta con 5 endPoint


#### Register
```bash
    http://127.0.0.1:3001/users/register

    {
        "first_name": "Ember",
        "last_name": "Bejarano",
        "identifica": "1077462059",
        "role_id": "1",
        "password": "test123",
        "campus_id": "2"
    }
``` 
Endpoind utilizado para el registro de usuarios en el sistema, arriba se encuentra la url del endpoint, es un peticion POST que recibe un Json con el formato anexo

#### Login

```bash
    http://127.0.0.1:3001/users/login

    {
        "identifica": "1077462059",
        "password": "test123"
    }
``` 

Endpoind para el inisio de sesion, arriba se encuentra la url del endpoint, es un peticion POST que recibe un Json con el formato anexo

#### Sedes:

```bash
    http://127.0.0.1:3001/campus/create

    {
        "name": "Campus test 2",
        "city_id": "1"
    }
``` 

Endpoind para la creacion de sedes, este endpoint requiere un header de autorizacion llamado "user_token", que se obtiene al iniciar sesion, arriba se encuentra la url del endpoint, es un peticion POST que recibe un Json con el formato anexo

#### Ciudades:

```bash
    http://127.0.0.1:3001/city/create

    {
        "name": "Ciudad test"
    }
``` 

Endpoind para la creacion de ciudades, este endpoint requiere un header de autorizacion llamado "user_token", que se obtiene al iniciar sesion, arriba se encuentra la url del endpoint, es un peticion POST que recibe un Json con el formato anexo

#### Users:

```bash
    http://127.0.0.1:3001/users/

    {
  "campus_id": "1"
}
``` 

Endpoind para la obtencion de usuarios por sedes, este endpoint requiere un header de autorizacion llamado "user_token", que se obtiene al iniciar sesion, arriba se encuentra la url del endpoint, es un peticion POST que recibe un Json con el formato anexo

### Test
Para ejecutar los test del proyecto basta con ejecutar el siguiente comando
```bash
npm run test
```

### Dependencias

+ [bcrypt]
+ [cookie-parser]
+ [cors]
+ [debug]
+ [dotenv]
+ [express]
+ [http-errors]
+ [jade]
+ [jwt-simple]
+ [moment]
+ [morgan]
+ [mysql]

### Dependencias (Desarrollo):

+ [jest]

### Creador:

Jesson Ember Bejarano Mosquera -
Magister en ingenieria de software y sistemas informaticos 

```bash
https://jessonbejarano.com/
```
