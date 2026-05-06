document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("golfForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let course = document.getElementById("course").value;
    let date = document.getElementById("date").value;

    document.getElementById("responseMessage").innerHTML = 
      `Thanks ${name}!<br>
      I'll contact you at ${email} or ${phone}<br>
      for ${course} before ${date} to confirm you are still interested in playing.`;

    form.reset();
  });
    const dateInput = document.getElementById("date");
    dateInput.min = new Date().toISOString().split("T")[0];

  });