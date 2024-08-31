// Fetch data, customize the page, and trigger animations
const fetchData = () => {
  fetch("customize.json")
    .then((response) => response.json())
    .then((data) => {
      const dataArr = Object.keys(data);

      dataArr.forEach((key) => {
        if (data[key] !== "") {
          const element = document.querySelector(`[data-node-name*="${key}"]`);
          if (key === "imagePath") {
            element.setAttribute("src", data[key]);
          } else {
            element.innerText = data[key];
          }
        }

        // Trigger animation when all data is processed
        if (dataArr.length === dataArr.indexOf(key) + 1) {
          animationTimeline();
        }
      });
    });
};

// Define the animation timeline with slower speeds
const animationTimeline = () => {
  const textBoxChars = document.querySelector(".hbd-chatbox");
  const hbd = document.querySelector(".wish-hbd");

  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML.split("").join("</span><span>")}</span>`;
  hbd.innerHTML = `<span>${hbd.innerHTML.split("").join("</span><span>")}</span>`;

  const ideaTextTrans = { opacity: 0, y: -20, rotationX: 5, skewX: "15deg" };
  const ideaTextTransLeave = { opacity: 0, y: 20, rotationY: 5, skewX: "-15deg" };

  const tl = new TimelineMax();

  tl.to(".container", 0.3, { visibility: "visible" })
    .from(".one", 1.4, { opacity: 0, y: 10 })
    .from(".two", 1.0, { opacity: 0, y: 10 })
    .to(".one", 1.4, { opacity: 0, y: 10 }, "+=4")
    .to(".two", 1.4, { opacity: 0, y: 10 }, "-=2")
    .from(".three", 1.4, { opacity: 0, y: 10 })
    .to(".three", 1.4, { opacity: 0, y: 10 }, "+=4")
    .from(".four", 1.4, { scale: 0.2, opacity: 0 })
    .from(".fake-btn", 0.6, { scale: 0.2, opacity: 0 })
    .staggerTo(".hbd-chatbox span", 1.0, { visibility: "visible" }, 0.1)
    .to(".fake-btn", 0.3, { backgroundColor: "rgb(127, 206, 248)" })
    .to(".four", 1.0, { scale: 0.2, opacity: 0, y: -150 }, "+=1.4")
    .from(".idea-1", 1.4, ideaTextTrans)
    .to(".idea-1", 1.4, ideaTextTransLeave, "+=3")
    .from(".idea-2", 1.4, ideaTextTrans)
    .to(".idea-2", 1.4, ideaTextTransLeave, "+=3")
    .from(".idea-3", 1.4, ideaTextTrans)
    .to(".idea-3 strong", 1.0, { scale: 1.2, x: 10, backgroundColor: "rgb(21, 161, 237)", color: "#fff" })
    .to(".idea-3", 1.4, ideaTextTransLeave, "+=3")
    .from(".idea-4", 1.4, ideaTextTrans)
    .to(".idea-4", 1.4, ideaTextTransLeave, "+=3")
    .from(".idea-5", 1.4, { rotationX: 15, rotationZ: -10, skewY: "-5deg", y: 50, z: 10, opacity: 0 }, "+=1")
    .to(".idea-5 .smiley", 1.4, { rotation: 90, x: 8 }, "+=0.8")
    .to(".idea-5", 1.4, { scale: 0.2, opacity: 0 }, "+=4")
    .staggerFrom(".idea-6 span", 1.6, { scale: 3, opacity: 0, rotation: 15, ease: Expo.easeOut }, 0.4)
    .staggerTo(".idea-6 span", 1.6, { scale: 3, opacity: 0, rotation: -15, ease: Expo.easeOut }, 0.4, "+=2")
    .staggerFromTo(".baloons img", 5.0, { opacity: 0.9, y: 1400 }, { opacity: 1, y: -1000 }, 0.4)
    .from(".lydia-dp", 1.0, { scale: 3.5, opacity: 0, x: 25, y: -25, rotationZ: -45 }, "-=4")
    .from(".hat", 1.0, { x: -100, y: 350, rotation: -180, opacity: 0 })
    .staggerFrom(".wish-hbd span", 1.4, { opacity: 0, y: -50, rotation: 150, skewX: "30deg", ease: Elastic.easeOut.config(1, 0.5) }, 0.2)
    .staggerFromTo(".wish-hbd span", 1.4, { scale: 1.4, rotationY: 150 }, { scale: 1, rotationY: 0, color: "#ff69b4", ease: Expo.easeOut }, 0.2, "party")
    .from(".wish h5", 1.0, { opacity: 0, y: 10, skewX: "-15deg" }, "party")
    .staggerTo(".eight svg", 3.0, { visibility: "visible", opacity: 0, scale: 80, repeat: 3, repeatDelay: 2.8 }, 0.6)
    .to(".six", 1.0, { opacity: 0, y: 30, zIndex: "-1" })
    .staggerFrom(".nine p", 2.0, ideaTextTrans, 2.4)
    .to(".last-smile", 1.0, { rotation: 90 }, "+=2");
};

fetchData();
