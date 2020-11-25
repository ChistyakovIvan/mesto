const editButtonNode = document.querySelector(".profile__edit-button");
const popupNode = document.querySelector(".popup");
const formNode = document.querySelector(".popup__form");
const popupCloseButtonNode = document.querySelector(".popup__close-button");
const profileNameNode = document.querySelector(".profile__name");
const profileDescriptionNode = document.querySelector(".profile__description");
let popupNameInput = document.querySelector(".popup__input_name");
let popupDescriptionInput = document.querySelector(".popup__input_description");

editButtonNode.addEventListener("click", handleEditButtonClick);

function handleEditButtonClick() {
	popupNode.classList.add("popup_visible");
}

popupCloseButtonNode.addEventListener("click", handleCloseButtonClick);

function handleCloseButtonClick() {
	popupNode.classList.remove("popup_visible");
}

popupNameInput.value = profileNameNode.textContent;
popupDescriptionInput.value = profileDescriptionNode.textContent;

formNode.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
	event.preventDefault();
	profileNameNode.textContent = popupNameInput.value;
	profileDescriptionNode.textContent = popupDescriptionInput.value;
	popupNode.classList.remove("popup_visible");
}

const likeButtonNode = document.querySelector(".element__heart-icon");
console.log(likeButtonNode);

likeButtonNode.addEventListener("click", handleLikeButtonClick);

/* Требуется ли в на данном этапе добавление forEach, чтобы лайк нажимался для всех элементов? */

function handleLikeButtonClick() {
	likeButtonNode.classList.toggle("element__heart-icon_active");
}

