"use strict";

// Keep the current page accessible to screen readers.
const currentPage = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll("nav a[href]").forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.setAttribute("aria-current", "page");
  }
});

// External links opened in another tab should not control this window.
document.querySelectorAll('a[target="_blank"]').forEach((link) => {
  link.relList.add("noopener", "noreferrer");
});
