// main.js

document.addEventListener("DOMContentLoaded", async () => {
  // Initialize tabs
  const tabs = document.querySelectorAll("nav ul li a");
  tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      e.preventDefault();
      tabs.forEach((t) => t.classList.remove("active"));
      e.target.classList.add("active");

      // Here you can add the code to display the relevant section
      // e.g., displayData(), displayAnalysis(), or displaySettings()
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
