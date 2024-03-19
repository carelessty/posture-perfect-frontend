// data.js

// Example fallback data
const fallbackAlertTrendsData = {
  labels: [
    "23 Nov",
    "24 Nov",
    "25 Nov",
    "26 Nov",
    "27 Nov",
    "28 Nov",
    "29 Nov",
    "30 Nov",
  ],
  datasets: [
    {
      label: "Alert Trends",
      data: [100, 75, 50, 125, 80, 65, 59, 80],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
  ],
};

const fallbackUsageTimeData = {
  labels: [
    "23 Nov",
    "24 Nov",
    "25 Nov",
    "26 Nov",
    "27 Nov",
    "28 Nov",
    "29 Nov",
    "30 Nov",
  ],
  datasets: [
    {
      label: "Usage Time",
      data: [10, 8, 6, 5, 9, 6, 7, 8],
      backgroundColor: "rgba(0, 123, 255, 0.5)",
    },
  ],
};

const fallbackSummaryData = {
  usageTime: 10.5,
  goodPosture: 92,
  alerts: 31,
};

// Fetch chart data with fallback
async function fetchChartData(endpoint, fallbackData) {
  try {
    const response = await fetch(endpoint);
    if (!response.ok) throw new Error("Network response was not ok");
    return await response.json();
  } catch (error) {
    console.error(`Error fetching data from ${endpoint}:`, error);
    return fallbackData;
  }
}

// Initialize charts and animated values with fetched or fallback data
async function fetchDataAndInitialize() {
  const alertTrendsData = await fetchChartData(
    "/api/alertTrends",
    fallbackAlertTrendsData
  );
  const usageTimeData = await fetchChartData(
    "/api/usageTime",
    fallbackUsageTimeData
  );
  const summaryData = await fetchChartData(
    "/api/summaryData",
    fallbackSummaryData
  );

  // Initialize charts
  createChart("alertTrendsChart", "line", alertTrendsData);
  createChart("usageTimeChart", "bar", usageTimeData);

  // Initialize animated values
  animateValue(
    document.querySelector(".card p:nth-child(2)"),
    0,
    summaryData.usageTime,
    1000
  );
  animateValue(
    document.querySelector(".card:nth-child(2) p:nth-child(2)"),
    0,
    summaryData.goodPosture,
    1000
  );
  animateValue(
    document.querySelector(".card:nth-child(3) p:nth-child(2)"),
    0,
    summaryData.alerts,
    1000
  );
}
