import { showMessage, promptButtonText, promptText, delay } from "./script.js";

export async function generatePuzzle(hints, correctAnswerFn, answerPlaceholder ="Your answer", hintButtonText="I need a hint", wrongAnswerText="Please try again", cssClass=[], showHint=false,showAllHints=false) {
  let hintIndex = 0;
  async function puzzlePrompt() {
    let res;

    if (showHint) {
      if (showAllHints) {
        while (hintIndex < hints.length) {
          await showMessage({
            cssClass,
            delay,
            loading: true,
            ...hints[hintIndex++]
          });
        }
      } else {
        await showMessage({
          cssClass,
          delay,
          loading: true,
          ...hints[hintIndex++]
        });
      } 
    }

    if (hintIndex < hints.length) {
      res = await promptButtonText({
        delay,
        actionText: {
            placeholder: answerPlaceholder
        },
        actionButton: [
          {
            text: hintButtonText,
            value: "hint"
          }
        ]
      });
    } else {
      res = await promptText({
        delay,
        action: {
          placeholder: answerPlaceholder
        }
      });
    }
    
    if (correctAnswerFn(res.value)) {
      console.log("correct");
      return res.value;
    } else if (res.value == "hint") {
      console.log(`hint ${hintIndex}`);
      if (showAllHints) {
        while (hintIndex < hints.length) {
          await showMessage({
            cssClass,
            delay,
            loading: true,
            ...hints[hintIndex++]
          });
        }
      } else {
        await showMessage({
          cssClass,
          delay,
          loading: true,
          ...hints[hintIndex++]
        });
      } 
      await puzzlePrompt();
    } else {
      console.log("wrong");
      await showMessage({
        cssClass,
        delay,
        loading: true,
        content: wrongAnswerText
      });
      await puzzlePrompt();
    }
  }
  await puzzlePrompt();
}

/*
let hintIndex = 0;
  const hints = [
    {
      type: 'embed', // this is 'text' by default
      content: 'https://www.google.com/maps/d/embed?mid=1P2_glEKlr2C_EN8RcAE6-VYVeZevNplx'
    },
    {
      content: "The school was established before 1965."
    },
    {
      content: "Unlike most schools, it's motto is not in Latin."
    }
  ]
  const correctAnswer = (answer) => answer.toLowerCase().includes("chung cheng");

  async function puzzlePrompt() {
    let res;
    if (hintIndex < hints.length) {
      res = await botui.action.buttontext({
        delay,
        actionText: {
            placeholder: "Name of the school"
        },
        actionButton: [
          {
            text: "I need a hint",
            value: "hint"
          }
        ]
      });
    } else {
      res = await botui.action.text({
        delay,
        action: {
            placeholder: "Name of the school"
        }
      });
    }

    if (correctAnswer(res.value)) {
      console.log("correct");
      return;
    } else if (res.value == "hint") {
      console.log("hint");
      await botui.message.add({
        cssClass: 'narrator',
        delay,
        loading: true,
        ...hints[hintIndex++]
      });
      await puzzlePrompt();
    } else {
      console.log("wrong");
      await botui.message.add({
        cssClass: 'narrator',
        delay,
        loading: true,
        content: "Oh no. That is not the correct school. Please try again."
      });
      await puzzlePrompt();
    }
  };
  await puzzlePrompt();
  */