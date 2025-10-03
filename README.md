# Learn APIs 🚀

API RESTful desarrollada con Express.js y documentada con Swagger para aprender el desarrollo de APIs modernas.

## 📋 Descripción

Este proyecto es una API de ejemplo que demuestra las mejores prácticas para el desarrollo de APIs REST con Node.js y Express.js, incluyendo documentación automática con Swagger UI.

## 🛠️ Tecnologías Utilizadas

- **Node.js** - Runtime de JavaScript
- **Express.js** - Framework web para Node.js
- **Swagger UI Express** - Documentación interactiva de API
- **Swagger JSDoc** - Generación de documentación desde comentarios

## 📦 Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd learn_apis
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar el servidor**
   ```bash
   # Modo desarrollo (con auto-reload)
   npm run dev
   
   # Modo producción
   npm start
   ```

## 🚀 Uso

### Servidor Local
El servidor se ejecuta en: `http://localhost:3000`

### Documentación API
Accede a la documentación interactiva de Swagger en: `http://localhost:3000/api-docs`

## 📚 Endpoints Disponibles

### Ruta Principal
- **GET** `/` - Mensaje de bienvenida

### Usuarios
- **GET** `/api/v1/users` - Obtener todos los usuarios
- **GET** `/api/v1/users/:id` - Obtener usuario por ID
- **POST** `/api/v1/users` - Crear nuevo usuario

### Ejemplo de Uso

```bash
# Obtener todos los usuarios
curl http://localhost:3000/api/v1/users

# Obtener usuario específico
curl http://localhost:3000/api/v1/users/1

# Crear nuevo usuario
curl -X POST http://localhost:3000/api/v1/users \
  -H "Content-Type: application/json" \
  -d '{"name": "Ana Martínez", "email": "ana@example.com"}'
```

## 📁 Estructura del Proyecto

```
learn_apis/
├── routes/
│   └── usersRouters.js     # Rutas de usuarios
├── index.js                # Archivo principal del servidor
├── package.json            # Dependencias y scripts
└── README.md              # Documentación del proyecto
```

## 🔧 Scripts Disponibles

```bash
# Iniciar servidor en modo producción
npm start

# Iniciar servidor en modo desarrollo (con auto-reload)
npm run dev

# Ejecutar tests (placeholder)
npm test
```

## 📖 Documentación de la API

La API está completamente documentada usando Swagger/OpenAPI 3.0. Puedes:

- **Explorar endpoints**: Ver todos los endpoints disponibles
- **Probar en vivo**: Ejecutar requests directamente desde la documentación
- **Ver esquemas**: Revisar los modelos de datos de entrada y salida

Visita: `http://localhost:3000/api-docs`

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia ISC. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Arnulfo Rodriguez** - [GitHub Profile](https://github.com/tu-usuario)

## 🚧 Próximas Características

- [ ] Integración con base de datos
- [ ] Autenticación JWT
- [ ] Middleware de validación
- [ ] Tests unitarios
- [ ] Logging con Winston
- [ ] Variables de entorno
- [ ] Dockerización

---

⭐ ¡No olvides dar una estrella al proyecto si te resultó útil!
