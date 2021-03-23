import story from "./parts/one";

const botui = new BotUI("hello-world");
export const delay = 10;

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