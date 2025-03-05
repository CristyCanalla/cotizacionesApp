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
   ```bash
   git clone [https://github.com/theodelrieu?tab=repositories](https://github.com/theodelrieu?tab=repositories)
   cd [nombre del repositorio]