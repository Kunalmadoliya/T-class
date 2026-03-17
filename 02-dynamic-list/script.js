const cta = document.getElementById("add-btn");
const input = document.getElementById("item-input");
const unList = document.getElementById("item-list");

cta.addEventListener("click", () => {
  const inputValue = input.value.trim();
  if (!inputValue) return;

  const list = document.createElement("li");

  const textSpan = document.createElement("span");
  textSpan.textContent = inputValue;

  const editBtn = document.createElement("button");
  editBtn.className = "edit-btn";
  editBtn.innerText = "Edit";

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.innerText = "Delete";

  editBtn.onclick = () => {
    const inputPlaceholder = document.createElement("input");
    inputPlaceholder.type = "text";
    inputPlaceholder.value = textSpan.textContent;

    list.replaceChild(inputPlaceholder, textSpan);

    inputPlaceholder.focus();

    inputPlaceholder.addEventListener("blur", () => {
      textSpan.textContent = inputPlaceholder.value;
      list.replaceChild(textSpan, inputPlaceholder);
    });
  };

  deleteBtn.onclick = () => {
    list.remove();
  };

  const div = document.createElement("div");
  div.append(editBtn, deleteBtn);


  list.append(textSpan , div);

  unList.append(list);
  inputValue.value = "";
});
