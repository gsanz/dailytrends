# dailytrends
Para iniciar el proyecto ejecutar los siguientes comandos :
npm install
npm run build
mpn run dev


![image](https://github.com/gsanz/dailytrends/assets/20774163/9eee1a64-b7e5-4f17-8034-3f6d8ba952b0)

La grafica de la arquitectura del sistema aparece en el fichero anterior . Basicamente la aplicacion se inicia en el puerto 3000 , aunque ese puerto se puede configurar en el fichero .env.
En primer lugar hay una capa router , donde estan las rutas del sistema (fichero .router ) que permiten :
insertar un objeto feed: http://localhost:3000/feeds (llamada post)
listar todos los objetos feed: http://localhost:3000/feeds/all (llamada post)
insertar fuentes con el sistema de scrapping feed : http://localhost:3000/feeds/read (llamada post)

Luego esta la capa controller , que se comunica con el service para obtener informacion. Despues la capa services (un service seria un orquestador de repositories) y finalmente la capa repository que accede directamente al modelo de la base de datos.
En el fichero /src/config/config.json se configura la conexion a la BBDD desde el puerto 2707.

En la coleccion de postman POSTMANCRUD.postman_collection.json estan las llamadas al sistema
