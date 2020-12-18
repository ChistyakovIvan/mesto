const editButtonNode = document.querySelector(".profile__edit-button");
const popupNode = document.getElementById("profile-editor");
const imagePopupNode = document.getElementById("image-viewer");
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
const addButtonNode = document.getElementById("element__add-button");
const popupPlaceEditorNode = document.getElementById("place-editor");
const placeEditorCloseButtonNode = document.getElementById(
	"place__editor_close-button"
);
const createButtonNode = document.getElementById(
	"popup__submit-button_place_elements"
);
const placesContainerElement = document.querySelector(".elements");
const templateElement = document.querySelector(".template");

const imageViewerCloseButtonNode = document.getElementById(
	"image-viewer_close-button"
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

const placeImageNodes = document.querySelectorAll(".element__image");

const initialCards = [
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
];

function renderList() {
	const elements = initialCards.map(createElement);
	placesContainerElement.append(...elements);
}

function createElement(element) {
	const newElement = templateElement.content.cloneNode(true);
	const elementTitle = newElement.querySelector(".element__title");
	const elementImage = newElement.querySelector(".element__image");
	elementTitle.textContent = element.name;
	elementImage.src = element.link;
	elementImage.alt = element.name;
	return newElement;
}

function handleCreateButtonClick() {
	createButtonNode.addEventListener("click", addElement);
	handleCloseButtonClick();
}

function addElement(event) {
	event.preventDefault();
	const placeName = popupPlaceNameNode.value;
	const placeUrl = popupPlaceUrlNode.value;
	const newPlace = createElement({ name: placeName, link: placeUrl });
	placesContainerElement.prepend(newPlace);
	popupPlaceNameNode.value = "";
	popupPlaceUrlNode.value = "";
}

const likeButtonNodes = document.querySelectorAll(".element__heart-icon");

document.addEventListener("click", (evt) => {
	if (evt.target.classList.contains("element__heart-icon")) {
		addLike(evt);
	}
});

function addLike(event) {
	const targetforLike = event.target.classList.toggle(
		"element__heart-icon_active"
	);
}

const removeButtonNodes = document.querySelectorAll(".element__remove-button");

document.addEventListener("click", (event) => {
	if (event.target.classList.contains("element__remove-button")) {
		deleteElement(event);
	}
});

function deleteElement(event) {
	const chosenElement = event.target.closest(".element");
	chosenElement.remove();
}

function openImageViewer(event) {
	imagePopupNode.classList.add("popup_visible");
	const image = document.querySelector("#popup__window_image-viewer");
	image.src = event.target.src;
}

imageViewerCloseButtonNode.addEventListener(
	"click",
	handleimageViewerCloseButtonClick
);

function handleimageViewerCloseButtonClick() {
	imagePopupNode.classList.remove("popup_visible");
}

document.addEventListener("click", (event) => {
	if (event.target.classList.contains("element__image")) {
		openImageViewer(event);
	}
});

document
	.querySelector("#element__editor")
	.addEventListener("submit", addElement);

renderList();
