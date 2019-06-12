var write = document.querySelector(".button-contacts");

var popup = document.querySelector(".contact-form");
var close = popup.querySelector(".button-close");

var form = popup.querySelector("form");
var nickname = popup.querySelector("[name=name-field]");
var email = popup.querySelector("[name=email-field]");
var text = popup.querySelector("[name=text-field]");

var isStorageSupport = true;
var storage = "";
  
try {
  storage = localStorage.getItem("nickname");
} catch (err) {
  isStorageSupport = false;
}

write.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
   
  if (storage) {
    nickname.value = storage;
    email.focus();
  } else {
    nickname.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!nickname.value || !email.value || !text.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
    console.log("Укажите контактные данные и текст сообщения");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("nickname", nickname.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});

