# Cotizaciones App

Este proyecto es una aplicación web de gestión de cotizaciones desarrollada con React, Redux Toolkit, Tailwind CSS y WebSockets. Permite a los usuarios ver, agregar y comprar cotizaciones en tiempo real, además de integrar la pasarela de pagos de Stripe.

## Funcionalidades Principales

- **Autenticación**: Inicio de sesión con Google y creación de cuentas con correo electrónico y contraseña usando Firebase Authentication.
- **Gestión de Cotizaciones**: Visualización, adición y compra de cotizaciones.
- **Actualizaciones en Tiempo Real**: Las cotizaciones se actualizan en tiempo real usando WebSockets.
- **Pagos con Stripe**: Procesamiento seguro de pagos de cotizaciones a través de Stripe.
- **Valor en Bolsa**: Visualización del valor actual en bolsa (dato estático).

## Tecnologías Utilizadas

- **Frontend**: React, Redux Toolkit, RTK Query, Tailwind CSS, Firebase, Stripe.
- **Backend**: Node.js con Express para la API de pagos y WebSockets, JSON Server para persistencia de datos.

## Estructura del Proyecto

- `src/`: Contiene el código fuente de la aplicación React.
  - `components/`: Componentes reutilizables.
  - `features/`: Funcionalidades específicas (cotizaciones, pagos, etc.).
  - `app/`: Configuración de Redux y la aplicación.
  - `firebase/`: Configuración de Firebase.
  - `services/`: Servicios de API y utilidades.
- `public/`: Archivos estáticos.
- `server/`: Código del servidor backend.

## Instalación

1. Clona el repositorio:
   
   git clone https://github.com/CristyCanalla/cotizacionesApp

2. Instala las dependencias del frontend:

cd client
npm install

3. Configura las variables de entorno del frontend:
Crea un archivo .env.local en la carpeta client.

Añade tus credenciales de Firebase y Stripe:
VITE_API_KEY=tu_api_key_de_firebase
VITE_AUTH_DOMAIN=tu_auth_domain_de_firebase
VITE_PROJECT_ID=tu_project_id_de_firebase
VITE_STORAGE_BUCKET=tu_storage_bucket_de_firebase
VITE_MESSAGING_SENDER_ID=tu_messaging_sender_id_de_firebase
VITE_APP_ID=tu_app_id_de_firebase
VITE_STRIPE_PUBLIC_KEY=tu_clave_publica_de_stripe

4. Inicia el frontend:
npm run dev

5. Instala las dependencias del backend:

cd server
npm install

6. Configura las variables de entorno del backend:

Crea un archivo .env en la carpeta server.

Añade tu clave secreta de Stripe:

STRIPE_SECRET_KEY=tu_clave_secreta_de_stripe

7. Inicia el backend:

  json-server --watch db.json --port 5000
  node server.js

8.  Documentación de la API

    Obtener Cotizaciones
       Endpoint: GET /cotizaciones
       Descripción: Obtiene la lista de todas las cotizaciones.
       Respuesta: JSON con la lista de cotizaciones.
    Agregar Cotización
       Endpoint: POST /cotizaciones
       Descripción: Agrega una nueva cotización.
       Cuerpo de la Solicitud: JSON con los datos de la cotización (cliente, monto, fecha).
       Respuesta: Cotización agregada.
    Eliminar Cotización
       Endpoint: DELETE /cotizaciones/:id
       Descripción: Elimina una cotización por su ID.
       Respuesta: Cotización eliminada.
    Pagar Cotización
       Endpoint: POST /pagar
       Descripción: Procesa el pago de una cotización.
       Cuerpo de la Solicitud: JSON con el monto y el ID del método de pago.
       Respuesta: Confirmación del pago.

ACLARACIÓN:
Se puede probar la compra con estos datos
Tarjeta de prueba VISA
Número: 4242 4242 4242 4242
Fecha de expiración: 12/34
CVC: 123
Código postal: 10001 