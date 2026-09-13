/* Shared across every page: nav highlight, theme toggle, nav glare. */

document.addEventListener("DOMContentLoaded", () => {
    const root = document.documentElement;

    /* 1. Highlight the nav link for the page we're currently on.
          Works by matching each link's data-page to the file name,
          so the <nav> block can stay identical on every page. */
    const file = window.location.pathname.split("/").pop() || "index.html";
    const currentPage = file.replace(".html", "") || "index";

    document.querySelectorAll(".nav-btn").forEach(link => {
        link.classList.toggle("active", link.dataset.page === currentPage);
    });

    /* 2. Light / Dark theme toggle (saved in the browser).
          The <head> script already applied the saved theme before paint,
          so here we only handle the click. */
    const themeToggleBtn = document.getElementById("themeToggle");
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
            const isDark = root.getAttribute("data-theme") === "dark";
            const newTheme = isDark ? "light" : "dark";
            root.setAttribute("data-theme", newTheme);
            localStorage.setItem("theme", newTheme);
        });
    }

    /* 3. Interactive mouse-light glare on the navigation bar. */
    const liquidNav = document.getElementById("liquidNav");
    const liquidGlare = document.getElementById("liquidGlare");
    if (liquidNav && liquidGlare) {
        liquidNav.addEventListener("mousemove", (e) => {
            const rect = liquidNav.getBoundingClientRect();
            liquidGlare.style.setProperty("--x", `${e.clientX - rect.left}px`);
            liquidGlare.style.setProperty("--y", `${e.clientY - rect.top}px`);
        });
    }
});
