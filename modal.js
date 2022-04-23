const modalBtn = document.querySelector('.modal__button');
const modal = document.querySelector('.modal');
const courseBtn = document.querySelector('.course__button');

// Появление модального окна по кнопке "Оставить заявку"
modalBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
})

// Появление модального окна по кнопке "Заказать курс"
courseBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
})

// Закрытие модального окна по клику вне зоны модального окна
modal.addEventListener('click', (event) => {
	const modalContent = event.target.closest('.modal__inner');
	
	if (!modalContent) {
			modal.style.display = '';
	} 
})


// Кнопка закрытия модального окна

function modalBtnClose(){
	const modalContent = document.querySelector('.modal__inner');
	const modalClose = document.createElement('div')
	modalClose.classList.add('modal__close')
	modalClose.innerHTML  = 'X'

	modalContent.prepend(modalClose)

	modalContent.style.position = 'relative'

	modalClose.style.position = 'absolute'
	modalClose.style.fontSize = '30px'
	modalClose.style.top = '10px'
	modalClose.style.right = '20px'
	modalClose.style.cursor = 'pointer'

	modalClose.addEventListener('click', () => {
		modal.style.display = '';
	})
}

modalBtnClose()



