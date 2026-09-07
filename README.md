# ALBA — Test de Oposiciones, Educación Infantil (Galicia)

**A**prende · **L**ucha · **B**rilla · **A**prueba

Aplicación web para practicar de forma activa el temario de las oposiciones de
**Educación Infantil en Galicia**: tests con preguntas aleatorias, corrección
inmediata con explicación, estadísticas de progreso por bloque y descarga de
los resultados en PDF.

Es una app 100% estática (HTML + CSS + JS puro, sin frameworks ni backend),
pensada para alojarse gratis en **GitHub Pages**.

![estado](https://img.shields.io/badge/estado-en_uso-2E4B3B) ![licencia](https://img.shields.io/badge/uso-personal-DDA53B)

## ✨ Funcionalidades

- **25 bloques del temario**, con 20 preguntas tipo test cada uno (500 en total).
- **Filtro de dificultad**: cada pregunta está etiquetada como *fácil*,
  *media* o *difícil*; en la pantalla de configuración puedes elegir
  cualquier combinación de niveles (por defecto, los tres). El contador
  de preguntas disponibles por bloque se ajusta automáticamente según el
  filtro elegido, y cada pregunta muestra su etiqueta de dificultad durante
  el test.
- **Selección flexible**: elige qué bloques repasar y cuántas preguntas quieres
  responder en cada test.
- **Aleatoriedad real**: tanto las preguntas elegidas como el orden de las
  opciones (A/B/C/D) cambian en cada intento, para evitar la memorización
  posicional.
- **Corrección a tu ritmo**: todo el test se muestra de una vez y cada
  pregunta tiene su propio botón "Comprobar esta pregunta", para corregir
  sobre la marcha. Si te aburres de ir una a una, el botón "Corrixir todo o
  test" corrige de golpe todas las que falten.
- **Estadísticas por bloque**, guardadas en el propio navegador: la pantalla
  de inicio muestra el % de acierto histórico de cada tema, para detectar
  puntos débiles de un vistazo.
- **Repaso final y exportación a PDF** con la puntuación, el desglose por
  bloque y el listado completo de preguntas, respuestas y explicaciones —
  ideal para imprimir o repasar sin conexión.
- Sin cuentas, sin cookies de terceros, sin servidor: todo ocurre en el
  navegador de quien hace el test.

## 🚀 Poner la web en marcha (GitHub Pages)

1. Crea un repositorio nuevo en GitHub, por ejemplo `alba-opos`.
2. Sube estos cuatro archivos a la raíz del repositorio:
   - `index.html`
   - `style.css`
   - `app.js`
   - `questions.js`
3. Entra en **Settings → Pages**.
4. En *Build and deployment → Source*, elige **Deploy from a branch**,
   rama `main` y carpeta `/ (root)`.
5. Guarda los cambios. En un par de minutos la web estará publicada en:

   ```
   https://<tu-usuario-de-github>.github.io/alba-opos/
   ```

No hace falta ningún paso de compilación (build): son archivos estáticos que
se sirven tal cual.

## 🗂️ Estructura del proyecto

```
alba-opos/
├── index.html      → estructura de la página
├── style.css       → estilos e identidad visual
├── app.js          → lógica de la app (tests, estadísticas, PDF)
├── questions.js     → banco de preguntas, organizado por bloque
└── README.md
```

## 🧠 Cómo funciona por dentro

1. **Configuración**: se listan los 25 bloques con casillas para marcar/
   desmarcar, y un deslizador para elegir cuántas preguntas se quieren
   responder (el máximo depende de los bloques seleccionados).
2. **Test**: `app.js` construye una copia barajada del banco de preguntas
   de los bloques elegidos, recorta el número solicitado y baraja también
   el orden de las opciones de cada pregunta. Al responder, se bloquea la
   pregunta, se resalta la opción correcta/incorrecta y se muestra la
   explicación.
3. **Resultados**: se calcula el % de acierto global y por bloque de *ese*
   test, y se actualiza el historial acumulado guardado en
   `localStorage` bajo la clave `oposicionesInfantilStatsV1`.
4. **PDF**: el botón "Descargar PDF" usa la librería
   [jsPDF](https://github.com/parallax/jsPDF) (cargada desde CDN) para
   generar un documento con la puntuación, el desglose por bloque y todas
   las preguntas con su respuesta correcta, la respuesta marcada y la
   explicación.

## 📝 Añadir o editar preguntas

Todo el contenido vive en `questions.js`, agrupado por bloque. Cada
pregunta sigue este formato:

```js
{
  d: "facil",   // "facil" | "media" | "dificil" — nivel de dificultad de la pregunta
  q: "Texto de la pregunta",
  o: ["Opción A", "Opción B", "Opción C", "Opción D"],
  c: 1,   // índice (0 a 3) de la opción correcta dentro de "o"
  e: "Explicación que se muestra después de responder."
}
```

Para ampliar el banco, añade objetos con ese formato (sin olvidar el campo
`d`) dentro del array `questions` del bloque correspondiente. No hay límite
de preguntas por bloque: cuantas más haya, más variedad tendrá cada test.

## ⚠️ Nota sobre el contenido

Las preguntas se han redactado a partir de los contenidos pedagógicos
habituales del temario (Piaget, Vygotski, Wallon, Decroly, Montessori,
LOMLOE, etc.) como material de repaso personal. **No sustituyen al temario
oficial**: conviene contrastarlas, especialmente las de contenido normativo,
con el currículo vigente de Educación Infantil en Galicia (Decreto
150/2022) y con el temario oficial de la convocatoria.

## 💾 Privacidad de los datos

Las estadísticas de progreso se guardan únicamente en el `localStorage`
del navegador donde se usa la app: no se envían a ningún servidor. Si se
borra la caché del navegador, se usa otro dispositivo o una ventana de
incógnito, ese historial no se conserva.

---

Hecho con cariño para que Alba apruebe. 🌅
