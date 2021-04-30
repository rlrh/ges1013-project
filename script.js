import { conversation1, puzzle1 } from "./story/part1.js";
import { conversation2, puzzle2 } from "./story/part2.js";
import { conversation2a } from "./story/part2a.js";
import { conversation2b } from "./story/part2b.js";
import { conversation2c } from "./story/part2c.js";
import { conversation2sequel } from "./story/part2sequel.js";
import { conversation3, puzzle3, conversation4, puzzle4, conversation5, conversation6, puzzle6 } from "./story/part3.js";

const localStorage = window.localStorage;

const botui = new BotUI("hello-world");
export const delay = 1000;

const checkpoints = {
  conversation1,
  puzzle1,
  conversation2,
  puzzle2,
  conversation2a, 
  conversation2b,
  conversation2c,
  conversation2sequel,
  conversation3,
  puzzle3,
  conversation4,
  puzzle4, 
  conversation5,
  conversation6,
  puzzle6
};
const startPoint = conversation1;

async function main() {
  let res;
  if (!hasGame()) {
    await showMessage(
      {
        cssClass: "game",
        content: "Press 'Start' to begin the game"
      },
      false
    );
    res = await promptButton(
      {
        action: [
          {
            text: "Start Game",
            value: "start"
          }
        ]
      },
      false
    );
  } else {
    await showMessage(
      {
        cssClass: "game",
        content: "Welcome back!"
      },
      false
    );
    res = await promptButton(
      {
        cssClass: "game",
        action: [
          {
            text: "Continue Game",
            value: "load"
          },
          {
            text: "Restart Game",
            value: "start"
          }
        ]
      },
      false
    );
  }
  let nextPart;
  const mode = res.value;
  if (mode === "start") {
    clearGame();
    nextPart = await startPoint();
  } else if (mode === "load") {
    const { checkpoint, messages } = loadGame();
    for (const message of messages) {
      await showMessage({ ...message, delay: 1 }, false);
    }
    nextPart = await checkpoints[checkpoint];
  }
  while (nextPart) {
    if (mode !== "load") {
      await promptButton(
        {
          delay,
          cssClass: "game",
          action: [
            {
              text: "Continue"
            }
          ]
        },
        false
      );
      saveGame(nextPart.name);
      await showMessage(
        {
          cssClass: "game",
          content: "Your progress has been saved."
        },
        false
      );
    }
    nextPart = await nextPart();
  }
  saveGame(null);

}

let messageBuffer = [];

function saveGame(fnName) {
  console.log("saving");
  localStorage.setItem("checkpoint", fnName);
  const messages = JSON.parse(localStorage.getItem("messages")) || [];
  localStorage.setItem(
    "messages",
    JSON.stringify([...messages, ...messageBuffer])
  );
  messageBuffer = [];
  console.log("saved");
}

function hasGame() {
  return localStorage.getItem("checkpoint") !== null;
}

function loadGame() {
  const checkpoint = localStorage.getItem("checkpoint");
  const messages = JSON.parse(localStorage.getItem("messages")) || [];
  return { checkpoint, messages };
}

function clearGame() {
  localStorage.removeItem("checkpoint");
  localStorage.removeItem("messages");
}

export async function showMessage(message, save = true) {
  await botui.message.add(message);
  if (save) {
    messageBuffer.push(message);
  }
}

export async function promptText(action, save = true) {
  const res = await botui.action.text({ ...action, addMessage: false });
  const message = { cssClass: action.cssClass, human: true, content: res.text || res.value };
  await showMessage(message, save);
  return res;
}

export async function promptButton(action, save = true) {
  const res = await botui.action.button({ ...action, addMessage: false });
  const message = { cssClass: action.cssClass, human: true, content: res.text || res.value };
  await showMessage(message, save);
  return res;
}

export async function promptButtonText(action, save = true) {
  const res = await botui.action.buttontext({ ...action, addMessage: false });
  console.log(res);
  const message = { cssClass: action.cssClass, human: true, content: res.text || res.value };
  await showMessage(message, save);
  return res;
}

export async function promptSelect(action, save = true) {
  const res = await botui.action.select({ ...action, addMessage: false });
  const message = { cssClass: action.cssClass, human: true, content: res.text || res.value };
  await showMessage(message, save);
  return res;
}

main();

export default botui;
