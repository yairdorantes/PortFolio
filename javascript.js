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

const d = document;

const pageLoading = d.querySelector(".welcome");
var width = 0;
function appear() {
  const barra = d.querySelector(".progress");

  pageLoading.classList.add("appear");
  const intervalo = setInterval(() => {
    width += 1;
    if (width > 200) {
      clearInterval(intervalo);
      //pageLoading.classList.remove("appear");
      pageLoading.classList.add("disappear");
      setTimeout(() => {
        width = 0;
        pageLoading.classList.remove("disappear");
        pageLoading.classList.remove("appear");
      }, 800);
    }
    barra.style.width = `${width}px`;
  }, 10);
}

d.addEventListener("DOMContentLoaded", (e) => {
  appear();
});

d.createElement();
