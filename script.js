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

    try {
        const converted = htmlDocx.asBlob(contentHtml, {
            orientation: 'portrait',
            margins: { top: 144, right: 144, bottom: 144, left: 144 } // ~0.25cm in twips (1440 twips = 1 inch, 1cm = 567 twips)
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

    // Create a temporary container to render it visible for html2canvas
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '-10000px';
    container.style.left = '0';
    // container.style.width = '210mm'; // Force A4 width
    // container.style.maxWidth = '210mm';
    container.style.background = 'white';
    container.style.zIndex = '-1';

    // Explicitly set width to ensure table renders correctly
    content.style.width = '210mm';
    content.style.maxWidth = 'none';
    content.style.margin = '0 auto';
    content.style.background = 'white';

    container.appendChild(content);
    document.body.appendChild(container);

    const opt = {
        margin: 0, // We have padding in .document-page
        filename: `Planejamento - ${state.config.className || 'Turma'}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, logging: false },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(container).save().then(() => {
        document.body.removeChild(container);
    }).catch(err => {
        console.error(err);
        alert('Erro ao gerar PDF: ' + err.message);
        if (document.body.contains(container)) document.body.removeChild(container);
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
