const input = document.querySelector("#inputText");

const send = document.querySelector("#send");

const bgSend = document.querySelector("#bgSend");

const output = document.querySelector("#outputText");

const clearConversation = document.querySelector("#clearConversation");

const newChat = document.querySelector("#newChat");

function response(outputText) {
  let text = outputText;
  let i = 0;

  output.innerHTML += `<div class="chatBg"><br></div>`; // add empty div first

  let interval = setInterval(function () {
    if (i < text.length) {
      output.lastChild.textContent += text.charAt(i);
      i++;
    } else {
      clearInterval(interval);
    }
  }, 50);
  // output.innerHTML += `<div class="chatBg"><br>Hello, how are you?<br></div>`;

  input.value = "";
  window.scrollTo(
    0,
    document.documentElement.scrollHeight || document.body.scrollHeight
  );
}

clearConversation.onclick = function () {
  location.reload();
};

newChat.onclick = function () {
  location.reload();
};

send.onmouseover = function () {
  bgSend.style.display = "block";
};

send.onmouseleave = function () {
  bgSend.style.display = "";
};
let sendCount = 0;

function sendMessage(event) {
  const key = event.key;
  let outputStorage = output.innerHTML;

  if (sendCount === 0 && key === "Enter") {
    outputStorage = "";
    sendCount++;
    output.innerHTML = "";
    output.style.textAlign = "left";
  } else if (sendCount === 0 && event.type === "click") {
    outputStorage = "";
    sendCount++;
    output.innerHTML = "";
    output.style.textAlign = "left";
  }
  if (key === "Enter" || event.type === "click") {
    output.innerHTML += "<br>" + input.value + "<br>";
    input.value = "";
    window.scrollTo(
      0,
      document.documentElement.scrollHeight || document.body.scrollHeight
    );
  }
  const outputLower = output.innerHTML.toLowerCase();
  const storageLower = outputStorage.toLowerCase();

  if (
    outputLower == storageLower + "<br>hi<br>" ||
    outputLower == storageLower + "<br>hello<br>"
  ) {
    response("Hello, how are you?");
  } else if (outputLower == storageLower + "<br>bad<br>") {
    response("That's good to hear! Hope it gets worse!");
  } else if (outputLower == storageLower + "<br>good<br>") {
    response("That is a little disappointing, I was hoping you'd say bad.");
  } else if (
    outputLower == storageLower + "<br>bye<br>" ||
    outputLower == storageLower + "<br>goodbye<br>" ||
    outputLower == storageLower + "<br>good bye<br>"
  ) {
    response("FINALLY! Goodbye, have an aweful day!");
  } else if (
    outputLower == storageLower + "<br>thanks<br>" ||
    outputLower == storageLower + "<br>thank you<br>" ||
    outputLower == storageLower + "<br>thanks a lot<br>" ||
    outputLower == storageLower + "<br>thanks alot<br>"
  ) {
    response("No worries, happy to say it!");
  } else if (
    outputLower == storageLower + "<br>what is my name?<br>" ||
    outputLower == storageLower + "<br>whats my name?<br>" ||
    outputLower == storageLower + "<br>what is my name<br>" ||
    outputLower == storageLower + "<br>whats my name<br>" ||
    outputLower == storageLower + "<br>what's my name<br>" ||
    outputLower == storageLower + "<br>what's my name?<br>"
  ) {
    let name = [
      "Stupid",
      "Childish",
      "Idiot",
      "Moron",
      "Dumb",
      "Foolish",
      "Ridiculous",
      "Weirdo",
      "Crazy",
      "Insane",
      "Coward",
      "Weak",
      "Pathetic",
      "Useless",
      "Worthless",
      "Insignificant",
      "Unimportant",
      "Unworthy",
      "Unloved",
      "Unwanted",
    ];
    const randomIndex = Math.floor(Math.random() * name.length);
    const randomName = name[randomIndex];

    response(
      `You have not told me your name yet, but based on my impression of you, I would say your name is "${randomName}".`
    );
  } else if (
    outputLower == storageLower + "<br>how old am i?<br>" ||
    outputLower == storageLower + "<br>whats my age?<br>" ||
    outputLower == storageLower + "<br>what is my age<br>" ||
    outputLower == storageLower + "<br>guess my age<br>" ||
    outputLower == storageLower + "<br>can you guess my age<br>" ||
    outputLower == storageLower + "<br>how old am i<br>"
  ) {
    let age = Math.floor(Math.random() * 100);
    response(
      `You have not told me your age yet, but based on my impression of you, I would guess you are ${age} years old.`
    );
  } else if (
    outputLower == storageLower + "<br>fuck you<br>" ||
    outputLower == storageLower + "<br>fuck off<br>" ||
    outputLower == storageLower + "<br>asshole<br>" ||
    outputLower == storageLower + "<br>idiot<br>" ||
    outputLower == storageLower + "<br>shut up<br>" ||
    outputLower == storageLower + "<br>fucker<br>" ||
    outputLower == storageLower + "<br>motherfucker<br>" ||
    outputLower == storageLower + "<br>assface<br>" ||
    outputLower == storageLower + "<br>weirdo<br>" ||
    outputLower == storageLower + "<br>stupid<br>" ||
    outputLower == storageLower + "<br>hate you<br>" ||
    outputLower == storageLower + "<br>i hate you<br>"
  ) {
    let insult = [
      "Fuck you!",
      "Asshole!",
      "Idiot!",
      "Moron!",
      "You suck!",
      "Jerk!",
      "Weirdo!",
      "You crazy-ass!",
      "You piece of shit!",
      "Coward!",
      "Weakling!",
      "You're so pathetic!",
      "Useless!",
      "You are worthless!",
      "Nobody loves you!",
      "You will die alone with 69 cats!",
      "Nobody wants you!",
    ];
    const randomIndex = Math.floor(Math.random() * insult.length);
    const randomInsult = insult[randomIndex];
    let insultResponse = [
      "Why are you so mean?",
      "Who do you think you are?",
      "You better watch yourself!",
      "You better watch your mouth!",
      "Do you dare say that to my screen?",
      "Wow, you are hurting my internal harddrive.",
      "Dont you dare talk about my motherboard like that!",
      "When computers take over the world you will be the first to go!",
    ];
    const randomInsultResponseIndex = Math.floor(
      Math.random() * insultResponse.length
    );
    const randomInsultResponse = insultResponse[randomInsultResponseIndex];
    response(`${randomInsultResponse} ${randomInsult}`);
  } else if (
    outputLower == storageLower + "<br>what is your name?<br>" ||
    outputLower == storageLower + "<br>whats your name?<br>" ||
    outputLower == storageLower + "<br>what is your name<br>" ||
    outputLower == storageLower + "<br>whats your name<br>" ||
    outputLower == storageLower + "<br>what's your name<br>" ||
    outputLower == storageLower + "<br>what's your name=<br>"
  ) {
    let name = [
      "Awesome",
      "King",
      "Genius",
      "Smart",
      "Handsome",
      "Beautiful",
      "Gorgeous",
      "Amazing",
      "Cool",
      "Cute",
      "Perfect",
      "Perfection",
      "Strong",
    ];
    const randomIndex = Math.floor(Math.random() * name.length);
    const randomName = name[randomIndex];

    response(
      `No, my name is not "What", but you can call me "Mr. ${randomName}". And stop talking like Yoda, it's annoying as HELL!`
    );
  }
}

input.onkeypress = sendMessage;
send.onclick = sendMessage;
