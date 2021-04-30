import { showMessage, promptButton, delay } from "../script.js";
import { generatePuzzle } from "../helpers.js";
import { conversation2 } from "./part2.js";

export async function conversation1() {
  await showMessage({
    delay,
    cssClass: "narrator",
    content: "Your friend is talking to you"
  });
  await showMessage({
    delay,
    loading: true,
    content: "Hey, are you free now? I need your help urgently!!"
  });
  await promptButton({
    delay,
    action: [
      {
        text: "Yep. what's the matter?"
      }
    ]
  });
  await showMessage({
    delay: delay * 2,
    loading: true,
    content:
      "Do you remember the unit number I used to live at? I need your help to check on my grandmother. My parents and I cannot get in touch with her since yesterday. We are worried as she has slight dementia"
  });
  await promptButton({
    delay,
    action: [
      {
        text:
          "Oh no, I will head down now. Its the one right beside the carpark right?"
      }
    ]
  });
  await showMessage({
    delay,
    loading: true,
    content:
      "Yes on level 6. I think you can take the connecting bridge from your unit"
  });
  await promptButton({
    delay,
    action: [
      {
        text:
          "eh. I've reached but no one is answering the door. I think the lights are on?"
      }
    ]
  });
  await showMessage({
    delay,
    loading: true,
    content: "you can use the spare key. It's under the 3rd flower pot"
  });
  await showMessage({
    delay: delay,
    loading: true,
    content: "Is she in? hello???"
  });
  await promptButton({
    delay,
    action: [
      {
        text:
          "your grandma is not at home. the gate was unlocked so i went in and searched the house. I found this on the door step though?? What is this?"
      }
    ]
  });
  await showMessage({
    human: true,
    content:
      "![image](https://i.imgur.com/FAZHqen.jpg)"
  });
  await showMessage({
    delay,
    loading: true,
    content:
      "sigh, my grandma might have wandered out again. Can I trouble you again to find her?"
  });
  await showMessage({
    delay,
    loading: true,
    content:
      "I'm not sure about stapler-looking item though... Let me ask my mother."
  });
  await showMessage({
    delay: delay * 2,
    loading: true,
    content:
      "Oh, its my mum's. It’s a stapler bullet remover. She used it last time in secondary school."
  });
  await showMessage({
    delay: delay * 2,
    loading: true,
    content:
      "Hmm. Maybe grandma went to Tanjong Katong area again since my mother used to study there. We also often find her there in the past."
  });
  await showMessage({
    delay: delay,
    loading: true,
    content:
      "Let me know if you can find my grandma there."
  });
  await showMessage({
    delay: delay,
    loading: true,
    content: "ah sorry, I have to go now, my lesson is starting. Update me!"
  });

  return puzzle1;
}

export async function puzzle1() {
  await showMessage({
    cssClass: "narrator",
    delay,
    loading: true,
    content:
      "Task #1: Based on your conversation with your friend and the hints provided, find out the name of her mother's secondary school. You can also use the Internet to help you figure out the answer."
  });

  await showMessage({
    cssClass: "narrator",
    delay,
    loading: true,
    content:
      "Here is a hint: ![image](https://i.imgur.com/s7VjoXp.jpg)"
  });

  await showMessage({
    cssClass: "narrator",
    delay,
    loading: true,
    content: "What is the school her mum attended?"
  });

  const hints = [
    {
      type: "embed", // this is 'text' by default
      content:
        "https://www.google.com/maps/d/embed?mid=1P2_glEKlr2C_EN8RcAE6-VYVeZevNplx"
    },
    {
      content: "Hint 1.1: They were forced to stop lessons due to the Japanese Occupation."
    },
    {
      content: "Hint 1.2: Their campus is known for its lake."
    }
  ];
  const correctAnswerFn = (answer) =>
    answer.toLowerCase().includes("chung cheng");
  const answerPlaceholder = "Name of the school";
  const hintButtonText = "I need more hints";
  const wrongAnswerText =
    "Oh no. That is not the correct school. Please try again.";
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
      "That is correct! Your friend's mum attended Chung Cheng High School (Main)."
  });

  await promptButton({
    delay,
    cssClass: "narrator",
    action: [
      {
        text: "Next"
      }
    ]
  }, false);

  await showMessage({
    cssClass: "narrator",
    delay,
    loading: true,
    content:
      "You are now at the front gate of Chung Cheng High School (Main). This entrance arch is a gazetted national monument."
  });

  await showMessage({
    cssClass: "narrator",
    delay,
    loading: true,
    content:
      "The school was built in 1947 and designed by their alumni, Mr Ho Beng Heng. It is designed in a Chinese National architectural style. Before World War II, the school supervisor was national hero, Lim Bo Seng. The school also features a large lake inside the school. Here is [more info](https://www.roots.gov.sg/places/places-landing/Places/national-monuments/chung-cheng-high-school-main-administration-building-and-entrance-arch)^"
  });

  await showMessage({
    cssClass: "narrator",
    delay,
    loading: true,
    content:
      "![image](https://i.imgur.com/xp3VLtV.png)"
  });

  return conversation2;
}
