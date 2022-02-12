"use strict";

const list = [
  { name: "Practice guitar", isChecked: false },
  { name: "Buy groceries", isChecked: false },
  { name: "Exercise", isChecked: false },
  { name: "Hire Jake Smiley", isChecked: true },
  { name: "Dinner with in-laws", isChecked: false },
];

const inputEl = document.querySelector(".input--new-task");
const listEl = document.querySelector(".list");
const newTaskBtn = document.querySelector(".btn--new-task");
const deleteBtn = document.querySelector(".btn--delete");
const clearBtn = document.querySelector(".btn--clear");

newTaskBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const task = inputEl.value;
  if (task) {
    list.push({ name: `${task}` });
    updateListDisplay();
    inputEl.value = "";
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  }
});

const updateListDisplay = function () {
  listEl.innerHTML = "";
  list.forEach((item) => {
    const complete = item.isChecked ? "complete" : "";
    const HTML = `
    <li data-name="${item.name}"class="list-item">
      <div class="checkbox-container">
        <div class="checkbox ${complete}">
          <ion-icon class="check ${complete}" name="checkmark-outline"></ion-icon></div>
        </div>
      <div class="item-name ${complete}">${item.name}</div>
    
      <button class="btn btn--edit ${complete}">
        <ion-icon class="icon--edit" name="create-outline"></ion-icon>
      </button>
    
      <button class="btn btn--delete ${complete}">
        <ion-icon class="icon--delete" name="close-outline"></ion-icon>
      </button>
    </li>
    `;

    listEl.insertAdjacentHTML("beforeend", HTML);
  });
};

listEl.addEventListener("click", function (e) {
  // console.log(e.target.closest(".item-name") || e.target.closest(".checkbox"));

  handleDelete(e);
  handleEdit(e);
  handleCheckOff(e);
});

clearBtn.addEventListener("click", function () {
  list.length = 0;
  updateListDisplay();
});

const handleDelete = function (e) {
  if (
    e.target.classList.contains("icon--delete") ||
    e.target.classList.contains("btn--delete")
  ) {
    // Remove list item object
    list.splice(
      list.indexOf(
        list.find(
          (listItem) =>
            listItem.name === e.target.closest(".list-item").dataset.name
        )
      ),
      1
    );

    updateListDisplay();
  }
};

const handleEdit = function (e) {
  if (
    e.target.classList.contains("icon--edit") ||
    e.target.classList.contains("btn--edit")
  ) {
    e.target.closest(".list-item").querySelector(".item-name").textContent = "";
    const HTML = `
    <input class="input input--edit-task" type="text" />
    <button class="btn--edit-task">
        Done
    </button>
    `;
    e.target
      .closest(".list-item")
      .querySelector(".item-name")
      .insertAdjacentHTML("afterbegin", HTML);
    e.target
      .closest(".list-item")
      .querySelector(".btn--edit")
      .classList.add("editing");
    e.target
      .closest(".list-item")
      .querySelector(".item-name")
      .classList.add("editing");
    e.target.closest(".list-item").querySelector(".input--edit-task").value =
      e.target.closest(".list-item").dataset.name;
  }
};

const handleCheckOff = function (e) {
  if (
    e.target.classList.contains("item-name") ||
    e.target.classList.contains("checkbox") ||
    e.target.classList.contains("check") ||
    e.target.classList.contains("checkbox-container")
  ) {
    const currentItem = e.target.closest(".list-item");
    const currentObject = list.find(
      (listItem) => listItem.name === currentItem.dataset.name
    );
    currentObject.isChecked = !currentObject.isChecked;
    toggleComplete([
      ...currentItem.children,
      currentItem.querySelector(".check"),
    ]);
  }
};

const toggleComplete = function (elements) {
  elements.forEach((element) => element.classList.toggle("complete"));
};

updateListDisplay();
