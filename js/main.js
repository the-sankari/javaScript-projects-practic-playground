async function loadProjects() {
  try {
    const response = await fetch("data/projects.json");
    if (!response.ok) throw new Error("Failed to fetch projects data");
    const projects = await response.json();
    const container = document.getElementById("projectList");

    projects.forEach((project) => {
      const card = document.createElement("div");
      card.className = "project-card";
      card.innerHTML = `
          <img src="${project.image}" alt="${project.name}" />
          <h3>${project.name}</h3>
          <p>${project.description}</p>
          <p><strong>Category:</strong> ${project.category}</p>
          <a href="${project.url}" target="_blank">View Project</a>
        `;
      container.appendChild(card);
    });
  } catch (erro) {
    console.error("Error loading projects:", erro);
    document.getElementById("projectList").innerHTML =
      "<p>Error loading projects. Please try again later.</p>";
  }
}

loadProjects();
