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

// Initialize charts when the page loads
initializeCharts();
