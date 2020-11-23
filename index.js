const editButtonNode = document.querySelector('.profile__edit-button');
const popupNode = document.querySelector('.popup');
const popupCloseButtonNode = document.querySelector('.popup__close-button');

editButtonNode.addEventListener('click', handleEditButtonClick);


function handleEditButtonClick() {
  popupNode.classList.add('popup_visible');
}

popupCloseButtonNode.addEventListener('click', handleCloseButtonClick)

function handleCloseButtonClick() {
  popupNode.classList.remove('popup_visible');
}