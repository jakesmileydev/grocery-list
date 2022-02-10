"use strict";

const list = [];

const inputEl = document.querySelector(".list-input");
const listEl = document.querySelector(".list");

const addBTN = document.querySelector(".add-btn");
const deleteBTNS = document.querySelectorAll(".delete-btn");

const checkBTN = document.querySelector(".check-btn");

addBTN.addEventListener("click", function (e) {
  e.preventDefault();
  if (inputEl.value) {
    const HTML = `
    <li class="list-item">
          <div class="checkbox"></div>

          <div class="item-name">${input.value}</div>

          <button class="btn btn--edit">
            <ion-icon class="item-icon" name="create-outline"></ion-icon>
          </button>

          <button class="btn btn--delete">
            <ion-icon class="item-icon" name="close-circle-outline"></ion-icon>
          </button>
        </li>
      `;

    inputEl.value = "";
    listEl.insertAdjacentHTML("beforeend", HTML);
  }
});

listEl.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove();
  }
});
