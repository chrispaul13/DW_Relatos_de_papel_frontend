PROMPT: Rediseño visual completo de Relatos de Papel

Actúa como un Senior Frontend Developer y UI/UX Designer especializado en React, CSS3 y diseño de interfaces web.

Necesito realizar un rediseño visual completo de mi aplicación web Relatos de Papel, reemplazando el estilo visual actual por una nueva identidad llamada:

Vintage Magical Academia – Old-time oscuro

La referencia estética debe transmitir la atmósfera de una biblioteca antigua, una academia de magia y una librería clásica. Puede inspirarse en la ambientación visual de bibliotecas de fantasía como Hogwarts, pero sin copiar logotipos, escudos, personajes ni elementos protegidos de Harry Potter.

1. Objetivo principal

Reemplazar completamente el diseño visual actual de la aplicación por el nuevo estilo Vintage Magical Academia.

El cambio debe aplicarse a todas las páginas, componentes y elementos de la interfaz, manteniendo una identidad visual coherente.

No quiero combinar el diseño anterior con el nuevo. El objetivo es sustituir la identidad visual actual.

2. Identidad visual

Utiliza la siguiente paleta de colores:

Borgoña principal: #641E2B

Verde bosque: #243B32

Oro antiguo: #B08D57

Pergamino: #E9DCC3

Madera oscura: #493326

Tinta: #211C19

Aplicación de colores

Fondo principal: madera oscura y tonos profundos.

Paneles y tarjetas: pergamino envejecido.

Encabezados: borgoña o tinta oscura.

Botones principales: borgoña con texto color pergamino.

Bordes y separadores: oro antiguo.

Textos secundarios: marrón oscuro.

Elementos destacados: verde bosque y detalles dorados.

Evita utilizar fondos blancos puros, grises modernos o colores demasiado brillantes.

3. Tipografía y elementos decorativos

Utiliza tipografías serif clásicas y elegantes para títulos, encabezados y nombres de libros.

Para textos descriptivos y formularios, utiliza una tipografía legible que combine con la estética clásica.

Puedes utilizar fuentes como:

Cinzel para títulos y encabezados.

Cormorant Garamond para textos editoriales.

Lora para contenido general.

Si utilizas Google Fonts, importa las fuentes correctamente y contempla alternativas locales.

Incorpora detalles visuales como:

Bordes finos dorados.

Separadores ornamentales.

Sombras suaves.

Texturas sutiles de papel envejecido.

Motivos decorativos originales relacionados con libros, plumas, estrellas y bibliotecas.

Botones con apariencia clásica.

Los elementos decorativos no deben perjudicar la legibilidad ni la experiencia de usuario.

4. Ambientación visual

La aplicación debe transmitir la sensación de estar explorando una antigua librería de una academia mágica.

Utiliza:

Fondos oscuros inspirados en madera antigua.

Paneles de contenido en pergamino.

Detalles dorados y borgoña.

Tarjetas de libros con apariencia de fichas de una biblioteca antigua.

Encabezados elegantes y ornamentales.

Separación visual clara entre las distintas secciones.

Mantén un equilibrio entre una apariencia fantástica y una tienda de libros profesional y funcional.

5. Páginas que deben rediseñarse

Aplica el nuevo diseño a todas las páginas existentes:

Landing: presentación de Relatos de Papel.

Login: formulario de inicio de sesión.

Home: catálogo, buscador y tarjetas de libros.

BookDetail: portada, información, descripción, detalles y reseñas.

ShoppingCart: productos seleccionados, cantidades y resumen.

Checkout: resumen del pedido y confirmación de compra.

Profile: información del usuario.

También debes actualizar los componentes compartidos:

Navbar.

Footer, si existe.

Botones.

Formularios.

Inputs.

Tarjetas.

Modales, si existen.

Mensajes de error y confirmación.

6. Requisitos técnicos

Antes de modificar el código:

Analiza la estructura completa del proyecto.

Identifica todos los archivos CSS existentes.

Identifica los componentes React y las páginas.

Identifica qué estilos son globales y cuáles son específicos.

Detecta estilos duplicados o reglas que puedan entrar en conflicto.

Después, realiza el rediseño.

Prioriza una arquitectura CSS organizada:

variables.css: paleta de colores, tipografías, sombras, bordes y variables globales.

global.css: estilos generales de toda la aplicación.

CSS específico por componente o página cuando sea necesario.

Evita duplicar reglas innecesariamente.

7. Restricciones importantes: NO modificar la lógica

Este trabajo es exclusivamente de rediseño visual.

Debes conservar:

React y Vite.

React Router DOM.

Todas las rutas existentes.

CartContext y CartProvider.

El custom hook useCart.

La persistencia del carrito mediante localStorage.

La búsqueda de libros.

Los datos simulados de books.mock.js.

La información de los libros.

Las pestañas de BookDetail.

La funcionalidad de agregar y eliminar productos.

La actualización de cantidades.

El cálculo del subtotal y total.

La navegación entre páginas.

Los formularios y sus comportamientos actuales.

No elimines componentes funcionales ni reemplaces datos reales del mock por información inventada.

No reconstruyas la aplicación desde cero.

No modifiques la estructura funcional de los componentes salvo que sea estrictamente necesario para aplicar el diseño, y en ese caso conserva sus props, estados, eventos y comportamientos.

No instales dependencias adicionales sin justificar su necesidad.

8. Diseño responsive

El nuevo diseño debe funcionar correctamente en:

Computadores de escritorio.

Laptops.

Tablets.

Teléfonos móviles.

Presta especial atención a:

Navbar y menú de navegación.

Catálogo de libros.

Tarjetas.

Formularios.

Carrito.

Checkout.

Evita desbordamientos horizontales y elementos superpuestos.

9. Calidad y validación

Después de implementar los cambios:

Comprueba que todas las páginas mantienen su funcionalidad.

Verifica que las rutas siguen funcionando.

Comprueba que el carrito conserva sus productos al navegar entre páginas y recargar la aplicación.

Verifica que los botones, formularios y enlaces siguen funcionando.

Ejecuta npm run build.

Corrige los errores que aparezcan.

Comprueba que no existan conflictos entre los CSS antiguos y los nuevos.

10. Resultado esperado

Quiero que toda la aplicación tenga una identidad visual consistente:

Vintage Magical Academia – Old-time oscuro.

La experiencia debe sentirse como una librería antigua y elegante, con una atmósfera mágica, pero manteniendo la usabilidad y profesionalidad de una tienda online moderna.

El resultado debe ser visualmente atractivo, legible, responsive y coherente en todas las páginas.

Forma de trabajo

Realiza los cambios directamente sobre los archivos existentes.

Trabaja por etapas:

Variables globales y estilos generales.

Navbar y componentes compartidos.

Landing y Login.

Home y catálogo.

BookDetail.

ShoppingCart.

Checkout.

Profile.

Validación general y compilación.

Al finalizar cada etapa, informa qué archivos modificaste y qué cambios realizaste.

Importante: no des por terminado el trabajo solamente porque los CSS compilen. Debes comprobar que el nuevo estilo se aplique realmente a todas las páginas y que ninguna funcionalidad existente se haya perdido.