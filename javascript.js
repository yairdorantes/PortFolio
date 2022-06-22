traslate = {
  es: {
    introduce: "Yair Dorantes",
    puesto: "Desarrollador web",
    phrase:
      "Soy ingeniero en sistemas, me gusta hacer la vida de las personas más facil y segura mediante la implementacion del desarrollo web",
  },
  en: {
    introduce: "Yair Dorantes",
    puesto: "web developer",
    phrase:
      "I am a systems engineer, I like to make people's lives easier and safer through the implementation of web development",
  },
};

terminal = [
  "Obj:1 http://update.send-anywhere.com/linux/debian stable InRelease",
  "Obj:2 http://packages.microsoft.com/code stable InRelease",
  "Obj:3 http://security.ubuntu.com/ubuntu-focal-security-InRelease ",
  "Obj:4 https://packages.microsoft.com/",
];
const d = document;

const pageLoading = d.querySelector(".welcome");

const showTerminal = d.querySelector(".disappear-my-data");

const phraseDeveloper = d.getElementById("be");
const updates = d.getElementById("info-update");
const clearing = d.getElementById("clean");
const clearingTxt = d.getElementById("clear");

let str = "sudo apt-get update";

let index = 0;
let indexUpdate = 0;
let indexClear = 0;
let clear = "clear";

const brHtml = d.createElement("br");

var width = 401; //aqui 0
function appear() {
  const barra = d.querySelector(".progress");

  pageLoading.classList.add("appear");
  const intervalo = setInterval(() => {
    width += 1;
    if (width > 400) {
      clearInterval(intervalo);
      showTerminal.classList.remove("disappear-my-data");
      showTerminal.classList.add("appear-my-data");
      pageLoading.classList.add("disappear");
      setTimeout(() => {
        width = 0;
        pageLoading.classList.remove("disappear");
        pageLoading.classList.remove("appear");
      }, 800); //aqui era 800

      setTimeout(() => {
        showMyTerminal();
      }, 700); //aqui era 700
    }
    barra.style.width = `${width}px`;
  }, 10);
}

d.addEventListener("DOMContentLoaded", (e) => {
  appear();
});

function showMyTerminal() {
  let intervalId = setInterval(function () {
    phraseDeveloper.textContent += str[index];

    index++;
    if (index === str.length) {
      clearInterval(intervalId);
      /***aparecen actualizaciones */
      let intervalUpdate = setInterval(function () {
        updates.textContent += terminal[indexUpdate] + brHtml;
        indexUpdate++;
        if (indexUpdate === terminal.length) {
          clearInterval(intervalUpdate);
          /*****fin actualizaciones******/
          /****write clear */
          clearing.textContent += ">_:";

          let intervalClear = setInterval(function () {
            clearingTxt.textContent += clear[indexClear];
            indexClear++;
            if (indexClear === clear.length) {
              clearInterval(intervalClear);

              setTimeout(() => {
                phraseDeveloper.textContent = "";
                phraseDeveloper.textContent += "Yair Dorantes";
                updates.textContent = " >_: web developer";
                clearingTxt.textContent = `${traslate.es.phrase}`;
              }, 1000);
            }
          }, 300); //aqui era 300
          /****ends-write clear */
        }
      }, 200); //aqui era 200
    }
  }, 200); //aqui era 200
}
