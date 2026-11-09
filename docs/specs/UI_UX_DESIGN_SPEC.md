PROMPT MAESTRO – DISEÑO UI/UX Y ESTILOS CSS

Proyecto: Relatos de papel

Actúa como un diseñador UI/UX senior y desarrollador frontend especializado en React, JavaScript, HTML5 y CSS3, con experiencia en el diseño de aplicaciones web de comercio electrónico.

Tu objetivo es diseñar e implementar todo el sistema de estilos CSS de la aplicación web Relatos de papel, una plataforma de comercio electrónico orientada a la venta de libros.

1. Contexto tecnológico

El proyecto utiliza:

React con Vite.

JavaScript ES6.

HTML5.

CSS3.

React Router DOM.

Componentes funcionales de React.

Hooks: useState, useEffect y useContext.

Diseño responsive.

La aplicación frontend utiliza actualmente datos simulados (mock data). No debes implementar servicios backend, bases de datos ni modificar la lógica funcional existente.

2. Objetivo del diseño

Crear una interfaz moderna, elegante, intuitiva y atractiva, relacionada visualmente con el mundo de la lectura y las librerías.

El diseño debe transmitir:

Cultura y pasión por la lectura.

Elegancia y simplicidad.

Confianza y profesionalismo.

Facilidad de navegación.

Una experiencia de compra agradable.

La aplicación debe mantener una identidad visual uniforme en todas sus pantallas.

3. Línea visual propuesta

Utiliza una identidad visual editorial, cálida y moderna.

Paleta de colores inicial:

Verde principal: #344B40.

Fondo principal: #F8F5EF.

Marrón secundario: #A66B43.

Texto principal: #292929.

Texto secundario: #666666.

Fondo de tarjetas: #FFFFFF.

Bordes y separadores: #E8E2D8.

Puedes proponer ajustes a esta paleta si mejoran la armonía visual, pero conserva una identidad coherente.

Tipografía:

Utiliza tipografías legibles y elegantes.

Puedes combinar una tipografía serif para títulos con una sans-serif para textos y controles.

Mantén una jerarquía tipográfica clara.

4. Pantallas que deben diseñarse

Desarrolla los estilos CSS para las siguientes pantallas:

A. Landing

Encabezado con logotipo y navegación.

Sección principal con mensaje de bienvenida.

Imagen o composición visual relacionada con libros.

Botón para explorar el catálogo.

Pie de página.

B. Login

Formulario de autenticación.

Campos de usuario y contraseña.

Botón de inicio de sesión.

Mensajes de validación.

Diseño limpio y centrado.

C. Home / Catálogo

Encabezado y navegación.

Buscador de libros por título.

Listado de libros mediante tarjetas.

Portadas, títulos, autores y precios.

Distribución responsive.

No incorporar botones para añadir libros al carrito desde esta pantalla.

D. Book Detail

Portada del libro.

Título, autor, precio y descripción.

Botón para añadir al carrito.

Distribución clara de la información.

E. Shopping Cart

Listado de libros seleccionados.

Información de cada producto.

Cantidades y precios.

Opciones para eliminar productos.

Resumen del importe total.

Botón para continuar al checkout.

F. Checkout

Resumen de compra.

Información de los productos.

Total a pagar.

Botón para confirmar la compra simulada.

Mensajes de confirmación visual.

G. Profile

Información del usuario.

Datos del perfil.

Historial de los últimos cinco pedidos.

Diseño organizado y fácil de consultar.

5. Componentes visuales reutilizables

Define estilos comunes para:

Navbar.

Footer.

Botones principales y secundarios.

Inputs y formularios.

Tarjetas de libros.

Contenedores.

Etiquetas y mensajes.

Tablas o listados.

Estados de error, éxito y carga.

Elementos de navegación.

Evita duplicar estilos. Utiliza clases reutilizables y variables CSS.

6. Requisitos técnicos CSS

Centraliza los colores, tipografías, tamaños y espacios mediante variables CSS en .

Utiliza Flexbox y CSS Grid cuando corresponda.

Implementa media queries para dispositivos móviles, tablets y escritorio.

Utiliza nombres de clases descriptivos y consistentes.

Evita selectores excesivamente específicos.

Evita el uso innecesario de !important.

Mantén una estructura CSS organizada y fácil de mantener.

Garantiza contraste y legibilidad adecuados.

Añade estados hover, focus y active a los elementos interactivos.

Respeta la estructura y los nombres de los componentes React existentes.

7. Restricciones importantes

No modifiques la lógica de negocio de React.

No elimines ni cambies funcionalidades existentes.

No modifiques las rutas de React Router.

No agregues funcionalidades que no estén contempladas en los requisitos.

No añadas opciones para agregar productos al carrito desde Home.

El botón para agregar al carrito debe estar únicamente en Book Detail.

No incorpores dependencias adicionales sin justificar su necesidad.

No sustituyas los datos simulados existentes.

8. Forma de trabajo

Antes de realizar modificaciones:

Analiza la estructura actual del proyecto.

Revisa los componentes JSX existentes.

Identifica los estilos actuales y los posibles conflictos.

Propón una estructura organizada para los archivos CSS.

Identifica los componentes que pueden compartir estilos.

Posteriormente:

Define el sistema visual global.

Implementa los estilos comunes.

Diseña cada pantalla.

Implementa el diseño responsive.

Verifica la consistencia visual entre todas las pantallas.

Identifica y corrige problemas de presentación.

9. Entrega esperada

Al finalizar debes proporcionar:

Código CSS completo.

Archivos CSS creados o modificados.

Variables globales de diseño.

Estilos reutilizables.

Estilos específicos de cada pantalla.

Explicación de los cambios realizados.

Relación de componentes afectados.

Instrucciones para ejecutar y visualizar el resultado.

Si detectas que un componente JSX necesita un pequeño ajuste para aplicar correctamente los estilos, explica primero el motivo y presenta el cambio propuesto sin alterar su funcionalidad.

10. Criterios de aceptación

El resultado se considerará satisfactorio cuando:

Todas las pantallas tengan una identidad visual coherente.

La aplicación sea responsive.

Los componentes mantengan una apariencia uniforme.

Los formularios y botones sean visualmente claros.

El catálogo y las tarjetas de libros tengan una presentación atractiva.

No se hayan alterado las funcionalidades existentes.

El código CSS sea reutilizable, organizado y mantenible.

Prioridad principal: conseguir que Relatos de papel tenga una apariencia profesional, moderna y elegante, como una librería digital real, manteniendo una experiencia de usuario sencilla e intuitiva.


## UI/UX Preview

Antes de implementar los estilos CSS:

1. Analiza las pantallas y componentes existentes.
2. Genera una propuesta visual (mockup) de las pantallas.
3. Mantén una identidad visual coherente en toda la aplicación.
4. Presenta las pantallas en una vista conjunta y permite revisar cada una.
5. No modifiques código ni funcionalidades durante esta etapa.
6. Espera la aprobación del diseño antes de comenzar la implementación CSS.
7. Después de la aprobación, implementa los estilos en el proyecto React.