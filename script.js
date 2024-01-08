function loadFormUI() {
    const formContainer = document.getElementById("form");
  
    if (!formContainer) return;
  
    formContainer.innerHTML = `
          <style>
          body {
              margin: 0;
              padding: 0;
              font-family: 'Arial', sans-serif;
              display: flex;
              height: 100vh;
          }
          
          .form {
              background: rgba(255, 255, 255, 0.1);
              border-radius: 10px;
              padding: 35px;
              backdrop-filter: blur(10px);
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              width: 320px;
              height: 50vh;
              text-align: center;
          }
          
          h2 {
              color: black;
          }
          
          form {
              text-align: left;
          }
          
          label {
              display: block;
              margin: 10px 0 5px;
              color: black;
          }
          
          input {
              width: 100%;
              padding: 8px;
              margin-bottom: 15px;
              border: 1px solid #ccc;
              border-radius: 5px;
          }
          
          button {
              display: block;
              margin: 0 auto; /* Center the button */
              background-color: blue;
              color: white;
              padding: 10px;
              border: none;
              border-radius: 5px;
              cursor: pointer;
              font-size: 16px;
              font-weight: bold;
          }
          
          button:hover {
              background-color: #45a049;
          }    
          </style>
          <div class="form">
              <h2>Sign Up</h2>
              <form action="#" method="POST">
                  <label for="username">Username:</label>
                  <input type="text" id="username" name="username" required>
  
                  <label for="email">Email:</label>
                  <input type="email" id="email" name="email" required>
  
                  <label for="password">Password:</label>
                  <input type="password" id="password" name="password" required>
  
                  <button type="submit">Sign Up</button>
              </form>
          </div>
  
      `;
  }
  
  loadFormUI();
  
  function setformConfiguration({ apiname, name }) {
    window.form.apiname = apiname;
    window.form.name = name;
  }
  
  window.form.setformConfiguration = setformConfiguration;
  
  setTimeout(() => {
    console.log("api : " + form.apiname);
    console.log("name : " + form.name);
  }, 1000);
  