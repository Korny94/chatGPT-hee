const input = document.querySelector("#inputText");

const send = document.querySelector("#send");

const bgSend = document.querySelector("#bgSend");

const suggestions = document.querySelector("#suggestions");

const clearConversation = document.querySelector("#clearConversation");

clearConversation.onclick = function () {
  location.reload();
};

location.onreload = function () {
  window.scrollTo(
    0,
    document.documentElement.scrollHeight || document.body.scrollHeight
  );
};

send.onclick = function () {
  window.scrollTo(
    0,
    document.documentElement.scrollHeight || document.body.scrollHeight
  );
};

send.onmouseover = function () {
  bgSend.style.display = "block";
};

send.onmouseleave = function () {
  bgSend.style.display = "";
};

function sendMessage(event) {
  const key = event.key;
  if (key === "Enter" || event.type === "click") {
    suggestions.innerHTML = "";
    input.value = "";
  }
}

input.onkeypress = sendMessage;
send.onclick = sendMessage;
