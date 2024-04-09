# Selects dependientes de tablas de Bases de datos Mysql con PHP y Javascript


## Descripción

En la siguiente práctica, se hace uso de PHP, Javascript, HTML y Bootstrap V5
El archivo index.php, contiene 3 elementos select:
1. El Select "principal", es el primero en cargar contenido de la tabla.
2. Al ir seleccionando las opciones de los diferentes select's se iran llenando con información extraída de la tabla.

No existe código PHP incrustado en el archivo HTML, por lo que el servidor retorna un JSON para que Javascript recorra utilizando un ciclo foreach y de esta manera presentar las opciones (options) que son el resultado de la consulta a la tabla.



    Obtener los datos de usuarios de una tabla denominada usuarios y de coordenadas de la base de datos Ejemplos_kotlin
    Al cargar la página, se debe de cargar el primer select denominado "Select Principal"
    Al seleccionar un elemento del select principal, se debe enviar una petición al servidor PHP por medio de AJAX para colocar los resultados en el select dependiente 1.
    Al seleccionar una opción del select dependiente 1, se solicita nuevamente al servidor los datos a mostrar en el "Select dependiente 2"
    Al seleccionar un elemento del select dependiente 2, se muestra el contenido (texto) en un div.
    Para limpiar el contenido de todos los Select, se presiona el botón "Recargar select principal"
    Se utiliza vanilla Javascript. PHP del lado del servidor que entrega los resultados en un objeto JSON.
    Se adjunta base de datos en formato SQL, aunque, puedes colocar tu base de datos y tu tabla en los archivos de PHP.


Recuerda, Codear es divertido !
Suscribete a Youtube: @codeandoconjc
Búscame en Telegram de la misma forma.
Gracias por ver y compartir


## Índice

- [Instalación](#instalación)
- [Uso](#uso)
- [Créditos](#créditos)
- [Licencia](#licencia)


## Instalación

No se requiere instalación, solamente que los archivos esten ubicados en las rutas correctas dentro del directorio del ejemplo.

* Se debe de cargar la base de datos Ejemplos_kotlin. En caso de querer utilizar su propia tabla debe de colocar nombres en el archivo  con_bd.php y los nombres de columnas en los archivos php correspondientes.


## Uso

1. Ingresar a la carpeta y esperar a que se cargue el archivo index.php. En caso de no ejecutarse, iniciarlo de manera manual.
2. Seleccionar un elemento del select 1.
3. Esperar que se llene la lista de elementos 2.
4. Seleccionar una opcion del select 2.


## Créditos

Javier Chuc. Codeando con JC

JQuery. Es una biblioteca multiplataforma para JavaScript, que permite de manera simple interactuar con los elementos del DOM (Document Object Model) de HTML.
URL: https://jquery.com/


## Licencia

MIT License

Copyright (c) 2023 Javier Chuc/CodeandoConJC

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


## Cómo contribuir

Suscribete a Youtube: @codeandoconjc
Búscame en Telegram de la misma forma.
Gracias por ver y compartir


