Implementación de portadas reales para el proyecto Relatos de papel

Actúa como un desarrollador frontend senior especializado en React, Vite y gestión de recursos estáticos.

Necesito implementar correctamente las imágenes de portada de todos los libros del proyecto Relatos de papel.

1. Contexto técnico

El proyecto utiliza:

React.

Vite.

JavaScript ES6.

CSS3.

Datos simulados almacenados en src/data/mocks/books.mock.js.

Actualmente, cada libro tiene una propiedad image con una ruta como:

/images/books/dune.jpg

Sin embargo, los archivos de imagen todavía no existen.

2. Objetivo

Conseguir que los 30 libros del catálogo tengan su portada correspondiente, utilizando imágenes reales de las ediciones de esos libros o imágenes de portada que representen correctamente cada obra.

No utilizar imágenes genéricas, portadas inventadas ni imágenes de otros libros.

3. Catálogo de libros

Revisar todos los registros existentes en:

src/data/mocks/books.mock.js

Utilizar los campos title y author para identificar correctamente cada libro.

No utilizar los ISBN actuales como única fuente de búsqueda, porque son datos simulados.

El catálogo incluye:

Cien años de soledad — Gabriel García Márquez.

El principito — Antoine de Saint-Exupéry.

Don Quijote de la Mancha — Miguel de Cervantes.

Como agua para chocolate — Laura Esquivel.

El amor en los tiempos del cólera — Gabriel García Márquez.

Dune — Frank Herbert.

1984 — George Orwell.

Fahrenheit 451 — Ray Bradbury.

Fundación — Isaac Asimov.

El hobbit — J. R. R. Tolkien.

Harry Potter y la piedra filosofal — J. K. Rowling.

El nombre del viento — Patrick Rothfuss.

Juego de tronos — George R. R. Martin.

Asesinato en el Orient Express — Agatha Christie.

Estudio en escarlata — Arthur Conan Doyle.

La chica del tren — Paula Hawkins.

El silencio de los inocentes — Thomas Harris.

Hábitos atómicos — James Clear.

Los 7 hábitos de la gente altamente efectiva — Stephen R. Covey.

El poder del ahora — Eckhart Tolle.

Sapiens: De animales a dioses — Yuval Noah Harari.

Armas, gérmenes y acero — Jared Diamond.

SPQR: Una historia de la antigua Roma — Mary Beard.

Rayuela — Julio Cortázar.

Orgullo y prejuicio — Jane Austen.

Crimen y castigo — Fiódor Dostoyevski.

Frankenstein — Mary Shelley.

La casa de los espíritus — Isabel Allende.

Matilda — Roald Dahl.

El león, la bruja y el ropero — C. S. Lewis.

4. Fuentes de imágenes

Buscar portadas reales utilizando fuentes como:

Open Library Covers API.

Google Books API.

Otras fuentes públicas de imágenes de libros que permitan su utilización.

Buscar por título y autor para evitar confusiones entre diferentes obras.

Priorizar portadas en español cuando estén disponibles. Si no existe una portada en español, utilizar una edición reconocible del mismo libro.

No utilizar imágenes protegidas de manera que se infrinjan sus condiciones de uso. Respetar las licencias y atribuciones correspondientes.

5. Ubicación de los archivos

Crear la siguiente estructura si todavía no existe:

public/images/books/

Guardar cada portada localmente dentro de esa carpeta.

Los nombres de los archivos deben coincidir exactamente con las rutas que ya están declaradas en books.mock.js.

Ejemplos:

dune.jpg

harry-potter-y-la-piedra-filosofal.jpg

cien-anos-de-soledad.jpg

el-principito.jpg

don-quijote.jpg

Mantener las rutas existentes siempre que sea posible.

6. Requisitos técnicos

Descargar y almacenar localmente las imágenes.

Evitar depender de URLs externas durante la ejecución de la aplicación.

Mantener formatos de imagen compatibles con los navegadores.

Optimizar el tamaño de los archivos sin perder demasiada calidad.

Mantener una proporción vertical apropiada para portadas de libros.

Comprobar que no existan archivos vacíos, dañados o duplicados incorrectamente.

Verificar que cada imagen corresponda al título y autor correctos.

No modificar innecesariamente los componentes React existentes.

No modificar precios, autores, descripciones, stock ni otros datos simulados.

No cambiar la lógica del carrito ni el diseño visual aprobado.

7. Compatibilidad con la aplicación

Las portadas deben visualizarse correctamente en:

Home: tarjetas del catálogo.

Book Detail: detalle del libro.

Shopping Cart: productos seleccionados.

Checkout: resumen de compra.

Comprobar que todos los componentes utilizan correctamente la propiedad image.

Si alguna imagen no está disponible, implementar un fallback visual elegante que mantenga la identidad gráfica de Relatos de papel y evite mostrar imágenes rotas.

8. Validaciones finales

Al terminar:

Confirmar que existen las 30 imágenes.

Confirmar que todas las rutas declaradas en books.mock.js apuntan a archivos existentes.

Verificar que las imágenes se cargan desde el servidor Vite.

Ejecutar npm run build y corregir cualquier error relacionado con los recursos.

Comprobar visualmente Home, Book Detail, Shopping Cart y Checkout.

9. Informe de resultados

Al finalizar, presentar:

Número de portadas descargadas.

Número de portadas verificadas.

Libros cuyas portadas no pudieron encontrarse.

Fuentes utilizadas.

Archivos creados.

Cambios realizados en el código.

Resultado de la compilación.

Importante: No afirmar que se han descargado o verificado imágenes si no se ha comprobado realmente su existencia y correspondencia con los libros.

Trabaja sobre el proyecto existente, conserva su arquitectura y no reemplaces funcionalidades que ya están implementadas.