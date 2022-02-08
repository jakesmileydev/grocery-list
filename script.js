"use strict";

const list = [];
let listCount = 0;

const inputEl = document.querySelector(".list-input");
const listEl = document.querySelector(".list");

const addBTN = document.querySelector(".add-btn");
const deleteBTNS = document.querySelectorAll(".delete-btn");

const checkBTN = document.querySelector(".check-btn");

addBTN.addEventListener("click", function (e) {
  e.preventDefault();
  if (inputEl.value) {
    listCount++;
    const listItem = document.createElement("div");
    listItem.classList.add("item");
    listItem.classList.add(`item--${listCount}`);
    const HTML = `
    <div class="item-name">${inputEl.value}</div>
    <div class="btns">
      <button class="check-btn">✅</button>
      <button class="delete-btn delete-btn--${listCount}">❌</button>
    </div>
      `;
    listItem.innerHTML = HTML;
    listEl.append(listItem);
    deleteBTNS.forEach(function (btn) {
      btn.addEventListener("click", function () {
        console.log("ok");
      });
    });
  }
});
