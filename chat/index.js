const ozodbek = document.querySelector("#ozodbek");
const khayrulla = document.querySelector("#khayrulla");
const content = document.querySelector("#content");
const input = document.querySelector("#input");
const btn = document.querySelector("#btn");

const arrMessages = [];
let activeId = "khayrulla";

btn.addEventListener("click", sendMessage.bind(undefined));
ozodbek.addEventListener(
  "click",
  getMessageByFilter.bind(undefined, "ozodbek")
);
khayrulla.addEventListener(
  "click",
  getMessageByFilter.bind(undefined, "khayrulla")
);

function sendMessage(e) {
  e.preventDefault();

  if (input.value) {
    console.log("hello3");

    arrMessages.push({
      from: "khayrulla2",
      to: activeId,
      msg: input.value,
    });
    getMessageByFilter(activeId);
    input.value = '';
  }
}

function getMessageByFilter(id) {
  activeId = id;
  let msgHtml = "";
  arrMessages
    .filter((item) => item.to === id)
    .forEach((item) => {
      msgHtml += `
        <p>
        ${item.msg}
        </p>
    `;
    });

  content.innerHTML = msgHtml;
}
