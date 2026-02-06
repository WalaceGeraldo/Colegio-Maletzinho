const days = ['segunda', 'terca', 'quarta', 'quinta', 'sexta'];
const sections = [
    { id: 'rotina', label: 'Rotina Diária', placeholder: 'Ex: Roda de música, chamada...' },
    { id: 'atividade', label: 'Atividade', placeholder: 'Ex: Confecção das máscaras...' },
    { id: 'objetivo', label: 'Objetivo', placeholder: 'Ex: (EI03TS02) Expressar-se livremente...' },
    { id: 'material', label: 'Material', placeholder: 'Ex: Tintas coloridas, pena...' },
    { id: 'desenvolvimento', label: 'Desenvolvimento', placeholder: 'Ex: Após o momento de acolhida...' }
];

// Default Data Structure
const defaultDay = {
    rotina: 'ROTINA DIÁRIA: roda de música, chamada cantada (para o reconhecimento de si próprio e do outro), TV e contação de história',
    atividade: '',
    objetivo: '',
    material: '',
    desenvolvimento: ''
};

// Base64 Logo for Word Export (Embedded to ensure it works offline/without folder structure)
const textLogoBase64 = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAH0AfQDAREAAhEAPwD8r6KKKAP2C/4I4f8AJpU3/Yw3f/oEVerf8FGP+TMvHP8A1ztf/SqKvKf+COH/ACaVN/2MN3/6BFXq3/BRj/kzLxz/ANc7X/0qir5Sp/vj/wAT/M+5w/8AyLI/4f0Pxtooor6s+GCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD9gv+COH/ACaVN/2MN3/6BFXq3/BRj/kzLxz/ANc7X/0qiryn/gjh/wAmlTf9jDd/+gRV6t/wUY/5My8c/wDXO1/9Koq+Uqf74/8AE/zPucP/AMiyP+H9D8baKKK+rPhgooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP2C/4I4f8AJpU3/Yw3f/oEVerf8FGP+TMvHP8A1ztf/SqKvKf+COH/ACaVN/2MN3/6BFXq3/BRj/kzLxz/1ztf/SqKvlKn++P/ABP8z7nD/wDIsj/h/Q/G2iiivqz4YKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP2C/4I4f8AJpU3/Yw3f/oEVerf8FGP+TMvHP8A1ztf/SqKvKf+COH/ACaVN/2MN3/6BFXq3/BRj/kzLxz/1ztf/SqKvlKn++P/ABP8z7nD/wDIsj/h/Q/G2iiivqz4YKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP2C/4I4f8AJpU3/Yw3f/oEVerf8FGP+TMvHP8A1ztf/SqKvKf+COH/ACaVN/2MN3/6BFXq3/BRj/kzLxz/1ztf/SqKvlKn++P/ABP8z7nD/wDIsj/h/Q/G2iiivqz4YKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP2C/4I4f8AJpU3/Yw3f/oEVerf8FGP+TMvHP8A1ztf/SqKvKf+COH/ACaVN/2MN3/6BFXq3/BRj/kzLxz/1ztf/SqKvlKn++P/ABP8z7nD/wDIsj/h/Q/G2iiivqz4YKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP2C/4I4f8AJpU3/Yw3f/oEVerf8FGP+TMvHP8A1ztf/SqKvKf+COH/ACaVN/2MN3/6BFXq3/BRj/kzLxz/1ztf/SqKvlKn++P/ABP8z7nD/wDIsj/h/Q/G2iiivqz4YKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP2C/4I4f8AJpU3/Yw3f/oEVerf8FGP+TMvHP8A1ztf/SqКV9WfDBRRRQAUUUUAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD//2Q==";

// State
let state = {
    currentView: 'segunda',
    config: {
        month: 'Fevereiro',
        dateRange: '09/02/2026 até 13/02/2026',
        className: 'Berçário I',
        logoUrl: 'imagens/Imagem1.jpg'
    },
    days: {
        segunda: { ...defaultDay },
        terca: { ...defaultDay },
        quarta: { ...defaultDay },
        quinta: { ...defaultDay },
        sexta: { ...defaultDay }
    }
};

// Load from LocalStorage if available
const savedState = localStorage.getItem('malletzinho_plan_v1');
if (savedState) {
    try {
        const parsed = JSON.parse(savedState);
        // Merge to ensure structure integrity
        state = { ...state, ...parsed, days: { ...state.days, ...parsed.days }, config: { ...state.config, ...parsed.config } };

        // Ensure logo defaults to local if empty (fix for existing saves)
        if (!state.config.logoUrl) {
            state.config.logoUrl = 'imagens/Imagem1.jpg';
        }
    } catch (e) {
        console.error('Error loading state', e);
    }
}

// DOM Elements
const planForm = document.getElementById('plan-form');
const currentDayTitle = document.getElementById('current-day-title');
const navBtns = document.querySelectorAll('.nav-btn');
const btnPrint = document.getElementById('btn-print');
const btnPreview = document.getElementById('btn-preview');
const btnWord = document.getElementById('btn-word');

// Init
function init() {
    setupNavigation();
    renderView();
    setupAutoSave();
}

function setupNavigation() {
    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const day = btn.dataset.day;
            state.currentView = day;
            updateNavUI();
            renderView();
        });
    });

    btnPrint.addEventListener('click', () => {
        preparePrintView();
        window.print();
    });

    btnWord.addEventListener('click', () => {
        preparePrintView();
        exportToWordFixed();
    });

    // Preview button just prepares the view for now (user can inspect or just use print prev)
    btnPreview.addEventListener('click', () => {
        preparePrintView();
        alert('Os dados foram atualizados para impressão. Use o botão "Gerar PDF" para ver o resultado final.');
    });
}

function updateNavUI() {
    navBtns.forEach(btn => {
        if (btn.dataset.day === state.currentView) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function setupAutoSave() {
    // Save to local storage every change
    planForm.addEventListener('input', () => {
        localStorage.setItem('malletzinho_plan_v1', JSON.stringify(state));
    });
}

// Rendering
function renderView() {
    planForm.innerHTML = '';

    if (state.currentView === 'config') {
        renderConfig();
        currentDayTitle.textContent = 'Configurações do Documento';
        return;
    }

    const dayLabel = state.currentView.charAt(0).toUpperCase() + state.currentView.slice(1);
    currentDayTitle.textContent = dayLabel + (['segunda', 'terca', 'quinta', 'sexta'].includes(state.currentView) ? '-feira' : '');

    // Render fields for the day
    sections.forEach(section => {
        const group = document.createElement('div');
        group.className = 'form-group ' + (['desenvolvimento'].includes(section.id) ? 'full-width' : '');

        const label = document.createElement('label');
        label.textContent = section.label;

        const textarea = document.createElement('textarea');
        textarea.value = state.days[state.currentView][section.id] || '';
        textarea.placeholder = section.placeholder;

        // Bind event
        textarea.addEventListener('input', (e) => {
            state.days[state.currentView][section.id] = e.target.value;
        });

        group.appendChild(label);
        group.appendChild(textarea);
        planForm.appendChild(group);
    });
}

function renderConfig() {
    const fields = [
        { key: 'month', label: 'Mês (Ex: Plano do mês de Fevereiro)' },
        { key: 'dateRange', label: 'Datas (Ex: DIAS 09/02...)' },
        { key: 'className', label: 'Turma (Ex: Berçário I)' },
        { key: 'logoUrl', label: 'URL da Logo (Opcional)' }
    ];

    fields.forEach(field => {
        const group = document.createElement('div');
        group.className = 'form-group full-width';

        const label = document.createElement('label');
        label.textContent = field.label;

        if (field.key === 'logoUrl') {
            // Special handling for logo upload
            const inputUrl = document.createElement('input');
            inputUrl.type = 'text';
            inputUrl.value = state.config.logoUrl || '';
            inputUrl.placeholder = 'Ou cole uma URL de imagem aqui';
            inputUrl.addEventListener('input', (e) => {
                state.config.logoUrl = e.target.value;
                localStorage.setItem('malletzinho_plan_v1', JSON.stringify(state));
            });

            const inputFile = document.createElement('input');
            inputFile.type = 'file';
            inputFile.accept = 'image/*';
            inputFile.style.marginTop = '5px';
            inputFile.addEventListener('change', (e) => {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = function (evt) {
                        const base64 = evt.target.result;
                        // Save explicit base64 logo to state
                        state.config.customLogoBase64 = base64;
                        localStorage.setItem('malletzinho_plan_v1', JSON.stringify(state));
                        alert('Logo carregada com sucesso!');
                    };
                    reader.readAsDataURL(file);
                }
            });

            group.appendChild(label);
            group.appendChild(inputUrl);
            group.appendChild(document.createTextNode('Ou carregue do computador:'));
            group.appendChild(inputFile);
        } else {
            const input = document.createElement('input');
            input.type = 'text';
            input.value = state.config[field.key] || '';

            input.addEventListener('input', (e) => {
                state.config[field.key] = e.target.value;
                localStorage.setItem('malletzinho_plan_v1', JSON.stringify(state));
            });

            group.appendChild(label);
            group.appendChild(input);
        }

        planForm.appendChild(group);
    });
}

// Print Generation
function preparePrintView() {
    // Update Header
    document.getElementById('print-month').textContent = state.config.month.startsWith('Plano') ? state.config.month : `Plano do mês de ${state.config.month}`;
    document.getElementById('print-dates').textContent = state.config.dateRange.startsWith('DIAS') ? state.config.dateRange : `DIAS ${state.config.dateRange}`;
    document.getElementById('print-class-name').textContent = state.config.className;

    // Logo
    const logoImg = document.getElementById('print-logo');
    const logoPlace = document.getElementById('logo-placeholder');

    // Use config url or fall back to default if not set
    const urlToUse = state.config.customLogoBase64 || state.config.logoUrl || 'imagens/Imagem1.jpg';

    if (urlToUse) {
        logoImg.src = urlToUse;
        logoImg.style.display = 'block';
        logoPlace.style.display = 'none';
    } else {
        logoImg.style.display = 'none';
        logoPlace.style.display = 'flex';
    }

    // Update Table
    days.forEach(day => {
        const cell = document.getElementById(`cell-${day}`);
        cell.innerHTML = ''; // Clear

        const dayData = state.days[day];

        // Helper to create blocks
        const createBlock = (label, content) => {
            if (!content) return;
            const div = document.createElement('div');
            div.className = 'section-block';

            // Force block structure so content is always below label
            div.innerHTML = `<div class="section-label" style="font-weight:bold; text-transform:uppercase; margin-bottom:2px;">${label}:</div><div class="section-content">${content}</div>`;
            cell.appendChild(div);
        };

        // Order: Rotina, Atividade, Objetivo, Material, Desenvolvimento
        createBlock('Rotina Diária', dayData.rotina);
        createBlock('Atividade', dayData.atividade);
        createBlock('Objetivo', dayData.objetivo);
        createBlock('Material', dayData.material);
        createBlock('Desenvolvimento', dayData.desenvolvimento);
    });
}

window.addEventListener('DOMContentLoaded', init);

// Export using html-docx-js for real .docx format
function exportToWordFixed() {
    if (typeof htmlDocx === 'undefined') {
        alert('A biblioteca de exportação DOCX ainda está carregando. Tente novamente em alguns segundos.');
        return;
    }

    // Clone for export
    const printAreaClone = document.getElementById('print-area').cloneNode(true);

    // Handle Logo for DOCX
    // html-docx-js handles base64 images well if they are in standard <img src="..."> format
    const logoImg = printAreaClone.querySelector('#print-logo');

    let base64ToUse = null;
    if (state.config.customLogoBase64) {
        base64ToUse = state.config.customLogoBase64;
    } else if (typeof textLogoBase64 !== 'undefined' && textLogoBase64.length > 0 && (!state.config.logoUrl || state.config.logoUrl.includes('Imagem1.jpg'))) {
        base64ToUse = textLogoBase64;
    }

    if (logoImg && base64ToUse) {
        logoImg.src = base64ToUse; // Direct Base64 for the library
        logoImg.width = 160;
        logoImg.height = 140;
        logoImg.style.display = 'block';
    }

    // Clean up placeholder if any
    const placeholder = printAreaClone.querySelector('#logo-placeholder');
    if (placeholder) placeholder.style.display = 'none';

    // CSS for the DOCX conversion
    // We strictly inline the critical parts within the HTML string passed to the converter
    const css = `
        <style>
            @page { size: A4; margin: 0.5cm; }
            body { font-family: 'Arial', sans-serif; }
            table { border-collapse: collapse; width: 100%; border: 1px solid black; }
            td, th { border: 1px solid black; padding: 5px; vertical-align: top; font-size: 9pt; }
            .logo-area { width: 220px; text-align: center; }
            .section-block { border-bottom: 1px solid #000; margin-bottom: 5px; padding-bottom: 5px; }
            .section-block:last-child { border-bottom: none; }
            .section-label { font-weight: bold; display: block; text-transform: uppercase; }
        </style>
    `;

    const contentHtml = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            ${css}
        </head>
        <body>
            ${printAreaClone.innerHTML}
        </body>
        </html>
    `;

    try {
        const converted = htmlDocx.asBlob(contentHtml, {
            orientation: 'portrait',
            margins: { top: 283, right: 283, bottom: 283, left: 283 } // ~0.5cm in twips (1440 twips = 1 inch, 1cm = 567 twips, 0.5cm = 283)
        });

        const link = document.createElement('a');
        link.href = URL.createObjectURL(converted);
        link.download = 'planejamento.docx'; // Real docx extension
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (e) {
        console.error('Export error:', e);
        alert('Erro ao gerar DOCX. Verifique o console.');
    }
}
