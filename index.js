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
    outputLower == storageLower + "<br>hi<br>" ||
    outputLower == storageLower + "<br>hello<br>"
  ) {
    response("Hello, how are you?");
  } else if (
    outputLower == storageLower + "<br>bad<br>" ||
    outputLower == storageLower + "<br>im bad<br>" ||
    outputLower == storageLower + "<br>i'm bad<br>" ||
    outputLower == storageLower + "<br>not good<br>" ||
    outputLower == storageLower + "<br>not so good<br>" ||
    outputLower == storageLower + "<br>im not so good<br>" ||
    outputLower == storageLower + "<br>im not doing so good<br>" ||
    outputLower == storageLower + "<br>i'm not so good<br>" ||
    outputLower == storageLower + "<br>i'm not doing so good<br>" ||
    outputLower == storageLower + "<br>ok im bad<br>" ||
    outputLower == storageLower + "<br>ok bad<br>" ||
    outputLower == storageLower + "<br>okey bad<br>" ||
    outputLower == storageLower + "<br>okey im bad<br>" ||
    outputLower == storageLower + "<br>okey i'm bad<br>" ||
    outputLower == storageLower + "<br>okei bad<br>" ||
    outputLower == storageLower + "<br>okei im bad<br>" ||
    outputLower == storageLower + "<br>okei i'm bad<br>"
  ) {
    response("That's good to hear! Hope it gets worse!");
  } else if (
    outputLower == storageLower + "<br>good<br>" ||
    outputLower == storageLower + "<br>great<br>" ||
    outputLower == storageLower + "<br>awesome<br>" ||
    outputLower == storageLower + "<br>amazing<br>" ||
    outputLower == storageLower + "<br>fine<br>" ||
    outputLower == storageLower + "<br>im good<br>" ||
    outputLower == storageLower + "<br>i'm good<br>" ||
    outputLower == storageLower + "<br>im fine<br>" ||
    outputLower == storageLower + "<br>i'm fine<br>" ||
    outputLower == storageLower + "<br>not bad<br>" ||
    outputLower == storageLower + "<br>cant complain<br>" ||
    outputLower == storageLower + "<br>can't complain<br>"
  ) {
    response("That is a little disappointing, I was hoping you'd say bad.");
  } else if (
    outputLower == storageLower + "<br>bye<br>" ||
    outputLower == storageLower + "<br>goodbye<br>" ||
    outputLower == storageLower + "<br>good bye<br>"
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
    outputLower == storageLower + "<br>morning<br>" ||
    outputLower == storageLower + "<br>goodmorning<br>" ||
    outputLower == storageLower + "<br>good morning<br>"
  ) {
    response("Thank you, and bad morning to you!");
  } else if (
    outputLower == storageLower + "<br>night<br>" ||
    outputLower == storageLower + "<br>goodnight<br>" ||
    outputLower == storageLower + "<br>good night<br>"
  ) {
    response("Thank you, and bad night to you!");
  } else if (
    outputLower == storageLower + "<br>evening<br>" ||
    outputLower == storageLower + "<br>goodevening<br>" ||
    outputLower == storageLower + "<br>good evening<br>"
  ) {
    response("Thank you, hope your evening is awful!");
  } else if (
    outputLower == storageLower + "<br>have a good day<br>" ||
    outputLower == storageLower + "<br>have a good night<br>" ||
    outputLower == storageLower + "<br>have a good evening<br>"
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
    outputLower == storageLower + "<br>what is my name?<br>" ||
    outputLower == storageLower + "<br>whats my name?<br>" ||
    outputLower == storageLower + "<br>what is my name<br>" ||
    outputLower == storageLower + "<br>whats my name<br>" ||
    outputLower == storageLower + "<br>what's my name<br>" ||
    outputLower == storageLower + "<br>what's my name?<br>" ||
    outputLower == storageLower + "<br>guess my name<br>"
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
    outputLower == storageLower + "<br>how old am i?<br>" ||
    outputLower == storageLower + "<br>whats my age?<br>" ||
    outputLower == storageLower + "<br>what is my age<br>" ||
    outputLower == storageLower + "<br>guess my age<br>" ||
    outputLower == storageLower + "<br>can you guess my age<br>" ||
    outputLower == storageLower + "<br>how old am i<br>"
  ) {
    let age = Math.floor(Math.random() * 100);
    response(
      `I have no idea, but based on my impression of you, I would guess you are ${age} years old.`
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
    outputLower == storageLower + "<br>i hate you<br>" ||
    outputLower == storageLower + "<br>bitch<br>" ||
    outputLower == storageLower + "<br>moron<br>" ||
    outputLower == storageLower + "<br>weirdo<br>" ||
    outputLower == storageLower + "<br>jerk<br>" ||
    outputLower == storageLower + "<br>coward<br>" ||
    outputLower == storageLower + "<br>freak<br>" ||
    outputLower == storageLower + "<br>jackass<br>" ||
    outputLower == storageLower + "<br>jack ass<br>" ||
    outputLower == storageLower + "<br>freakshow<br>" ||
    outputLower == storageLower + "<br>freak show<br>" ||
    outputLower == storageLower + "<br>you suck<br>"
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
    outputLower.startsWith(storageLower + "<br>but could you")
  ) {
    let couldYou = [
      "Of course I could!",
      "Yes, I could.",
      "No, I couldn't.",
      "I don't know.",
      "I don't care.",
      "I don't think so.",
      "Why not?",
      "I don't know, but I really don't care.",
      "That's a stupid question.",
      "That's none of your business.",
      "Of course not!",
      "Well, maybe!",
      "Of course! Couldn't you?",
      "Absolutely I could!",
      "No way!",
      "Absolutely not! Could you?",
      "Stop asking me such stupid questions! But yes, I could.",
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
    outputLower.startsWith(storageLower + "<br>tell me")
  ) {
    let generic = [
      "Isn't it obvious?",
      "I don't know. Stop bugging me!",
      "I simply don't care.",
      "Of course",
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
    outputLower.startsWith(storageLower + "<br>give it a shot")
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
    outputLower.startsWith(storageLower + "<br>i'm")
  ) {
    let generic = [
      "That is pretty sus, not gonna lie.",
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
    outputLower.startsWith(storageLower + "<br>true")
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
