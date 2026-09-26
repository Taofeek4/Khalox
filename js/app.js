// ================================
// KHALOX DEMO WALLET SYSTEM
// ================================

const DEFAULT_BALANCE = 125500;


// Get current wallet balance
function getBalance() {

    let balance = localStorage.getItem("khaloxBalance");

    if (balance === null) {

        balance = DEFAULT_BALANCE;

        localStorage.setItem(
            "khaloxBalance",
            balance
        );
    }

    return Number(balance);
}


// Save wallet balance
function saveBalance(balance) {

    localStorage.setItem(
        "khaloxBalance",
        balance
    );

}


// Format Nigerian Naira
function formatNaira(amount) {

    return "₦" + Number(amount).toLocaleString(
        "en-NG",
        {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }
    );

}


// Display balance anywhere on the page
function updateWalletBalance() {

    const balance = getBalance();

    const balanceElements =
        document.querySelectorAll(
            "[data-wallet-balance]"
        );

    balanceElements.forEach(element => {

        element.textContent =
            formatNaira(balance);

    });

}


// Spend from wallet
function spendFromWallet(amount, service = "Service") {

    const balance = getBalance();

    amount = Number(amount);


    if (!amount || amount <= 0) {

        return {
            success: false,
            message: "Invalid amount."
        };

    }


    if (amount > balance) {

        return {
            success: false,
            message: "Insufficient wallet balance."
        };

    }


    const newBalance =
        balance - amount;


    saveBalance(newBalance);

    updateWalletBalance();


    // Save transaction
    saveTransaction(
        service,
        amount
    );


    return {
        success: true,
        balance: newBalance
    };

}
// ================================
// TRANSACTION SYSTEM
// ================================

function getTransactions() {

    const transactions =
        localStorage.getItem("khaloxTransactions");

    if (!transactions) {

        return [];

    }

    return JSON.parse(transactions);

}


function saveTransaction(service, amount) {

    const transactions =
        getTransactions();


    const transaction = {

        id:
            "KX" +
            Date.now(),

        service:
            service,

        amount:
            Number(amount),

        status:
            "Successful",

        date:
            new Date().toLocaleString("en-NG")

    };


    transactions.unshift(transaction);


    localStorage.setItem(
        "khaloxTransactions",
        JSON.stringify(transactions)
    );

}

// ================================
// MOBILE NAVIGATION
// ================================

const menuBtn =
    document.getElementById("menuBtn");

const nav =
    document.getElementById("navLinks");


if (menuBtn && nav) {

    menuBtn.addEventListener(
        "click",
        () => {

            nav.style.display =
                nav.style.display === "flex"
                    ? "none"
                    : "flex";

            nav.style.position = "absolute";
            nav.style.top = "76px";
            nav.style.left = "0";
            nav.style.right = "0";
            nav.style.padding = "20px";
            nav.style.background = "#fff";
            nav.style.flexDirection = "column";
            nav.style.alignItems = "stretch";
            nav.style.boxShadow =
                "0 12px 30px #0001";

        }
    );

}


// ================================
// LOGIN
// ================================

const login =
    document.getElementById("loginForm");


if (login) {

    login.addEventListener(
        "submit",
        function(e) {

            e.preventDefault();

            alert(
                "Demo login successful. Opening dashboard."
            );

            location.href =
                "dashboard.html";

        }
    );

}


// ================================
// REGISTER
// ================================

const reg =
    document.getElementById("registerForm");


if (reg) {

    reg.addEventListener(
        "submit",
        function(e) {

            e.preventDefault();

            alert(
                "Demo account created. Opening dashboard."
            );

            location.href =
                "dashboard.html";

        }
    );

}


// ================================
// DEMO SERVICE
// ================================

function demo(service) {

    alert(
        service +
        " is currently in demo mode. " +
        "Real transactions will be connected " +
        "through the Khalox backend/API."
    );

}


// ================================
// REFERRAL
// ================================

function copyRef() {

    navigator.clipboard?.writeText(
        "KHALOX-DEMO"
    );

    alert(
        "Referral code copied: KHALOX-DEMO"
    );

}


// ================================
// RUN WHEN PAGE LOADS
// ================================

document.addEventListener(
    "DOMContentLoaded",
    updateWalletBalance
);
