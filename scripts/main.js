// main.js

document.addEventListener('DOMContentLoaded', () => {
    // Initialize tabs
    const tabs = document.querySelectorAll('nav ul li a');
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            tabs.forEach(t => t.classList.remove('active'));
            e.target.classList.add('active');

            // Here you can add the code to display the relevant section
            // e.g., displayData(), displayAnalysis(), or displaySettings()
        });
    });

    // Search functionality (dummy)
    const searchInput = document.querySelector('.search-profile input');
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            alert('Search functionality not implemented.');
            // Here you would typically call a search function
            // e.g., performSearch(searchInput.value)
        }
    });
});

// Helper function to create a chart
function createChart(chartElementId, chartType, chartData, chartOptions) {
    const ctx = document.getElementById(chartElementId).getContext('2d');
    return new Chart(ctx, {
        type: chartType,
        data: chartData,
        options: chartOptions
    });
}

// Call this function once you have the data to create the charts
function initializeCharts() {
    // Example data for the charts (these should be replaced with dynamic data)
    const alertTrendsData = {
        labels: ['23 Nov', '24 Nov', '25 Nov', '26 Nov', '27 Nov', '28 Nov', '29 Nov', '30 Nov'],
        datasets: [{
            label: 'Alert Trends',
            data: [100, 75, 50, 125, 80, 65, 59, 80],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    };

    const usageTimeData = {
        labels: ['23 Nov', '24 Nov', '25 Nov', '26 Nov', '27 Nov', '28 Nov', '29 Nov', '30 Nov'],
        datasets: [{
            label: 'Usage Time',
            data: [10, 8, 6, 5, 9, 6, 7, 8],
            backgroundColor: 'rgba(0, 123, 255, 0.5)'
        }]
    };

    createChart('alertTrendsChart', 'line', alertTrendsData);
    createChart('usageTimeChart', 'bar', usageTimeData);
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

// Call this function for each summary card with the respective values
const usageTimeElement = document.querySelector('.card p:nth-child(2)');
const goodPostureElement = document.querySelector('.card:nth-child(2) p:nth-child(2)');
const alertsElement = document.querySelector('.card:nth-child(3) p:nth-child(2)');

// Example values, you should replace these with the actual values from your data
animateValue(usageTimeElement, 0, 10.5, 1000);
animateValue(goodPostureElement, 0, 92, 1000);
animateValue(alertsElement, 0, 31, 1000);

// Add hover effects on the charts
const chartElements = document.querySelectorAll('.charts > div');
chartElements.forEach((chart) => {
    chart.addEventListener('mouseenter', () => {
        chart.style.transform = 'scale(1.05)';
        chart.style.transition = 'transform 0.3s ease';
    });
    chart.addEventListener('mouseleave', () => {
        chart.style.transform = 'scale(1)';
        chart.style.transition = 'transform 0.3s ease';
    });
});


// Initialize charts when the page loads
initializeCharts();
