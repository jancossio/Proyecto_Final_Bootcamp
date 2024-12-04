const form = document.querySelector('.form').addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent default form submission

    // Capture form data
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Basic validation
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Create data object
    const formData = {
      email: email,
      password: password
    };

    try {
      // Send the data to the endpoint
      const response = await fetch('http://localhost:8080/users/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
      } else {
        const error = await response.json();
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  });