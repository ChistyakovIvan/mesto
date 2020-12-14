const editButtonNode = document.querySelector(".profile__edit-button");
const popupNode = document.getElementById("profile__editor");
const formNode = document.querySelector(".popup__form");
const popupCloseButtonNode = document.getElementById(
	"profile__editor_close-button"
);
const profileNameNode = document.querySelector(".profile__name");
const profileDescriptionNode = document.querySelector(".profile__description");
let popupNameInput = document.querySelector(".popup__form-item_value_name");
let popupDescriptionInput = document.querySelector(
	".popup__form-item_value_description"
);
const popupPlaceNameNode = document.querySelector(
	".popup__form-item_value_place-name"
);
const popupPlaceUrlNode = document.querySelector(
	".popup__form-item_value_place-url"
);
const addButtonNode = document.querySelector(".element__add-button");
const popupPlaceEditorNode = document.getElementById("place__editor");
const placeEditorCloseButtonNode = document.getElementById(
	"place__editor_close-button"
);

function handleEditButtonClick() {
	popupNode.classList.add("popup_visible");
	popupNameInput.value = profileNameNode.textContent;
	popupDescriptionInput.value = profileDescriptionNode.textContent;
}

editButtonNode.addEventListener("click", handleEditButtonClick);

function handleCloseButtonClick() {
	popupNode.classList.remove("popup_visible");
}

popupCloseButtonNode.addEventListener("click", handleCloseButtonClick);

function handleFormSubmit(event) {
	event.preventDefault();
	profileNameNode.textContent = popupNameInput.value;
	profileDescriptionNode.textContent = popupDescriptionInput.value;
	handleCloseButtonClick();
}

formNode.addEventListener("submit", handleFormSubmit);

addButtonNode.addEventListener("click", handleAddButtonClick);

function handleAddButtonClick() {
	popupPlaceEditorNode.classList.add("popup_visible");
}

placeEditorCloseButtonNode.addEventListener(
	"click",
	handlePlaceEditorCloseButtonClick
);

function handlePlaceEditorCloseButtonClick() {
	popupPlaceEditorNode.classList.remove("popup_visible");
}

/* const initialCards = [
	{
		name: "Архыз",
		link:
			"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
	},
	{
		name: "Челябинская область",
		link:
			"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
	},
	{
		name: "Иваново",
		link:
			"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
	},
	{
		name: "Камчатка",
		link:
			"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
	},
	{
		name: "Холмогорский район",
		link:
			"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
	},
	{
		name: "Байкал",
		link:
			"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
	},
]; */
