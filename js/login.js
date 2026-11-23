const username = document.getElementById("username");
const password = document.getElementById("password");
const notRobot = document.getElementById("not-robot");
const loginButton = document.getElementById("loginButton");
const loginForm = document.getElementById("loginForm");

const account = {
    username: "admin",
    password: "admin123"
};

const modalStyle = document.createElement("style");
modalStyle.textContent = `
    .input-error {
        border-color: #dc2626 !important;
        box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.12) !important;
    }

    .login-modal {
        position: fixed;
        inset: 0;
        z-index: 10;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        background: rgba(15, 23, 42, 0.5);
        opacity: 0;
        visibility: hidden;
        transition: all 0.2s ease;
    }

    .login-modal.is-open {
        opacity: 1;
        visibility: visible;
    }

    .login-modal__content {
        width: 100%;
        max-width: 380px;
        padding: 28px;
        background: #ffffff;
        border-radius: 16px;
        box-shadow: 0 20px 50px rgba(15, 23, 42, 0.2);
        text-align: center;
        transform: translateY(10px);
        transition: transform 0.2s ease;
    }

    .login-modal.is-open .login-modal__content {
        transform: translateY(0);
    }

    .login-modal__content h2 {
        margin-bottom: 10px;
        color: #b91c1c;
        font-size: 21px;
    }

    .login-modal__content p {
        margin-bottom: 22px;
        color: #64748b;
        font-size: 14px;
        line-height: 1.6;
    }

    .login-modal__close {
        width: 100%;
        padding: 12px 16px;
        border: none;
        border-radius: 10px;
        background: #2563eb;
        color: #ffffff;
        cursor: pointer;
        font-family: inherit;
        font-size: 14px;
        font-weight: 600;
    }

    .login-modal__close:hover {
        background: #1d4ed8;
    }
`;

document.head.appendChild(modalStyle);

const errorModal = document.createElement("div");
errorModal.className = "login-modal";
errorModal.setAttribute("aria-hidden", "true");
errorModal.innerHTML = `
    <div class="login-modal__content" role="alertdialog" aria-labelledby="modalTitle" aria-modal="true">
        <h2 id="modalTitle">Login Gagal</h2>
        <p>Username atau password yang Anda masukkan tidak sesuai.</p>
        <button class="login-modal__close" type="button">Coba Lagi</button>
    </div>
`;

document.body.appendChild(errorModal);

const closeModal = errorModal.querySelector(".login-modal__close");

function checkForm() {
    const isComplete = username.value.trim() !== "" &&
        password.value.trim() !== "" &&
        notRobot.checked;

    loginButton.disabled = !isComplete;
}

function showErrorModal() {
    errorModal.classList.add("is-open");
    errorModal.setAttribute("aria-hidden", "false");
}

function closeErrorModal() {
    errorModal.classList.remove("is-open");
    errorModal.setAttribute("aria-hidden", "true");
    password.focus();
}

function clearInputError() {
    username.classList.remove("input-error");
    password.classList.remove("input-error");
}

username.addEventListener("input", function () {
    checkForm();
    clearInputError();
});

password.addEventListener("input", function () {
    checkForm();
    clearInputError();
});

notRobot.addEventListener("change", checkForm);

closeModal.onclick = closeErrorModal;

errorModal.addEventListener("click", function (event) {
    if (event.target === errorModal) {
        closeErrorModal();
    }
});

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const isValid = username.value.trim() === account.username &&
        password.value === account.password;

    if (isValid) {
        window.location.href = "beranda.html";
        return;
    }

    username.classList.add("input-error");
    password.classList.add("input-error");
    showErrorModal();
});
