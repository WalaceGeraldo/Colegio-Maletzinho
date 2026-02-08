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
const textLogoBase64 = "data:image/jpeg;base64,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";

// Profile State Management
const STORAGE_KEY_V1 = 'malletzinho_plan_v1';
const STORAGE_KEY_PROFILES = 'malletzinho_profiles_v1';

// Initial default data factory
function createDefaultData() {
    return {
        config: {
            month: 'Fevereiro',
            dateRange: '09/02/2026 até 13/02/2026',
            className: 'Berçário I',
            logoUrl: 'imagens/Imagem1.jpg',
            customLogoBase64: null
        },
        days: {
            segunda: { ...defaultDay },
            terca: { ...defaultDay },
            quarta: { ...defaultDay },
            quinta: { ...defaultDay },
            sexta: { ...defaultDay }
        }
    };
}

// Global App State (Profiles)
let appState = {
    currentProfileId: 'daiane',
    profiles: {
        'daiane': {
            id: 'daiane',
            name: 'Daiane',
            data: createDefaultData()
        }
    }
};

// Working State (The one used by the UI)
let state = {
    currentView: 'segunda',
    ...createDefaultData() // Safe default
};

// Initialize Data
// loadAppData(); // Deprecated for Firebase
// We wait for init() to setup auth


// DOM Elements
const appContainer = document.getElementById('app-container');
const planForm = document.getElementById('plan-form');
const currentDayTitle = document.getElementById('current-day-title');
const navBtns = document.querySelectorAll('.nav-btn');
const btnPrint = document.getElementById('btn-print');
const btnDownloadPdf = document.getElementById('btn-download-pdf');
const btnClear = document.getElementById('btn-clear');
const btnWord = document.getElementById('btn-word');

// Login Elements
const loginScreen = document.getElementById('login-screen');
// Elements removed: loginEmail, loginPass, btnLogin, btnSignup (not in use)
const authError = document.getElementById('auth-error');
const authLoading = document.getElementById('auth-loading');
const userDisplayName = document.getElementById('user-display-name');
const btnLogout = document.getElementById('btn-logout-sidebar'); // Corrected ID from index.html check
const btnGoogleLogin = document.getElementById('btn-google-login');

// Intro DOM Elements (Removed)
// Profile DOM Elements (Removed)

let currentUser = null; // Firebase User
let saveTimeout = null;

// Init
function init() {
    // Wait for firebase to be ready if not already
    if (window.firebaseAuth) {
        setupAuth();
    } else {
        window.addEventListener('firebase-ready', () => {
            setupAuth();
        });
    }

    setupNavigation();
    setupAutoSave();
}

function setupAuth() {
    const { auth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, signInWithPopup, provider, GoogleAuthProvider } = window.firebaseAuth;
    const { db, doc, setDoc } = window.firebaseDb;

    // 1. Check Auth State
    onAuthStateChanged(auth, user => {
        if (user) {
            // Logged In
            currentUser = user;
            console.log('User logged in:', user.email);

            // UI Updates
            if (loginScreen) loginScreen.classList.add('hidden');
            if (userDisplayName) userDisplayName.textContent = user.displayName || user.email;

            // Update Avatar
            const avatarContainer = document.getElementById('user-avatar-display');
            if (avatarContainer) {
                avatarContainer.innerHTML = ''; // Clear
                if (user.photoURL) {
                    const img = document.createElement('img');
                    img.src = user.photoURL;
                    img.alt = user.displayName || 'Avatar';
                    img.referrerPolicy = 'no-referrer'; // Handle Google image permissions
                    avatarContainer.appendChild(img);
                } else {
                    const name = user.displayName || user.email || 'U';
                    avatarContainer.textContent = name.charAt(0).toUpperCase();
                }
            }
            loadUserData(user.uid);
        } else {
            // Logged Out
            currentUser = null;
            console.log('User logged out');

            // UI Updates
            appContainer.classList.add('hidden');
            if (loginScreen) loginScreen.classList.remove('hidden'); // Show Login
        }
    });

    // 4. Logout Action
    if (btnLogout) {
        btnLogout.addEventListener('click', () => {
            signOut(auth).then(() => {
                location.reload();
            });
        });
    }
    // 5. Google Login Action
    if (btnGoogleLogin) {
        btnGoogleLogin.addEventListener('click', () => {
            showLoading(true);
            signInWithPopup(auth, provider)
                .then((result) => {
                    // This gives you a Google Access Token. You can use it to access the Google API.
                    const credential = GoogleAuthProvider.credentialFromResult(result);
                    const token = credential.accessToken;
                    // The signed-in user info.
                    const user = result.user;
                    console.log("Google Login Value:", user);

                    // Force update profile name if needed
                    if (user.displayName && appState.profiles[appState.currentProfileId]) {
                        appState.profiles[appState.currentProfileId].name = user.displayName;
                    }
                    // onAuthStateChanged will handle the rest
                }).catch((error) => {
                    // Handle Errors here.
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.error("Google Login Error:", errorCode, errorMessage);
                    showError(handleAuthError(error));
                    showLoading(false);
                });
        });
    }
}

function showError(msg) {
    if (authError) {
        authError.textContent = msg;
        authError.style.display = 'block';
    } else {
        alert(msg);
    }
}

function showLoading(isLoading) {
    if (authLoading) authLoading.style.display = isLoading ? 'block' : 'none';
    if (authError) authError.style.display = 'none';
}

function handleAuthError(error) {
    switch (error.code) {
        case 'auth/invalid-email': return 'Email inválido.';
        case 'auth/user-disabled': return 'Usuário desativado.';
        case 'auth/user-not-found': return 'Usuário não encontrado.';
        case 'auth/wrong-password': return 'Senha incorreta.';
        case 'auth/email-already-in-use': return 'Email já cadastrado.';
        case 'auth/weak-password': return 'Senha muito fraca (mínimo 6 caracteres).';
        case 'auth/unauthorized-domain': return 'Domínio não autorizado no Firebase. Adicione este domínio no console de autenticação.';
        case 'auth/popup-closed-by-user': return 'Login cancelado pelo usuário.';
        default: return error.message;
    }
}

// Data Sync (Firestore)
async function loadUserData(uid) {
    const { db, doc, getDoc, setDoc } = window.firebaseDb;
    const docRef = doc(db, "users", uid);

    try {
        const docSnap = await getDoc(docRef);

        const profileName = currentUser.displayName || 'Usuário';
        const profileId = 'default_profile';

        if (docSnap.exists()) {
            const data = docSnap.data();
            // Merge with local appState structure
            appState = { ...appState, ...data };

            // Ensure we have at least one profile or update the existing one
            // We force the name from Google if available
            if (!appState.currentProfileId || !appState.profiles[appState.currentProfileId]) {
                // If broken state, re-init
                appState.currentProfileId = profileId;
                appState.profiles = {
                    [profileId]: {
                        id: profileId,
                        name: profileName,
                        data: createDefaultData()
                    }
                };
            } else {
                // Update name of current profile if user has a display name
                if (currentUser.displayName) {
                    appState.profiles[appState.currentProfileId].name = currentUser.displayName;
                }
            }

            console.log('Data loaded from Firestore');
        } else {
            // First time user
            console.log('No data found, creating default...');

            appState = {
                currentProfileId: profileId,
                profiles: {
                    [profileId]: {
                        id: profileId,
                        name: profileName,
                        data: createDefaultData()
                    }
                }
            };

            await setDoc(docRef, appState);
        }

        // Enter app immediately
        enterApp(appState.currentProfileId);

    } catch (error) {
        console.error("Error getting document:", error);
        alert('Erro ao carregar dados do servidor: ' + error.message);
    }
}

function saveToFirebase() {
    if (!currentUser) return;
    const { db, doc, setDoc } = window.firebaseDb;

    // Setup debounced save
    if (saveTimeout) clearTimeout(saveTimeout);

    saveTimeout = setTimeout(() => {
        const userRef = doc(db, "users", currentUser.uid);

        setDoc(userRef, appState)
            .then(() => {
                console.log("Document successfully written!");
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
    }, 2000); // 2 seconds debounce
}

// Intro Logic
// Intro Logic Removed
function setupIntroUI() {
    // Removed
}


// Profile Rendering Removed
function renderIntroProfiles() {
    // Removed
}

function enterApp(profileId) {
    // Switch to profile
    appState.currentProfileId = profileId;
    loadProfileToState(profileId);
    updateProfileUI();
    renderView();

    appContainer.classList.remove('hidden');

    // Save active state
    saveToFirebase();
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

    if (btnPrint) {
        btnPrint.addEventListener('click', () => {
            preparePrintView();
            window.print();
        });
    }

    if (btnDownloadPdf) {
        btnDownloadPdf.addEventListener('click', () => {
            downloadPDF();
        });
    }

    if (btnWord) {
        btnWord.addEventListener('click', () => {
            preparePrintView();
            exportToWordFixed();
        });
    }

    if (btnClear) {
        btnClear.addEventListener('click', () => {
            if (confirm('Tem certeza? Isso apagará TODAS as atividades da semana (menos a Rotina).')) {
                clearWeekData();
            }
        });
    }
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
    // Save to Firebase every change
    const saveHandler = () => {
        // Update the current profile in AppState with the current Working State
        if (appState.profiles[appState.currentProfileId]) {
            appState.profiles[appState.currentProfileId].data = {
                config: state.config,
                days: state.days
            };

            // Persist AppState
            saveToFirebase();
        }
    };

    if (planForm) {
        planForm.addEventListener('input', saveHandler);
    }
    window.saveCurrentState = saveHandler;
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
                if (window.saveCurrentState) window.saveCurrentState();
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
                        if (window.saveCurrentState) window.saveCurrentState();
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
                if (window.saveCurrentState) window.saveCurrentState();
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
    // html-docx-js handles base64 images well. We prioritize converting whatever is currently shown to Base64.
    const logoImgClone = printAreaClone.querySelector('#print-logo');
    const realLogo = document.getElementById('print-logo');

    // Clean up placeholder if any
    const placeholder = printAreaClone.querySelector('#logo-placeholder');
    if (placeholder) placeholder.style.display = 'none';

    // CSS for the DOCX conversion
    const css = `
        <style>
            @page { size: A4; margin: 0.25cm; }
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

    const processLogoPromise = new Promise((resolve) => {
        if (!logoImgClone || !realLogo) return resolve();

        // Strategy 1: Use explicitly stored Base64 (User Upload)
        if (state.config.customLogoBase64) {
            applyLogo(logoImgClone, state.config.customLogoBase64);
            return resolve();
        }

        // Strategy 2: Use hardcoded Base64 for the Default Logo (to avoid local file / tainted canvas issues)
        // We check if the current source looks like the default logo
        const currentSrc = realLogo.src || '';
        const isDefault = currentSrc.includes('Imagem1.jpg') || currentSrc.includes('imagem1.jpg');

        if (isDefault || !state.config.logoUrl) {
            if (typeof textLogoBase64 !== 'undefined' && textLogoBase64) {
                applyLogo(logoImgClone, textLogoBase64);
                return resolve();
            }
        }

        // Strategy 3: Dynamic Conversion for External URLs
        // If it's a URL, try to convert it to Base64 via Canvas
        try {
            const img = new Image();
            img.crossOrigin = 'Anonymous';
            img.onload = () => {
                const canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0);
                try {
                    const dataURL = canvas.toDataURL('image/png');
                    applyLogo(logoImgClone, dataURL);
                } catch (e) {
                    console.warn('Canvas taint or error:', e);
                }
                resolve();
            };
            img.onerror = () => {
                console.warn('Failed to load image for conversion');
                resolve();
            };
            img.src = currentSrc;
        } catch (e) {
            console.warn('Error in dynamic conversion strategy:', e);
            resolve();
        }
    });

    function applyLogo(imgEl, base64) {
        imgEl.setAttribute('src', base64);
        imgEl.setAttribute('width', '160');
        imgEl.setAttribute('height', '140');
        imgEl.style.width = '160px';
        imgEl.style.height = '140px';
        imgEl.style.maxWidth = '160px';
        imgEl.style.display = 'block';
        imgEl.removeAttribute('onerror');
    }

    // Wait for our processing, then continue
    // Chain the processing with a preload check
    // Chain the processing with a preload check
    const readyToExportPromise = processLogoPromise.then(() => {
        // UPDATE HTML CONTENT AFTER LOGO PROCESSING
        // This is crucial: we must regenerate contentHtml because the DOM attributes of logoImgClone 
        // have been modified (src changed to base64) by applyLogo() inside the promise.
        return `
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
    });

    // Wait for images inside the cloned content to load before converting
    readyToExportPromise.then((finalHtml) => {
        // Preload checking (existing logic simplified for the CLONE's images)
        return waitForImages(printAreaClone).then(() => finalHtml);
    }).then((finalHtml) => {
        try {
            const imgs = Array.from(printAreaClone.querySelectorAll('img'));
            console.log('exportToWordFixed: converting to DOCX, imgs:', imgs.map(i => ({ src: i.src && i.src.substring(0, 50) + '...', complete: i.complete })), 'content length:', finalHtml.length);

            const converted = htmlDocx.asBlob(finalHtml, {
                orientation: 'portrait',
                margins: { top: 144, right: 144, bottom: 144, left: 144 }
            });

            const link = document.createElement('a');
            link.href = URL.createObjectURL(converted);
            link.download = 'planejamento.docx';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (e) {
            console.error('Export error:', e);
            alert('Erro ao gerar DOCX. Verifique o console.');
        }
    }).catch(err => {
        console.warn('exportToWordFixed: erro ao aguardar imagens, tentando mesmo assim', err);
        try {
            // Fallback: use current state of contentHtml (might miss logo updates if critical failure occurred early)
            const fallbackHtml = `
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
            const converted = htmlDocx.asBlob(fallbackHtml, {
                orientation: 'portrait',
                margins: { top: 144, right: 144, bottom: 144, left: 144 }
            });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(converted);
            link.download = 'planejamento.docx';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (e) {
            console.error('Export fallback error:', e);
            alert('Erro ao gerar DOCX. Verifique o console.');
        }
    });
}

// Wait for images inside a container to load (resolve even on error)
function waitForImages(root) {
    const imgs = Array.from(root.querySelectorAll('img'));
    if (imgs.length === 0) return Promise.resolve();
    return Promise.all(imgs.map(img => new Promise(res => {
        try {
            console.log('waitForImages: img', img.src, 'complete=', img.complete);
        } catch (e) { /* ignore */ }
        if (img.complete) return res();
        img.addEventListener('load', res);
        img.addEventListener('error', res);
    })));
}

// Profile UI & Logic
// Profile UI Removed
function setupProfileUI() {
    // Removed
}

// Profile Rendering Removed
function renderProfilesList() {
    // Removed
}




function loadProfileToState(profileId) {
    const profile = appState.profiles[profileId];
    if (profile && profile.data) {
        state.config = { ...profile.data.config };
        // Deep copy to ensure we have a working copy
        state.days = JSON.parse(JSON.stringify(profile.data.days));
    }
}

function switchProfile(profileId) {
    if (!appState.profiles[profileId]) return;

    appState.currentProfileId = profileId;
    loadProfileToState(profileId);
    updateProfileUI();
    renderView();

    // Persist the switch
    saveToFirebase();
}

function updateProfileUI() {
    const current = appState.profiles[appState.currentProfileId];
    if (current) {
        // currentProfileName gone, but maybe we want to update the sidebar name?
        if (userDisplayName) userDisplayName.textContent = current.name;
    }
}

// PDF Download
function downloadPDF() {
    if (typeof html2pdf === 'undefined') {
        alert('A biblioteca de PDF ainda está carregando. Aguarde um momento.');
        return;
    }

    // Prepare content
    preparePrintView();

    // Clone the print page content to isolate it
    const element = document.getElementById('print-area');
    // We target .document-page inside print-area to get just the page
    const content = element.querySelector('.document-page').cloneNode(true);

    // Create a temporary container to render it visible for html2canvas.
    // Use opacity:0 instead of moving it far off-screen to avoid layout/measurement issues.
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.background = 'white';
    container.style.opacity = '0';
    container.style.pointerEvents = 'none';
    container.style.zIndex = '9999';

    // Ensure the page-like element has A4 width so html2canvas lays it out correctly
    content.style.width = '210mm';
    content.style.maxWidth = 'none';
    content.style.margin = '0 auto';
    content.style.background = 'white';

    container.appendChild(content);
    document.body.appendChild(container);

    const opt = {
        margin: 0,
        filename: `Planejamento - ${state.config.className || 'Turma'}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, logging: false },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // Wait for images (logo etc.) to finish loading before rendering
    waitForImages(container).then(() => {
        try {
            const imgs = Array.from(container.querySelectorAll('img'));
            console.log('downloadPDF: preparing to render, content size:', content.innerHTML.length, 'imgs:', imgs.map(i => ({ src: i.src, complete: i.complete })));
        } catch (e) { }

        // Use the actual page element for html2pdf source
        html2pdf().set(opt).from(content).save().then(() => {
            document.body.removeChild(container);
        }).catch(err => {
            console.error(err);
            alert('Erro ao gerar PDF: ' + err.message);
            if (document.body.contains(container)) document.body.removeChild(container);
        });
    }).catch(err => {
        console.warn('Erro ao aguardar imagens:', err);
        try {
            console.log('downloadPDF: fallback render, content size:', content.innerHTML.length);
        } catch (e) { }
        // Try anyway
        html2pdf().set(opt).from(content).save().then(() => {
            document.body.removeChild(container);
        }).catch(e => {
            console.error(e);
            alert('Erro ao gerar PDF: ' + e.message);
            if (document.body.contains(container)) document.body.removeChild(container);
        });
    });
}

function clearWeekData() {
    // Iterate over all days in state
    Object.keys(state.days).forEach(dayKey => {
        const dayData = state.days[dayKey];
        // Iterate over keys keys
        Object.keys(dayData).forEach(field => {
            // Clear everything except 'rotina'
            if (field !== 'rotina') {
                dayData[field] = '';
            }
        });
    });

    // Save
    if (window.saveCurrentState) window.saveCurrentState();

    // Re-render
    renderView();
    alert('Planejamento limpo com sucesso!');
}


