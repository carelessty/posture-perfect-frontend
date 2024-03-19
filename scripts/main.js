// main.js

document.addEventListener("DOMContentLoaded", async () => {
  const tabs = document.querySelectorAll("nav ul li a");
  const sections = document.querySelectorAll(".tab-content");

  // Modified Event Listener inside main.js
  tabs.forEach((tab) => {
    tab.addEventListener("click", function (e) {
      e.preventDefault();

      // Remove 'active' class from all tabs and sections
      tabs.forEach((t) => t.classList.remove("active"));
      sections.forEach((section) => section.classList.remove("active"));

      // Add 'active' class to clicked tab
      this.classList.add("active");

      // Find and display the corresponding section directly using data-tab attribute
      const activeTab = this.getAttribute("data-tab");
      const activeSection = document.getElementById(`${activeTab}-tab`); // This line remains the same if IDs are correctly formed.
      if (activeSection) {
        activeSection.classList.add("active");
      }
    });
  });

  // Search functionality (dummy)
  const searchInput = document.querySelector(".search-profile input");
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      alert("Search functionality not implemented.");
      // Here you would typically call a search function
      // e.g., performSearch(searchInput.value)
    }
  });

  // Fetch and initialize charts and animated values after the page is fully loaded
  try {
    await fetchDataAndInitialize();
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
});

// Helper function to create a chart
function createChart(chartElementId, chartType, chartData, chartOptions) {
  const ctx = document.getElementById(chartElementId).getContext("2d");
  return new Chart(ctx, {
    type: chartType,
    data: chartData,
    options: chartOptions,
  });
}

// Function to animate numbers on the dashboard cards
function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

// Add hover effects on the charts
const chartElements = document.querySelectorAll(".charts > div");
chartElements.forEach((chart) => {
  chart.addEventListener("mouseenter", () => {
    chart.style.transform = "scale(1.05)";
    chart.style.transition = "transform 0.3s ease";
  });
  chart.addEventListener("mouseleave", () => {
    chart.style.transform = "scale(1)";
    chart.style.transition = "transform 0.3s ease";
  });
});
