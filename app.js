document.addEventListener('DOMContentLoaded', () => {
    const ui = {
        selectorCaso: document.getElementById('case-selector'),
        ctx: document.getElementById('input-context'),
        dec: document.getElementById('input-decision'),
        dat: document.getElementById('input-data'),
        res: document.getElementById('input-constraints'),
        met: document.getElementById('input-metrics'),
        btnGenerar: document.getElementById('generate-btn'),
        btnLimpiar: document.getElementById('clear-btn'),
        btnCopiar: document.getElementById('copy-btn'),
        outputTxt: document.getElementById('prompt-output'),
        placeholder: document.getElementById('output-placeholder'),
        riskContainer: document.getElementById('risk-warning-container'),
        riskText: document.getElementById('risk-warning-text')
    };

    // Autocompletado y Tip del Consultor
    ui.selectorCaso.addEventListener('change', (e) => {
        const casoId = e.target.value;
        if (window.datosEjemplo && window.datosEjemplo[casoId]) {
            const ejemplos = window.datosEjemplo[casoId];
            ui.ctx.value = ejemplos.contexto || '';
            ui.dec.value = ejemplos.decision || '';
            ui.dat.value = ejemplos.datos || '';
            ui.res.value = ejemplos.restricciones || '';
            ui.met.value = ejemplos.metricas || '';
            
            // Mostrar riesgo
            ui.riskText.textContent = ejemplos.riesgo || '';
            ui.riskContainer.style.display = 'block';
        }
    });

    // Validar y Generar
    ui.btnGenerar.addEventListener('click', () => {
        const caso = ui.selectorCaso.value;
        const contexto = ui.ctx.value.trim();
        const decision = ui.dec.value.trim();
        
        // Resetear estilos de error
        ui.ctx.style.borderColor = 'var(--border-color)';
        ui.dec.style.borderColor = 'var(--border-color)';

        let hasError = false;
        if (!caso) { alert('Selecciona un caso de uso.'); return; }
        if (!contexto) { ui.ctx.style.borderColor = 'red'; hasError = true; }
        if (!decision) { ui.dec.style.borderColor = 'red'; hasError = true; }
        
        if (hasError) return;

        if (typeof window.generarPromptFinal === 'function') {
            const promptFinal = window.generarPromptFinal(
                caso, contexto, decision, 
                ui.dat.value.trim(), 
                ui.res.value.trim(), 
                ui.met.value.trim()
            );
            
            ui.placeholder.style.display = 'none';
            ui.outputTxt.style.display = 'block';
            ui.outputTxt.value = promptFinal;
            ui.btnCopiar.disabled = false;
        }
    });

    // Limpiar Datos
    ui.btnLimpiar.addEventListener('click', () => {
        ui.selectorCaso.value = '';
        [ui.ctx, ui.dec, ui.dat, ui.res, ui.met, ui.outputTxt].forEach(el => {
            el.value = '';
            el.style.borderColor = 'var(--border-color)';
        });
        ui.riskContainer.style.display = 'none';
        ui.outputTxt.style.display = 'none';
        ui.placeholder.style.display = 'block';
        ui.btnCopiar.disabled = true;
    });

    // Copiar
    ui.btnCopiar.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(ui.outputTxt.value);
            const originalText = ui.btnCopiar.textContent;
            ui.btnCopiar.textContent = '¡Copiado con éxito!';
            ui.btnCopiar.disabled = true;
            setTimeout(() => {
                ui.btnCopiar.textContent = originalText;
                ui.btnCopiar.disabled = false;
            }, 2000);
        } catch (err) {
            alert('Error al copiar. Selecciona el texto manualmente.');
        }
    });
});
