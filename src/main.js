import { Howl } from "howler";

function h(tag, attributes, ...children) {
  const element = document.createElement(tag);
  if (attributes) {
    Object.entries(attributes).forEach((entry) => {
      element.setAttribute(entry[0], entry[1]);
    });
  }
  element.append(...children);
  return element;
}

function main() {
  const root = document.getElementById("root");
  const label = h("div", { class: "start-btn" }, "Tap to start");
  const sound = new Howl({
    src: ["sound.ogg"],
    loop: true,
  });
  let song = null;
  let playSong = () => {
    if (song === null) {
      song = sound.play();
    } else {
      sound.play(song);
    }
  };
  const name = window.webxdc.selfName;
  const lyrics = [
    `${name}, this is for you`,
    "I just wanna tell you how I'm feeling",
    `Gotta make you understand ${name}`,
    "Never gonna give you up",
    `Never gonna let you down, ${name}`,
    "Never gonna run around and desert you",
    "Never gonna make you cry",
    "Never gonna say goodbye",
    "Never gonna tell a lie and hurt you",
    "You just got rick-rolled!",
  ];
  let index = 0;
  const singSong = () => {
    label.innerText = lyrics[index];
    index = ++index % lyrics.length;
  };

  root.append(label);

  sound.once("play", () => {
    label.innerText = "";
    label.classList.remove("start-btn");
    label.classList.add("karaoke");

    root.append(h("img", { class: "image", src: "image.webp" }));
    playSong = () => {};

    setInterval(singSong, 3 * 1000);
  });
  document.body.addEventListener("click", () => playSong());
}

main();
