console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	//console.log('form submit');
	alert("The form has been submitted successfully!");
}

const handleMouseover = evt =>{
	alert("U's is smarts");
}


let form = document.querySelector('form#contact');
let img = document.querySelector('img');

form.addEventListener('submit', handleSubmit);
img.addEventListener('mouseover',handleMouseover);