// Login demo DesaBaca: kredensial tetap, modal status, lalu redirect ke beranda.
const CREDENTIALS = { email: "atmin@atmin.com", password: "password" };
const REDIRECT_URL = "../public/beranda.html";

const form = document.getElementById("login-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("toggle-password");
const errorModal = document.getElementById("modal-error");
const successModal = document.getElementById("modal-success");
const progressBar = document.getElementById("redirect-progress");

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const redirectDelay = reduceMotion ? 600 : 1400;

const iconShow = togglePassword.querySelector("[data-icon-show]");
const iconHide = togglePassword.querySelector("[data-icon-hide]");

togglePassword.addEventListener("click", () => {
  const reveal = passwordInput.type === "password";

  passwordInput.type = reveal ? "text" : "password";
  togglePassword.setAttribute("aria-pressed", String(reveal));
  togglePassword.setAttribute(
    "aria-label",
    reveal ? "Sembunyikan kata sandi" : "Tampilkan kata sandi",
  );

  iconShow.classList.toggle("hidden", reveal);
  iconHide.classList.toggle("hidden", !reveal);

  passwordInput.focus({ preventScroll: true });
});

errorModal.querySelector("[data-close]").addEventListener("click", () => {
  errorModal.close();
  passwordInput.focus();
  passwordInput.select();
});

// Modal sukses tidak boleh ditutup sebelum redirect selesai.
successModal.addEventListener("cancel", (event) => event.preventDefault());

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = emailInput.value.trim().toLowerCase();
  const valid =
    email === CREDENTIALS.email && passwordInput.value === CREDENTIALS.password;

  if (!valid) {
    errorModal.showModal();
    return;
  }

  form
    .querySelectorAll("input, button")
    .forEach((element) => (element.disabled = true));

  successModal.showModal();

  if (!reduceMotion) {
    requestAnimationFrame(() => {
      progressBar.style.transitionDuration = `${redirectDelay}ms`;
      progressBar.style.width = "100%";
    });
  }

  window.setTimeout(() => {
    window.location.href = REDIRECT_URL;
  }, redirectDelay);
});
