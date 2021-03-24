import storyStart, { conversation1, puzzle1 } from "./story/partOne";

const botui = new BotUI("hello-world");
export const delay = 10;

async function main() {
  await botui.message.add({
    cssClass: 'game',
    content: "Press 'Start' to begin the game"
  });
  const res = await botui.action.button({
    action: [
      {
        text: "Start",
        value: "start"
      },
      {
        text: "Load",
        value: "load"
      }
    ]
  });
  const mode = res.value;
  if (mode === "start") {
    const nextPart = await storyStart();
    while (nextPart) {
      nextPart = await nextPart();
    }
  }

  await botui.message.add({
    cssClass: 'game',
    content: "Congratulations! You finished the game."
  });
}

main();

export default botui;