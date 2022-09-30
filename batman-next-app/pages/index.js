import styles from "../styles/Home.module.css";
import {  useEffect } from "react";


 const quotesList = [
   {
     id: 1,
     quote: "It's not who I am underneath, but what I do that defines me.",
   },
   {
     id: 2,
     quote: "The world only makes sense if you force it to.",
   },
   {
     id: 3,
     quote: "Criminals, by nature, are a cowardly and superstitious lot.",
   },
   {
     id: 4,
     quote: "I am vengeance. I am the night. I am Batman.",
   },
   {
     id: 5,
     quote:
       "Sometimes the truth isn’t good enough, sometimes people deserve more. Sometimes people deserve to have their faith rewarded.",
   },
   {
     id: 6,
     quote:
       "As a man; I am flesh and blood; I can be ignored, I can be destroyed. But as a symbol, I can be incorruptible. I can be everlasting.",
   },
   {
     id: 7,
     quote:
       "It is the duty of every good citizen of Gotham City to report meeting a man from Mars in a public park.",
   },
   {
     id: 8,
     quote:
       "I see without seeing. To me, darkness is as clear as daylight. What am I?",
   },
   {
     id: 9,
     quote:
       "A hero can be anyone. Even a man doing something as simple and reassuring as putting a coat around a little boy’s shoulders to let him know that the world hadn’t ended.",
   },
   {
     id: 10,
     quote:
       "Let that be a lesson. In the future, be more careful from who you accept free lemonade.",
   },
 ];


export default function Home() {
 

  let random = getRndInteger(0, 9);
  let quote = quotesList[random] 

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    
 }
  

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      let url = tabs[0].url;
      console.log("Tabs>>>>", url);

      if (url.includes("mail.google.com"))
      {
        addBatmanSymbol(tabs[0].id);
      }

    });
  });



  const addBatmanSymbol = (id) => {

    chrome.runtime.sendMessage(
      { type: "addBatmanSymbol", tabId: id },
      (response) => {
        // do stuff with response (which will be the value of messageQueue
        // sent from background.js).
      }
    );
  };

 

  return (
    <div className={styles.container}>
      <div>
        <div className="bg-gray-100 w-full h-full min-h-screen">
          <div className="flex justify-center w-full pt-5">
            <img
              className="w-128 h-128 object-center"
              src="https://www.svgrepo.com/show/420360/avatar-batman-comics.svg"
            />
          </div>

          <div className="flex justify-center w-full">
            <p className="m-10 text-lg font-medium text-gray-700">
              {quote.quote}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
