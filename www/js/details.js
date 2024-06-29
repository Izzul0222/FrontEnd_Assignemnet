document.getElementById('signup-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Capture user details
  let userDetails = {
    gender: document.getElementById('gender').value,
    weight: document.getElementById('weight').value,
    height: document.getElementById('height').value,
    targetWeight: document.getElementById('targetWeight').value,
    activity: document.getElementById('activity').value
  };
  
  // Validate if all fields are filled
  if (!userDetails.gender || !userDetails.weight || !userDetails.height || !userDetails.targetWeight || !userDetails.activity) {
    alert('Please fill in all fields');
    return;
  }

  // Store user details in localStorage
  localStorage.setItem('userDetails', JSON.stringify(userDetails));

  // Provide feedback to the user
  alert('Signup Successful');

  // Redirect to foodlog.html
  navigateTo('foodlog.html');
});

function navigateTo(url) {
  window.location.href = url;
}
