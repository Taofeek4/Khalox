const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("navLinks");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        nav.style.display = nav.style.display === "flex" ? "none" : "flex";
        nav.style.position = "absolute";
        nav.style.top = "76px";
        nav.style.left = "0";
        nav.style.right = "0";
        nav.style.padding = "20px";
        nav.style.background = "#fff";
        nav.style.flexDirection = "column";
        nav.style.alignItems = "stretch";
        nav.style.boxShadow = "0 12px 30px #0001";
    });
}

const login = document.getElementById("loginForm");

if (login) {
    login.addEventListener("submit", e => {
        e.preventDefault();
        alert("Demo login successful. Opening dashboard.");
        location.href = "dashboard.html";
    });
}

const reg = document.getElementById("registerForm");

if (reg) {
    reg.addEventListener("submit", e => {
        e.preventDefault();
        alert("Demo account created. Opening dashboard.");
        location.href = "dashboard.html";
    });
}

function demo(service) {
    alert(
        service +
        " is currently in demo mode. Real transactions will be connected through the Khalox backend/API."
    );
}

function copyRef() {
    navigator.clipboard?.writeText("KHALOX-DEMO");
    alert("Referral code copied: KHALOX-DEMO");
}
