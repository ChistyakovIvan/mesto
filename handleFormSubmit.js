function handleFormSubmit(event) {
  event.preventDefault();
  const popupInputNode = event.currentTarget.querySelector(".popup__input");
  profileNameNode.textContent = popupInputNode.value;
}
