// const formData = new FormData(document.getElementById('form'));
const data = { text: "quote for a sushi restaurant" };

let navBtn = document.querySelector('#navbar-button')
let hiddenBar = document.querySelector(".navbar-hidden")
navBtn.addEventListener('click',function(e){
      hiddenBar.classList.toggle('hidden')
})



document
  .getElementById("submit-button")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const form = document.getElementById("form");
    
    const formData = new FormData(form);

    for (const [key, value] of formData) {
      data["text"] = value;
    }
    if (data['text'] !== '' && data['text'].split(' ').length >= 2 ){

  
    fetch("https://aadarsh.pythonanywhere.com/", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        new_data = JSON.stringify(data);
        window.location.href =
          "/edit.html?data=" + encodeURIComponent(new_data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    let home_page = document.querySelector(".intro-body");
    let loading_gif = document.querySelector("#loading");

    home_page.style.display = "none";
    loading_gif.classList.remove("hidden");
  }
  });


