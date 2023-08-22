window.addEventListener("DOMContentLoaded", () => {
  let btnSave = document.getElementById("save");
  let btnRemove = document.getElementById("remove");

  btnSave.onclick = saveInLocal;
  btnRemove.onclick = removeFromLocal;
  let p = document.getElementById("prevName");
  p.innerText = "non ci sono nomi salvati";
  let time = document.getElementById("time");

  if (sessionStorage.getItem("seconds")) {
    time.innerText = sessionStorage.getItem("seconds");
  } else {
    sessionStorage.setItem("seconds", 0);
  }

  setInterval(function () {
    second = sessionStorage.getItem("seconds");
    second++;
    sessionStorage.setItem("seconds", second);

    time.innerText = second;
  }, 1000);
});

const saveInLocal = () => {
  let input = document.querySelector("input").value;

  let save = localStorage.setItem("name", input);
  let p = document.getElementById("prevName");
  p.innerText = JSON.parse(JSON.stringify(localStorage.getItem("name")));
};

const removeFromLocal = () => {
  let removeLocal = localStorage.removeItem("name");
  let p = document.getElementById("prevName");
  p.innerText = "non ci sono nomi salvati";
};

const checkLastTime = () => {
  let currentSession = sessionStorage.getItem("second");
  return currentSession;
};
