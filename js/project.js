const filterButtons = document.querySelectorAll(".project-filter button");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Active button styling
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;

        projectCards.forEach(card => {

            const category = card.dataset.category;

            if (filter === "all" || category === filter) {

                card.classList.remove("hide");
                card.classList.add("show");

            } else {

                card.classList.remove("show");
                card.classList.add("hide");

            }

        });

    });

});