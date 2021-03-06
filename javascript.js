traslate = {
  es: {
    puesto: "Desarrollador web",
    phrase:
      "Soy ingeniero en sistemas, me gusta hacer la vida de las personas más facil y segura mediante la implementacion del desarrollo web",
  },
  en: {
    puesto: "web developer",
    phrase:
      "I am a systems engineer, I like to make people's lives easier and safer through the implementation of web development",
  },
};

terminal = [
  "Obj:1 http://update.send-anywhere.com/linux/debiane",
  "Obj:2 http://packages.microsoft.com/code ",
  "Obj:3 http://security.ubuntu.com/ubuntu",
  "Obj:4 https://packages.microsoft.com/",
];

const d = document;
const $body = d.querySelector("body");

const pageLoading = d.querySelector(".welcome");

const showTerminal = d.querySelector(".disappear-my-data");

const phraseDeveloper = d.getElementById("be");
const updates = d.getElementById("info-update");
const clearing = d.getElementById("clean");
const clearingTxt = d.getElementById("clear");
const allSkills = d.querySelectorAll(".skill");

let str = "obteniendo datos actualizados - usuario: Yair";

let index = 0;
let indexUpdate = 0;
let indexClear = 0;
let clear = "clear";

var width = 0; //aqui 0
function appear() {
  const barra = d.querySelector(".progress");

  pageLoading.classList.add("appear");
  const intervalo = setInterval(() => {
    width += 1.3;
    if (width > 200) {
      clearInterval(intervalo);
      showTerminal.classList.remove("disappear-my-data");
      showTerminal.classList.add("appear-my-data");
      pageLoading.classList.add("disappear");
      setTimeout(() => {
        width = 0;
        pageLoading.classList.remove("appear");
        pageLoading.classList.add("disappear");
      }, 800); //aqui era 800

      setTimeout(() => {
        showMyTerminal();
        $body.style.overflowY = "auto";
      }, 700); //aqui era 700
    }
    barra.style.width = `${width}px`;
  }, 10);
}

function showMyTerminal() {
  let intervalId = setInterval(function () {
    phraseDeveloper.textContent += str[index];

    index++;
    if (index === str.length) {
      clearInterval(intervalId);
      /***aparecen actualizaciones */
      let intervalUpdate = setInterval(function () {
        updates.innerHTML += terminal[indexUpdate] + "<br>";
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
                const $beforeText = d.querySelector(".show-comands-terminal");
                $beforeText.style.display = "none";
                const $changeDiv = d.querySelector(".hide-data-terminal");
                $changeDiv.classList.remove("hide-data-terminal");
                $changeDiv.classList.add("my-class");
              }, 1000);
            }
          }, 300); //aqui era 300
          /****ends-write clear */
        }
      }, 200); //aqui era 200
    }
  }, 100); //aqui era 200
}

d.addEventListener("DOMContentLoaded", (e) => {
  appear();
  smartVideo();
  userAgent();
  $body.style.overflowY = "hidden";
});

window.addEventListener("scroll", (e) => {
  let scroll = window.pageYOffset || document.documentElement.scroll;
  console.log(scroll);
  //console.log(scroll);
  if (scroll > 2027) {
    var contColored = 0;
    let intervalSkills = setInterval(() => {
      allSkills[contColored].classList.remove("skill");
      allSkills[contColored].classList.add("skillColored");
      contColored++;
      if (contColored === allSkills.length) clearInterval(intervalSkills);
    }, 400);
  }
});

function smartVideo() {
  const $videos = d.querySelectorAll("video[data-smart-video]");
  const cb = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.play();
      } else {
        entry.target.pause();
      }
      window.addEventListener("visibilitychange", (e) => {
        d.visibilityState === "visible" ? entry.play() : entry.pause();
      });
    });
  };
  const observer = new IntersectionObserver(cb, { threshold: 0.5 });

  $videos.forEach((el) => observer.observe(el));
}

function userAgent() {
  const $insertInfo = d.querySelector(".hide-data-terminal");

  const parser = new UAParser();
  const get = parser.getResult();

  const browser = get.browser.name,
    OS = get.os.name,
    deviceModel = get.device.model,
    deviceType = get.device.type,
    deviceVendor = get.device.vendor;

  $insertInfo.innerHTML = `
   <div> <img class="img-terminal" src="/assets/infor_terminal/name.png" alt=""> Yair Dorantes
                        </div>
                        <div> <img class="img-terminal" src="/assets/infor_terminal/puesto.png" alt=""> Desarrollador web
                        </div>

                        <span>Estas viendo desde</span>

                        <div> <img class="img-terminal" src="/assets/infor_terminal/browser.png" alt=""> Navegador: ${browser}</div>
                        <div> <img class="img-terminal" src="/assets/infor_terminal/os.png" alt=""> OS:${OS}</div>

  `;
}
