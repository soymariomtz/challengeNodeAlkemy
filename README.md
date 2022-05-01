## Sobre la API de Disney

---

Esta API fue desarrollada para explorar el mundo de Disney. Te permitirá conocer, crear, modificar personajes y películas en las que intervienen.

### Construido con:

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)

---

## Comenzando

Para obtener una copia local en funcionamiento, siga estos sencillos pasos.

###

### Requisitos previos

- MySql
  - Siga estos [pasos de la instalación](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/).
  - Cree una base de datos para la aplicación.
  ```sh
  - Ejecutando el archivo disney_db.sql ubicado en la carpeta raiz
  o desde la carpeta db ejecutar los script individualmente.
  ```
- Send Grid
  - Cree una cuenta [desde aquí](https://sendgrid.com/)
  - [Configura la autenticación](https://docs.sendgrid.com/ui/account-and-settings/how-to-set-up-domain-authentication#setting-up-domain-authentication)
  - Obtiene tu API KEY [aquí](https://app.sendgrid.com/settings/api_keys)
  - Crea tu propio [dynamic template](https://sendgrid.com/dynamic_templates) y obtene su ID.

### Instalación

1. Clona el repo
   ```sh
   git clone https://github.com/soymariomtz/challengeNodeAlkemy.git
   cd challengeNodeAlkemy
   ```
2. Instala NPM packages
   ```sh
   npm install
   ```
3. Configura en la carpeta raíz tu archivo `.env`

   ```js
   (DATABASE = "YOUR MYSQL DB NAME"),
     (HOST = "YOUR MYSQL DB HOSTNAME"),
     (USER = "YOUR MYSQL DB USERNAME"),
     (PASSWORD = "YOUR MYSQL DB PASSWORD");
   (SENDGRID_API_KEY = "The API key you got from Send Grid"),
     (MAIL_FROM = "The mail from where you want to send your welcome email"),
     (TEMPLATE_ID = "The template you created on Dynamic Templates");
   ```

4. Listo! Levante el servidor.
   ```sh
   nodemon
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

---

## Uso

Para obtener una explicación detallada sobre cómo usar la API, consulte la _[Documentación](https://documenter.getpostman.com/view/18853937/UyrEiahg)_

<p align="right">(<a href="#top">back to top</a>)</p>
