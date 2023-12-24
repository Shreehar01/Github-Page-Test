document.addEventListener('DOMContentLoaded', function () {
    // Fetch data from the dummy API
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            // Display data on the page
            const userDataContainer = document.getElementById('data-container-custom');
            console.log("Shreehar user", userDataContainer)
            users.forEach(user => {
                const userContainer = document.createElement('div');
                userContainer.classList.add('user-container');
                userContainer.innerHTML = `
          <h5>${user.name}</h5>
          <p>Username: ${user.username}</p>
          <p>Email: ${user.email}</p>
        `;
                userDataContainer.appendChild(userContainer);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});