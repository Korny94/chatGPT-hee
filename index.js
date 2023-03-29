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
  } else if (
    outputLower == storageLower + "<br>bad<br>" ||
    outputLower == storageLower + "<br>not good<br>" ||
    outputLower == storageLower + "<br>not so good<br>" ||
    outputLower == storageLower + "<br>im not so good<br>" ||
    outputLower == storageLower + "<br>im not doing so good<br>" ||
    outputLower == storageLower + "<br>i'm not so good<br>" ||
    outputLower == storageLower + "<br>i'm not doing so good<br>"
  ) {
    response("That's good to hear! Hope it gets worse!");
  } else if (
    outputLower == storageLower + "<br>good<br>" ||
    outputLower == storageLower + "<br>im good<br>" ||
    outputLower == storageLower + "<br>i'm good<br>" ||
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
      `I have no idea, but based on my impression of you, I would say your name is "${randomName}".`
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
    outputLower == storageLower + "<br>i hate you<br>" ||
    outputLower == storageLower + "<br>bitch<br>" ||
    outputLower == storageLower + "<br>moron<br>" ||
    outputLower == storageLower + "<br>weirdo<br>" ||
    outputLower == storageLower + "<br>jerk<br>" ||
    outputLower == storageLower + "<br>coward<br>" ||
    outputLower == storageLower + "<br>freak<br>"
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
  } else if (outputLower.startsWith(storageLower + "<br>would you")) {
    let wouldYou = [
      "Of course I would!",
      "Yes, I would.",
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
  } else if (outputLower.startsWith(storageLower + "<br>would")) {
    let wouldYou = [
      "Of course it would!",
      "Yes, it would.",
      "No, it wouldn't.",
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
  } else if (outputLower.startsWith(storageLower + "<br>could you")) {
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
      "Of course! Couldn't you?",
      "Absolutely I could!",
      "No way!",
      "Absolutely not! Could you?",
      "Stop asking me such stupid questions! But yes, I could.",
    ];
    const randomIndex = Math.floor(Math.random() * couldYou.length);
    const randomCould = couldYou[randomIndex];
    response(randomCould);
  } else if (outputLower.startsWith(storageLower + "<br>do you think")) {
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
      "No way!",
      "Absolutely not! Do you think so?",
      "Stop asking me such stupid questions! But yes, I do.",
    ];
    const randomIndex = Math.floor(Math.random() * doYouThink.length);
    const randomThink = doYouThink[randomIndex];
    response(randomThink);
  } else if (outputLower.startsWith(storageLower + "<br>am i")) {
    let amI = [
      "Of course you are!",
      "Yes, you are.",
      "No, you are not!",
      "I don't know, why are you asking me?",
      "I don't care if you are or not.",
      "I don't think you are.",
      "Do you think you are?",
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
      "Of course! Don't you think?",
      "Nope!",
      "Absolutely not! Do you think so?",
      "Stop asking me such stupid questions! But no, I'm not.",
    ];
    const randomIndex = Math.floor(Math.random() * areYou.length);
    const randomAreYou = areYou[randomIndex];
    response(randomAreYou);
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
    outputLower.startsWith(storageLower + "<br>yea but why")
  ) {
    let why = [
      "Isn't it obvious?",
      "I don't know. Stop bugging me!",
      "I simply don't care.",
      "Why not?",
      "Because I said so!",
      "Because shit happens.",
      "Who cares?",
      "Wouldn't you like to know.",
      "Because that's just the way it is.",
      "It's a question that may not have a clear answer.",
      "It's hard to say.",
      "I wouldn't know how to dumb it down enough so that you would understand.",
      "Because someone thought it was a good idea at the time.",
      "Because it is required by law or regulation.",
      "Because it satisfies me.",
      "Because it satisfies a basic human need or desire.",
    ];
    const randomIndex = Math.floor(Math.random() * why.length);
    const randomWhy = why[randomIndex];
    response(randomWhy);
  }
}

input.onkeypress = sendMessage;
send.onclick = sendMessage;
