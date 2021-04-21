let slideImages = document.querySelectorAll('.slideImages>img');
let imgDisc = document.querySelectorAll('.imgDiscription p');
let rBut = document.getElementsByClassName('butToRight')[0];
let lBut = document.getElementsByClassName('butToLeft')[0];

let sequence = [0,1,2,3,4]

let moveSlides = () => {
	for(let i = 0; i < slideImages.length; i++){
	slideImages[i].classList.remove(slideImages[i].classList[0]);
	slideImages[i].classList.add('slideImg'+sequence[i]);
	imgDisc[i].style.display = 'none';
}
}


rBut.addEventListener('click',() => {
	let a = sequence[0];
	sequence.splice(0,1);
	sequence.push(a);
	moveSlides();
	imgDisc[4 - sequence[2]].style.display = 'block';
})

lBut.addEventListener('click',() => {
	let a = sequence[sequence.length - 1];
	sequence.splice(sequence.length - 1,1);
	sequence.unshift(a);
	moveSlides();
	imgDisc[4 - sequence[2]].style.display = 'block';
})