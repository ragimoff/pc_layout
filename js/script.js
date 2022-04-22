const contents = document.querySelectorAll('.program-line__content');


contents.forEach((element) => {
	const title = element.querySelector('.program-line__title');
	const description = element.querySelector('.program-line__descr');

	title.addEventListener('click', () => {
		description.classList.toggle('active')
	})
})