const searchInput = document.getElementById("search");

if (searchInput) {
    searchInput.addEventListener("keyup", function() {
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
}

const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        document.getElementById("formMessage").innerText = "Message sent successfully!";
    });
}