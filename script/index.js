const editButtonNode = document.querySelector(".profile__edit-button");
const profileEditorNode = document.getElementById("profile-editor");
const popup = document.querySelectorAll(".popup");
const imagePopupNode = document.getElementById("image-viewer");
const formNode = document.querySelector(".popup__form-item");
const popupCloseButtonNode = document.getElementById(
	"profile__editor_close-button"
);
const profileNameNode = document.querySelector(".profile__name");
const profileDescriptionNode = document.querySelector(".profile__description");
const popupNameInput = document.querySelector(".popup__form-item_value_name");
const popupDescriptionInput = document.querySelector(
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

const popUpProfileSubmitButtonNode = document.querySelector(
	".popup__profile-submit"
);

const closeButtonNodes = document.querySelectorAll(".popup__close-button");
const openButtonNodes = document.querySelectorAll(".popup__open-button");

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

function createElement(element) {
	const newElement = templateElement.content.cloneNode(true);
	const elementTitle = newElement.querySelector(".element__title");
	const elementImage = newElement.querySelector(".element__image");
	elementTitle.textContent = element.name;
	elementImage.src = element.link;
	elementImage.alt = element.name;

	newElement
		.querySelector(".element__heart-icon")
		.addEventListener("click", addLike);
	newElement
		.querySelector(".element__remove-button")
		.addEventListener("click", deleteElement);
	newElement
		.querySelector(".element__image")
		.addEventListener("click", openImagePopup);
	return newElement;
}

function addElement(event) {
	event.preventDefault();
	const placeName = popupPlaceNameNode.value;
	const placeUrl = popupPlaceUrlNode.value;
	const newPlace = createElement({ name: placeName, link: placeUrl });
	placesContainerElement.prepend(newPlace);
	popupPlaceNameNode.value = "";
	popupPlaceUrlNode.value = "";
	closePopUp(event);
}

createButtonNode.addEventListener("click", addElement);

document
	.querySelector("#element__editor")
	.addEventListener("submit", addElement);

function addLike(event) {
	event.target.classList.toggle("element__heart-icon_active");
}

function deleteElement(event) {
	event.target.closest(".element").remove();
}

document.addEventListener("click", (event) => {
	if (event.target.classList.contains("profile__edit-button")) {
		popupNameInput.value = profileNameNode.textContent;
		popupDescriptionInput.value = profileDescriptionNode.textContent;
		openPopUp(profileEditorNode);
	}
});

document.addEventListener("click", (event) => {
	if (event.target.classList.contains("profile__add-button")) {
		openPopUp(popupPlaceEditorNode);
	}
});

function openPopUp(popup) {
	popup.classList.add("popup_visible");
}

document.addEventListener("click", (event) => {
	if (event.target.classList.contains("popup__close-button")) {
		closePopUp(event);
	}
});

function closePopUp(event) {
	event.target.closest(".popup").classList.remove("popup_visible");
}

function handleEditButtonClick() {
	openPopUp(profileEditorNode);
	popupNameInput.value = profileNameNode.textContent;
	popupDescriptionInput.value = profileDescriptionNode.textContent;
}

editButtonNode.addEventListener("click", handleEditButtonClick);

addButtonNode.addEventListener("click", handleAddButtonClick);

function handleAddButtonClick() {
	openPopUp(popupPlaceEditorNode);
}

function openImagePopup(e) {
	openPopUp(imagePopupNode);
	const image = document.querySelector("#popup__window_image-viewer");
	image.src = e.target.src;
	const imageSubtitle = document.querySelector("#popup__image-subtitle");
	imageSubtitle.textContent = e.target.alt;
}

popUpProfileSubmitButtonNode.addEventListener("click", handleFormSubmit);

function handleFormSubmit(event) {
	event.preventDefault();
	profileNameNode.textContent = popupNameInput.value;
	profileDescriptionNode.textContent = popupDescriptionInput.value;
	closePopUp(event);
}

function renderList() {
	const elements = initialCards.map(createElement);
	placesContainerElement.append(...elements);
}

function handleOverlayClick(event) {
	closePopUp(event);
}

document.addEventListener("click", (event) => {
	if (event.target.classList.contains("popup")) {
		handleOverlayClick(event);
	}
});

renderList();
