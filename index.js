const editButtonNode = document.querySelector(".profile__edit-button");
const popupNode = document.querySelector(".popup");
const formNode = document.querySelector(".popup__form");
const popupCloseButtonNode = document.querySelector(".popup__close-button");
const profileNameNode = document.querySelector(".profile__name");
const profileDescriptionNode = document.querySelector(".profile__description");
let popupNameInput = document.querySelector(".popup__form-item_value_name");
let popupDescriptionInput = document.querySelector(
	".popup__form-item_value_description"
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
	popupNode.classList.remove("popup_visible");
}

formNode.addEventListener("submit", handleFormSubmit);
