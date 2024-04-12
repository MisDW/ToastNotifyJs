```markdown
# ToastNotifyJs

ToastNotifyJs es una pequeña biblioteca JavaScript
que te permite mostrar notificaciones emergentes
personalizadas en tu aplicación web. Estas notificaciones,
comúnmente conocidas como "toast notify", son breves y
temporales, ideales para informar al usuario sobre eventos
importantes de manera discreta.

## Instalación

Para comenzar a usar ToastNotifyJs en tu proyecto,
simplemente incluye el siguiente código en tu HTML:

``` javascript
<script src="toastnotify.js"></script>
```
```markdown
## Uso

Una vez que hayas incluido el archivo `toastnotify.js`,
puedes comenzar a usar ToastNotifyJs en tu código
JavaScript de la siguiente manera:
```
```javascript
// Crear una instancia de ToastNotifyJs
const toast = new ToastNotifiJs();

// Mostrar una notificación de información
toast.create("Info", "Este es un mensaje de información.");

// Mostrar una notificación de error
toast.create("Error", "Ocurrió un error inesperado.");

// Mostrar una notificación de advertencia
toast.create("Warn", "Ten cuidado, esto es una advertencia.");

// Mostrar una notificación de éxito
toast.create("Success", "Operación completada con éxito.");
```

## Personalización

Puedes personalizar el aspecto y el comportamiento de las notificaciones cambiando los parámetros proporcionados al método `create`:

- `type`: El tipo de notificación (`Info`, `Error`, `Warn`, `Success`). Por defecto es `Error`.
- `message`: El mensaje que se mostrará en la notificación. Por defecto es "Undefined Example toast".
- `background`: El color de fondo de la notificación en formato hexadecimal. Por defecto es `#default`.
- `color`: El color del texto de la notificación en formato hexadecimal. Por defecto es `#default`.

Para utilizar colores personalizados, simplemente incluye el color en hexadecimal como valor para los parámetros `background` y `color`. Si no se incluye ningún valor, se utilizará `#default`.

## Ejemplos

Puedes encontrar ejemplos de uso en el archivo `example.html` incluido en este repositorio.

```javascript
// Mostrar una notificación personalizada
toast.create("Info", "Este es una info personalizado.", "#fffff", "#3C90D1");

toast.create("Error", "Este es un Error personalizado.", "default", "default");

toast.create("Warn", "Este es un Warn personalizado.", "default", "#ED991D");

toast.create("Success", "Este es un Success personalizado.", "#fffff", "#2ECC71");

```
Si quieres contribuir al desarrollo de ToastNotifyJs, no dudes en abrir un issue o enviar un pull request en GitHub.

## Contribuir

Este texto proporciona una descripción completa de tu biblioteca, incluyendo cómo instalarla, usarla, personalizar las notificaciones y cómo contribuir al proyecto.
