# Decision Pilot IA

## Objetivo del Proyecto
Desarrollar una herramienta educativa interactiva que permita estructurar, parametrizar y probar prompts efectivos para la toma de decisiones operativas y estratégicas asistidas por Inteligencia Artificial. La app no toma decisiones por sí sola, sino que obliga al usuario a formular correctamente el problema para que la IA devuelva una recomendación razonada y estructure qué parte se automatiza y qué parte queda bajo control humano.

## Qué problema resuelve
Al interactuar con modelos de lenguaje (LLMs), es común redactar instrucciones vagas que generan respuestas genéricas. Esta aplicación enseña a desglosar un problema complejo en variables clave (contexto, decisión, datos, restricciones y métricas) para forzar a la IA a producir análisis estructurados, comparativas de alternativas y decisiones libres de ambigüedad.

## Casos incluidos en la simulación
La aplicación cuenta con 4 casos de uso complejos precargados:
1. **Admisión y becas universitarias:** Asignación de fondos STEM bajo restricciones de equidad y presupuesto.
2. **Tickets internos de soporte TI:** Evaluación entre automatización (chatbot) o subcontratación (offshore) para mitigar cuellos de botella.
3. **Devoluciones y fraude en e-commerce:** Ajuste de políticas de devolución en temporada alta sin afectar la retención de clientes legítimos.
4. **Asistente interno de documentación corporativa:** Implementación de arquitectura de búsqueda con IA respetando estrictas normas de seguridad (ISO 27001).

## Estructura de archivos
El proyecto está construido con Vanilla Web (HTML, CSS, JS) sin dependencias externas:

* `index.html`: Estructura semántica de la interfaz y formulario.
* `style.css`: Sistema de diseño responsivo y adaptable.
* `app.js`: Lógica de validación, lectura de campos y copiado al portapapeles.
* `prompts.js`: Motor de ensamblado y base de datos interna con los 4 casos precargados.
* `README.md`: Documentación del repositorio.

*(Nota: Los datos de los casos se han integrado en `prompts.js` para evitar problemas de políticas CORS al ejecutar en entornos locales sin servidor).*

## Instrucciones de uso
1. Abre la aplicación desde el enlace de GitHub Pages.
2. Selecciona uno de los 4 casos de uso en el menú desplegable.
3. Revisa la "Advertencia de Riesgo" que aparece en pantalla y los datos autocompletados.
4. Haz clic en "Generar Prompt".
5. Copia el resultado utilizando el botón "Copiar al Portapapeles".
6. Pega el texto en un motor de IA (Gemini, ChatGPT, Claude) añadiendo las instrucciones de validación adicionales solicitadas para cada caso.

## Limitaciones
* **No ejecuta la IA:** La aplicación es un "ensamblador de prompts". No se conecta directamente a la API de ningún modelo; el usuario debe copiar el resultado y pegarlo manualmente en su IA de preferencia.
* **Persistencia:** Al ser una herramienta estática ejecutada del lado del cliente, no guarda un historial de los prompts generados ni utiliza base de datos externa.

## Enlace de la aplicación
[AÑADE AQUÍ LA URL DE TU GITHUB PAGES CUANDO LO PUBLIQUES, ej: https://tu-usuario.github.io/decision-pilot-ia/]

## Autores
* [Nombre y Apellidos del Estudiante 1]
* [Nombre y Apellidos del Estudiante 2]
* Proyecto desarrollado para la asignatura [Nombre de tu Asignatura].
