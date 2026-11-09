# Relatos de papel

Frontend de una librería online para explorar libros, consultar su ficha y gestionar una selección de compra. El proyecto está en desarrollo y utiliza datos locales simulados; no está conectado a un backend ni procesa pagos reales.

## Funcionalidades actuales

- Catálogo en `/home`, cargado desde `src/data/mocks/books.mock.js`, con búsqueda por título.
- Detalle en `/book/:id`, con datos del mock, ficha técnica, reseñas simuladas y control de disponibilidad.
- Carrito en `/cart`, con cantidades, eliminación de productos y resumen del importe.
- El carrito se comparte mediante `CartContext` y se conserva en `localStorage` con la clave `relatos-de-papel-cart`.
- Navegación compartida con contador de productos en `src/components/Navbar.jsx`.
- Diseño adaptable con estilos organizados en hojas CSS.

Las pantallas de Landing (`/`), Login (`/login`), Checkout (`/checkout`) y Profile (`/profile`) todavía son placeholders. El checkout no confirma compras ni integra una pasarela de pago.

## Tecnologías

- React y JavaScript (ES modules / JSX).
- React Router DOM 7.
- Vite 6.
- CSS3.
- Mock data local.

Se requiere Node.js 20 o superior para React Router DOM 7.

## Instalación y ejecución

```bash
npm install
npm run dev
```

Vite muestra en la terminal la URL local del servidor.

Comandos disponibles:

```bash
npm run build
npm run preview
```

No hay actualmente scripts de test ni lint configurados en `package.json`.

## Rutas

| Ruta | Pantalla | Estado |
| --- | --- | --- |
| `/` | Landing | Placeholder |
| `/login` | Login | Placeholder |
| `/home` | Catálogo | Búsqueda y tarjetas de libros |
| `/book/:id` | Detalle del libro | Datos, pestañas, reseñas y disponibilidad |
| `/cart` | Carrito | Cantidad, eliminación y resumen |
| `/checkout` | Checkout | Placeholder |
| `/profile` | Perfil | Placeholder |

## Estructura principal

```text
src/
	components/       Navbar compartida
	context/          CartContext y estado persistido del carrito
	data/mocks/       Libros, reseñas, usuarios y pedidos simulados
	hooks/            Hook useCart
	pages/            Pantallas de la aplicación
	routes/           Definición de rutas con React Router
	styles/           Estilos globales y estilos por pantalla
docs/specs/         Especificaciones funcionales y visuales
```

Los mocks de libros y reseñas tienen datos. `users.mock.js` y `orders.mock.js` están vacíos por el momento.

## Datos e imágenes

El catálogo exporta `mockBooks` desde `src/data/mocks/books.mock.js`. Cada libro incluye identificador, título, autor, ISBN simulado, categoría, precio, stock, descripción, editorial y otros datos bibliográficos. Las reseñas de ejemplo están separadas en `src/data/mocks/book-reviews.mock.js`.

Las portadas del catálogo apuntan a `/images/books/<nombre>.jpg`, que corresponde a `public/images/books/`. Esa carpeta aún no contiene imágenes; deben agregarse allí para usar portadas locales. El detalle muestra una portada alternativa cuando el archivo no está disponible. La imagen principal de Home usa un recurso remoto y requiere conexión a internet.

## Estilos

- `src/styles/global.css` y `variables.css`: reset y variables globales.
- `src/styles/tokens.css`: paleta y tipografías de la identidad editorial.
- `src/styles/landing.css`: estilos compartidos con el catálogo.
- `src/styles/navbar.css`: navegación.
- `src/styles/book-detail.css`: ficha del libro.
- `src/styles/shopping-cart.css`: carrito.

## Especificaciones

Consulta `docs/specs/` para las especificaciones de diseño, catálogo, detalle de libro y mock data.
