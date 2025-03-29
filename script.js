// Sample data
const dashboardData = {
    revenueByMonth: [
        { month: 'Jan', revenue: 98500, orders: 1245, lastYear: 82300 },
        { month: 'Feb', revenue: 112700, orders: 1380, lastYear: 90400 },
        { month: 'Mar', revenue: 125800, orders: 1520, lastYear: 105600 },
        { month: 'Apr', revenue: 143200, orders: 1690, lastYear: 118700 },
        { month: 'May', revenue: 156500, orders: 1830, lastYear: 131900 },
        { month: 'Jun', revenue: 168900, orders: 1950, lastYear: 142800 },
        { month: 'Jul', revenue: 182300, orders: 2080, lastYear: 155600 },
        { month: 'Aug', revenue: 176800, orders: 2010, lastYear: 149200 },
        { month: 'Sep', revenue: 165400, orders: 1890, lastYear: 138700 },
        { month: 'Oct', revenue: 154700, orders: 1760, lastYear: 129300 },
        { month: 'Nov', revenue: 172900, orders: 1970, lastYear: 146800 },
        { month: 'Dec', revenue: 198600, orders: 2260, lastYear: 169500 }
    ],
    
    categorySales: [
        { category: 'Electronics', revenue: 520000, units: 5800 },
        { category: 'Clothing', revenue: 348000, units: 12400 },
        { category: 'Home & Kitchen', revenue: 289000, units: 7600 },
        { category: 'Sports & Outdoors', revenue: 187000, units: 4300 },
        { category: 'Beauty', revenue: 114000, units: 8900 }
    ],
    
    topProducts: [
        { product: 'Wireless Earbuds Pro', revenue: 98700, units: 1230, growth: 23.4 },
        { product: 'Ultra HD Smart TV 55"', revenue: 87500, units: 350, growth: 18.7 },
        { product: 'Smart Home Hub', revenue: 75800, units: 840, growth: 15.2 },
        { product: 'Premium Yoga Mat', revenue: 62400, units: 1560, growth: -3.8 },
        { product: 'Portable Bluetooth Speaker', revenue: 58900, units: 980, growth: 12.6 },
        { product: 'Ergonomic Office Chair', revenue: 53200, units: 420, growth: 27.5 },
        { product: 'Professional Blender', revenue: 48700, units: 610, growth: 9.3 },
        { product: 'Luxury Bath Towel Set', revenue: 43500, units: 870, growth: 5.8 }
    ],
    
    acquisitionFunnel: [
        { stage: 'Visitors', count: 253000 },
        { stage: 'Product Views', count: 182160 },
        { stage: 'Add to Cart', count: 43010 },
        { stage: 'Checkout Started', count: 21505 },
        { stage: 'Purchases', count: 10827 }
    ],
    
    salesRepPerformance: [
        { rep: 'Emma Johnson', Q1: 152000, Q2: 168000, Q3: 183000, Q4: 197000, 
          monthly: [48000, 51000, 53000, 54000, 56000, 58000, 59000, 61000, 63000, 64000, 65000, 68000] },
        { rep: 'Michael Chen', Q1: 143000, Q2: 159000, Q3: 176000, Q4: 185000,
          monthly: [45000, 48000, 50000, 52000, 53000, 54000, 57000, 59000, 60000, 60000, 62000, 63000] },
        { rep: 'Sofia Rodriguez', Q1: 138000, Q2: 149000, Q3: 158000, Q4: 172000,
          monthly: [44000, 46000, 48000, 49000, 50000, 50000, 51000, 53000, 54000, 56000, 57000, 59000] },
        { rep: 'James Wilson', Q1: 129000, Q2: 141000, Q3: 152000, Q4: 168000,
          monthly: [41000, 43000, 45000, 46000, 47000, 48000, 49000, 51000, 52000, 54000, 56000, 58000] },
        { rep: 'Olivia Taylor', Q1: 120000, Q2: 132000, Q3: 145000, Q4: 156000,
          monthly: [38000, 40000, 42000, 43000, 44000, 45000, 47000, 48000, 50000, 51000, 52000, 53000] }
    ],
    
    regionalSales: {
        'Northeast': 425000,
        'Southeast': 312000,
        'Midwest': 368000,
        'Southwest': 289000,
        'West': 495000
    }
};

// Time-specific data sets
const timeData = {
    '7d': {
        revenueByMonth: [
            { month: 'Mon', revenue: 25400, orders: 312, lastYear: 23100 },
            { month: 'Tue', revenue: 27800, orders: 326, lastYear: 24600 },
            { month: 'Wed', revenue: 31200, orders: 345, lastYear: 26300 },
            { month: 'Thu', revenue: 35400, orders: 361, lastYear: 27800 },
            { month: 'Fri', revenue: 42600, orders: 398, lastYear: 36700 },
            { month: 'Sat', revenue: 38700, orders: 372, lastYear: 34500 },
            { month: 'Sun', revenue: 32300, orders: 341, lastYear: 28900 }
        ],
        categorySales: [
            { category: 'Electronics', revenue: 89500, units: 850 },
            { category: 'Clothing', revenue: 64200, units: 1840 },
            { category: 'Home & Kitchen', revenue: 52300, units: 1120 },
            { category: 'Sports & Outdoors', revenue: 35600, units: 680 },
            { category: 'Beauty', revenue: 21900, units: 1310 }
        ],
        topProducts: [
            { product: 'Wireless Earbuds Pro', revenue: 18700, units: 230, growth: 12.4 },
            { product: 'Smart Home Hub', revenue: 15800, units: 175, growth: 9.2 },
            { product: 'Fitness Tracker', revenue: 13400, units: 268, growth: 15.7 },
            { product: 'Portable Bluetooth Speaker', revenue: 12900, units: 215, growth: 7.6 },
            { product: 'Premium Yoga Mat', revenue: 10400, units: 260, growth: -2.8 },
            { product: 'Ergonomic Office Chair', revenue: 9200, units: 46, growth: 18.5 },
            { product: 'Professional Blender', revenue: 8700, units: 87, growth: 5.3 },
            { product: 'Luxury Bath Towel Set', revenue: 7500, units: 150, growth: 3.8 }
        ],
        acquisitionFunnel: [
            { stage: 'Visitors', count: 42500 },
            { stage: 'Product Views', count: 31200 },
            { stage: 'Add to Cart', count: 6840 },
            { stage: 'Checkout Started', count: 3250 },
            { stage: 'Purchases', count: 1840 }
        ],
        salesRepPerformance: [
            { rep: 'Emma Johnson', value: 28400, trend: [24600, 25800, 27300, 28400, 27900, 26800, 28400] },
            { rep: 'Michael Chen', value: 25300, trend: [22100, 23400, 24600, 25300, 24800, 23900, 25300] },
            { rep: 'Sofia Rodriguez', value: 23100, trend: [19800, 20500, 21900, 23100, 22600, 21800, 23100] },
            { rep: 'James Wilson', value: 20700, trend: [18200, 18900, 19700, 20700, 20200, 19600, 20700] },
            { rep: 'Olivia Taylor', value: 19400, trend: [16900, 17500, 18600, 19400, 18900, 18200, 19400] }
        ],
        regionalSales: {
            'Northeast': 67500,
            'Southeast': 53200,
            'Midwest': 58900,
            'Southwest': 45600,
            'West': 78300
        }
    },
    
    '30d': {
        revenueByMonth: [
            { month: 'Week 1', revenue: 89500, orders: 1120, lastYear: 76800 },
            { month: 'Week 2', revenue: 98700, orders: 1180, lastYear: 83400 },
            { month: 'Week 3', revenue: 103600, orders: 1240, lastYear: 89700 },
            { month: 'Week 4', revenue: 112400, orders: 1310, lastYear: 94200 }
        ],
        categorySales: [
            { category: 'Electronics', revenue: 158700, units: 1760 },
            { category: 'Clothing', revenue: 127500, units: 4560 },
            { category: 'Home & Kitchen', revenue: 96400, units: 2540 },
            { category: 'Sports & Outdoors', revenue: 72300, units: 1680 },
            { category: 'Beauty', revenue: 48900, units: 3820 }
        ],
        topProducts: [
            { product: 'Ultra HD Smart TV 55"', revenue: 87500, units: 350, growth: 18.7 },
            { product: 'Wireless Earbuds Pro', revenue: 56700, units: 710, growth: 14.4 },
            { product: 'Smart Home Hub', revenue: 45800, units: 510, growth: 10.2 },
            { product: 'Premium Yoga Mat', revenue: 39400, units: 985, growth: -1.8 },
            { product: 'Portable Bluetooth Speaker', revenue: 36900, units: 615, growth: 8.6 },
            { product: 'Ergonomic Office Chair', revenue: 34200, units: 285, growth: 21.5 },
            { product: 'Professional Blender', revenue: 28700, units: 359, growth: 6.3 },
            { product: 'Luxury Bath Towel Set', revenue: 25500, units: 510, growth: 4.8 }
        ],
        acquisitionFunnel: [
            { stage: 'Visitors', count: 186000 },
            { stage: 'Product Views', count: 129600 },
            { stage: 'Add to Cart', count: 32400 },
            { stage: 'Checkout Started', count: 16200 },
            { stage: 'Purchases', count: 8640 }
        ],
        salesRepPerformance: [
            { rep: 'Emma Johnson', value: 124600, trend: [114200, 118500, 122800, 124600] },
            { rep: 'Michael Chen', value: 118300, trend: [106800, 110900, 115600, 118300] },
            { rep: 'Sofia Rodriguez', value: 106100, trend: [95400, 99200, 103600, 106100] },
            { rep: 'James Wilson', value: 97700, trend: [88300, 91600, 95200, 97700] },
            { rep: 'Olivia Taylor', value: 89400, trend: [81500, 84900, 87600, 89400] }
        ],
        regionalSales: {
            'Northeast': 175000,
            'Southeast': 142000,
            'Midwest': 158000,
            'Southwest': 129000,
            'West': 199000
        }
    },
    
    '90d': {
        revenueByMonth: [
            { month: 'Jan', revenue: 98500, orders: 1245, lastYear: 82300 },
            { month: 'Feb', revenue: 112700, orders: 1380, lastYear: 90400 },
            { month: 'Mar', revenue: 125800, orders: 1520, lastYear: 105600 }
        ],
        categorySales: [
            { category: 'Electronics', revenue: 520000, units: 5800 },
            { category: 'Clothing', revenue: 348000, units: 12400 },
            { category: 'Home & Kitchen', revenue: 289000, units: 7600 },
            { category: 'Sports & Outdoors', revenue: 187000, units: 4300 },
            { category: 'Beauty', revenue: 114000, units: 8900 }
        ],
        topProducts: [
            { product: 'Wireless Earbuds Pro', revenue: 98700, units: 1230, growth: 23.4 },
            { product: 'Ultra HD Smart TV 55"', revenue: 87500, units: 350, growth: 18.7 },
            { product: 'Smart Home Hub', revenue: 75800, units: 840, growth: 15.2 },
            { product: 'Premium Yoga Mat', revenue: 62400, units: 1560, growth: -3.8 },
            { product: 'Portable Bluetooth Speaker', revenue: 58900, units: 980, growth: 12.6 },
            { product: 'Ergonomic Office Chair', revenue: 53200, units: 420, growth: 27.5 },
            { product: 'Professional Blender', revenue: 48700, units: 610, growth: 9.3 },
            { product: 'Luxury Bath Towel Set', revenue: 43500, units: 870, growth: 5.8 }
        ],
        acquisitionFunnel: [
            { stage: 'Visitors', count: 253000 },
            { stage: 'Product Views', count: 182160 },
            { stage: 'Add to Cart', count: 43010 },
            { stage: 'Checkout Started', count: 21505 },
            { stage: 'Purchases', count: 10827 }
        ],
        salesRepPerformance: [
            { rep: 'Emma Johnson', Q1: 152000, Q2: 168000, Q3: 183000, Q4: 197000 },
            { rep: 'Michael Chen', Q1: 143000, Q2: 159000, Q3: 176000, Q4: 185000 },
            { rep: 'Sofia Rodriguez', Q1: 138000, Q2: 149000, Q3: 158000, Q4: 172000 },
            { rep: 'James Wilson', Q1: 129000, Q2: 141000, Q3: 152000, Q4: 168000 },
            { rep: 'Olivia Taylor', Q1: 120000, Q2: 132000, Q3: 145000, Q4: 156000 }
        ],
        regionalSales: {
            'Northeast': 425000,
            'Southeast': 312000,
            'Midwest': 368000,
            'Southwest': 289000,
            'West': 495000
        }
    },
    
    '1y': {
        revenueByMonth: [...dashboardData.revenueByMonth], // Same monthly data
        categorySales: [
            { category: 'Electronics', revenue: 1520000, units: 17800 },
            { category: 'Clothing', revenue: 1148000, units: 42400 },
            { category: 'Home & Kitchen', revenue: 989000, units: 27600 },
            { category: 'Sports & Outdoors', revenue: 787000, units: 14300 },
            { category: 'Beauty', revenue: 614000, units: 28900 }
        ],
        topProducts: [
            { product: 'Ultra HD Smart TV 55"', revenue: 387500, units: 1550, growth: 28.7 },
            { product: 'Wireless Earbuds Pro', revenue: 298700, units: 3730, growth: 33.4 },
            { product: 'Smart Home Hub', revenue: 275800, units: 3060, growth: 25.2 },
            { product: 'Premium Yoga Mat', revenue: 262400, units: 6560, growth: 18.8 },
            { product: 'Portable Bluetooth Speaker', revenue: 258900, units: 4310, growth: 22.6 },
            { product: 'Ergonomic Office Chair', revenue: 253200, units: 2010, growth: 37.5 },
            { product: 'Professional Blender', revenue: 228700, units: 2860, growth: 19.3 },
            { product: 'Luxury Bath Towel Set', revenue: 215500, units: 4310, growth: 14.8 }
        ],
        acquisitionFunnel: [
            { stage: 'Visitors', count: 1253000 },
            { stage: 'Product Views', count: 902160 },
            { stage: 'Add to Cart', count: 213010 },
            { stage: 'Checkout Started', count: 101505 },
            { stage: 'Purchases', count: 50827 }
        ],
        salesRepPerformance: dashboardData.salesRepPerformance,
        regionalSales: {
            'Northeast': 1425000,
            'Southeast': 1312000,
            'Midwest': 1368000,
            'Southwest': 1289000,
            'West': 1495000
        }
    },
    
    'all': {
        revenueByMonth: [
            { month: '2021', revenue: 1485000, orders: 18540, lastYear: 1255000 },
            { month: '2022', revenue: 1876000, orders: 21450, lastYear: 1485000 },
            { month: '2023', revenue: 2254000, orders: 24380, lastYear: 1876000 },
            { month: '2024', revenue: 2756000, orders: 28420, lastYear: 2254000 },
            { month: '2025 (YTD)', revenue: 785000, orders: 7850, lastYear: 645000 }
        ],
        categorySales: [
            { category: 'Electronics', revenue: 3520000, units: 39800 },
            { category: 'Clothing', revenue: 2648000, units: 94400 },
            { category: 'Home & Kitchen', revenue: 2189000, units: 57600 },
            { category: 'Sports & Outdoors', revenue: 1787000, units: 41300 },
            { category: 'Beauty', revenue: 1014000, units: 78900 }
        ],
        topProducts: [
            { product: 'Ultra HD Smart TV 55"', revenue: 887500, units: 3550, growth: 38.7 },
            { product: 'Wireless Earbuds Pro', revenue: 698700, units: 8730, growth: 43.4 },
            { product: 'Smart Home Hub', revenue: 575800, units: 6400, growth: 35.2 },
            { product: 'Premium Yoga Mat', revenue: 462400, units: 11560, growth: 28.8 },
            { product: 'Portable Bluetooth Speaker', revenue: 458900, units: 7640, growth: 32.6 },
            { product: 'Ergonomic Office Chair', revenue: 453200, units: 3590, growth: 47.5 },
            { product: 'Professional Blender', revenue: 428700, units: 5370, growth: 29.3 },
            { product: 'Luxury Bath Towel Set', revenue: 415500, units: 8310, growth: 24.8 }
        ],
        acquisitionFunnel: [
            { stage: 'Visitors', count: 9253000 },
            { stage: 'Product Views', count: 6652160 },
            { stage: 'Add to Cart', count: 1463010 },
            { stage: 'Checkout Started', count: 731505 },
            { stage: 'Purchases', count: 390827 }
        ],
        salesRepPerformance: [
            { rep: 'Emma Johnson', Q1: 452000, Q2: 468000, Q3: 483000, Q4: 497000 },
            { rep: 'Michael Chen', Q1: 443000, Q2: 459000, Q3: 476000, Q4: 485000 },
            { rep: 'Sofia Rodriguez', Q1: 438000, Q2: 449000, Q3: 458000, Q4: 472000 },
            { rep: 'James Wilson', Q1: 429000, Q2: 441000, Q3: 452000, Q4: 468000 },
            { rep: 'Olivia Taylor', Q1: 420000, Q2: 432000, Q3: 445000, Q4: 456000 }
        ],
        regionalSales: {
            'Northeast': 3425000,
            'Southeast': 2912000,
            'Midwest': 3068000,
            'Southwest': 2689000,
            'West': 3495000
        }
    }
};

// DOM elements
const dateRangeSelector = document.getElementById('dateRangeSelector');
const refreshBtn = document.getElementById('refreshBtn');
const revenueTrendChart = document.getElementById('revenueTrendChart');
const categoryChart = document.getElementById('categoryChart');
const topProductsTable = document.getElementById('topProductsTable');
const funnelChart = document.getElementById('funnelChart');
const salesRepChart = document.getElementById('salesRepChart');
const salesMap = document.getElementById('salesMap');

// Chart instances
let revenueChart, categoryChartInstance, funnelChartInstance, salesRepChartInstance;

// Initialize all charts and visualizations
function initDashboard() {
    initRevenueTrendChart();
    initCategoryChart();
    populateTopProductsTable();
    initFunnelChart();
    initSalesRepChart();
    initRegionalMap();
    
    // Add event listeners for interactivity
    setupEventListeners();
    
    // Animate loading for visual effect
    animateKPICards();
    
    // Set initial data based on the default selected period
    const initialPeriod = dateRangeSelector.value;
    updateDashboardData(initialPeriod);
}

// Initialize Revenue Trend Chart
function initRevenueTrendChart() {
    const ctx = revenueTrendChart.getContext('2d');
    
    revenueChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dashboardData.revenueByMonth.map(item => item.month),
            datasets: [{
                label: 'Revenue ($)',
                data: dashboardData.revenueByMonth.map(item => item.revenue),
                borderColor: '#0092e0',
                backgroundColor: 'rgba(0, 146, 224, 0.1)',
                borderWidth: 2,
                tension: 0.3,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.y !== null) {
                                label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(context.parsed.y);
                            }
                            return label;
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    }
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return '$' + value / 1000 + 'k';
                        }
                    }
                }
            }
        }
    });
}

// Initialize Category Chart
function initCategoryChart() {
    const ctx = categoryChart.getContext('2d');
    
    categoryChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: dashboardData.categorySales.map(item => item.category),
            datasets: [{
                label: 'Revenue by Category',
                data: dashboardData.categorySales.map(item => item.revenue),
                backgroundColor: [
                    'rgba(0, 146, 224, 0.8)',
                    'rgba(0, 196, 140, 0.8)',
                    'rgba(255, 200, 70, 0.8)',
                    'rgba(255, 107, 0, 0.8)',
                    'rgba(255, 87, 36, 0.8)'
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.y !== null) {
                                label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(context.parsed.y);
                            }
                            return label;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return '$' + value / 1000 + 'k';
                        }
                    }
                }
            }
        }
    });
}

// Populate Top Products Table
function populateTopProductsTable() {
    const tableBody = topProductsTable.querySelector('tbody');
    tableBody.innerHTML = '';
    
    dashboardData.topProducts.forEach(product => {
        const row = document.createElement('tr');
        
        const productCell = document.createElement('td');
        productCell.textContent = product.product;
        
        const revenueCell = document.createElement('td');
        revenueCell.textContent = new Intl.NumberFormat('en-US', { 
            style: 'currency', 
            currency: 'USD', 
            maximumFractionDigits: 0 
        }).format(product.revenue);
        
        const growthCell = document.createElement('td');
        const growthValue = document.createElement('span');
        growthValue.textContent = `${product.growth > 0 ? '+' : ''}${product.growth}%`;
        growthValue.className = product.growth >= 0 ? 'positive' : 'negative';
        growthCell.appendChild(growthValue);
        
        row.appendChild(productCell);
        row.appendChild(revenueCell);
        row.appendChild(growthCell);
        
        tableBody.appendChild(row);
    });
}

// Initialize Funnel Chart
function initFunnelChart() {
    const ctx = funnelChart.getContext('2d');
    const stages = dashboardData.acquisitionFunnel.map(item => item.stage);
    const counts = dashboardData.acquisitionFunnel.map(item => item.count);
    
    // Calculate conversion rates
    const conversionRates = [];
    for (let i = 1; i < counts.length; i++) {
        const rate = (counts[i] / counts[i-1] * 100).toFixed(1);
        conversionRates.push(`${rate}%`);
    }
    
    funnelChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: stages,
            datasets: [{
                data: counts,
                backgroundColor: 'rgba(0, 146, 224, 0.8)',
                borderWidth: 0,
                barPercentage: 0.5
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        afterLabel: function(context) {
                            const index = context.dataIndex;
                            if (index < conversionRates.length) {
                                return `Conversion: ${conversionRates[index]}`;
                            }
                            return '';
                        }
                    }
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return value >= 1000 ? value / 1000 + 'k' : value;
                        }
                    }
                }
            }
        }
    });
}

// Initialize Sales Rep Performance Chart
function initSalesRepChart() {
    const ctx = salesRepChart.getContext('2d');
    
    salesRepChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: dashboardData.salesRepPerformance.map(rep => rep.rep),
            datasets: [
                {
                    label: 'Q1',
                    data: dashboardData.salesRepPerformance.map(rep => rep.Q1),
                    backgroundColor: 'rgba(0, 146, 224, 0.8)',
                    barPercentage: 0.8,
                    categoryPercentage: 0.9
                },
                {
                    label: 'Q2',
                    data: dashboardData.salesRepPerformance.map(rep => rep.Q2),
                    backgroundColor: 'rgba(0, 196, 140, 0.8)',
                    barPercentage: 0.8,
                    categoryPercentage: 0.9
                },
                {
                    label: 'Q3',
                    data: dashboardData.salesRepPerformance.map(rep => rep.Q3),
                    backgroundColor: 'rgba(255, 200, 70, 0.8)',
                    barPercentage: 0.8,
                    categoryPercentage: 0.9
                },
                {
                    label: 'Q4',
                    data: dashboardData.salesRepPerformance.map(rep => rep.Q4),
                    backgroundColor: 'rgba(255, 107, 0, 0.8)',
                    barPercentage: 0.8,
                    categoryPercentage: 0.9
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.y !== null) {
                                label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(context.parsed.y);
                            }
                            return label;
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    }
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return '$' + value / 1000 + 'k';
                        }
                    }
                }
            }
        }
    });
}

// Initialize Regional Map (placeholder)
function initRegionalMap() {
    // Get the data for the current time period
    const timePeriod = dateRangeSelector.value;
    const data = timeData[timePeriod] || dashboardData;
    
    // For this demo, we'll just show sample region elements
    salesMap.innerHTML = '';
    
    const regions = Object.keys(data.regionalSales);
    const values = Object.values(data.regionalSales);
    const maxValue = Math.max(...values);
    
    regions.forEach((region, index) => {
        const regionEl = document.createElement('div');
        regionEl.className = 'region-element';
        
        // Calculate size and color based on value
        const value = values[index];
        const size = 35 + (value / maxValue * 50);
        
        let color;
        if (value < maxValue * 0.3) color = '#CFF6FF';
        else if (value < maxValue * 0.6) color = '#92E0FF';
        else if (value < maxValue * 0.8) color = '#5BC6FF';
        else color = '#0092E0';
        
        regionEl.style.width = `${size}px`;
        regionEl.style.height = `${size}px`;
        regionEl.style.backgroundColor = color;
        regionEl.style.borderRadius = '50%';
        regionEl.style.position = 'absolute';
        
        // Position elements in different locations on the map
        // In a real map these would be geographical coordinates
        const positions = [
            { left: '75%', top: '30%' },  // Northeast
            { left: '65%', top: '60%' },  // Southeast
            { left: '45%', top: '40%' },  // Midwest
            { left: '30%', top: '60%' },  // Southwest
            { left: '15%', top: '35%' }   // West
        ];
        
        regionEl.style.left = positions[index].left;
        regionEl.style.top = positions[index].top;
        regionEl.style.transform = 'translate(-50%, -50%)';
        
        // Add tooltip with region name and value
        regionEl.title = `${region}: ${new Intl.NumberFormat('en-US', { 
            style: 'currency', 
            currency: 'USD', 
            maximumFractionDigits: 0 
        }).format(value)}`;
        
        // Hover effect
        regionEl.style.transition = 'all 0.3s ease';
        regionEl.addEventListener('mouseover', () => {
            regionEl.style.transform = 'translate(-50%, -50%) scale(1.1)';
            regionEl.style.boxShadow = '0 0 15px rgba(0, 146, 224, 0.5)';
            regionEl.style.zIndex = '10';
        });
        
        regionEl.addEventListener('mouseout', () => {
            regionEl.style.transform = 'translate(-50%, -50%) scale(1)';
            regionEl.style.boxShadow = 'none';
            regionEl.style.zIndex = '1';
        });
        
        salesMap.appendChild(regionEl);
    });
}

// Set up event listeners for dashboard interactivity
function setupEventListeners() {
    // Date range selector
    dateRangeSelector.addEventListener('change', () => {
        const selectedPeriod = dateRangeSelector.value;
        updateDashboardData(selectedPeriod);
    });
    
    // Refresh button
    refreshBtn.addEventListener('click', () => {
        refreshBtn.classList.add('rotating');
        setTimeout(() => {
            refreshDashboard();
            refreshBtn.classList.remove('rotating');
        }, 1000);
    });
    
    // Revenue chart view toggles
    document.querySelectorAll('.chart-action-btn[data-view]').forEach(btn => {
        btn.addEventListener('click', () => {
            const view = btn.getAttribute('data-view');
            updateRevenueChart(view);
            
            // Update active state
            document.querySelectorAll('.chart-action-btn[data-view]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
    
    // Category chart view toggles
    document.getElementById('viewAsDonut').addEventListener('click', () => {
        updateCategoryChart('doughnut');
        document.getElementById('viewAsDonut').classList.add('active');
        document.getElementById('viewAsBar').classList.remove('active');
    });
    
    document.getElementById('viewAsBar').addEventListener('click', () => {
        updateCategoryChart('bar');
        document.getElementById('viewAsBar').classList.add('active');
        document.getElementById('viewAsDonut').classList.remove('active');
    });
    
    // Top products metric toggle
    document.querySelectorAll('.chart-action-btn[data-metric]').forEach(btn => {
        btn.addEventListener('click', () => {
            const metric = btn.getAttribute('data-metric');
            updateTopProductsTable(metric);
            
            // Update active state
            document.querySelectorAll('.chart-action-btn[data-metric]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
    
    // Sales rep period toggle
    document.querySelectorAll('.chart-action-btn[data-period]').forEach(btn => {
        btn.addEventListener('click', () => {
            const period = btn.getAttribute('data-period');
            updateSalesRepChart(period);
            
            // Update active state
            document.querySelectorAll('.chart-action-btn[data-period]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
}

// Update dashboard data based on selected time period
function updateDashboardData(timePeriod) {
    // Get the data for selected time period
    const data = timeData[timePeriod];
    
    // Update all dashboard visualizations with new data
    updateKPIs(timePeriod);
    
    // Update Revenue Chart
    revenueChart.data.labels = data.revenueByMonth.map(item => item.month);
    revenueChart.data.datasets[0].data = data.revenueByMonth.map(item => item.revenue);
    revenueChart.update();
    
    // Update Category Chart
    categoryChartInstance.data.labels = data.categorySales.map(item => item.category);
    categoryChartInstance.data.datasets[0].data = data.categorySales.map(item => item.revenue);
    categoryChartInstance.update();
    
    // Update Top Products Table
    const tableBody = topProductsTable.querySelector('tbody');
    tableBody.innerHTML = '';
    
    data.topProducts.forEach(product => {
        const row = document.createElement('tr');
        
        const productCell = document.createElement('td');
        productCell.textContent = product.product;
        
        const revenueCell = document.createElement('td');
        revenueCell.textContent = new Intl.NumberFormat('en-US', { 
            style: 'currency', 
            currency: 'USD', 
            maximumFractionDigits: 0 
        }).format(product.revenue);
        
        const growthCell = document.createElement('td');
        const growthValue = document.createElement('span');
        growthValue.textContent = `${product.growth > 0 ? '+' : ''}${product.growth}%`;
        growthValue.className = product.growth >= 0 ? 'positive' : 'negative';
        growthCell.appendChild(growthValue);
        
        row.appendChild(productCell);
        row.appendChild(revenueCell);
        row.appendChild(growthCell);
        
        tableBody.appendChild(row);
    });
    
    // Update Funnel Chart
    funnelChartInstance.data.labels = data.acquisitionFunnel.map(item => item.stage);
    funnelChartInstance.data.datasets[0].data = data.acquisitionFunnel.map(item => item.count);
    funnelChartInstance.update();
    
    // Update Sales Rep Chart
    if (timePeriod === '7d' || timePeriod === '30d') {
        // Use line chart for weekly/monthly view
        salesRepChartInstance.destroy();
        const ctx = salesRepChart.getContext('2d');
        
        const datasets = data.salesRepPerformance.map((rep, index) => {
            const colors = ['#0092e0', '#00c48c', '#ffc846', '#ff6b00', '#ff5724'];
            return {
                label: rep.rep,
                data: rep.trend,
                borderColor: colors[index],
                backgroundColor: 'transparent',
                borderWidth: 2,
                tension: 0.4,
                pointRadius: 3
            };
        });
        
        const labels = timePeriod === '7d' 
            ? ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            : ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
        
        salesRepChartInstance = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: datasets
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                interaction: {
                    mode: 'index',
                    intersect: false
                },
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                if (context.parsed.y !== null) {
                                    label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(context.parsed.y);
                                }
                                return label;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return '$' + value / 1000 + 'k';
                            }
                        }
                    }
                }
            }
        });
    } else {
        // Use bar chart for quarterly/yearly view
        updateSalesRepChart('quarterly');
    }
    
    // Update Regional Map
    initRegionalMap();
}

// Update KPI cards with period-specific data
function updateKPIs(timePeriod) {
    // Calculate and display different metrics based on the time period
    let revenue, avgOrder, conversion, customers;
    
    switch(timePeriod) {
        case '7d':
            revenue = 233400;
            avgOrder = 84.82;
            conversion = 4.32;
            customers = 2753;
            break;
        case '30d':
            revenue = 498200;
            avgOrder = 91.47;
            conversion = 4.65;
            customers = 5445;
            break;
        case '90d':
            revenue = 1458390;
            avgOrder = 97.35;
            conversion = 4.28;
            customers = 15294;
            break;
        case '1y':
            revenue = 5876480;
            avgOrder = 115.62;
            conversion = 4.06;
            customers = 50827;
            break;
        case 'all':
            revenue = 15876000;
            avgOrder = 125.73;
            conversion = 4.22;
            customers = 390827;
            break;
        default:
            revenue = 1458390;
            avgOrder = 97.35;
            conversion = 4.28;
            customers = 15294;
    }
    
    // Update the KPI card values
    document.querySelector('#totalRevenue .kpi-value').textContent = new Intl.NumberFormat('en-US', { 
        style: 'currency', 
        currency: 'USD', 
        maximumFractionDigits: 0 
    }).format(revenue);
    
    document.querySelector('#avgOrderValue .kpi-value').textContent = new Intl.NumberFormat('en-US', { 
        style: 'currency', 
        currency: 'USD', 
        minimumFractionDigits: 2,
        maximumFractionDigits: 2 
    }).format(avgOrder);
    
    document.querySelector('#conversionRate .kpi-value').textContent = conversion.toFixed(2) + '%';
    
    document.querySelector('#activeCustomers .kpi-value').textContent = new Intl.NumberFormat('en-US').format(customers);
    
    // Add animation
    animateKPICards();
}

// Update revenue chart based on selected view
function updateRevenueChart(view) {
    // Get current time period data
    const timePeriod = dateRangeSelector.value;
    const data = timeData[timePeriod];
    
    let chartData, label, color;
    
    switch(view) {
        case 'orders':
            chartData = data.revenueByMonth.map(item => item.orders);
            label = 'Orders';
            color = '#00c48c';
            break;
        case 'yoy':
            chartData = data.revenueByMonth.map(item => item.revenue);
            const lastYearData = data.revenueByMonth.map(item => item.lastYear);
            
            revenueChart.data.datasets = [
                {
                    label: 'This Period',
                    data: chartData,
                    borderColor: '#0092e0',
                    backgroundColor: 'rgba(0, 146, 224, 0.1)',
                    borderWidth: 2,
                    tension: 0.3,
                    fill: true
                },
                {
                    label: 'Previous Period',
                    data: lastYearData,
                    borderColor: '#6c757d',
                    backgroundColor: 'transparent',
                    borderWidth: 2,
                    borderDash: [5, 5],
                    tension: 0.3,
                    fill: false
                }
            ];
            
            revenueChart.options.plugins.legend.display = true;
            revenueChart.update();
            return;
        default: // revenue
            chartData = data.revenueByMonth.map(item => item.revenue);
            label = 'Revenue ($)';
            color = '#0092e0';
    }
    
    revenueChart.data.datasets = [{
        label: label,
        data: chartData,
        borderColor: color,
        backgroundColor: color === '#0092e0' ? 'rgba(0, 146, 224, 0.1)' : 'rgba(0, 196, 140, 0.1)',
        borderWidth: 2,
        tension: 0.3,
        fill: true
    }];
    
    revenueChart.options.plugins.legend.display = false;
    revenueChart.update();
}

// Update category chart type (bar/doughnut)
function updateCategoryChart(type) {
    // Get current time period data
    const timePeriod = dateRangeSelector.value;
    const data = timeData[timePeriod];
    
    categoryChartInstance.destroy();
    
    const ctx = categoryChart.getContext('2d');
    
    categoryChartInstance = new Chart(ctx, {
        type: type,
        data: {
            labels: data.categorySales.map(item => item.category),
            datasets: [{
                label: 'Revenue by Category',
                data: data.categorySales.map(item => item.revenue),
                backgroundColor: [
                    'rgba(0, 146, 224, 0.8)',
                    'rgba(0, 196, 140, 0.8)',
                    'rgba(255, 200, 70, 0.8)',
                    'rgba(255, 107, 0, 0.8)',
                    'rgba(255, 87, 36, 0.8)'
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: type === 'doughnut',
                    position: 'bottom'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.y !== null) {
                                label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(context.parsed.y);
                            }
                            return label;
                        }
                    }
                }
            },
            scales: {
                y: {
                    display: type !== 'doughnut',
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return '$' + value / 1000 + 'k';
                        }
                    }
                }
            }
        }
    });
}

// Update top products table based on selected metric
function updateTopProductsTable(metric) {
    // Get current time period data
    const timePeriod = dateRangeSelector.value;
    const data = timeData[timePeriod];
    
    const tableBody = topProductsTable.querySelector('tbody');
    tableBody.innerHTML = '';
    
    // Sort data based on metric
    const sortedProducts = [...data.topProducts].sort((a, b) => {
        return b[metric === 'units' ? 'units' : 'revenue'] - a[metric === 'units' ? 'units' : 'revenue'];
    });
    
    sortedProducts.forEach(product => {
        const row = document.createElement('tr');
        
        const productCell = document.createElement('td');
        productCell.textContent = product.product;
        
        const valueCell = document.createElement('td');
        if (metric === 'units') {
            valueCell.textContent = new Intl.NumberFormat('en-US').format(product.units);
        } else {
            valueCell.textContent = new Intl.NumberFormat('en-US', { 
                style: 'currency', 
                currency: 'USD', 
                maximumFractionDigits: 0 
            }).format(product.revenue);
        }
        
        const growthCell = document.createElement('td');
        const growthValue = document.createElement('span');
        growthValue.textContent = `${product.growth > 0 ? '+' : ''}${product.growth}%`;
        growthValue.className = product.growth >= 0 ? 'positive' : 'negative';
        growthCell.appendChild(growthValue);
        
        row.appendChild(productCell);
        row.appendChild(valueCell);
        row.appendChild(growthCell);
        
        tableBody.appendChild(row);
    });
}

// Update sales rep chart based on period
function updateSalesRepChart(period) {
    // Get current time period data
    const timePeriod = dateRangeSelector.value;
    const data = timeData[timePeriod];
    
    salesRepChartInstance.destroy();
    const ctx = salesRepChart.getContext('2d');
    
    if (period === 'quarterly') {
        // For 7d and 30d, we don't have quarterly data,
        // so we'll show a simple bar chart instead
        if (timePeriod === '7d' || timePeriod === '30d') {
            const reps = data.salesRepPerformance.map(rep => rep.rep);
            const values = data.salesRepPerformance.map(rep => rep.value);
            
            salesRepChartInstance = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: reps,
                    datasets: [
                        {
                            label: 'Total Sales',
                            data: values,
                            backgroundColor: 'rgba(0, 146, 224, 0.8)',
                            barPercentage: 0.6,
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    let label = context.dataset.label || '';
                                    if (label) {
                                        label += ': ';
                                    }
                                    if (context.parsed.y !== null) {
                                        label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(context.parsed.y);
                                    }
                                    return label;
                                }
                            }
                        }
                    },
                    scales: {
                        x: {
                            grid: {
                                display: false
                            }
                        },
                        y: {
                            beginAtZero: true,
                            ticks: {
                                callback: function(value) {
                                    return '$' + value / 1000 + 'k';
                                }
                            }
                        }
                    }
                }
            });
        } else {
            // For quarterly and yearly data, show the full quarterly breakdown
            salesRepChartInstance = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: data.salesRepPerformance.map(rep => rep.rep),
                    datasets: [
                        {
                            label: 'Q1',
                            data: data.salesRepPerformance.map(rep => rep.Q1),
                            backgroundColor: 'rgba(0, 146, 224, 0.8)',
                            barPercentage: 0.8,
                            categoryPercentage: 0.9
                        },
                        {
                            label: 'Q2',
                            data: data.salesRepPerformance.map(rep => rep.Q2),
                            backgroundColor: 'rgba(0, 196, 140, 0.8)',
                            barPercentage: 0.8,
                            categoryPercentage: 0.9
                        },
                        {
                            label: 'Q3',
                            data: data.salesRepPerformance.map(rep => rep.Q3),
                            backgroundColor: 'rgba(255, 200, 70, 0.8)',
                            barPercentage: 0.8,
                            categoryPercentage: 0.9
                        },
                        {
                            label: 'Q4',
                            data: data.salesRepPerformance.map(rep => rep.Q4),
                            backgroundColor: 'rgba(255, 107, 0, 0.8)',
                            barPercentage: 0.8,
                            categoryPercentage: 0.9
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    let label = context.dataset.label || '';
                                    if (label) {
                                        label += ': ';
                                    }
                                    if (context.parsed.y !== null) {
                                        label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(context.parsed.y);
                                    }
                                    return label;
                                }
                            }
                        }
                    },
                    scales: {
                        x: {
                            grid: {
                                display: false
                            }
                        },
                        y: {
                            beginAtZero: true,
                            ticks: {
                                callback: function(value) {
                                    return '$' + value / 1000 + 'k';
                                }
                            }
                        }
                    }
                }
            });
        }
    } else {
        // Create monthly view with line chart
        // For 7d and 30d, we use their custom trend data
        if (timePeriod === '7d') {
            const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
            const datasets = data.salesRepPerformance.map((rep, index) => {
                const colors = ['#0092e0', '#00c48c', '#ffc846', '#ff6b00', '#ff5724'];
                return {
                    label: rep.rep,
                    data: rep.trend,
                    borderColor: colors[index],
                    backgroundColor: 'transparent',
                    borderWidth: 2,
                    tension: 0.4,
                    pointRadius: 3
                };
            });
            
            salesRepChartInstance = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: days,
                    datasets: datasets
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    interaction: {
                        mode: 'index',
                        intersect: false
                    },
                    plugins: {
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    let label = context.dataset.label || '';
                                    if (label) {
                                        label += ': ';
                                    }
                                    if (context.parsed.y !== null) {
                                        label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(context.parsed.y);
                                    }
                                    return label;
                                }
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                callback: function(value) {
                                    return '$' + value / 1000 + 'k';
                                }
                            }
                        }
                    }
                }
            });
        } else if (timePeriod === '30d') {
            const weeks = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
            const datasets = data.salesRepPerformance.map((rep, index) => {
                const colors = ['#0092e0', '#00c48c', '#ffc846', '#ff6b00', '#ff5724'];
                return {
                    label: rep.rep,
                    data: rep.trend,
                    borderColor: colors[index],
                    backgroundColor: 'transparent',
                    borderWidth: 2,
                    tension: 0.4,
                    pointRadius: 3
                };
            });
            
            salesRepChartInstance = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: weeks,
                    datasets: datasets
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    interaction: {
                        mode: 'index',
                        intersect: false
                    },
                    plugins: {
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    let label = context.dataset.label || '';
                                    if (label) {
                                        label += ': ';
                                    }
                                    if (context.parsed.y !== null) {
                                        label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(context.parsed.y);
                                    }
                                    return label;
                                }
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                callback: function(value) {
                                    return '$' + value / 1000 + 'k';
                                }
                            }
                        }
                    }
                }
            });
        } else {
            // For quarterly and yearly data, use monthly breakdown
            const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            const datasets = data.salesRepPerformance.map((rep, index) => {
                const colors = ['#0092e0', '#00c48c', '#ffc846', '#ff6b00', '#ff5724'];
                return {
                    label: rep.rep,
                    data: rep.monthly,
                    borderColor: colors[index],
                    backgroundColor: 'transparent',
                    borderWidth: 2,
                    tension: 0.4,
                    pointRadius: 3
                };
            });
            
            salesRepChartInstance = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: months,
                    datasets: datasets
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    interaction: {
                        mode: 'index',
                        intersect: false
                    },
                    plugins: {
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    let label = context.dataset.label || '';
                                    if (label) {
                                        label += ': ';
                                    }
                                    if (context.parsed.y !== null) {
                                        label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(context.parsed.y);
                                    }
                                    return label;
                                }
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                callback: function(value) {
                                    return '$' + value / 1000 + 'k';
                                }
                            }
                        }
                    }
                }
            });
        }
    }
}

// Simulate refresh dashboard
function refreshDashboard() {
    // Get the current time period
    const timePeriod = dateRangeSelector.value;
    const data = timeData[timePeriod];
    
    // Apply small random variations to data
    data.revenueByMonth.forEach(item => {
        const variation = Math.random() * 0.05 - 0.025; // Random between -2.5% and +2.5%
        item.revenue = Math.round(item.revenue * (1 + variation));
        item.orders = Math.round(item.orders * (1 + variation));
    });
    
    // Update all visualizations with the updated data
    updateDashboardData(timePeriod);
}

// Animate KPI cards for visual appeal
function animateKPICards() {
    const kpiCards = document.querySelectorAll('.kpi-card');
    
    kpiCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('animate-in');
            setTimeout(() => {
                card.classList.remove('animate-in');
            }, 500);
        }, index * 100);
    });
}

// Initialize the dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', initDashboard);