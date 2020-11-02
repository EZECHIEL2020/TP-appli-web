const name = document.getElementById('nom');
const prenom = document.getElementById('prenom');
const date = document.getElementById('date');
const adresse = document.getElementById('adresse');
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form'); 
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) =>{

	let message = []

	if (nom.value== '' || nom.value ==null){
		message.push('nom est exiges')
	}
	if (nom.value== '' || prenom.value ==null){
		message.push('prenom est exiges')
	}
	if (date.value== '' || date.value ==null){
		message.push('date est exiges')
	}
	if (adresse.value== '' || adresse.value ==null){
		message.push('adresse est exiges')
	}

	if (password.value.length <= 6) {
		messages.push('Password doit contenir moin de 5 caracteres ')
	}


	if(message.length > 0){
		e.preventDefault()
		errorElement.innerText = messages.join(',')
	}
}) 






