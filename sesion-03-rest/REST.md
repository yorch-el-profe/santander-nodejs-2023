# API REST (Representational State Transfer)

Para que un API sea considerado `REST` debe cumplir con las siguientes caracteristicas:

1. El intercambio de información debe ser `JSON` o `XML` o nada.

2. Utilizar los códigos de respuesta de HTTP de acuerdo al éxito o error de la petición:

Caso de éxito:
* 200 - OK
* 201 - CREATED: Todo bien y aparte se creó un recurso.
* 204 - NO CONTENT: Todo bien pero no hay nada que darte.

Caso de error:
* 400 - BAD REQUEST: El cliente envió algún dato equivocado o faltante.
* 401 - UNAUTHORIZED: El cliente no tiene autorización para el recurso solicitado.
* 403 - FORBIDDEN: El cliente no tiene permiso sobre el recurso.
* 404 - NOT FOUND: No se encontró el recursos solicitado.
* 500 - INTERNAL SERVER ERROR: Errores desconocidos.

3. Las peticiones deben contener todo lo necesario para ejecutarse (es decir, stateless). La idea es que no exista un estado, es decir, no se deban hacer 2 o más peticiones para realizar una acción.

4. En el nombrado de las rutas se deben usar pronombres en vez de verbos (de preferencia en plural).

Por ejemplo: `/getCars` => `/cars`

5. Utilizar los métodos de HTTP para realizar distintas operaciones:

* GET - Obtener información
* POST - Crear información
* PUT - Reemplazar información (algunos usan PUT como actualización parcial)
* PATCH - Actualizar parcialmente información
* DELETE - Eliminar información

6. Las urls deben expresar la jerarquía de la información.

Obtener todos los usuarios
GET /users

Obtener un producto en particular
GET /products/:id

Agregar un comentario a una publicación en particular
POST /posts/:id/comments

Obtener todas las publicaciones de un usuario
GET /users/:id/posts
