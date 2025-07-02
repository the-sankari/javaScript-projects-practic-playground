async function loadNavbar() {
  try {
    const res = await fetch("/components/navbar.html");
    const html = await res.text();
    document.getElementById("navbar-placeholder").innerHTML = html;

    // Now the HTML is injected, we can safely query dropdown
    const dropdown = document.getElementById("projectDropdown");

    const projectRes = await fetch("/data/projects.json");
    const projects = await projectRes.json();

    // Optional: sort alphabetically
    projects.sort((a, b) => a.name.localeCompare(b.name));

    projects.forEach((project) => {
      const li = document.createElement("li");
      const link = document.createElement("a");
      link.href = `/${project.url}`;
      link.textContent = project.name;
      li.appendChild(link);
      dropdown.appendChild(li);
    });
  } catch (err) {
    console.error("Error loading navbar or projects:", err);
  }
}

export default loadNavbar;
