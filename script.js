document.getElementById('estimationForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get form values
    var numTasks = parseInt(document.getElementById('numTasks').value);
    var avgTimePerTask = parseInt(document.getElementById('avgTimePerTask').value);
  
    // Cost estimation formula
    var costPerTask = 50; // Arbitrary cost per task
    var totalCost = numTasks * avgTimePerTask * costPerTask;
  
    // Display the result
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '<h2>Estimated Cost:</h2><p>$' + totalCost + '</p>';
  });
  