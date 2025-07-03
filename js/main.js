import loadUniversalNavbar from "./universalNavbar.js";

loadUniversalNavbar();
async function loadProjects() {
  try {
    const response = await fetch("data/projects.json");
    if (!response.ok) throw new Error("Failed to fetch projects data");

    const projects = await response.json();
    const container = document.getElementById("projectList");
    const filterBtns = document.querySelectorAll(".filter-btn");

    // Initial render
    renderProjects(projects);

    // Button filter logic
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const category = btn.dataset.category;

        // Set active class
        filterBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        // Filter and render
        const filtered =
          category === "All"
            ? projects
            : projects.filter((p) => p.category === category);
        renderProjects(filtered);
      });
    });

    function renderProjects(list) {
      container.innerHTML = "";
      if (list.length === 0) {
        container.innerHTML = "<p>No projects found for this category.</p>";
        return;
      }
      list.forEach((project) => {
        const card = document.createElement("div");
        card.className = "project-card";
        card.innerHTML = `
          <img src="${project.image}" alt="${project.name}" />
          <h3>${project.name}</h3>
          <p>${project.description}</p>
          <p><strong>Category:</strong> ${project.category}</p>
          <a href="${project.url}">View Project</a>
        `;
        container.appendChild(card);
      });
    }
  } catch (error) {
    console.error("Error loading projects:", error);
    document.getElementById("projectList").innerHTML =
      "<p>Error loading projects. Please try again later.</p>";
  }
}

loadProjects();

document.addEventListener("DOMContentLoaded", () => {
  // Auto year
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
