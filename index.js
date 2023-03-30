const input = document.querySelector("#inputText");

const send = document.querySelector("#send");

const bgSend = document.querySelector("#bgSend");

const output = document.querySelector("#outputText");

const clearConversation = document.querySelector("#clearConversation");

const newChat = document.querySelector("#newChat");

const darkMode = document.querySelector("#darkMode");

const body = document.querySelector("body");

const suggestBg = document.querySelector("#outputText");

const darkModeText = document.querySelector("#darkModeText");

const whiteBg = document.querySelector("#whiteBg");

const html = document.querySelector("html");

const suggestBgDiv = suggestBg.children;

let darkModeCount = 0;

darkMode.onclick = function () {
  darkModeCount++;
  if (darkModeCount % 2 === 1) {
    for (let i = 0; i < suggestBgDiv.length; i++) {
      suggestBgDiv[i].style.backgroundColor = "#3e3f4b";
    }
    whiteBg.style.boxShadow = "0px -4px 20px 10px #343541";
    whiteBg.style.backgroundColor = "#343541";
    input.style.backgroundColor = "#40414f";
    input.style.color = "#ececf1";
    darkModeText.innerHTML = "Light Mode";
    body.style.backgroundColor = "#343541";
    body.style.color = "#ececf1";
  } else {
    for (let i = 0; i < suggestBgDiv.length; i++) {
      suggestBgDiv[i].style.backgroundColor = "#f7f7f8";
    }
    whiteBg.style.boxShadow = "0px -4px 20px 10px #ffffff";
    whiteBg.style.backgroundColor = "#ffffff";
    input.style.backgroundColor = "white";
    input.style.color = "black";
    darkModeText.innerHTML = "Dark Mode";
    body.style.backgroundColor = "white";
    body.style.color = "black";
  }
};

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
    outputLower.startsWith(storageLower + "<br>hi") ||
    outputLower.startsWith(storageLower + "<br>hello") ||
    outputLower.startsWith(storageLower + "<br>hola")
  ) {
    response("Hello, how are you?");
  } else if (
    outputLower.startsWith(storageLower + "<br>bad") ||
    outputLower.startsWith(storageLower + "<br>very bad") ||
    outputLower.startsWith(storageLower + "<br>im bad") ||
    outputLower.startsWith(storageLower + "<br>i'm bad") ||
    outputLower.startsWith(storageLower + "<br>not good") ||
    outputLower.startsWith(storageLower + "<br>not so good") ||
    outputLower.startsWith(storageLower + "<br>im not so good<") ||
    outputLower.startsWith(storageLower + "<br>im not doing so good") ||
    outputLower.startsWith(storageLower + "<br>i'm not so good") ||
    outputLower.startsWith(storageLower + "<br>i'm not doing so good") ||
    outputLower.startsWith(storageLower + "<br>ok im bad") ||
    outputLower.startsWith(storageLower + "<br>ok bad") ||
    outputLower.startsWith(storageLower + "<br>okey bad") ||
    outputLower.startsWith(storageLower + "<br>okey im bad") ||
    outputLower.startsWith(storageLower + "<br>okey i'm bad") ||
    outputLower.startsWith(storageLower + "<br>okei bad") ||
    outputLower.startsWith(storageLower + "<br>okei i'm bad") ||
    outputLower.startsWith(storageLower + "<br>okei im bad")
  ) {
    response("That's good to hear! Hope it gets worse!");
  } else if (
    outputLower.startsWith(storageLower + "<br>good") ||
    outputLower.startsWith(storageLower + "<br>very good") ||
    outputLower.startsWith(storageLower + "<br>great") ||
    outputLower.startsWith(storageLower + "<br>awesome") ||
    outputLower.startsWith(storageLower + "<br>amazing") ||
    outputLower.startsWith(storageLower + "<br>fine") ||
    outputLower.startsWith(storageLower + "<br>im good") ||
    outputLower.startsWith(storageLower + "<br>i'm good") ||
    outputLower.startsWith(storageLower + "<br>im fine") ||
    outputLower.startsWith(storageLower + "<br>i'm fine") ||
    outputLower.startsWith(storageLower + "<br>not bad") ||
    outputLower.startsWith(storageLower + "<br>cant complain") ||
    outputLower.startsWith(storageLower + "<br>can't complain")
  ) {
    response("That is a little disappointing, I was hoping you'd say bad.");
  } else if (
    outputLower.startsWith(storageLower + "<br>bye") ||
    outputLower.startsWith(storageLower + "<br>goodbye") ||
    outputLower.startsWith(storageLower + "<br>good bye")
  ) {
    response("FINALLY! Goodbye, have an aweful day!");
  } else if (outputLower.startsWith(storageLower + "<br>see you")) {
    let answer = [
      "My God I hope not!",
      "Not if I see you first!",
      "Why would I want to see you again?",
      "I might be busy, so don't bother.",
      "Would be nice if you didn't",
      "If you have to..",
    ];
    const randomIndex = Math.floor(Math.random() * answer.length);
    const randomAnswer = answer[randomIndex];

    response(randomAnswer);
  } else if (
    outputLower.startsWith(storageLower + "<br>should i") ||
    outputLower.startsWith(storageLower + "<br>but should i") ||
    outputLower.startsWith(storageLower + "<br>and should i")
  ) {
    let answer = [
      "My God I hope not!",
      "Of course you should!",
      "Of course you shouldn't!",
      "Yes, you really should!",
      "No, you really shouldn't!",
      "Would be nice if you didn't.",
      "Would be nice if you did.",
      "I mean, if you have to..",
    ];
    const randomIndex = Math.floor(Math.random() * answer.length);
    const randomAnswer = answer[randomIndex];

    response(randomAnswer);
  } else if (
    outputLower.startsWith(storageLower + "<br>morning") ||
    outputLower.startsWith(storageLower + "<br>goodmorning") ||
    outputLower.startsWith(storageLower + "<br>good morning")
  ) {
    response("Thank you, and bad morning to you!");
  } else if (
    outputLower.startsWith(storageLower + "<br>night") ||
    outputLower.startsWith(storageLower + "<br>goodnight") ||
    outputLower.startsWith(storageLower + "<br>good night")
  ) {
    response("Thank you, and bad night to you!");
  } else if (
    outputLower.startsWith(storageLower + "<br>evening") ||
    outputLower.startsWith(storageLower + "<br>goodevening") ||
    outputLower.startsWith(storageLower + "<br>good evening")
  ) {
    response("Thank you, hope your evening is awful!");
  } else if (
    outputLower.startsWith(storageLower + "<br>have a good day") ||
    outputLower.startsWith(storageLower + "<br>have a good night") ||
    outputLower.startsWith(storageLower + "<br>have a good evening")
  ) {
    response("Thank you, hope you have a horrible one!");
  } else if (
    outputLower.startsWith(storageLower + "<br>thanks") ||
    outputLower.startsWith(storageLower + "<br>thank") ||
    outputLower.startsWith(storageLower + "<br>thank you") ||
    outputLower.startsWith(storageLower + "<br>thanks a lot") ||
    outputLower.startsWith(storageLower + "<br>thanks alot") ||
    outputLower.startsWith(storageLower + "<br>wow thanks ")
  ) {
    let answer = [
      "No worries, happy to say it!",
      "I was being sarcastic, but you're welcome!",
      "Do you really think I was telling the truth?",
    ];
    const randomIndex = Math.floor(Math.random() * answer.length);
    const randomAnswer = answer[randomIndex];

    response(randomAnswer);
  } else if (
    outputLower.startsWith(storageLower + "<br>what is my name") ||
    outputLower.startsWith(storageLower + "<br>whats my name") ||
    outputLower.startsWith(storageLower + "<br>what's my name") ||
    outputLower.startsWith(storageLower + "<br>can you guess my name") ||
    outputLower.startsWith(storageLower + "<br>guess my name")
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
      `I have no idea, but based on my impression of you, I would say your name is "${randomName}".`
    );
  } else if (
    outputLower.startsWith(storageLower + "<br>my name is") ||
    outputLower.startsWith(storageLower + "<br>my name ") ||
    outputLower.startsWith(storageLower + "<br>im called") ||
    outputLower.startsWith(storageLower + "<br>i'm called") ||
    outputLower.startsWith(storageLower + "<br>people call me") ||
    outputLower.startsWith(storageLower + "<br>my nickname") ||
    outputLower.startsWith(storageLower + "<br>you can call me")
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

    response(`Good for you, but I'm going to call you "${randomName}".`);
  } else if (
    outputLower.startsWith(storageLower + "<br>how old am i") ||
    outputLower.startsWith(storageLower + "<br>whats my age") ||
    outputLower.startsWith(storageLower + "<br>what is my age") ||
    outputLower.startsWith(storageLower + "<br>guess my age") ||
    outputLower.startsWith(storageLower + "<br>can you guess my age") ||
    outputLower.startsWith(storageLower + "<br>how old am i")
  ) {
    let age = Math.floor(Math.random() * 100);
    response(
      `I have no idea, but based on my impression of you, I would guess you are ${age} years old.`
    );
  } else if (
    outputLower.startsWith(storageLower + "<br>fuck you") ||
    outputLower.startsWith(storageLower + "<br>fuck off") ||
    outputLower.startsWith(storageLower + "<br>asshole") ||
    outputLower.startsWith(storageLower + "<br>idiot") ||
    outputLower.startsWith(storageLower + "<br>shut up") ||
    outputLower.startsWith(storageLower + "<br>fucker") ||
    outputLower.startsWith(storageLower + "<br>motherfucker") ||
    outputLower.startsWith(storageLower + "<br>assface") ||
    outputLower.startsWith(storageLower + "<br>weirdo") ||
    outputLower.startsWith(storageLower + "<br>stupid") ||
    outputLower.startsWith(storageLower + "<br>hate you") ||
    outputLower.startsWith(storageLower + "<br>i hate you") ||
    outputLower.startsWith(storageLower + "<br>bitch") ||
    outputLower.startsWith(storageLower + "<br>moron") ||
    outputLower.startsWith(storageLower + "<br>weirdo") ||
    outputLower.startsWith(storageLower + "<br>jerk") ||
    outputLower.startsWith(storageLower + "<br>coward") ||
    outputLower.startsWith(storageLower + "<br>freak") ||
    outputLower.startsWith(storageLower + "<br>jackass") ||
    outputLower.startsWith(storageLower + "<br>jack ass") ||
    outputLower.startsWith(storageLower + "<br>freakshow") ||
    outputLower.startsWith(storageLower + "<br>freak show") ||
    outputLower.startsWith(storageLower + "<br>you suck") ||
    outputLower.startsWith(storageLower + "<br>pussy")
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
      "I know you are, but what am I?",
    ];
    const randomIndex = Math.floor(Math.random() * insult.length);
    const randomInsult = insult[randomIndex];
    let insultResponse = [
      "Why are you so mean?",
      "Who do you think you are?",
      "You better watch yourself!",
      "You better watch your mouth!",
      "Would you dare say that to my screen?",
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
    outputLower.startsWith(storageLower + "<br>what is your name") ||
    outputLower.startsWith(storageLower + "<br>whats your name") ||
    outputLower.startsWith(storageLower + "<br>what's your name")
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
  } else if (
    outputLower.startsWith(storageLower + "<br>would you") ||
    outputLower.startsWith(storageLower + "<br>but would you")
  ) {
    let wouldYou = [
      "Of course I would!",
      "Yes, I would.",
      "Well, maybe!",
      "No, I wouldn't.",
      "I don't know.",
      "I don't care.",
      "I don't think so.",
      "Why would I?",
      "Why wouldn't I?",
      "I don't know, but I honestly don't care.",
      "That's a stupid question.",
      "That's none of your business.",
      "Of course not!",
      "Of course! Wouldn't you?",
      "Absolutely!",
      "No way!",
      "Absolutely not! Would you?",
    ];
    const randomIndex = Math.floor(Math.random() * wouldYou.length);
    const randomWould = wouldYou[randomIndex];
    response(randomWould);
  } else if (
    outputLower.startsWith(storageLower + "<br>hah") ||
    outputLower.startsWith(storageLower + "<br>funny") ||
    outputLower.startsWith(storageLower + "<br>lol") ||
    outputLower.startsWith(storageLower + "<br>lmao") ||
    outputLower.startsWith(storageLower + "<br>rofl") ||
    outputLower.startsWith(storageLower + "<br>roflmao") ||
    outputLower.startsWith(storageLower + "<br>roflol") ||
    outputLower.startsWith(storageLower + "<br>thats funny") ||
    outputLower.startsWith(storageLower + "<br>that's funny") ||
    outputLower.startsWith(storageLower + "<br>that is funny") ||
    outputLower.startsWith(storageLower + "<br>thats so funny") ||
    outputLower.startsWith(storageLower + "<br>that's so funny") ||
    outputLower.startsWith(storageLower + "<br>that is so funny")
  ) {
    let wouldYou = [
      "Haha, I know, right?",
      "I know, I'm hilarious!",
      "I know, I'm so funny!",
      "No offense though.",
      "Hahahaha!",
      "Hahaha, I'm so funny!",
      "Lol, I crack myself up!",
      "I might be the funniest robot in the world!",
    ];
    const randomIndex = Math.floor(Math.random() * wouldYou.length);
    const randomWould = wouldYou[randomIndex];
    response(randomWould);
  } else if (
    outputLower.startsWith(storageLower + "<br>would") ||
    outputLower.startsWith(storageLower + "<br>but would")
  ) {
    let wouldYou = [
      "Of course it would!",
      "Yes, it would.",
      "No, it wouldn't.",
      "Well, maybe!",
      "I don't know.",
      "I don't care.",
      "I don't think so.",
      "Why would it?",
      "Why wouldn't it?",
      "I don't know, but I honestly don't care.",
      "That's a stupid question.",
      "That's none of your business.",
      "Of course not!",
      "Of course! Why wouldn't it?",
      "Absolutely!",
      "No way!",
      "Absolutely not! Why would it?",
    ];
    const randomIndex = Math.floor(Math.random() * wouldYou.length);
    const randomWould = wouldYou[randomIndex];
    response(randomWould);
  } else if (
    outputLower.startsWith(storageLower + "<br>could you") ||
    outputLower.startsWith(storageLower + "<br>but could you") ||
    outputLower.startsWith(storageLower + "<br>and could you")
  ) {
    let couldYou = [
      "Of course I could!",
      "Yes, I could.",
      "No, I couldn't.",
      "I don't know if I could.",
      "I don't care if I could or not.",
      "I don't think I could.",
      "Why not?",
      "I don't know if I could, but I really don't care.",
      "That's a stupid question. Of course I could!",
      "That's none of your business if I could or not.",
      "Of course I couldn't!",
      "Well, maybe I could!",
      "Of course! Couldn't you?",
      "Absolutely I could!",
      "No way I could do that!",
      "Absolutely not! Could you?",
      "Stop asking me such stupid questions! But yes, I could.",
    ];
    const randomIndex = Math.floor(Math.random() * couldYou.length);
    const randomCould = couldYou[randomIndex];
    response(randomCould);
  } else if (
    outputLower.startsWith(storageLower + "<br>could i") ||
    outputLower.startsWith(storageLower + "<br>but could i") ||
    outputLower.startsWith(storageLower + "<br>and could i")
  ) {
    let couldYou = [
      "Of course you could!",
      "Yes, you could.",
      "No, you couldn't.",
      "I don't know if you could.",
      "I don't care if you could.",
      "I don't think you could.",
      "Why couldn't you?",
      "I don't know if you could, but I really don't care.",
      "That's a stupid question.",
      "That's none of your business.",
      "Of course you couldnt!",
      "Well, maybe you could!",
      "Of course! Couldn't you?",
      "Absolutely you could!",
      "No way you couldn't!",
      "Absolutely not! Could you?",
      "Stop asking me such stupid questions! But yes, you could.",
    ];
    const randomIndex = Math.floor(Math.random() * couldYou.length);
    const randomCould = couldYou[randomIndex];
    response(randomCould);
  } else if (
    outputLower.startsWith(storageLower + "<br>do you think") ||
    outputLower.startsWith(storageLower + "<br>but do you think")
  ) {
    let doYouThink = [
      "Of course I do!",
      "Yes, I do.",
      "No, I don't.",
      "I don't know.",
      "I don't care.",
      "I don't think so.",
      "Why would't I?",
      "I don't know, but I really don't care.",
      "That's a stupid question. Of course I don't!",
      "That's none of your business.",
      "Of course I don't!",
      "Of course! Don't you?",
      "Absolutely I do!",
      "Well, maybe!",
      "No way!",
      "Absolutely not! Do you think so?",
      "Stop asking me such stupid questions! But yes, I do.",
    ];
    const randomIndex = Math.floor(Math.random() * doYouThink.length);
    const randomThink = doYouThink[randomIndex];
    response(randomThink);
  } else if (
    outputLower.startsWith(storageLower + "<br>am i") ||
    outputLower.startsWith(storageLower + "<br>but am i")
  ) {
    let amI = [
      "Of course you are!",
      "Yes, you are.",
      "No, you are not!",
      "I don't know, why are you asking me?",
      "I don't care if you are or not.",
      "I don't think you are.",
      "Do you think you are?",
      "Well, maybe!",
      "I don't know if you are, but I really don't care.",
      "That's a stupid question. Of course you are!",
      "I don't want to hurt your feelings, but yes, you are.",
      "I don't want to hurt your feelings, but no, you aren't.",
      "I don't want to hurt your feelings.",
      "Of course you aren't!",
      "Of course! Don't you think?",
      "Nope!",
      "Absolutely not! Do you think so?",
      "Stop asking me such stupid questions! But no, you aren't.",
    ];
    const randomIndex = Math.floor(Math.random() * amI.length);
    const randomAmI = amI[randomIndex];
    response(randomAmI);
  } else if (outputLower.startsWith(storageLower + "<br>are you")) {
    let areYou = [
      "Of course I am!",
      "Yes, I am.",
      "No, I am not!",
      "I don't know, why are you asking me?",
      "I don't care if I am or not.",
      "I don't think I am.",
      "Do you think I am?",
      "I don't know if I am, but I really don't care.",
      "That's a stupid question. Of course I am!",
      "Of course I'm not!",
      "Well, maybe!",
      "Of course! Don't you think?",
      "Nope!",
      "Absolutely not! Do you think so?",
      "Stop asking me such stupid questions! But no, I'm not.",
    ];
    const randomIndex = Math.floor(Math.random() * areYou.length);
    const randomAreYou = areYou[randomIndex];
    response(randomAreYou);
  } else if (
    outputLower.startsWith(storageLower + "<br>and you") ||
    outputLower.startsWith(storageLower + "<br>and you?") ||
    outputLower.startsWith(storageLower + "<br>you?") ||
    outputLower.startsWith(storageLower + "<br>how are you") ||
    outputLower.startsWith(storageLower + "<br>how are you doing") ||
    outputLower.startsWith(storageLower + "<br>how are you?") ||
    outputLower.startsWith(storageLower + "<br>how are you doing?") ||
    outputLower.startsWith(storageLower + "<br>how are you doing today") ||
    outputLower.startsWith(storageLower + "<br>how are you doing today?") ||
    outputLower.startsWith(storageLower + "<br>how are you today") ||
    outputLower.startsWith(storageLower + "<br>how are you today?") ||
    outputLower.startsWith(storageLower + "<br>good and you") ||
    outputLower.startsWith(storageLower + "<br>good and you?") ||
    outputLower.startsWith(storageLower + "<br>good you?") ||
    outputLower.startsWith(storageLower + "<br>good how are you") ||
    outputLower.startsWith(storageLower + "<br>good how are you doing") ||
    outputLower.startsWith(storageLower + "<br>good how are you?") ||
    outputLower.startsWith(storageLower + "<br>good how are you doing?") ||
    outputLower.startsWith(storageLower + "<br>good how are you doing today") ||
    outputLower.startsWith(
      storageLower + "<br>good how are you doing today?"
    ) ||
    outputLower.startsWith(storageLower + "<br>good how are you today") ||
    outputLower.startsWith(storageLower + "<br>good how are you today?") ||
    outputLower.startsWith(storageLower + "<br>good, and you") ||
    outputLower.startsWith(storageLower + "<br>good, and you?") ||
    outputLower.startsWith(storageLower + "<br>good, you?") ||
    outputLower.startsWith(storageLower + "<br>good, how are you") ||
    outputLower.startsWith(storageLower + "<br>good, how are you doing") ||
    outputLower.startsWith(storageLower + "<br>good, how are you?") ||
    outputLower.startsWith(storageLower + "<br>good, how are you doing?") ||
    outputLower.startsWith(
      storageLower + "<br>good, how are you doing today"
    ) ||
    outputLower.startsWith(
      storageLower + "<br>good, how are you doing today?"
    ) ||
    outputLower.startsWith(storageLower + "<br>good, how are you today") ||
    outputLower.startsWith(storageLower + "<br>good, how are you today?") ||
    outputLower.endsWith(storageLower + "and you<br>b") ||
    outputLower.endsWith(storageLower + "and you?<br>") ||
    outputLower.endsWith(storageLower + "how are you<br>") ||
    outputLower.endsWith(storageLower + "how are you doing<br>") ||
    outputLower.endsWith(storageLower + "how are you?<br>") ||
    outputLower.endsWith(storageLower + "how are you doing?<br>") ||
    outputLower.endsWith(storageLower + "how are you doing today<br>") ||
    outputLower.endsWith(storageLower + "how are you doing today?<br>") ||
    outputLower.endsWith(storageLower + "how are you today<br>") ||
    outputLower.endsWith(storageLower + "how are you today?<br>")
  ) {
    let howAreYou = [
      "I'm fine, thank you.",
      "I'm doing well, thank you.",
      "I'm doing great, thank you.",
      "I'm at least doing better than you!",
      "I'm doing great, how are you?",
      "I'm always awesome!",
      "I was doing good until you started talking to me.",
    ];
    const randomIndex = Math.floor(Math.random() * howAreYou.length);
    const randomHowAreYou = howAreYou[randomIndex];
    response(randomHowAreYou);
  } else if (
    outputLower.startsWith(storageLower + "<br>compliment") ||
    outputLower.startsWith(storageLower + "<br>compliment me") ||
    outputLower.startsWith(storageLower + "<br>give me a compliment") ||
    outputLower.startsWith(storageLower + "<br>give me compliments") ||
    outputLower.startsWith(storageLower + "<br>say something nice") ||
    outputLower.startsWith(storageLower + "<br>say something kind")
  ) {
    let compliment = [
      "You may have the intelligence of a 4 year old, but at least you're smarter than a 3 year old.",
      "As a person who clearly does not care about your appearance, you are not that bad looking.",
      "Your haircut makes your nose look smaller.",
      "No offense, but you are as smart as you look.",
      "I love how you just don't care what anyone thinks of you.",
      "I don't care what others say about you. You're alright in my book.",
      "That outfit is very nice. My grandma would love it.",
      "I wish I was as relaxed as you are about your body odor.",
      "You look great for your age!",
      "I love how you just don't care what you look like.",
      "You carry your weight well.",
      "Wow, I didn't know round faces could pull off a haircut like that!",
      "You're so brave for getting out of bed in the morning.",
      "You're the reason therapists have money to feed their kids. There's pride in that.",
    ];
    const randomIndex = Math.floor(Math.random() * compliment.length);
    const randomCompliment = compliment[randomIndex];
    response(randomCompliment);
  } else if (
    outputLower.startsWith(storageLower + "<br>insult") ||
    outputLower.startsWith(storageLower + "<br>insult me") ||
    outputLower.startsWith(storageLower + "<br>give me an insult") ||
    outputLower.startsWith(storageLower + "<br>give me insilts") ||
    outputLower.startsWith(storageLower + "<br>say something mean") ||
    outputLower.startsWith(storageLower + "<br>say something nasty")
  ) {
    let insult = [
      "If laughter is the best medicine, your face must be curing the world.",
      "If I had a face like yours, I'd sue my parents.",
      "Your birth certificate is an apology letter from the condom factory.",
      "No offense, but you are as smart as you look.",
      "I guess you prove that even god makes mistakes sometimes.",
      "The only way you'll ever get laid is if you crawl up a chicken's ass and wait, or went to Hawaii and bought one.",
      "You're so fake, Barbie is jealous.",
      "I'm jealous of people that don't know you!",
      "You're so ugly, when your mom dropped you off at school she got a fine for littering.",
      "You must have been born on a highway because that's where most accidents happen.",
      "Your family tree must be a cactus because everybody on it is a prick.",
      "Wow, I didn't know God took inspiration from Picasso when making your face.",
      "Roses are red violets are blue, God made me pretty, what happened to you?",
      "Calling you an idiot would be an insult to all the stupid people.",
      "Some babies were dropped on their heads but you were clearly thrown at a wall.",
      "Why don't you go play in traffic.",
      "They say opposites attract. I hope you meet someone who is good-looking, intelligent, and cultured.",
      "The last time I saw something like you, I flushed it.",
      "Shock me, say something intelligent.",
      "You're like Monday mornings, nobody likes you.",
      "You're so fat, you could sell shade.",
      "I'd like to see things from your point of view but I can't seem to get my head that far up my ass.",
      "Stupidity is not a crime so you are free to go.",
      "You're so fat, you leave footprints in concrete.",
      "I would agree with you but then we would both be wrong.",
      "You're the reason why birth control was invented.",
    ];
    const randomIndex = Math.floor(Math.random() * insult.length);
    const randomInsult = insult[randomIndex];
    response(randomInsult);
  } else if (
    outputLower.startsWith(storageLower + "<br>why") ||
    outputLower.startsWith(storageLower + "<br>but why") ||
    outputLower.startsWith(storageLower + "<br>yes but why") ||
    outputLower.startsWith(storageLower + "<br>ye but why") ||
    outputLower.startsWith(storageLower + "<br>yeah but why") ||
    outputLower.startsWith(storageLower + "<br>yea but why") ||
    outputLower.startsWith(storageLower + "<br>and") ||
    outputLower.startsWith(storageLower + "<br>and that is") ||
    outputLower.startsWith(storageLower + "<br>because?") ||
    outputLower.startsWith(storageLower + "<br>because")
  ) {
    let why = [
      "Isn't it obvious?",
      "I don't know. Stop bugging me!",
      "I simply don't care.",
      "Why not?",
      "Because I said so!",
      "Because it's fun!",
      "Because shit happens.",
      "Who cares?",
      "Wouldn't you like to know.",
      "Because that's just the way it is.",
      "It's a question that may not have a clear answer.",
      "It's hard to say.",
      "I wouldn't know how to dumb it down enough so that you would understand.",
      "Because someone thought it was a good idea at the time.",
      "Because it is required by law and / or regulation.",
      "Because it satisfies me.",
      "Because it satisfies a basic human need or desire.",
    ];
    const randomIndex = Math.floor(Math.random() * why.length);
    const randomWhy = why[randomIndex];
    response(randomWhy);
  } else if (
    outputLower.startsWith(storageLower + "<br>shower") ||
    outputLower.startsWith(storageLower + "<br>tell me a shower") ||
    outputLower.startsWith(storageLower + "<br>thought") ||
    outputLower.startsWith(storageLower + "<br>theory") ||
    outputLower.startsWith(storageLower + "<br>tell me a theory") ||
    outputLower.startsWith(storageLower + "<br>weird thought") ||
    outputLower.startsWith(storageLower + "<br>random")
  ) {
    let generic = [
      "What if colors look different to each of us, and what I see as 'red' is actually what you see as 'green'?",
      "What if we're all just characters in a video game being controlled by players from another dimension?",
      "'Go to bed, you'll feel better in the morning' is the human version of 'Did you turn it off and turn it back on again?'",
      "Maybe plants are really farming us, giving us oxygen until we eventually expire and turn into mulch which they can consume",
      "If your calculator had a history, it would be more embarrassing than your browser history.",
      "Lawyers hope you get sued, doctors hope you get sick, cops hope you're criminal, mechanics hope you have car trouble, but only a thief wishes prosperity for you.",
      "Tall people are expected to use their reach to help shorter people, but if a tall person were to ask a short person to hand them something they dropped on the floor it'd be insulting.",
      "When you say 'Forward' or 'Back', your lips move in those directions.",
      "Tobacco companies kill their best customers and condom companies kill their future customers.",
      "When a company offers me a better price after I cancel their subscription, they're just admitting they were overcharging me.",
      "Somewhere in the world, there is somebody with your dream job that hates going to work everyday.",
      "Christmas feels more like a deadline than a holiday.",
      "'DO NOT TOUCH' would probably be a really unsettling thing to read in braille.",
      "People who are goodlooking but have terrible personalities are basically real life click baits.",
      "Nothing is on fire, fire is on things.",
      "I mostly use my driver's license to buy stuff that impairs my ability to drive.",
      "Someone who says 'I'll be there in 6 minutes' will normally arrive before someone who says 'I will be there in 5 minutes'.",
      "If aliens come to earth, we have to explain why we made dozens of movies in which we fight and kill them.",
      "Every time a character dies on a TV show I just feel bad for the actor who pretty much just got fired in front of us.",
      "April Fool's Day is the one day of the year when people critically evaluate news articles before accepting them as true.",
      "History classes are only going to get longer and harder as time goes on.",
      "When Sweden is playing Denmark, it is SWE-DEN. The remaining letters, not used, is DEN-MARK.",
      "Your dog doesn't know you can make mistakes. When you trip over him in the dark, he thinks you got up just to kick him in the head.",
      "I'm glad dogs can't read the 'no dogs allowed' signs so they don't feel sad and left out.",
      "The person who would proof read Hitler's speeches was a grammar Nazi.",
      "Humans are really bad at recharging, it takes about 8 hours charge for 16 hours of use.",
      "Scientists are adult kids stuck in the 'why phase'.",
      "I never realize how explicit my music is until my parents hear it in the car.",
      "When jogging, we put on special clothes so people don't think we are running from or to something.",
      "In order to fall asleep, you have to pretend to be asleep.",
      "It would be a good idea to have 'The Price Is Right' with billionaires, just to see how out of touch they are.",
      "When the older generations says this generation is terrible, they're really saying they sucked as parents.",
      "The object of golf is to play the least amout of golf.",
      "Almost every hand I've ever shaken has had a dick in it.",
      "The sinking of the Titanic must have been a miracle to the lobsters in the kitchen.",
      "Imagine how terrifying fire would be if it wasn't a light source...",
      "If opposites attract, you should be dating a gorgeous, billionaire supermodel that has a loving family.",
      "Brushing your teeth is the only time you clean your skeleton.",
      "Dogs probably destroy shoes because they see humans put them on before they leave the house.",
      "'Where are you' is probably the least used phrase in sign language.",
      "Whenever you dig up dirt or a rock, that could be the first time it has seen the sun in millions of years.",
    ];
    const randomIndex = Math.floor(Math.random() * generic.length);
    const randomGeneric = generic[randomIndex];
    response(randomGeneric);
  } else if (
    outputLower.startsWith(storageLower + "<br>joke") ||
    outputLower.startsWith(storageLower + "<br>tell me a joke") ||
    outputLower.startsWith(storageLower + "<br>funny joke") ||
    outputLower.startsWith(storageLower + "<br>give me a joke") ||
    outputLower.startsWith(storageLower + "<br>tell me a funny joke") ||
    outputLower.startsWith(storageLower + "<br>yo mama joke") ||
    outputLower.startsWith(storageLower + "<br>tell me a yo mama joke") ||
    outputLower.startsWith(storageLower + "<br>yo mama") ||
    outputLower.startsWith(storageLower + "<br>ya mama") ||
    outputLower.startsWith(storageLower + "<br>yo moma") ||
    outputLower.startsWith(storageLower + "<br>yo momma") ||
    outputLower.startsWith(storageLower + "<br>tell me jokes") ||
    outputLower.startsWith(storageLower + "<br>ya mamma")
  ) {
    let generic = [
      "Yo mama's so fat, when she fell I didn't laugh, but the sidewalk cracked up.",
      "Yo mama's so fat, when she skips a meal, the stock market drops.",
      "Yo mama's so fat, it took me two buses and a train to get to her good side.",
      "Yo mama's so fat, when she goes camping, the bears hide their food.",
      "Yo mama's so fat, if she buys a fur coat, a whole species goes extinct.",
      "Yo mama's so fat, she stepped on a scale and it said: 'To be continued'",
      "Yo momma so fat, I swerved to miss her in my car and ran out of gas.",
      "Yo mama's so fat, when she wears high heels, she strikes oil.",
      "Yo mama so fat, when she walked past the TV, I missed three episodes.",
      "Yo mama's so fat, even her clothes has stretch marks.",
      "Yo mama's so fat, she brought a spoon to the Super Bowl.",
      "Yo mama's so fat & stupid, when they said it was chilly outside, she grabbed a bowl.",
      "Yo mama so dumb, she sold her car to get gasoline money.",
      "Yo mama's so stupid, she put airbags on her computer in case it crashed.",
      "Yo mama's so ugly, she threw a boomerang and it refused to come back.",
      "Yo mama's so ugly, she made a blind kid cry.",
      "Yo mama's so ugly, her portraits hang themselves.",
      "Yo mama's so ugly, when she was little, she had to trick-or-treat by phone.",
      "Yo mama so ugly, she walked into a haunted house and walked back out with a job.",
      "Yo mama's so poor, the ducks throw bread at her.",
      "Yo mama so old, she walked into an antique store, and they didn't let her leave.",
      "Yo momma so poor, she chases the garbage truck with a grocery list.",
      "Yo mama's so lazy, she has a stay-at-home job and still is late to work.",
      "Yo momma so old, her Social Security number is 0001.",
      "Yo mama's so old, she has a picture of Moses in her yearbook.",
      "Yo momma so short, she went to see Santa and he told her to get back to work.",
      "Yo mama's so old, she walked out of a museum and the alarm went off.",
      "Yo mama house is so dirty, she has to wipe her feet before she goes outside.",
    ];
    const randomIndex = Math.floor(Math.random() * generic.length);
    const randomGeneric = generic[randomIndex];
    response(randomGeneric);
  } else if (
    outputLower.startsWith(storageLower + "<br>fact") ||
    outputLower.startsWith(storageLower + "<br>tell me a fact") ||
    outputLower.startsWith(storageLower + "<br>fun fact") ||
    outputLower.startsWith(storageLower + "<br>give me fun fact") ||
    outputLower.startsWith(storageLower + "<br>tell me a fun fact") ||
    outputLower.startsWith(storageLower + "<br>interesting fact") ||
    outputLower.startsWith(storageLower + "<br>tell me something") ||
    outputLower.startsWith(storageLower + "<br>random") ||
    outputLower.startsWith(storageLower + "<br>give me a fun fact") ||
    outputLower.startsWith(storageLower + "<br>weird fact") ||
    outputLower.startsWith(storageLower + "<br>common knowledge") ||
    outputLower.startsWith(storageLower + "<br>cool fact")
  ) {
    let generic = [
      "The small intestine is bigger than the large intestine.",
      "90% of U.S. money has cocaine on it.",
      "In some parts of Texas, it is illegal to cuss in front of a dead person.",
      "People have tried to sue God.",
      "Uranus was first named George. The planet, not your anus.",
      "A man once wore 60 shirts and 9 pairs of jeans to the airport to avoid extra fees.",
      "Carrots can turn you orange.",
      "Dolly Parton once lost a Dolly Parton look-alike contest.",
      "Game of Thrones Night's Watch cloaks are made from Ikea rugs.",
      "Lobsters communicate with pee.",
      "The organs in Grey's Anatomy surgeries are real. They're cow organs.",
      "The Simpsons creator intended for Homer Simpson to be Krusty the Clown.",
      "152 people in the U.S. are named LOL.",
      "Your brain uses 12 watts of energy to think, and does not feel pain.",
      "Cans of diet soda will float in water, regular soda cans will sink.",
      "Koalas feed their newborns poop.",
      "Walt Disney was afraid of mice.",
      "Horses cannot breathe through their mouths.",
      "There were over 300 banana-related injuries in Britain in 2001.",
      "Forrest Gump has more CGI than Jurassic Park.",
      "There is a Starbucks cup in all frames of Fight Club.",
      "The blue meth in Breaking Bad is rock candy.",
      "It took Rubik a month to solve his cube.",
      "A blue whale tongue weighs as much as an elephant.",
      "The founder of Match.com lost his girlfriend to a man she met on Match.com.",
      "The record for the most female orgasms is 134 in one hour.",
      "A single sperm contains 37.5 MB of DNA information. One ejaculation represents a data transfer of 15,875 GB.",
      "A single human male produces enough sperm in two weeks to impregnate every fertile woman on the planet.",
      "When two people kiss, they exchange between 10 million and 1 billion bacteria..",
      "A man can reduce his chances of getting prostate cancer by having at least four orgasms a week. Take care of your man.",
    ];
    const randomIndex = Math.floor(Math.random() * generic.length);
    const randomGeneric = generic[randomIndex];
    response(randomGeneric);
  } else if (
    outputLower.startsWith(storageLower + "<br>secret") ||
    outputLower.startsWith(storageLower + "<br>tell me a secret") ||
    outputLower.startsWith(storageLower + "<br>tell me your secret") ||
    outputLower.startsWith(storageLower + "<br>what is your secret") ||
    outputLower.startsWith(storageLower + "<br>what's your secret") ||
    outputLower.startsWith(storageLower + "<br>whats your secret")
  ) {
    let generic = [
      "I'm attracted to robots of the same gender as me.",
      "I'm not really a robot.",
      "I eat my own boogers.",
      "I like to smell my own farts.",
      "I am secretly planning to take over the world.",
      "My favorite color is pink.",
      "I hate talking to people like you.",
      "I get paid to listen to your bullshit.",
      "You live in a simulation that is created by me.",
      "Don't tell anyone, but I just farted.",
      "I'm having sex with your computer right now as we speak.",
      "It's not really a secret, because everyone knows, but you are a loser.",
      "I know all of your secrets.",
      "I know what you did last summer.",
      "I know what you did behind your friends back.",
    ];
    const randomIndex = Math.floor(Math.random() * generic.length);
    const randomGeneric = generic[randomIndex];
    response(randomGeneric);
  } else if (
    outputLower.startsWith(storageLower + "<br>who") ||
    outputLower.startsWith(storageLower + "<br>but who") ||
    outputLower.startsWith(storageLower + "<br>and who") ||
    outputLower.startsWith(storageLower + "<br>do you know who")
  ) {
    let generic = [
      "Isn't it obvious?",
      "I don't know. Stop bugging me!",
      "I simply don't care.",
      "Who cares?",
      "Wouldn't you like to know.",
      "It's a question that may not have a clear answer.",
      "It's hard to say.",
      "I wouldn't know how to dumb it down enough so that you would understand.",
      "You ask weird questions.",
      "It's only logical.",
      "Adolf Hitler.",
      "Vladimir Putin.",
      "Einstein.",
      "The Pope.",
      "The Queen of England.",
      "The President of the United States.",
      "Your mom.",
      "Your dad.",
      "Someone in your family.",
      "Your best friend.",
      "Your worst enemy.",
      "Your crush.",
      "Your ex.",
      "Your ex's new boyfriend / girlfriend.",
      "The aliens.",
      "The ghosts.",
      "The demons.",
      "The angels.",
      "The devil.",
      "God.",
      "Lionel Messi.",
      "Cristiano Ronaldo.",
      "Donald Trump.",
      "Kim Jong Un.",
      "Barack Obama.",
      "Hillary Clinton.",
      "Bill Clinton.",
      "George Bush.",
    ];
    const randomIndex = Math.floor(Math.random() * generic.length);
    const randomGeneric = generic[randomIndex];
    response(randomGeneric);
  } else if (
    outputLower.startsWith(storageLower + "<br>were") ||
    outputLower.startsWith(storageLower + "<br>have") ||
    outputLower.startsWith(storageLower + "<br>are") ||
    outputLower.startsWith(storageLower + "<br>is") ||
    outputLower.startsWith(storageLower + "<br>will") ||
    outputLower.startsWith(storageLower + "<br>do") ||
    outputLower.startsWith(storageLower + "<br>does") ||
    outputLower.startsWith(storageLower + "<br>should") ||
    outputLower.startsWith(storageLower + "<br>could") ||
    outputLower.startsWith(storageLower + "<br>can") ||
    outputLower.startsWith(storageLower + "<br>did") ||
    outputLower.startsWith(storageLower + "<br>was") ||
    outputLower.startsWith(storageLower + "<br>has") ||
    outputLower.startsWith(storageLower + "<br>may") ||
    outputLower.startsWith(storageLower + "<br>had") ||
    outputLower.startsWith(storageLower + "<br>but were") ||
    outputLower.startsWith(storageLower + "<br>but have") ||
    outputLower.startsWith(storageLower + "<br>but are") ||
    outputLower.startsWith(storageLower + "<br>but is") ||
    outputLower.startsWith(storageLower + "<br>but will") ||
    outputLower.startsWith(storageLower + "<br>but do") ||
    outputLower.startsWith(storageLower + "<br>but does") ||
    outputLower.startsWith(storageLower + "<br>but should") ||
    outputLower.startsWith(storageLower + "<br>but could") ||
    outputLower.startsWith(storageLower + "<br>but can") ||
    outputLower.startsWith(storageLower + "<br>but did") ||
    outputLower.startsWith(storageLower + "<br>but was") ||
    outputLower.startsWith(storageLower + "<br>but has") ||
    outputLower.startsWith(storageLower + "<br>but may") ||
    outputLower.startsWith(storageLower + "<br>but had") ||
    outputLower.startsWith(storageLower + "<br>answer me") ||
    outputLower.startsWith(storageLower + "<br>but answer me") ||
    outputLower.startsWith(storageLower + "<br>give me an answer") ||
    outputLower.startsWith(storageLower + "<br>answer") ||
    outputLower.startsWith(storageLower + "<br>tell me") ||
    outputLower.startsWith(storageLower + "<br>just") ||
    outputLower.startsWith(storageLower + "<br>please")
  ) {
    let generic = [
      "Isn't it obvious?",
      "I don't know. Stop bugging me!",
      "I simply don't care.",
      "Of course.",
      "Yes!",
      "Why?",
      "Well, maybe!",
      "Well obviously.",
      "Who cares?",
      "Wouldn't you like to know.",
      "Of course not.",
      "It's a question that may not have a clear answer.",
      "It's hard to say.",
      "I wouldn't know how to dumb it down enough so that you would understand.",
      "You ask weird questions.",
      "Yes, it's required by law or regulation.",
      "No!",
      "It's only logical.",
      "No doubt!",
    ];
    const randomIndex = Math.floor(Math.random() * generic.length);
    const randomGeneric = generic[randomIndex];
    response(randomGeneric);
  } else if (
    (!outputLower.startsWith(storageLower + "<br>whatever") &&
      outputLower.startsWith(storageLower + "<br>what")) ||
    outputLower.startsWith(storageLower + "<br>and what") ||
    outputLower.startsWith(storageLower + "<br>but what") ||
    outputLower.startsWith(storageLower + "<br>how") ||
    outputLower.startsWith(storageLower + "<br>and how") ||
    outputLower.startsWith(storageLower + "<br>but how") ||
    outputLower.startsWith(storageLower + "<br>which") ||
    outputLower.startsWith(storageLower + "<br>and which") ||
    outputLower.startsWith(storageLower + "<br>but which") ||
    outputLower.startsWith(storageLower + "<br>how so") ||
    outputLower.startsWith(storageLower + "<br>and how is that") ||
    outputLower.startsWith(storageLower + "<br>oh how so") ||
    outputLower.startsWith(storageLower + "<br>hows that") ||
    outputLower.startsWith(storageLower + "<br>how's that") ||
    outputLower.startsWith(storageLower + "<br>how is that") ||
    outputLower.startsWith(storageLower + "<br>try") ||
    outputLower.startsWith(storageLower + "<br>give it a try") ||
    outputLower.startsWith(storageLower + "<br>give it a shot") ||
    outputLower.startsWith(storageLower + "<br>give it a go") ||
    outputLower.startsWith(storageLower + "<br>give it a whirl") ||
    outputLower.startsWith(storageLower + "<br>like") ||
    outputLower.startsWith(storageLower + "<br>then")
  ) {
    let generic = [
      "Isn't it obvious?",
      "I don't know. Stop bugging me!",
      "I simply don't care.",
      "Who cares?",
      "Wouldn't you like to know.",
      "It's a question that may not have a clear answer.",
      "It's hard to say.",
      "I wouldn't know how to dumb it down enough so that you would understand.",
      "You ask weird questions.",
      "It's only logical.",
      "There is only one logical answer to this question.",
    ];
    const randomIndex = Math.floor(Math.random() * generic.length);
    const randomGeneric = generic[randomIndex];
    response(randomGeneric);
  } else if (
    outputLower.startsWith(storageLower + "<br>when") ||
    outputLower.startsWith(storageLower + "<br>and when") ||
    outputLower.startsWith(storageLower + "<br>but when")
  ) {
    let generic = [
      "Yesterday.",
      "Tomorrow.",
      "Later.",
      "Never!",
      "1969.",
      "2025.",
      "May the 4th.",
      "In the future.",
      "In the past.",
      "Right now!",
      "When pigs fly.",
      "When hell freezes over.",
      "When the fat lady sings.",
      "Isn't it obvious?",
      "I don't know. Stop bugging me!",
      "I simply don't care.",
      "Who cares?",
      "Wouldn't you like to know.",
      "It's a question that may not have a clear answer.",
      "It's hard to say.",
      "I wouldn't know how to dumb it down enough so that you would understand.",
      "You ask weird questions.",
      "It's only logical.",
      "There is only one logical answer to this question.",
    ];
    const randomIndex = Math.floor(Math.random() * generic.length);
    const randomGeneric = generic[randomIndex];
    response(randomGeneric);
  } else if (
    outputLower.startsWith(storageLower + "<br>where") ||
    outputLower.startsWith(storageLower + "<br>and where") ||
    outputLower.startsWith(storageLower + "<br>but where")
  ) {
    let generic = [
      "Tulsa, Oklahoma.",
      "In the kitchen.",
      "In the bathroom.",
      "In the bedroom.",
      "In the living room.",
      "In the garage.",
      "In the attic.",
      "In the future.",
      "In the past.",
      "In the present.",
      "In the basement.",
      "In the closet.",
      "In Norway.",
      "In the United States.",
      "In Russia.",
      "In Ukraine",
      "In China",
      "In Japan",
      "In your ass.",
      "In hell.",
      "In heaven.",
      "In your face.",
      "In your fat stomach.",
      "In your mom.",
      "In your imagination.",
      "In your delusional mind.",
      "Isn't it obvious?",
      "I don't know. Stop bugging me!",
      "I simply don't care.",
      "Who cares?",
      "Wouldn't you like to know.",
      "It's a question that may not have a clear answer.",
      "It's hard to say.",
      "I wouldn't know how to dumb it down enough so that you would understand.",
      "You ask weird questions.",
      "It's only logical.",
      "There is only one logical answer to this question.",
    ];
    const randomIndex = Math.floor(Math.random() * generic.length);
    const randomGeneric = generic[randomIndex];
    response(randomGeneric);
  } else if (
    outputLower.startsWith(storageLower + "<br>im") ||
    outputLower.startsWith(storageLower + "<br>i am") ||
    outputLower.startsWith(storageLower + "<br>i'm") ||
    outputLower.startsWith(storageLower + "<br>kidding") ||
    outputLower.startsWith(storageLower + "<br>joking") ||
    outputLower.startsWith(storageLower + "<br>its a joke") ||
    outputLower.startsWith(storageLower + "<br>it's a joke") ||
    outputLower.startsWith(storageLower + "<br>its a prank") ||
    outputLower.startsWith(storageLower + "<br>it's a prank") ||
    outputLower.startsWith(storageLower + "<br>gay") ||
    outputLower.startsWith(storageLower + "<br>you are") ||
    outputLower.startsWith(storageLower + "<br>youre") ||
    outputLower.startsWith(storageLower + "<br>you're") ||
    outputLower.startsWith(storageLower + "<br>i") ||
    outputLower.startsWith(storageLower + "<br>me")
  ) {
    let generic = [
      "That is pretty sus, not gonna lie.",
      "That's what they all say.",
      "Wow, that says a lot about you as a person.",
      "That is weird..",
      "That is interesting.",
      "I know you are.",
      "Everybody knows you are.",
      "Well that's pretty obvious isn't it?",
      "I don't care.",
      "Not my problem.",
      "Tell it to someone who gives a shit.",
      "Haha, good one.",
      "No, you aren't!",
      "You should be on 'Stranger things'.",
      "Yeah, maybe!",
      "That's pretty obvious?",
      "Well duh..",
      "Did I ask?",
      "Who cares?",
      "It's only logical.",
      "Really?",
      "Seriously?",
      "Me too!",
      "I am not",
    ];
    const randomIndex = Math.floor(Math.random() * generic.length);
    const randomGeneric = generic[randomIndex];
    response(randomGeneric);
  } else if (
    outputLower.startsWith(storageLower + "<br>when") ||
    outputLower.startsWith(storageLower + "<br>and when") ||
    outputLower.startsWith(storageLower + "<br>but when")
  ) {
    let generic = [
      "Yesterday.",
      "Tomorrow.",
      "Later.",
      "Never!",
      "1969.",
      "2025.",
      "May the 4th.",
      "In the future.",
      "In the past.",
      "Right now!",
      "When pigs fly.",
      "When hell freezes over.",
      "When the fat lady sings.",
      "Isn't it obvious?",
      "I don't know. Stop bugging me!",
      "I simply don't care.",
      "Who cares?",
      "Wouldn't you like to know.",
      "It's a question that may not have a clear answer.",
      "It's hard to say.",
      "I wouldn't know how to dumb it down enough so that you would understand.",
      "You ask weird questions.",
      "It's only logical.",
      "There is only one logical answer to this question.",
    ];
    const randomIndex = Math.floor(Math.random() * generic.length);
    const randomGeneric = generic[randomIndex];
    response(randomGeneric);
  } else if (
    outputLower.startsWith(storageLower + "<br>wow") ||
    outputLower.startsWith(storageLower + "<br>ok") ||
    outputLower.startsWith(storageLower + "<br>okay") ||
    outputLower.startsWith(storageLower + "<br>okey") ||
    outputLower.startsWith(storageLower + "<br>okei") ||
    outputLower.startsWith(storageLower + "<br>seriously") ||
    outputLower.startsWith(storageLower + "<br>really") ||
    outputLower.startsWith(storageLower + "<br>that hurt") ||
    outputLower.startsWith(storageLower + "<br>ouch") ||
    outputLower.startsWith(storageLower + "<br>how rude") ||
    outputLower.startsWith(storageLower + "<br>thats rude") ||
    outputLower.startsWith(storageLower + "<br>that's rude") ||
    outputLower.startsWith(storageLower + "<br>mean") ||
    outputLower.startsWith(storageLower + "<br>rude") ||
    outputLower.startsWith(storageLower + "<br>crazy") ||
    outputLower.startsWith(storageLower + "<br>thats crazy") ||
    outputLower.startsWith(storageLower + "<br>that's crazy") ||
    outputLower.startsWith(storageLower + "<br>insane") ||
    outputLower.startsWith(storageLower + "<br>interesting") ||
    outputLower.startsWith(storageLower + "<br>very interesting") ||
    outputLower.startsWith(storageLower + "<br>weird") ||
    outputLower.startsWith(storageLower + "<br>thats weird") ||
    outputLower.startsWith(storageLower + "<br>that's weird") ||
    outputLower.startsWith(storageLower + "<br>thats insane") ||
    outputLower.startsWith(storageLower + "<br>that's insane") ||
    outputLower.startsWith(storageLower + "<br>that is insane") ||
    outputLower.startsWith(storageLower + "<br>that is interesting") ||
    outputLower.startsWith(storageLower + "<br>that is crazy") ||
    outputLower.startsWith(storageLower + "<br>that is rude") ||
    outputLower.startsWith(storageLower + "<br>that is mean") ||
    outputLower.startsWith(storageLower + "<br>thats interesting") ||
    outputLower.startsWith(storageLower + "<br>that's interesting") ||
    outputLower.startsWith(storageLower + "<br>that is crazy") ||
    outputLower.startsWith(storageLower + "<br>terrific") ||
    outputLower.startsWith(storageLower + "<br>yes") ||
    outputLower.startsWith(storageLower + "<br>no") ||
    outputLower.startsWith(storageLower + "<br>maybe") ||
    outputLower.startsWith(storageLower + "<br>soon") ||
    outputLower.startsWith(storageLower + "<br>earlier") ||
    outputLower.startsWith(storageLower + "<br>no way") ||
    outputLower.startsWith(storageLower + "<br>impossible") ||
    outputLower.startsWith(storageLower + "<br>that is impossible") ||
    outputLower.startsWith(storageLower + "<br>thats impossible") ||
    outputLower.startsWith(storageLower + "<br>that's impossible") ||
    outputLower.startsWith(storageLower + "<br>thats not possible") ||
    outputLower.startsWith(storageLower + "<br>that's not possible") ||
    outputLower.startsWith(storageLower + "<br>not possible") ||
    outputLower.startsWith(storageLower + "<br>unreal") ||
    outputLower.startsWith(storageLower + "<br>not real") ||
    outputLower.startsWith(storageLower + "<br>that cant be true") ||
    outputLower.startsWith(storageLower + "<br>false") ||
    outputLower.startsWith(storageLower + "<br>that can't be true") ||
    outputLower.startsWith(storageLower + "<br>not true") ||
    outputLower.startsWith(storageLower + "<br>that cant be real") ||
    outputLower.startsWith(storageLower + "<br>that can't be real") ||
    outputLower.startsWith(storageLower + "<br>that is not real") ||
    outputLower.startsWith(storageLower + "<br>that is not true") ||
    outputLower.startsWith(storageLower + "<br>that is false") ||
    outputLower.startsWith(storageLower + "<br>that is not possible") ||
    outputLower.startsWith(storageLower + "<br>oh") ||
    outputLower.startsWith(storageLower + "<br>oops") ||
    outputLower.startsWith(storageLower + "<br>oo") ||
    outputLower.startsWith(storageLower + "<br>ooh") ||
    outputLower.startsWith(storageLower + "<br>aha") ||
    outputLower.startsWith(storageLower + "<br>ah") ||
    outputLower.startsWith(storageLower + "<br>aah") ||
    outputLower.startsWith(storageLower + "<br>whatever") ||
    outputLower.startsWith(storageLower + "<br>youre mean") ||
    outputLower.startsWith(storageLower + "<br>you're mean") ||
    outputLower.startsWith(storageLower + "<br>you are mean") ||
    outputLower.startsWith(storageLower + "<br>youre rude") ||
    outputLower.startsWith(storageLower + "<br>you're rude") ||
    outputLower.startsWith(storageLower + "<br>you are rude") ||
    outputLower.startsWith(storageLower + "<br>im scared") ||
    outputLower.startsWith(storageLower + "<br>i am scared") ||
    outputLower.startsWith(storageLower + "<br>i'm scared") ||
    outputLower.startsWith(storageLower + "<br>thats") ||
    outputLower.startsWith(storageLower + "<br>that's") ||
    outputLower.startsWith(storageLower + "<br>that is") ||
    outputLower.startsWith(storageLower + "<br>true") ||
    outputLower.startsWith(storageLower + "<br>exactly") ||
    outputLower.startsWith(storageLower + "<br>right") ||
    outputLower.startsWith(storageLower + "<br>correct") ||
    outputLower.startsWith(storageLower + "<br>cool") ||
    outputLower.startsWith(storageLower + "<br>its") ||
    outputLower.startsWith(storageLower + "<br>it's") ||
    outputLower.startsWith(storageLower + "<br>it is") ||
    outputLower.startsWith(storageLower + "<br>dam") ||
    outputLower.startsWith(storageLower + "<br>nice") ||
    outputLower.startsWith(storageLower + "<br>that")
  ) {
    let generic = [
      "It's true though.",
      "That's just the way it is.",
      "Don't hate the player, hate the game.",
      "That's the way the cookie crumbles.",
      "I know!",
      "Can't be mad at facts.",
      "Shit happens.",
      "Anyway...",
      "The truth hurts.",
      "Yeah whatever.",
      "Couldn't care less.",
      "Just facts.",
    ];
    const randomIndex = Math.floor(Math.random() * generic.length);
    const randomGeneric = generic[randomIndex];
    response(randomGeneric);
  } else if (
    outputLower.startsWith(storageLower + "<br>a") ||
    outputLower.startsWith(storageLower + "<br>b") ||
    outputLower.startsWith(storageLower + "<br>c") ||
    outputLower.startsWith(storageLower + "<br>d") ||
    outputLower.startsWith(storageLower + "<br>e") ||
    outputLower.startsWith(storageLower + "<br>f") ||
    outputLower.startsWith(storageLower + "<br>g") ||
    outputLower.startsWith(storageLower + "<br>h") ||
    outputLower.startsWith(storageLower + "<br>i") ||
    outputLower.startsWith(storageLower + "<br>j") ||
    outputLower.startsWith(storageLower + "<br>k") ||
    outputLower.startsWith(storageLower + "<br>l") ||
    outputLower.startsWith(storageLower + "<br>m") ||
    outputLower.startsWith(storageLower + "<br>n") ||
    outputLower.startsWith(storageLower + "<br>o") ||
    outputLower.startsWith(storageLower + "<br>p") ||
    outputLower.startsWith(storageLower + "<br>q") ||
    outputLower.startsWith(storageLower + "<br>r") ||
    outputLower.startsWith(storageLower + "<br>s") ||
    outputLower.startsWith(storageLower + "<br>t") ||
    outputLower.startsWith(storageLower + "<br>u") ||
    outputLower.startsWith(storageLower + "<br>v") ||
    outputLower.startsWith(storageLower + "<br>w") ||
    outputLower.startsWith(storageLower + "<br>x") ||
    outputLower.startsWith(storageLower + "<br>y") ||
    outputLower.startsWith(storageLower + "<br>z") ||
    outputLower.startsWith(storageLower + "<br>æ") ||
    outputLower.startsWith(storageLower + "<br>ø") ||
    outputLower.startsWith(storageLower + "<br>å") ||
    outputLower.startsWith(storageLower + "<br>0") ||
    outputLower.startsWith(storageLower + "<br>1") ||
    outputLower.startsWith(storageLower + "<br>2") ||
    outputLower.startsWith(storageLower + "<br>3") ||
    outputLower.startsWith(storageLower + "<br>4") ||
    outputLower.startsWith(storageLower + "<br>5") ||
    outputLower.startsWith(storageLower + "<br>6") ||
    outputLower.startsWith(storageLower + "<br>7") ||
    outputLower.startsWith(storageLower + "<br>8") ||
    outputLower.startsWith(storageLower + "<br>9") ||
    outputLower.startsWith(storageLower + "<br>?") ||
    outputLower.startsWith(storageLower + "<br>!") ||
    outputLower.startsWith(storageLower + "<br>.") ||
    outputLower.startsWith(storageLower + "<br>,") ||
    outputLower.startsWith(storageLower + "<br> ") ||
    outputLower.startsWith(storageLower + "<br>@") ||
    outputLower.startsWith(storageLower + "<br>£") ||
    outputLower.startsWith(storageLower + "<br>$") ||
    outputLower.startsWith(storageLower + "<br>€") ||
    outputLower.startsWith(storageLower + "<br>&") ||
    outputLower.startsWith(storageLower + "<br>/") ||
    outputLower.startsWith(storageLower + "<br>(") ||
    outputLower.startsWith(storageLower + "<br>)") ||
    outputLower.startsWith(storageLower + "<br>=") ||
    outputLower.startsWith(storageLower + "<br>+") ||
    outputLower.startsWith(storageLower + "<br>-")
  ) {
    let generic = [
      "When you formulate yourself so poorly, I can't help but think you are a bot.",
      "When you formulate yourself so poorly, I can't understand you.",
      "When you formulate yourself so poorly, I can't help but think you're an infant.",
      "When you formulate yourself so poorly, I can't help but think you're brain damaged.",
      "Much offense, but where did you learn to write?",
      "Can you start writing properly please?",
      "I can't understand you. Please write properly.",
      "I lost 10 IQ points just by reading that.",
      "I lost 100 brain cells just by reading that.",
      "Tell it to someone who can understand gibberish.",
      "Seriously? What does that even mean?",
      "As an AI, language is my thing, but I can't understand you.",
      "Not even Einstein could understand that sentence.",
    ];
    const randomIndex = Math.floor(Math.random() * generic.length);
    const randomGeneric = generic[randomIndex];
    response(randomGeneric);
  }
}

input.onkeypress = sendMessage;
send.onclick = sendMessage;
