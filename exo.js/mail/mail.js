function validerEmail(email) {
    const regex = /@/;
    return regex.test(email);
  }

function validerEtSoumettre() {
    const emailInput = document.getElementById("emailInput").value;
    if (validerEmail(emailInput)) {
      // Soumettre le formulaire ou effectuer d'autres actions
      message.innerHTML="<p>Formulaire soumis avec succès !</p>";
    } else {
      alert("Veuillez fournir une adresse e-mail valide.");
    }
  }