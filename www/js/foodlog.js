function addFood(mealType) {
  // Get the selected date
  let logDate = document.getElementById('logDate').value;

  // Ensure a date is selected before allowing food entry
  if (!logDate) {
    alert('Please select a date before adding food.');
    return;
  }

  let foodItem = prompt('Enter food item');
  if (foodItem) {
    // Retrieve the current food log from local storage or initialize a new one
    let foodLog = JSON.parse(localStorage.getItem(mealType + '_' + logDate)) || [];
    
    // Add the new food item to the log
    foodLog.push(foodItem);
    
    // Save the updated food log back to local storage
    localStorage.setItem(mealType + '_' + logDate, JSON.stringify(foodLog));
    
    alert('Food added for ' + mealType + ' on ' + logDate);

    // Optionally, display the updated food log
    displayFoodLog(mealType, logDate, foodLog);
  }
}

function displayFoodLog(mealType, logDate, foodLog) {
  let logContainer = document.getElementById(mealType + '_log');
  if (!logContainer) {
    logContainer = document.createElement('div');
    logContainer.id = mealType + '_log';
    document.body.appendChild(logContainer);
  }
  logContainer.innerHTML = '<h3>' + mealType.charAt(0).toUpperCase() + mealType.slice(1) + ' Log for ' + logDate + '</h3>';
  logContainer.innerHTML += '<ul>' + foodLog.map(food => '<li>' + food + '</li>').join('') + '</ul>';
}
