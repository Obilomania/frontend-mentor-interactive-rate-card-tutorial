var rateNumbers = document.querySelectorAll(".feedback-btn")
var choice = document.getElementById("choice");
var thank = document.querySelector(".thank");


rateNumbers.forEach((node) => {
    node.addEventListener("click", function(){
        var result = node.innerText;
        rateNumbers.forEach((btn) => btn.classList.remove("active"));
        choice.innerHTML = result;
        node.classList.add('active');

    })
});

thank.addEventListener("click", function(){
    document.querySelector(".front").style.display ="none";
    setInterval(() => {
        location.reload();
    }, 5000);
})
