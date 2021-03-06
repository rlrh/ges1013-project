import { showMessage, promptButton, delay } from "../script.js";
import { generatePuzzle } from "../helpers.js";
import { conversation2a } from "./part2a.js";
import { conversation2b } from "./part2b.js";
import { conversation2c } from "./part2c.js";

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
  await showMessage({
    delay,
    loading: true,
    content: "Oh… Let me check with my mum if there are other places she might have went to. "
  });
  await promptButton({
    delay,
    action: [
      {
        text: "Sure. In the meantime, I will ask around."
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
      "Oh!! I was just going to tell you about Yock Eng too. According to my mum, my grandmother used to work there. My grandma used to cheer my mum on during Yock Eng and Chung Cheng’s combined Sports Meet despite being from different schools!"
  });
  await showMessage({
    delay,
    loading: true,
    content:
      "This must be a photograph she took while she was a clerk there! Update me if you can find her there."
  });

  return puzzle2;
}

export async function puzzle2() {

  await showMessage({
    delay,
    loading: true,
    cssClass: "narrator",
    content:
      "Your friend's grandmother must have wandered there! You notice the date 24/03/1981 on the back of the photo."
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

  await showMessage({
    cssClass: "narrator",
    delay,
    loading: true,
    content:
      "![image](https://i.imgur.com/XSaAiYc.jpg) You are now at the front gate of CDAC also known as the Former Yock Eng Free School. This building was built in 1941 and was used as a school until 1985. The main building’s octagonal clock tower is a distinctive feature of the building and has served as a landmark for the area. Notably, during the Japanese Occupation, the building was used as a Japanese Military Police HQ."
  });

  await promptButton({
    delay,
    action: [
      {
        text: "... Oh wow. This place looks exactly like the photograph she took in 1981. I wonder if she is here."
      }
    ]
  });

  await promptButton({
    cssClass: "narrator",
    delay,
    action: [
      {
        text: "Explore the building"
      }
    ]
  });

  await showMessage({
    cssClass: "narrator",
    delay,
    loading: true,
    content:
      "![image](https://i.imgur.com/QYAw8Ki.jpg) You found a map of the building at the entrance. Choose an option to explore the place."
  });

  const OPTION_A = "Staircase landing";
  const OPTION_B = "Open area";
  const OPTION_C = "Rooms on the 2nd storey";
  const res = await promptButton({
    cssClass: "narrator",
    delay,
    action: [
      {
        text: OPTION_A
      },
      {
        text: OPTION_B
      },
      {
        text: OPTION_C
      }
    ]
  });
  switch (res.text) {
    case OPTION_A:
      return conversation2a;
    case OPTION_B:
      return conversation2b;
    case OPTION_C:
      return conversation2c;
    default:
      return null;
  }
}
