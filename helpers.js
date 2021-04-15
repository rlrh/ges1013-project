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
    } else if (res.value === "hint") {
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