async function loadNavbar() {
  try {
    const res = await fetch("./components/navbar.html");
    const html = await res.text();
    document.getElementById("navbar-placeholder").innerHTML = html;

    const dropdown = document.getElementById("projectDropdown");
    const projectRes = await fetch("./data/projects.json");
    const projects = await projectRes.json();

    // Optional: sort projects by name
    projects.sort((a, b) => a.name.localeCompare(b.name));

    projects.forEach((project) => {
      const li = document.createElement("li");
      const link = document.createElement("a");
      link.href = `./${project.url}`;
      link.textContent = project.name;
      li.appendChild(link);
      dropdown.appendChild(li);
    });

    // Dropdown toggle logic
    const dropdownContainer = document.querySelector(".dropdown");
    const toggleBtn = dropdownContainer.querySelector(".dropdown-toggle");

    toggleBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropdownContainer.classList.toggle("show");
    });

    // Close on outside click
    document.addEventListener("click", () => {
      dropdownContainer.classList.remove("show");
    });
  } catch (err) {
    console.error("Error loading navbar or projects:", err);
  }
}

export default loadNavbar;
