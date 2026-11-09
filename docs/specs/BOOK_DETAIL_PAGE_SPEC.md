SPEC — BOOK DETAIL PAGE

Proyecto: Relatos de papel

1. Objetivo

Desarrollar la pantalla de detalle de un libro seleccionado desde el catálogo de Home.

La pantalla debe mostrar información completa del libro y permitir al usuario añadirlo al carrito de compras.

La implementación debe reutilizar los datos simulados existentes y mantener la identidad visual aprobada para el proyecto.

2. Contexto tecnológico

El proyecto utiliza:

React.

Vite.

JavaScript ES6.

React Router DOM.

React Hooks.

CSS3.

Mock Data local.

La aplicación se encuentra actualmente en su primera fase de desarrollo: frontend.

Los datos de libros ya están creados y separados en la carpeta de mocks.

3. Ubicación de archivos

Componente principal:

src/pages/BookDetail.jsx

Estilos:

src/styles/book-detail.css

Datos simulados existentes:

src/data/mocks/books.mock.js

La estructura debe adaptarse a las rutas y carpetas reales del proyecto, si presentan alguna diferencia.

4. Fuente de datos

La información de los libros debe obtenerse exclusivamente desde el archivo existente:

books.mock.js

No crear una nueva colección de libros ni duplicar información.

El libro seleccionado debe recuperarse mediante el identificador recibido desde la ruta:

/book/:id

Utilizar React Router para obtener el parámetro de la URL y localizar el libro correspondiente.

5. Información del libro

Mostrar los atributos disponibles en el mock data:

Portada.

Título.

Autor.

ISBN.

Categoría.

Precio.

Stock disponible.

Descripción.

Editorial.

Año de publicación.

Número de páginas.

Idioma.

Calificación.

Si algún atributo no existe en los datos actuales, no inventarlo ni generar información adicional.

6. Diseño UI/UX

Mantener la identidad visual aprobada de Relatos de papel.

Paleta de colores

Verde principal: #344B40.

Fondo general: #F8F5EF.

Marrón secundario: #A66B43.

Texto principal: #292929.

Texto secundario: #666666.

Tarjetas: #FFFFFF.

Bordes: #E8E2D8.

Tipografía

Serif para títulos y encabezados.

Sans-serif para descripciones, etiquetas y controles.

Distribución

En escritorio:

Navbar en la parte superior.

Contenido principal dividido en dos columnas.

Portada del libro en la columna izquierda.

Información del libro en la columna derecha.

Botón principal de compra debajo del precio.

Footer al final de la página.

En dispositivos móviles:

Distribución vertical.

Portada centrada.

Información debajo de la imagen.

Botón de añadir al carrito con ancho adaptable.

Evitar desbordamientos horizontales.

7. Funcionalidades

7.1 Recuperar información del libro

Obtener el ID desde la URL.

Buscar el libro correspondiente en books.mock.js.

Mostrar su información.

Mantener la navegación desde Home.

7.2 Añadir al carrito

Esta pantalla será el único lugar donde se permitirá añadir libros al carrito.

El botón debe:

Añadir el libro seleccionado.

Utilizar el mecanismo de gestión del carrito existente, si ya está implementado.

Evitar duplicar innecesariamente la lógica de negocio.

Mostrar una confirmación visual cuando el libro se haya añadido correctamente.

Respetar la disponibilidad de stock.

Si el carrito todavía no tiene una implementación compartida, proponer una solución reutilizable sin modificar otras funcionalidades hasta su aprobación.

7.3 Navegación

Permitir regresar al catálogo.

Mantener acceso al carrito desde la navegación.

No modificar las rutas existentes.

8. Estados de pantalla

Libro encontrado

Mostrar toda la información disponible.

Libro no encontrado

Mostrar un mensaje indicando que el libro no está disponible y proporcionar una opción para regresar al catálogo.

Sin stock

Mostrar que el producto no está disponible y deshabilitar el botón de añadir al carrito.

Libro añadido

Mostrar un mensaje de confirmación sin interrumpir innecesariamente la navegación.

9. Restricciones

No modificar Home.jsx.

No modificar books.mock.js.

No duplicar los datos simulados.

No modificar el diseño CSS de Home.

No modificar las rutas existentes.

No implementar backend ni base de datos.

No integrar pasarelas de pago.

No agregar dependencias sin justificación.

No permitir añadir libros al carrito desde Home.

No introducir funcionalidades que no estén contempladas en el alcance.

10. Criterios de aceptación

La página recupera correctamente el libro según su ID.

Los datos mostrados corresponden al libro seleccionado.

La información procede del mock data existente.

El botón añade correctamente el libro al carrito.

Se respeta la disponibilidad de stock.

Se presenta correctamente el estado de libro no encontrado.

Se presenta correctamente el estado sin stock.

El diseño mantiene la identidad visual aprobada.

La pantalla es responsive.

Home y sus funcionalidades continúan funcionando sin cambios.

11. Validación y pruebas

Realizar pruebas para verificar:

Navegación desde Home hacia Book Detail.

Visualización de diferentes libros.

Identificadores inexistentes.

Productos sin stock.

Adición de libros al carrito.

Actualización del carrito.

Visualización en escritorio y móvil.

Ausencia de errores en la consola.

12. Entregables

BookDetail.jsx.

book-detail.css.

Componentes adicionales únicamente si son necesarios y reutilizables.

Resumen de los archivos creados o modificados.

Evidencias de las pruebas realizadas.

Confirmación de que las funcionalidades anteriores siguen operativas.

13. Instrucción de ejecución

Antes de implementar:

Analiza la estructura actual del proyecto.

Revisa Home.jsx y books.mock.js.

Revisa si existe un Context o mecanismo compartido para el carrito.

Identifica los componentes reutilizables.

Comprueba el diseño actual de Navbar y Footer.

Después, implementa exclusivamente los cambios necesarios para Book Detail.

No reemplaces código funcional existente ni modifiques otras pantallas sin autorización.

El resultado debe integrarse con la arquitectura actual de Relatos de papel.

Reproducir fielmente la distribución de la imagen.



Utilizar los colores y tipografías del Design System.



Obtener los datos del libro desde books.mock.js.



Utilizar datos simulados independientes para las reseñas.



Implementar pestañas funcionales, no solamente decorativas.



Mantener el diseño responsive.



No modificar el Home que ya está terminado.



Añadir al carrito únicamente desde esta pantalla.