"use strict";

const list = [];

const inputEl = document.querySelector(".input--new-task");
const listEl = document.querySelector(".list");

const newTaskBtn = document.querySelector(".btn--new-task");
const deleteBtn = document.querySelector(".btn--delete");
const clearBtn = document.querySelector(".btn--clear");
const checkBTN = document.querySelector(".check-btn");

newTaskBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const task = inputEl.value;
  if (task) {
    list.push(task);
    updateListDisplay();
    inputEl.value = "";
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  }
});

const updateListDisplay = function () {
  listEl.innerHTML = "";
  list.forEach((item) => {
    const HTML = `
    <li data-name="${item}"class="list-item">
    <div class="checkbox"></div>
    
    <div class="item-name">${item}</div>
    
    <button class="btn btn--edit">
    <ion-icon class="item-icon" name="create-outline"></ion-icon>
    </button>
    
    <button class="btn btn--delete">
    <ion-icon class="item-icon" name="trash-outline"></ion-icon>
    </button>
    </li>
    `;

    listEl.insertAdjacentHTML("beforeend", HTML);
  });
};

listEl.addEventListener("click", function (e) {
  console.log(e.target.closest(".item-name") || e.target.closest(".checkbox"));

  //Guard clause
  if (!e.target.closest("button")) return;

  if (e.target.closest("button").classList.contains("btn--delete")) {
    list.splice(list.indexOf(e.target.closest(".list-item").dataset.name), 1);
    updateListDisplay();
  }
  if (e.target.closest("button").classList.contains("btn--edit")) {
    console.log("edit button");
  }
});

clearBtn.addEventListener("click", function () {
  list.length = 0;
  updateListDisplay();
});
