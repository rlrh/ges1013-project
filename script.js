import story from "./story/partOne";

const botui = new BotUI("hello-world");
export const delay = 1000;

async function main() {
  await botui.message.add({
    cssClass: 'game',
    content: "Press 'Start' to begin the game"
  });
  await botui.action.button({
    action: [
      {
        text: "Start",
        value: "start"
      }
    ]
  });
  await story();
  await botui.message.add({
    cssClass: 'game',
    content: "Congratulations! You finished the game."
  });
}

main();

export default botui;