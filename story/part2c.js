import { showMessage, promptButton, delay } from "../script.js";
import { conversation2sequel } from "./part2sequel.js";

export async function conversation2c() {
  await showMessage({
    cssClass: "narrator",
    delay,
    loading: true,
    content: "![image](https://i.imgur.com/I7lY9Zh.jpg)"
  });

  await showMessage({
    cssClass: "narrator",
    delay,
    loading: true,
    content:
      "The classrooms where past batches of students used are still here! But you still can’t find your friends’ grandmother."
  });

  await showMessage({
    cssClass: "narrator",
    delay,
    loading: true,
    content:
      "You hear a few aunties in the carpark speaking loudly. As you look down from the second floor, you notice your friends’ grandmother!"
  });

  await showMessage({
    cssClass: "narrator",
    delay,
    loading: true,
    content:
      "You try to call them, but they did not notice you and your friends’ grandmother goes off in a car."
  });

  await promptButton({
    cssClass: "narrator",
    delay,
    action: [
      {
        text:
          "Go down to the carpark to talk to the aunties and find out where your friends’ grandmother went."
      }
    ]
  });

  await showMessage({
    delay,
    loading: true,
    content: "Hi dear, how may I help you? Why were you shouting just now?"
  });

  await promptButton({
    delay,
    action: [
      {
        text:
          "I am looking for my friend's grandmother! She has dementia and she is lost. I just saw her get into a car!"
      }
    ]
  });

  await showMessage({
    delay,
    loading: true,
    content:
      "Oh! You just missed her! Mrs Tio right? I used to work with her back in the 80’s."
  });

  await showMessage({
    delay,
    loading: true,
    content: "I booked a Grab for her back home."
  });

  await promptButton({
    delay,
    action: [
      {
        text: "Home? To Choa Chu Kang right?"
      }
    ]
  });

  await showMessage({
    delay,
    loading: true,
    content:
      "Oh no, she lives in Choa Chu Kang now? I'm sorry dear, I should have double checked with her. Let me write down the address."
  });

  await showMessage({
    delay,
    loading: true,
    content: "[3 Commonwealth Drive](#)"
  });

  await promptButton({
    delay,
    action: [
      {
        text: "No worries. I will try to find her. Thank you for your help."
      }
    ]
  });

  return conversation2sequel;
}
