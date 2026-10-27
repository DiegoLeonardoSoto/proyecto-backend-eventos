# Charla

Plataforma para la gestión de conferencias y charlas de tecnología. Permite crear eventos, organizar sus sesiones (charlas y talleres) y gestionar usuarios con distintos roles (`admin`, `organizer`, `user`).

## Tecnologías

- **Node.js** + **Express 5**
- **MongoDB** con **Mongoose**
- **dotenv** para variables de entorno
- Módulos **ESM** (`import` / `export`)
- **pnpm** como gestor de paquetes

## Instalación

1. Cloná el repositorio:

   ```bash
   git clone <url-del-repositorio>
   cd <nombre-del-repositorio>
   ```

2. Instalá las dependencias:

   ```bash
   pnpm install
   ```

3. Copiá el archivo de variables de entorno y completá los valores:

   ```bash
   cp .env.example .env
   ```

## Variables de entorno

| Variable     | Descripción                    | Ejemplo                          |
| ------------ | ------------------------------ | -------------------------------- |
| `PORT`       | Puerto donde corre el servidor | `3000`                           |
| `NODE_ENV`   | Entorno de ejecución           | `DEV`                            |
| `MONGO_URL`  | URL de conexión a MongoDB      | `mongodb://localhost:27017/charla` |
| `JWT_SECRET` | Secreto para firmar tokens JWT | `un-secreto`                     |

## Cómo ejecutar

Modo desarrollo (con recarga automática):

```bash
pnpm dev
```

Modo producción:

```bash
pnpm start
```

El servidor queda escuchando en `http://localhost:3000`.

## Estructura de carpetas

```text
src/
├── app.js                    # Configura Express (no levanta el servidor)
├── server.js                 # Inicia el servidor
├── config/                   # Configuración de la app y la BD
│   └── env.config.js
├── controllers/              # Manejo de solicitudes HTTP
│   ├── events.controller.js
│   ├── health.controller.js
│   └── sessions.controller.js
├── dao/                      # Acceso directo a los datos
├── middlewares/              # Middlewares personalizados
├── models/                   # Modelos de datos
│   ├── event.model.js
│   └── user.model.js
├── repositories/             # Acceso y gestión de datos
├── routes/                   # Definición de rutas
│   ├── events.router.js
│   ├── health.router.js
│   └── sessions.router.js
├── services/                 # Lógica de negocio
└── utils/                    # Funciones auxiliares
```

## Rutas disponibles

| Método | Ruta            | Descripción                         | Respuesta                                          |
| ------ | --------------- | ----------------------------------- | -------------------------------------------------- |
| `GET`  | `/api/health`   | Verifica que el servidor esté activo | `{ "status": "ok", "message": "Servidor activo" }` |
| `GET`  | `/api/events`   | Lista de eventos                    | `{ "status": "success", "payload": [] }`           |
| `GET`  | `/api/sessions` | Lista de sesiones                   | `{ "status": "success", "payload": [] }`           |
