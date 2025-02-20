// Ajoute un écouteur d'événements sur le formulaire pour intercepter la soumission
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault() // Empêche le rechargement de la page lors de la soumission du formulaire
    
    // Récupération des valeurs des champs du formulaire
    let nom = document.getElementById("nom").value.trim()
    let prenoms = document.getElementById("prenoms").value.trim()
    let dob = document.getElementById("dob").value
    let email = document.getElementById("email").value.trim()
    let telephone = document.getElementById("telephone").value.trim()
    let motivation = document.getElementById("motivation").value.trim()
    
    // Vérification de l'âge minimum requis (18 ans)
    let birthDate = new Date(dob)
    let age = new Date().getFullYear() - birthDate.getFullYear()
    if (age < 18) {
        alert("Vous devez avoir au moins 18 ans pour vous inscrire.")
        return // Arrête l'exécution si l'âge n'est pas suffisant
    }
    
    // Validation du numéro de téléphone : doit commencer par 01 et contenir exactement 10 chiffres
    if (!/^01\d{8}$/.test(telephone)) {
        alert("Le numéro de téléphone doit commencer par 01 et contenir exactement 10 chiffres.")
        return // Arrête l'exécution si le numéro de téléphone est invalide
    }
    
    // Vérification de la longueur du champ "motivation" (entre 1000 et 2500 caractères)
    if (motivation.length < 1000 || motivation.length > 2500) {
        alert("La motivation doit contenir entre 1000 et 2500 caractères.")
        return // Arrête l'exécution si le texte ne respecte pas la contrainte
    }
    
    // Affichage des informations saisies dans la section de confirmation
    document.getElementById("confNom").textContent = nom
    document.getElementById("confPrenoms").textContent = prenoms
    document.getElementById("confDob").textContent = dob
    document.getElementById("confEmail").textContent = email
    document.getElementById("confTelephone").textContent = telephone
    document.getElementById("confMotivation").textContent = motivation
    
    // Rend la section de confirmation visible
    document.getElementById("confirmation").classList.remove("hidden")
    
    // Message de succès
    alert("Inscription réussie !")
});
