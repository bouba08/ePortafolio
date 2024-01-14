function openMenu() {
  const body = document.body;

  body.classList.add(open);
}

function closeMenu() {
  const body = document.body;

  body.classList.remove(open);
}

async function sendEmail(event) {
  event.preventDefault();
  const body = document.body;
  const loading = document.querySelector(".contact-form-loading");
  const form = document.querySelector(".contact-form");

  try {
    loading.classList.remove("hidden");

    await emailjs.sendForm(
      "service_wjc7lri",
      "template_ifisvz8",
      event.target,
      "uk-ziBacUk8Hm3Cln"
    );

    form.reset();
    loading.classList.add("hidden");
    body.classList.add("success-open");


    setTimeout(() => {
      body.classList.remove("success-open");
    }, 5000);
  } catch {
    loading.classList.add("hidden");
    alert("An error has occured. please try again later or contact me on my email")
  }
}

//template_lflvwb9

//service_wjc7lri

//EcJhZ6ViLs_pdXPZ1
