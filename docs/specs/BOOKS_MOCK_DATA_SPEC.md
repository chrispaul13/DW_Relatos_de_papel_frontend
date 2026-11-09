SPEC / PROMPT — Generación de Mock Data de libros para Relatos de papel

1. Rol

Actúa como un desarrollador senior especializado en React, JavaScript ES6 y arquitectura frontend, con experiencia en diseño de estructuras de datos simulados (Mock Data) para aplicaciones de comercio electrónico.

2. Contexto del proyecto

Estamos desarrollando Relatos de papel, una aplicación web de comercio electrónico para la venta de libros.

Tecnologías utilizadas:

React.

Vite.

JavaScript ES6.

React Router DOM.

CSS3.

React Hooks.

Actualmente estamos desarrollando la primera fase del proyecto: el frontend.

Todavía no existe una conexión con backend ni base de datos. Por tanto, utilizaremos datos simulados locales.

3. Objetivo

Generar un catálogo de libros mediante un archivo independiente:

src/data/mocks/books.mock.js

Los datos deben estar completamente separados de los componentes visuales de React.

El catálogo será reutilizado por diferentes pantallas:

Home: mostrar el catálogo y permitir buscar por título.

Book Detail: mostrar la información completa del libro seleccionado.

Shopping Cart: utilizar la información del libro para representar los productos seleccionados.

4. Estructura de cada libro

Cada libro debe contener los siguientes atributos:

{
    id: 1,
    title: "Cien años de soledad",
    author: "Gabriel García Márquez",
    isbn: "9780307474728",
    category: "Novela",
    price: 19.99,
    stock: 15,
    image: "/images/books/cien-anos-de-soledad.jpg",
    description: "Descripción completa del libro.",
    publisher: "Editorial correspondiente",
    publicationYear: 1967,
    pages: 496,
    language: "Español",
    rating: 4.8,
    featured: true
}

Los atributos deben conservar tipos de datos consistentes.

5. Cantidad y variedad de datos

Genera un catálogo de al menos 30 libros simulados.

Distribuye los libros entre diferentes categorías:

Novela.

Ciencia ficción.

Fantasía.

Misterio y suspenso.

Desarrollo personal.

Historia.

Literatura clásica.

Infantil y juvenil.

Incluye autores y títulos reconocidos, procurando variedad de géneros y épocas.

Los precios deben ser razonables y expresados como números decimales.

El stock debe ser un número entero no negativo.

Los ratings deben estar dentro del rango de 0 a 5.

6. Imágenes de libros

Utiliza rutas locales con una estructura consistente:

/images/books/nombre-del-libro.jpg

No inventes URLs externas ni supongas que las imágenes existen.

Si las imágenes todavía no están disponibles, deja documentado que deben incorporarse posteriormente en public/images/books/.

7. Requisitos técnicos

Utilizar JavaScript ES6.

Exportar el catálogo mediante export const mockBooks.

Utilizar identificadores únicos.

No duplicar ISBN ni identificadores.

Mantener nombres de propiedades consistentes.

No incluir JSX ni componentes React.

No incluir lógica de presentación.

No utilizar dependencias externas.

Mantener el archivo organizado y documentado.

8. Funciones auxiliares

Si resulta útil, puedes crear funciones auxiliares independientes para consultar el catálogo, por ejemplo:

Obtener todos los libros.

Obtener un libro por ID.

Obtener libros destacados.

Obtener libros por categoría.

Estas funciones deben trabajar sobre mockBooks y no modificar directamente los datos originales.

No agregues funciones que no sean necesarias para el alcance actual.

9. Restricciones del proyecto

No modificar Home.jsx.

No modificar BookDetail.jsx.

No modificar los estilos CSS.

No modificar las rutas.

No implementar carrito ni lógica de compras.

No crear backend ni base de datos.

No instalar dependencias.

El objetivo exclusivo es generar los datos simulados y dejarlos preparados para su reutilización.

10. Validaciones

Antes de entregar el archivo, verifica:

Que existan al menos 30 libros.

Que todos tengan los atributos definidos.

Que los identificadores sean únicos.

Que no existan ISBN duplicados.

Que los precios sean números positivos.

Que el stock sea un entero no negativo.

Que los ratings estén entre 0 y 5.

Que todas las categorías sean consistentes.

Que los nombres de las imágenes sigan una convención uniforme.

11. Entregables

Genera:

Archivo src/data/mocks/books.mock.js.

Resumen de la estructura de datos.

Cantidad de libros generados.

Distribución de libros por categoría.

Resultado de las validaciones.

Ejemplo de cómo importar mockBooks desde Home.jsx y BookDetail.jsx, sin modificar esos archivos.

12. Instrucción final

Primero analiza la estructura actual del proyecto para comprobar si existe una carpeta de mocks.

Si ya existe, respeta su organización.

Si no existe, crea src/data/mocks/.

Genera únicamente los archivos relacionados con los datos simulados de libros. No alteres ninguna funcionalidad existente de la aplicación.