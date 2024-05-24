# IISSI IS 2024 - Examen Descuento

## Enunciado

Una vez que se haya instalado la primera versión de DeliverUS lanzado, nuestros inversores han solicitado la inclusión
de una nueva funcionalidad que consiste en ofrecer a los propietarios la posibilidad de promocionar un producto para cada uno de
sus restaurantes.

Si el producto promocionado de un restaurante existe, será mostrarse en la parte superior de los listados de productos que son presentado tanto a los propietarios como a los clientes. Además a ser presentado en la parte superior de la lista, el
El producto promocionado debe resaltarse visualmente, por lo que un se mostrará la etiqueta de texto "Destacado".

Regla comercial: los propietarios solo pueden promocionar un producto para cada uno de sus restaurantes, por ejemplo un propietario puede promocionar el producto "Filete" del Restaurante1, y "Bocadillo de queso y tomate" de Restaurant2, pero nunca dos productos de Restaurant1.

Ejercicio 1: Implementar todos los cambios necesarios en el proyecto back-end para cumplir con el nuevo requisito.

Ejercicio 2: Implementar todos los cambios necesarios en el proyecto de front-end para cumplir con el nuevo requisito.

## Introducción
Este repositorio incluye el backend completo (carpeta `DeliverUS-Backend`) y el frontend de owner (carpeta `DeliverUS-Frontend-Owner`). Servirá como base para los exámenes de convocatoria de la asignatura.

## Preparación del entorno

Windows:
* Abra un terminal y ejecute el comando `npm run install:all:win`.

Linux/MacOS:
* Abra un terminal y ejecute el comando `npm run install:all:bash`.

## Ejecución y depuración

* Para **ejecutar el backend**, abra un terminal y ejecute el comando `npm run start:backend`. 

* Para **ejecutar el frontend**, abra un nuevo terminal y ejecute el comando `npm run start:frontend`. 

* Para **depurar el backend**, asegúrese de que **NO** existe una instancia en ejecución, pulse en el botón `Run and Debug` de la barra lateral, seleccione `Debug Backend` en la lista desplegable, y pulse el botón de *Play*. 

* Para **depurar el frontend**, asegúrese de que **EXISTE** una instancia en ejecución, pulse en el botón `Run and Debug` de la barra lateral, seleccione `Debug Frontend` en la lista desplegable, y pulse el botón de *Play*.

* Para **rehacer las migraciones y seeders del backend**, abra un terminal y ejecute el comando `npm run migrate:backend`.
