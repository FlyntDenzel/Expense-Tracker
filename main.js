
  var jsonData = [
    { "day": "mon", "amount": 17.45 },
    { "day": "tue", "amount": 34.91 },
    { "day": "wed", "amount": 52.36 },
    { "day": "thu", "amount": 31.07 },
    { "day": "fri", "amount": 23.39 },
    { "day": "sat", "amount": 43.28 },
    { "day": "sun", "amount": 25.48 }
];

// Extracting days and amounts from JSON data
var days = jsonData.map(item => item.day);
var amounts = jsonData.map(item => item.amount);

// Get the canvas element
var ctx = document.getElementById('myChart').getContext('2d');

// Create a bar chart
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: days,
        datasets: [{
            label: 'Amount',
            data: amounts,
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // Adjust the color as needed
            borderColor: 'rgba(75, 192, 192, 1)', // Adjust the color as needed
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
 