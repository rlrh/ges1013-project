import { showMessage, promptButton, delay } from "../script.js";
import { conversation2sequel } from "./part2sequel.js";

export async function conversation2b() {
  await showMessage({
    cssClass: "narrator",
    delay,
    loading: true,
    content: "![image](https://i.imgur.com/bmKcFnc.jpg)"
  });

  await showMessage({
    cssClass: "narrator",
    delay,
    loading: true,
    content:
      "You arrive at the open area but there is no one. You continue to walk around the area and you saw a note on the floor."
  });

  await promptButton({
    cssClass: "narrator",
    delay,
    action: [
      {
        text: "Pick up the note"
      }
    ]
  });

  await showMessage({
    cssClass: "narrator",
    delay,
    loading: true,
    type: "html",
    content:
      "There is a string of numbers on the note: <strong>1.299845, 103.797689</strong>"
  });

  await promptButton({
    delay,
    action: [
      {
        text: "... I wonder what these numbers are"
      }
    ]
  });

  await showMessage({
    cssClass: "narrator",
    delay,
    loading: true,
    content: "A CDAC staff walks past."
  });

  await showMessage({
    delay,
    loading: true,
    content:
      "Hello. Can I help you with anything? You cannot walk around the premises without permission."
  });

  await promptButton({
    delay,
    action: [
      {
        text:
          "Oh. I’m sorry. Actually, I am here to find my friend’s grandmother who has dementia. Have you seen an elderly lady walking around here recently?"
      }
    ]
  });

  await showMessage({
    delay,
    loading: true,
    content:
      "Hmm. Ah, I remember seeing an old lady entering a taxi. If that is your friend’s grandmother, she must have went off to another place."
  });

  return conversation2sequel;
}
