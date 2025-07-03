// Universal Navbar Module - Self-contained HTML and JS, uses external navbar.css
// Import this file and call loadUniversalNavbar() from any project

// Navbar HTML Template (using existing CSS classes)
const NAVBAR_HTML = `
<nav class="main-nav">
  <div class="nav-brand">
    <a href="#" id="brand-link">JS Projects</a>
  </div>
  <ul class="nav-links">
    <li><a href="#" id="home-link">Home</a></li>
    <li class="dropdown">
      <a href="#" class="dropdown-toggle">Projects ▼</a>
      <ul class="dropdown-content" id="projectDropdown">
        <!-- Dynamically loaded -->
      </ul>
    </li>
    <li>
      <a href="https://kajol-sutra-dhar.vercel.app/" target="_blank">Portfolio</a>
    </li>
  </ul>
</nav>
`;

// Inject navbar CSS link into the page
function injectNavbarCSS(basePath) {
  // Check if our CSS is already injected
  if (document.getElementById("universal-navbar-css")) {
    return;
  }

  const link = document.createElement("link");
  link.id = "universal-navbar-css";
  link.rel = "stylesheet";
  link.href = `${basePath}css/navbar.css`;
  document.head.appendChild(link);
}

// Auto-detect the base path based on current script location
function detectBasePath() {
  const currentPath = window.location.pathname;

  // If we're in the root directory
  if (
    currentPath === "/" ||
    currentPath.endsWith("index.html") ||
    !currentPath.includes("/")
  ) {
    return "./";
  }

  // Count directory levels and go back that many levels
  const pathParts = currentPath.split("/").filter((part) => part !== "");
  const depth = pathParts.length - 1; // Subtract 1 for the file itself

  return "../".repeat(Math.max(depth, 1));
}

// Main function to load the universal navbar
async function loadUniversalNavbar(customBasePath = null) {
  try {
    // Use custom base path or auto-detect
    const basePath = customBasePath || detectBasePath();

    // Inject navbar CSS first
    injectNavbarCSS(basePath);

    // Insert HTML - automatically create and inject navbar at the top
    let navbarContainer = document.getElementById("universal-navbar-container");

    // If navbar doesn't exist, create it
    if (!navbarContainer) {
      navbarContainer = document.createElement("div");
      navbarContainer.id = "universal-navbar-container";
      // Insert at the very beginning of body
      document.body.insertBefore(navbarContainer, document.body.firstChild);
    }

    navbarContainer.innerHTML = NAVBAR_HTML;

    // Set up navigation links
    const brandLink = document.getElementById("brand-link");
    const homeLink = document.getElementById("home-link");

    if (basePath !== "./") {
      brandLink.href = `${basePath}index.html`;
      homeLink.href = `${basePath}index.html`;
    } else {
      brandLink.href = "./index.html";
      homeLink.href = "./index.html";
    }

    // Load and populate projects
    await loadProjects(basePath);

    // Set up dropdown functionality
    setupDropdown();

    console.log(
      `Universal navbar loaded successfully with basePath: ${basePath}`
    );
  } catch (error) {
    console.error("Error loading universal navbar:", error);
  }
}

// Load projects and populate dropdown
async function loadProjects(basePath) {
  try {
    const response = await fetch(`${basePath}data/projects.json`);
    if (!response.ok) throw new Error("Failed to fetch projects");

    const projects = await response.json();
    const dropdown = document.getElementById("projectDropdown");

    // Clear existing items
    dropdown.innerHTML = "";

    // Sort projects by name
    projects.sort((a, b) => a.name.localeCompare(b.name));

    // Add each project
    projects.forEach((project) => {
      const li = document.createElement("li");
      const link = document.createElement("a");
      link.href = `${basePath}${project.url}`;
      link.textContent = project.name;
      li.appendChild(link);
      dropdown.appendChild(li);
    });
  } catch (error) {
    console.error("Error loading projects:", error);
    document.getElementById("projectDropdown").innerHTML =
      '<li><a href="#">Error loading projects</a></li>';
  }
}

// Set up dropdown toggle functionality
function setupDropdown() {
  const dropdownContainer = document.querySelector(".dropdown");
  const toggleBtn = dropdownContainer.querySelector(".dropdown-toggle");

  toggleBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropdownContainer.classList.toggle("show");
  });

  // Close on outside click
  document.addEventListener("click", (e) => {
    if (!dropdownContainer.contains(e.target)) {
      dropdownContainer.classList.remove("show");
    }
  });
}

// Export the main function
export default loadUniversalNavbar;
