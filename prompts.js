// Base de datos de casos integrada (Evita errores CORS en local)
window.datosEjemplo = {
    admisiones: {
        contexto: "Las solicitudes internacionales aumentaron un 30%, pero el fondo de becas se redujo un 10% para el próximo ciclo.",
        decision: "Ajustar los criterios de corte para asignar becas completas a perfiles STEM sin comprometer las metas de equidad.",
        datos: "Fondo total: $500,000. Candidatos válidos: 1,200. Costo promedio: $25,000 por alumno.",
        restricciones: "Al menos el 40% de las becas STEM deben asignarse a mujeres. Decisión requerida en 14 días.",
        metricas: "1,200 solicitudes, ~20 becas completas disponibles.",
        riesgo: "Incumplir la cuota de género o excluir talento sobresaliente por ajustes financieros estrictos."
    },
    ti: {
        contexto: "El Service Desk está colapsado por peticiones repetitivas (reseteo de contraseñas, VPN) tras la política de teletrabajo masivo.",
        decision: "Decidir entre automatizar el Nivel 1 con un chatbot interno o subcontratar soporte offshore.",
        datos: "Presupuesto extra: $3,000/mes. Costo chatbot: $1,500/mes + setup. Costo offshore: $2,800/mes.",
        restricciones: "Cumplir SLA de 2 horas para incidentes críticos. Prohibido exponer datos sensibles de empleados al LLM del chatbot.",
        metricas: "500 tickets diarios (60% son repetitivos o de Nivel 1).",
        riesgo: "Un chatbot mal configurado puede aumentar la frustración del usuario y escalar los tickets al Nivel 2."
    },
    ecommerce: {
        contexto: "Post-navidad, las devoluciones subieron al 15%. Se detectó un patrón de cuentas nuevas devolviendo electrónicos de alto valor.",
        decision: "Endurecer las políticas de devolución y los filtros automáticos de fraude sin perjudicar al cliente honesto.",
        datos: "Ticket promedio: $120. Tasa de fraude estimada: 3%. Costo de logística inversa: $15 por paquete.",
        restricciones: "Ley del consumidor: 14 días mínimo para devolver sin justificación. Mantener objetivo de NPS > 60.",
        metricas: "10,000 pedidos/mes. 1,500 devoluciones mensuales.",
        riesgo: "Generar falsos positivos que bloqueen a clientes legítimos, causando crisis de reputación y pérdida de ventas."
    },
    documentacion: {
        contexto: "El equipo técnico pierde varias horas semanales buscando información fragmentada en Drive, Confluence y Slack.",
        decision: "Seleccionar y desplegar una arquitectura centralizada asistida por IA para búsquedas internas.",
        datos: "Presupuesto: $15,000/año. Documentos: +10,000 PDFs, wikis y chats históricos.",
        restricciones: "Estricto cumplimiento de ISO 27001. La IA no debe entrenarse con código fuente propietario ni datos de clientes.",
        metricas: "150 empleados técnicos. ~600 horas/semana perdidas en búsquedas infructuosas.",
        riesgo: "Fuga de información confidencial mediante 'prompt injection' o baja adopción por lentitud."
    }
};

const configuracionesCasos = {
    admisiones: "ROL: Experto en Admisiones Universitarias y Gestión de Becas.\nENFOQUE: Equidad, diversidad, mérito académico y optimización estricta de fondos.",
    ti: "ROL: IT Service Delivery Manager.\nENFOQUE: Eficiencia operativa, cumplimiento de SLAs, reducción de downtime y priorización por impacto.",
    ecommerce: "ROL: Analista de Riesgos y Operaciones E-commerce.\nENFOQUE: Minimización de falsos positivos, retención de clientes y eficiencia logística.",
    documentacion: "ROL: Knowledge Manager y Arquitecto de Información Corporativa.\nENFOQUE: Accesibilidad, control de versiones y estricta seguridad de datos."
};

const promptMaestro = `INSTRUCCIONES DE SALIDA:
Actúa como un consultor estratégico de alto nivel. Analiza la información y genera una respuesta estructurada bajo los siguientes 9 puntos:

1. Resumen del problema: Síntesis ejecutiva de la situación actual.
2. Decisión real a tomar: El dilema central reformulado objetivamente.
3. Datos faltantes: Información crítica no proporcionada.
4. Tres alternativas: Tres opciones viables y mutuamente excluyentes.
5. Comparación de alternativas: Análisis breve de pros, contras y riesgos.
6. Recomendación razonada: Tu propuesta final argumentada.
7. Automatización vs Humano: Qué delegar a la IA/sistemas y qué mantener bajo supervisión humana.
8. KPIs: 2 o 3 métricas para medir el éxito.
9. Veredicto Final: Concluye con "GO", "NO-GO", o "GO CON CONDICIONES", seguido de una línea de justificación.`;

window.generarPromptFinal = function(caso, contexto, decision, datos, restricciones, metricas) {
    const rolEspecifico = configuracionesCasos[caso] || "ROL: Analista Estratégico.";
    
    return `${rolEspecifico}\n\n${promptMaestro}\n\n--- DATOS DEL CASO ---\n\n[CONTEXTO]\n${contexto}\n\n[DECISIÓN A TOMAR]\n${decision}\n\n[DATOS DISPONIBLES]\n${datos}\n\n[RESTRICCIONES]\n${restricciones}\n\n[MÉTRICAS Y VOLUMEN]\n${metricas}`.trim();
};
