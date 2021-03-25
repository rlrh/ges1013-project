import { showMessage, promptButton, delay } from "../script.js";
import { generatePuzzle } from "../helpers.js";

export async function conversation2() {
  await showMessage({
    delay,
    loading: true,
    content: "Hi friend. My lesson is finally over! Have you found the school?"
  });
  await promptButton({
    delay,
    action: [
      {
        text:
          "Yep. I am at the front gate but it doesn't seem like your grandma is here"
      }
    ]
  });
  await promptButton({
    delay,
    cssClass: "narrator",
    action: [
      {
        text: "Approach the Security Guard for help"
      }
    ]
  });
  await showMessage({
    delay,
    loading: true,
    cssClass: "narrator",
    content:
      "The security guard saw an elderly woman recently and noticed she dropped a photograph. After explaining your situation to him, he handed the photo over."
  });
  await promptButton({
    delay,
    action: [
      {
        text: "I found this really old photo of Yock Eng High School??"
      }
    ]
  });
  await showMessage({
    delay,
    loading: true,
    human: true,
    content:
      "![image](https://i.pinimg.com/564x/5f/e4/32/5fe4329172fd5b0cbf62bd32b0645e21.jpg)"
  });
  await showMessage({
    delay,
    loading: true,
    content:
      "Oh!! my mum said my grandmother used to work there. It must be a photograph she took while she was a clerk there!"
  });

  return puzzle2;
}

export async function puzzle2() {

  await showMessage({
    delay,
    loading: true,
    cssClass: "narrator",
    content:
      "Your friends’ grandmother must have wandered there! You notice the date 24/03/1981 on the back of the photo."
  });

  await showMessage({
    delay,
    loading: true,
    cssClass: "narrator",
    content: "Find out the current name of this building."
  });

  const correctAnswerFn = (answer) =>
    answer.toLowerCase().includes("cdac") ||
    answer.toLowerCase().includes("chinese development assistance council");
  const answerPlaceholder = "Name of the building";
  const wrongAnswerText = "That is not the correct name. Please try again.";
  await generatePuzzle(
    [],
    correctAnswerFn,
    answerPlaceholder,
    undefined,
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
