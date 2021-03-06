import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "ð": "Happy",
  "ð": "Beaming face",
  "ð": "Laughing",
  "ðĪĢ": "Hard laughing",
  "ð": "Happy with big eyes",
  "ð": "Very happy",
  "ð": "Grinning face with sweat",
  "ðĨ°": "Feeling loved and cared",
  "ð": "Kissing",
  "ðĪĐ": "Amused",
  "ðĪ": "Thinking",
  "ðĨ": "Sad",
  "ðĢ": "Stressed",
  "ðī": "Sleepy",
  "ð": "Naughty",
  "ð": "Rolling eyes",
  "ð": "See-No-Evil Monkey",
  "ð": "Hear-No-Evil Monkey",
  "ð": "Speak-No-Evil Monkey",
  "ðĨ": "Collision",
  "ðŦ": "Dizzy",
  "ðĶ": "Sweat Droplets",
  "ðĻ": "Dashing Away",
  "ðĩ": "Monkey Face",
  "ð": "Monkey",
  "ðĶ": "Gorilla",
  "ðĶ§": "Orangutan",
  "ðķ": "Dog Face",
  "ð": "Dog",
  "ðĶŪ": "Guide Dog",
  "ðâðĶš": "Service Dog",
  "ðĐ": "Poodle",
  "ðš": "Wolf",
  "ðĶ": "Fox",
  "ðĶ": "Raccoon",
  "ðą": "Cat Face",
  "ð": "Ewe",
  "ð": "Goat",
  "ðŠ": "Camel",
  "ðŦ": "Two-Hump Camel",
  "ðĶ": "Llama",
  "ðĶ": "Giraffe",
  "ðĶ": "Rhinoceros",
  "ðĶ": "Hippopotamus",
  "ðž": "Panda",
  "ðĶĨ": "Sloth",
  "ðĶĶ": "Otter",
  "ðĶĻ": "Skunk",
  "ðĶ": "Kangaroo",
  "ðĶĄ": "Badger",
  "ðū": "Paw Prints",
  "ðĶ": "Turkey",
  "ð": "Chicken",
  "ð": "Rooster",
  "ðĢ": "Hatching Chick",
  "ðĪ": "Baby Chick",
  "ðĨ": "Front-Facing Baby Chick",
  "ðĶ": "Bird",
  "ð§": "Penguin",
  "ðĶ": "Duck",
  "ðĶĒ": "Swan",
  "ðĶ": "Owl",
  "ðĶĐ": "Flamingo",
  "ðĶ": "Peacock",
  "ðĶ": "Parrot",
  "ðļ": "Frog",
  "ð": "Crocodile",
  "ðĒ": "Turtle",
  "ðĶ": "Lizard",
  "ð": "Snake",
  "ðē": "Dragon Face",
  "ð": "Dragon",
  "ðĶ": "Sauropod",
  "ðĶ": "T-Rex",
  "ðģ": "Spouting Whale",
  "ð": "Whale",
  "ð": "Bouquet",
  "ðļ": "Cherry Blossom",
  "ðŪ": "White Flower",
  "ðđ": "Rose",
  "ðĨ": "Wilted Flower",
  "ðš": "Hibiscus",
  "ðŧ": "Sunflower",
  "ðž": "Blossom",
  "ð·": "Tulip",
  "ðą": "Seedling",
  "ðē": "Evergreen Tree",
  "ðģ": "Deciduous Tree",
  "ðī": "Palm Tree",
  "ðĩ": "Cactus",
  "ðū": "Sheaf of Rice",
  "ðŋ": "Herb",
  "ð": "Four Leaf Clover",
  "ð": "New Moon",
  "ð": "Waxing Crescent Moon",
  "ð": "First Quarter Moon",
  "ð": "Waxing Gibbous Moon",
  "ð": "Full Moon",
  "ð": "Waning Gibbous Moon",
  "ð": "Last Quarter Moon",
  "ð": "Waning Crescent Moon",
  "ð": "Crescent Moon",
  "ð": "New Moon Face",
  "ð": "First Quarter Moon Face",
  "ð": "Last Quarter Moon Face",
  "âïļ": "Sun",
  "ð": "Full Moon Face",
  "ð": "Sun with Face",
  "â­": "Star",
  "ð": "Glowing Star"
};

var emojisWeknow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this emoji meaning in our database. Sorry !!";
    }
    // console.log(meaning);
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Emoji Meaning</h1>
      <p>
        Enter the Emoji you want to find the meaning of or click on the Emojis
        which are given below.
      </p>
      <input onChange={emojiInputHandler}></input>
      <h2>{meaning}</h2>
      <h3>Emojis we know</h3>
      {emojisWeknow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "1rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
      <h2>Also visit my portfolio <a href="https://arpitpatni.netlify.app/">Arpit</a> </h2>
    </div>
  );
}
