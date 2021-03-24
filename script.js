import { conversation1, puzzle1 } from "./story/partOneReplay";

const localStorage = window.localStorage;

const botui = new BotUI("hello-world");
export const delay = 10;

const checkpoints = {
  conversation1,
  puzzle1
};
const startPoint = conversation1;

async function main() {
  let mode;
  if (!hasGame()) {
    await showMessage({
      cssClass: 'game',
      content: "Press 'Start' to begin the game"
    }, false);
    mode = await promptButton({
      action: [
        {
          text: "Start",
          value: "start"
        },
      ]
    }, false);
  } else {
    await showMessage({
      cssClass: 'game',
      content: "Welcome back!"
    }, false);
    mode = await promptButton({
      action: [
        {
          text: "Continue",
          value: "load"
        },
        {
          text: "Restart",
          value: "start"
        }
      ]
    }, false);
  }
  let nextPart;
  if (mode === "start") {
    clearGame();
    nextPart = await startPoint();
  } else if (mode === "load") {
    const {checkpoint, messages} = loadGame();
    for (const message of messages) {
      await showMessage(message, false);
    }
    nextPart = await checkpoints[checkpoint];
  }
  while (nextPart) {
    saveGame(nextPart.name);
    await showMessage({
      cssClass: 'game',
      content: "Your progress has been saved."
    }, false);
    nextPart = await nextPart();
  }
  saveGame(null);

  await showMessage({
    cssClass: 'game',
    content: "Congratulations! You finished the game."
  }, false);
}

let messageBuffer = [];
function saveGame(fnName) {
  console.log("saving")
  localStorage.setItem("checkpoint", fnName);
  const messages = JSON.parse(localStorage.getItem("messages")) || [];
  localStorage.setItem("messages", JSON.stringify([...messages, ...messageBuffer]));
  messageBuffer = [];
  console.log("saved")
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

export async function showMessage(message, save=true) {
  await botui.message.add(message);
  if (save) {
    messageBuffer.push(message);
  }
}

export async function promptText(action, save=true) {
  const res = await botui.action.text({...action, addMessage: false});
  const message = { human: true, content: res.text };
  await showMessage(message, save);
  return res.value;
}

export async function promptButton(action, save=true) {
  const res = await botui.action.button({...action, addMessage: false});
  const message = { human: true, content: res.text };
  await showMessage(message, save);
  return res.value;
}

export async function promptButtonText(action, save=true) {
  const res = await botui.action.buttontext({...action, addMessage: false});
  const message = { human: true, content: res.text };
  await showMessage(message, save);
  return res.value;
}

export async function promptSelect(action, save=true) {
  const res = await botui.action.select({...action, addMessage: false});
  const message = { human: true, content: res.text };
  await showMessage(message, save);
  return res.value;
}

main();

export default botui;