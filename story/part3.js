import { showMessage, promptButton, delay } from "../script.js";
import { generatePuzzle } from "../helpers.js";

export async function conversation3() {
  await showMessage({
    cssClass: "game",
    delay,
    loading: true,
    content: "Congratulations! You have completed 1st half of the game."
  });
  await showMessage({
    cssClass: "game",
    delay,
    loading: true,
    content: "The 2nd half of the game requires you to physically visit 3 sites. The travelling time between each site is around 15 to 25 mins by bus or 5 to 10 mins by car."
  });
  await showMessage({
    cssClass: "game",
    delay,
    loading: true,
    content: "In addition to using the internet, you need to physically visit the sites to search for clues and to complete tasks. Feel free to take your time to explore the sites and complete the given tasks."
  });
  await showMessage({
    cssClass: "game",
    delay,
    loading: true,
    content: "Click the start button once you are in the Tanglin Halt neighbourhood."
  });
  await promptButton({
    cssClass: "game",
    delay,
    action: [
      {
        text: "Start"
      }
    ]
  });
  await showMessage({
    cssClass: "narrator",
    delay,
    loading: true,
    content: "Your friend is talking to you"
  });
  await showMessage({
    delay,
    loading: true,
    content: "Hi! Have you reached Tanglin Halt?"
  });
  await promptButton({
    delay,
    action: [
      {
        text: "Yes, do you know where she might have gone to?"
      }
    ]
  });
  await showMessage({
    delay: delay * 2,
    loading: true,
    content: "Hmm. When I was young, my grandmother used to bring me to a shop that sells the most delicious sugar doughnuts. If I remember correctly, the shop’s signage is blue in colour. It’s one of the oldest bakeries in the area."
  });

  return puzzle3;
}

export async function puzzle3() {
  await showMessage({
    cssClass: "narrator",
    delay,
    loading: true,
    content: "Note: This map shows an area of Tanglin Halt which the game will take place in. This means that you only need to travel within the given boundary to search for clues and to complete tasks. Click on the ‘full screen’ icon to navigate on Google Maps."
  });
  await showMessage({
    cssClass: "narrator",
    delay,
    loading: true,
    type: "embed",
    content: "https://www.google.com/maps/d/u/0/embed?mid=1EsBjCQG9NDlvnc4pgN99Wtk0SWNWtAxZ"
  });
  await showMessage({
    cssClass: "narrator",
    delay,
    loading: true,
    content: "Task #4: Find and visit the bakery. Then, type out its name."
  });
  
  const hints = [];
  const correctAnswerFn = (answer) =>
    answer.toLowerCase().includes("hock ann");
  const answerPlaceholder = "Name of the bakery";
  const hintButtonText = "I need more hints";
  const wrongAnswerText =
    "That is not the correct name. Please try again.";
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
      "That’s right! Hock Ann Confectionery has been serving residents since 1982. Its sugar doughnuts, swiss roll, and mini cakes are some of its popular items. Check them out [here](https://www.instagram.com/hockannconfectionery/?hl=en)^"
  });
  await showMessage({
    cssClass: "narrator",
    delay,
    loading: true,
    content:
      "However, the shop will be closed down by the end of 2021, along with the adjacent hawker centre and blocks. If they are open, do try out some of their baked goods and take pictures there!"
  });

  return conversation4;
}

export async function conversation4() {
  await promptButton({
    delay,
    action: [
      {
        text: "I’m at the bakery now. Apparently, your grandmother was here 10 mins ago. The owner also told me that he will be retiring soon..."
      }
    ]
  });
  await showMessage({
    delay,
    loading: true,
    content:
      "Oh no. My grandmother loved that bakery. She must have been there to buy their doughnuts. Can you check the area? She wouldn’t have wandered far."
  });
  await promptButton({
    delay,
    action: [
      {
        text: "Okay. I think I will ask the people around if they have seen her."
      }
    ]
  });
  await showMessage({
    cssClass: "narrator",
    delay,
    loading: true,
    content:
      "You look around to see if there is anyone who might be here 10 mins ago. You notice a brightly lit neon sign beside the bakery. ![neon sign](https://i.imgur.com/bhwuIQE.jpg)"
  });
  await showMessage({
    cssClass: "narrator",
    delay,
    loading: true,
    content: "Enter the place with the pink sign"
  });
  await promptButton({
    cssClass: "narrator",
    delay,
    action: [
      {
        text: "I've reached"
      }
    ]
  });
  await showMessage({
    cssClass: "narrator",
    delay,
    loading: true,
    content:
      "This is a community museum called Museum @ My Queenstown. The current exhibition showcases photographs taken by some of the residents, as well as, the various places in Tanglin Halt. [If you have time, we encourage you to view the exhibition and talk to the volunteers there to learn more]"
  });
  await showMessage({
    delay,
    loading: true,
    content:
      "I just talked to my mother. She shared some stories about their life in Tanglin Halt. They shifted there in the 1960s."
  });
  await promptButton({
    cssClass: "game",
    delay,
    action: [
      {
        text: "Next"
      }
    ]
  }, false);
  await showMessage({
    delay,
    loading: true,
    content:
      "In the 1970s, they took part in something called ‘Operation Broomstick’. Apparently, broomsticks were distributed to residents and they had to help clean up the neighbourhood. "
  });
  await showMessage({
    delay,
    loading: true,
    content: "![image](https://i.imgur.com/RG6nxFL.jpg)"
  });
  await showMessage({
    delay: delay * 3,
    loading: true,
    content: "![image](https://i.imgur.com/2cv0UbF.jpg)"
  });
  await showMessage({
    delay: delay * 3,
    loading: true,
    content: "![image](https://i.imgur.com/6jkrFC7.jpg)"
  });
  await promptButton({
    cssClass: "game",
    delay,
    action: [
      {
        text: "Next"
      }
    ]
  }, false);
  await showMessage({
    delay,
    loading: true,
    content:
      "Oh and in the 1980s, my grandmother almost got caught by the police! Apparently, she had bought some illegal 4D bets somewhere in Tanglin Halt."
  });
  await showMessage({
    delay,
    loading: true,
    content: "![image](https://i.imgur.com/aEnrxyC.jpg)"
  });

  return puzzle4;
}

export async function puzzle4() {
  await showMessage({
    cssClass: "narrator",
    delay,
    loading: true,
    content:
      "Task #5: Based on your conversation with your friend, find the next location where your friend’s grandmother might have went."
  });
  await showMessage({
    cssClass: "narrator",
    content:
      "Hint: This location is mentioned in the exhibition at Museum @ My Queenstown."
  });
  await showMessage({
    cssClass: "narrator",
    content:
      "Reminder: The location is within the boundary drawn on Google Maps that we sent earlier."
  });

  const hints = [
    {
      content:
        "The location can be found in the 1958 SIT planning map of Queenstown. Compare this 1958 map with present-day Tanglin Halt. ![image](https://i.imgur.com/WpClDMy.jpg)"
    },
    {
      content: "The building (before renovation) can be seen in the background of this image taken in 1994. ![image](https://i.imgur.com/AHmtqL0.jpg) "
    },
    {
      content:
        "This place is home to a number of famous stalls. One stall continued to attract customers from across Singapore, leading to long queues during the circuit breaker period."
    },
  ];
  const correctAnswerFn = (answer) =>
    answer.toLowerCase().includes("tanglin halt market") || answer.toLowerCase().trim() === "market";
  const answerPlaceholder = "Name of the place";
  const hintButtonText = "I need more hints";
  const wrongAnswerText =
    "That is not the correct place. Please try again.";
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
    content:
      "Congrats, you have found the correct location! Tanglin Halt Market was built in the 1960s and was previously called Queenstown IV Market. (This is because Tanglin Halt is ‘neighbourhood 4’ of Queenstown)."
  });
  await showMessage({
    cssClass: "narrator",
    content:
      "This market consists of a hawker centre, a wet market and some shops, including an aquarium. Find out more [here](https://www.roots.gov.sg/places/places-landing/trails/my-queenstown-heritage-trail)"
  });

  return conversation5;
}

export async function conversation5() {
  await showMessage({
    cssClass: "narrator",
    delay,
    loading: true,
    content: "Head to the wet market portion and look for stall number 104 and 105 ![image](https://i.imgur.com/Y0CLDoc.jpg)"
  });
  await promptButton({
    cssClass: "narrator",
    delay,
    action: [
      {
        text: "I've reached"
      }
    ]
  });
  await showMessage({
    cssClass: "narrator",
    delay,
    loading: true,
    content: "What is written on the signboard (the one shown in the middle of the above image)?"
  });
  const hints = [];
  const correctAnswerFn = (answer) =>
    answer.toLowerCase().includes("fresh chicken");
  const answerPlaceholder = "Text written on the signboard";
  const hintButtonText = "I need more hints";
  const wrongAnswerText =
    "That is not the correct text. Please try again.";
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
    content: "👍"
  });

  return conversation6;
}

export async function conversation6() {
  await showMessage({
    cssClass: "narrator",
    delay,
    loading: true,
    content: "You notice a small coin purse on the floor."
  });
  await promptButton({
    cssClass: "narrator",
    delay,
    action: [
      {
        text: "Pick up purse"
      }
    ]
  });
  await promptButton({
    delay,
    action: [
      {
        text: "whose wallet is this? [Opens purse] There's an IC inside. Mrs Tio Geok Lan... Oh, there is a photo inside too"
      }
    ]
  });
  await showMessage({
    cssClass: "narrator",
    delay,
    loading: true,
    content: "![image](https://www.nas.gov.sg/archivesonline/watermark/picas_data/tn_pcd/19980005884-8120-3181-2129/img0068.jpg)"
  });
  await promptButton({
    delay,
    action: [
      {
        text: "Hey! Your grandmother left behind her wallet at Tanglin Halt Market. There is also an old photograph of a hospital inside and it is marked 1966. Do you think she might have gone there?"
      }
    ]
  });
  await showMessage({
    delay,
    loading: true,
    content: "Hmm. Yep, I think she might go there. Since the hospital is where my mother was born. The couple carrying a baby in the photograph are my grandparents."
  });
  await showMessage({
    cssClass: "narrator",
    delay,
    loading: true,
    content: "Task #6: Find out the current name of the hospital."
  });
  await showMessage({
    cssClass: "narrator",
    delay,
    loading: true,
    content: "Hint: This hospital is near Tanglin Halt and it is marked out on the 1958 SIT [planning map](https://drive.google.com/file/d/1dv56BA1YJ648yrQSSeAU31LiR2ahX9zQ/view?usp=sharing)."
  });

  const hints = [];
  const correctAnswerFn = (answer) =>
    answer.toLowerCase().includes("alexandra hospital");
  const answerPlaceholder = "Current name of the hospital";
  const hintButtonText = "I need more hints";
  const wrongAnswerText =
    "That is not the correct name. Please try again.";
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
    content: "That is correct!  You can head over to Alexandra Hospital now."
  });

  await showMessage({
    cssClass: "narrator",
    delay,
    loading: true,
    content: "Recommended bus route to Alexandra Hospital: Bus 100 or 195 from Commonwealth MRT station Exit B/C → 5 stops → Alight at bus stop ‘Opp Queensway Shop Ctr’ → Walk 3 mins to Alexandra Hospital (Total travelling time: 15 mins)"
  });

  await promptButton({
    cssClass: "narrator",
    delay,
    action: [
      {
        text: "I have arrived"
      }
    ]
  });

  await showMessage({
    cssClass: "narrator",
    delay,
    loading: true,
    content: "You've made it to the entrance of Alexandra Hospital. ![image](https://i.ibb.co/Nn1btwc/main-building.jpg)"
  });

  await showMessage({
    cssClass: "narrator",
    delay,
    loading: true,
    content: "Opened in 1940, the former British Military Hospital occupied the site of an earlier Alexandra Barracks hospital that was established around 1908. As one of the most advanced and best-equipped hospitals in Southeast Asia, it served as the main hospital for the British Far East Command during World War II."
  });

  await promptButton({
    cssClass: "narrator",
    delay,
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
    content: "On 14 February 1942, the hospital was attacked by Japanese troops and more than 200 patients and medical staff were brutally massacred. With the withdrawal of British troops from Singapore in 1971, it was converted into a civilian hospital and renamed as Alexandra Hospital."
  });

  await promptButton({
    cssClass: "narrator",
    delay,
    action: [
      {
        text: "Next"
      }
    ],
  }, false);

  await showMessage({
    cssClass: "narrator",
    delay,
    loading: true,
    content: "The building is thus a reminder of Singapore’s role as a major British military base, the calamity of World War II, and the development of public healthcare after independence. In recognition of its historical significance, it was marked as a Historic Site by the National Heritage Board (NHB) in 1998, and recognising that it is also a physical and social landmark, it was gazetted for conservation by URA in 2014."
  });

  await promptButton({
    delay,
    action: [
      {
        text: "I have reached Alexandra hospital. Where should I head to first?"
      }
    ]
  });

  await showMessage({
    delay,
    loading: true,
    content: "The fountain! I remember seeing a fountain in one of my old family photo albums. Oh, and do remember to stay a safe distance away from the hospital wards due to the pandemic. I doubt the hospital staff will allow my grandma to enter them anyway."
  });

  return puzzle6;
}

export async function puzzle6() {

  await showMessage({
    cssClass: "narrator",
    delay,
    loading: true,
    content: "Task #7: Search for the fountain. How many decorative items are in the fountain? Do note that you do not have to enter any of the hospital buildings! Tasks will be completed using clues that are outdoors. "
  });

  const hints = [
    {
      content: "Hint #1: The fountain is located in the garden."
    }
  ];
  const correctAnswerFn = (answer) =>
    answer.toLowerCase() === "3" || answer.toLowerCase().includes("three");
  const answerPlaceholder = "Number of decorative items in the fountain";
  const hintButtonText = "I need more hints";
  const wrongAnswerText =
    "That is not the correct number. Please try again.";
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
    content: "That is correct!"
  });

  await promptButton({
    delay,
    action: [
      {
        text: "I’m at the fountain now. I don’t see your..."
      }
    ]
  });

  await promptButton({
    delay,
    action: [
      {
        text: "Hold on."
      }
    ]
  });

  await showMessage({
    cssClass: "narrator",
    delay,
    loading: true,
    content: "You heard the rustling of grass behind you. Turning around, you see an elderly lady surrounded by the hospital garden chickens. She is tearing off pieces of bread to feed them. "
  });

  await promptButton({
    cssClass: "narrator",
    delay,
    action: [
      {
        text: "Call out to her"
      }
    ]
  });

  await promptButton({
    delay,
    action: [
      {
        text: "Hello. Are you Mrs Tio? I am a friend of your granddaughter."
      }
    ]
  });

  await showMessage({
    cssClass: "narrator",
    delay,
    loading: true,
    content: "You show her the items you have collected along the way. A stapler bullet removal, 2 photographs and a purse."
  });

  await showMessage({
    delay,
    loading: true,
    content: "Ah. My wallet. Thank you, dear."
  });

  await showMessage({
    delay,
    loading: true,
    content: "You said that you are my granddaughter’s friend right? "
  });

  await promptButton({
    delay,
    action: [
      {
        text: "Yes. She asked me to look for you. "
      }
    ]
  });

  await showMessage({
    delay,
    loading: true,
    content: "Again?!  I already told her that I can look after myself."
  });

  await showMessage({
    delay,
    loading: true,
    content: "Okay. I am done feeding the chickens. Follow me, I want to visit my old house. Sigh … Hope that it is not gone like my first house."
  });

  await showMessage({
    cssClass: "narrator",
    delay,
    loading: true,
    content: "She gestures for you to follow her then walks off."
  });

  await showMessage({
    cssClass: "narrator",
    delay,
    loading: true,
    content: "Your friend is still on the phone."
  });

  await showMessage({
    delay,
    loading: true,
    content: "You found her?"
  });

  await promptButton({
    delay,
    action: [
      {
        text: "Yes! But... I think she wants to go somewhere else."
      }
    ]
  });

  await promptButton({
    delay,
    action: [
      {
        text: "I have to go now, she is already walking away. Update you along the way."
      }
    ]
  });

  await showMessage({
    cssClass: "narrator",
    delay,
    loading: true,
    content: "Congratulations! You have completed the game."
  });

  await showMessage({
    cssClass: "narrator",
    delay,
    loading: true,
    content: "We hope that you have learnt something new while exploring the sites virtually and physically! "
  });

  await showMessage({
    cssClass: "game",
    delay,
    loading: true,
    content: "If you are interested in the sources we used in the development of this game, click [here](https://tracesofmemory.wordpress.com/citations/) to view our citations page. You will need to enter this password: ccyethatb"
  });

  await showMessage({
    cssClass: "game",
    delay,
    loading: true,
    content: "Lastly, we would like to thank you for playing this game. "
  });
}