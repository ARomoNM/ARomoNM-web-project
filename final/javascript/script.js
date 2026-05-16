document.getElementById("search").addEventListener("keyup", function() {
    let filter = this.value.toLowerCase();
    let products = document.querySelectorAll(".product");

    products.forEach(p => {
        let name = p.getAttribute("data-name");
        if (name.includes(filter)) {
            p.style.display = "block";
        } else {
            p.style.display = "none";
        }
    });
});

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("formMessage").innerText = "Message sent successfully!";
});