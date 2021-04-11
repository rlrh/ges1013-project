import { showMessage, promptButton, delay } from "../script.js";

export async function conversation2a() {
  await showMessage({
    cssClass: "narrator",
    delay,
    loading: true,
    content:
      "![image](https://i.imgur.com/dkW5JMt.jpg)"
  });

  await promptButton({
    delay,
    action: [
      {
        text: "Follow the sign board and head left to general enquiries"
      }
    ]
  });

  await showMessage({
    cssClass: "narrator",
    delay,
    loading: true,
    content:
      "![image](https://i.imgur.com/b1XRj0c.jpg)"
  });

  await showMessage({
    cssClass: "narrator",
    delay,
    loading: true,
    content:
      "You find a senior staff at the front desk of CDAC."
  });

  await showMessage({
    delay,
    loading: true,
    content:
      "Hi dear, how may I help you today?"
  });

  await promptButton({
    delay,
    action: [
      {
        text: "I am looking for my friend's grandmother! She has dementia and tends to wander around this area. I was wondering if you had seen her around here? She is around 70-80 years old."
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
    content:
      "I booked a Grab for her back to Tanglin Halt. That’s where she lives right?"
  });

  await promptButton({
    delay,
    action: [
      {
        text: "Oh no. She actually lives in Choa Chu Kang now."
      }
    ]
  });

  await showMessage({
    delay,
    loading: true,
    content:
      "Oh no dear, I am sorry. She used to live in Tanglin Halt back in the 80’s. She also told me that she still lives there, it must have been her dementia."
  });

  await promptButton({
    delay,
    action: [
      {
        text: "No worries. I will try to find her. Thank you for your help."
      }
    ]
  });
}