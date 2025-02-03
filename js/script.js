function openTab(tabName) {
  if (tabName === "tarif") {
    window.location.href = "tarif.html"; 
  } else if (tabName === "aide") {
    window.location.href = "aide.html"; 
  } else if (tabName === "se connecter") {
    window.location.href = "se connecter.html"; 
  } else if (tabName === "infos") {
    window.location.href = "infos.html"; 
  }
}

    // Fonction pour ouvrir un onglet
function openTab(tabId) {
  var tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(function(tab) {
    tab.style.display = 'none'; // Masquer tous les onglets
  });

  var activeTab = document.getElementById(tabId);
  if (activeTab) {
    activeTab.style.display = 'block'; // Afficher l'onglet actif
  }
}

// Activer l'onglet "Infos" par défaut lorsque le document est prêt
document.addEventListener('DOMContentLoaded', function() {
  openTab('infos');
});

// Changer de mode (sombre/claire)
document.getElementById("toggleMode").addEventListener("click", () => {
  const body = document.body;
  const isDarkMode = body.classList.toggle("dark-mode");
  document.getElementById("toggleMode").textContent = isDarkMode
    ? "Activer le mode clair"
    : "Activer le mode sombre";
});

// Validation du formulaire d'inscription
document.getElementById("registrationForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const pseudo = document.getElementById("pseudo").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const question = document.getElementById("question").value;

  let isValid = true;

  // Réinitialiser les erreurs
  document.querySelectorAll(".error").forEach((error) => (error.textContent = ""));

  // Validation des champs
  if (pseudo.length < 3) {
    document.getElementById("pseudoError").textContent = "Le pseudo doit contenir au moins 3 caractères.";
    isValid = false;
  }

  if (!email.includes("@")) {
    document.getElementById("emailError").textContent = "Veuillez saisir une adresse email valide.";
    isValid = false;
  }

  if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Le mot de passe doit contenir au moins 6 caractères.";
    isValid = false;
  }

  if (password !== confirmPassword) {
    document.getElementById("confirmPasswordError").textContent = "Les mots de passe ne correspondent pas.";
    isValid = false;
  }

  if (!question) {
    document.getElementById("questionError").textContent = "Veuillez sélectionner une option.";
    isValid = false;
  }

  if (isValid) {
    document.getElementById("formMessage").textContent = "Inscription réussie !";
  }
});

// Gérer le bouton de téléchargement de fichier
document.getElementById("uploadBtn").addEventListener("click", function () {
  document.getElementById("fileInput").click();
});

document.getElementById("fileInput").addEventListener("change", function () {
  if (this.files.length > 0) {
    alert("Fichier sélectionné : " + this.files[0].name);
  }
});
