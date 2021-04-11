import { showMessage, promptButton, delay } from "../script.js";
import { generatePuzzle } from "../helpers.js";

export async function conversation2sequel() {
  await showMessage({
    delay,
    cssClass: "narrator",
    content: "Your friend is talking to you"
  });

  await showMessage({
    delay,
    loading: true,
    content: "Any news of her?"
  });

  await promptButton({
    delay,
    action: [
      {
        text: "Yes, I think she left the former Yock Eng School by taxi. But I don’t really know exactly where she went. Do you happen to be familiar with that area?"
      }
    ]
  });

  await showMessage({
    delay,
    cssClass: "narrator",
    content: "You send her the information you found."
  });

  await showMessage({
    delay,
    loading: true,
    content: "I think I know where the place is. You can try to key in the information on google maps. My family used to stay in that neighbourhood before I was born."
  });

  await promptButton({
    delay,
    action: [
      {
        text: "Okay. I will let you know once I have reached the place."
      }
    ]
  });

  await showMessage({
    delay,
    cssClass: "narrator",
    content: "Task #3: What is the name of the MRT station that is closest to the neighbourhood?"
  });
  
  const hints = [];
  const correctAnswerFn = (answer) =>
    answer.toLowerCase().includes("commonwealth");
  const answerPlaceholder = "Name of the MRT station";
  const hintButtonText = "I need more hints";
  const wrongAnswerText =
    "That is not the correct MRT station. Please try again.";
  await generatePuzzle(
    hints,
    correctAnswerFn,
    answerPlaceholder,
    hintButtonText,
    wrongAnswerText,
    "narrator"
  );

  await showMessage({
    cssClass: "narrator",
    delay,
    loading: true,
    content:
      "That is correct!"
  });
}