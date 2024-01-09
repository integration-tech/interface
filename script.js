function loadFormUI() {
  const formContainer = document.getElementById("form");

  if (!formContainer) return;

  const formConfig = [
      { "name": "nameField", "type": "text", "placeholder": "Enter your name" },
      { "name": "messageField", "type": "textarea", "placeholder": "Enter your message" },
      { "name": "agreeCheckbox", "type": "checkbox", "label": "I agree to the terms and conditions" },
      { "name": "emailField", "type": "email", "placeholder": "Enter your email" },
      { "name": "passwordField", "type": "password", "placeholder": "Enter your password" },
      { "name": "optionRadio", "type": "radio", "label": "Select an option", "options": ["Option 1", "Option 2", "Option 3"] },
      { "name": "numberField", "type": "number", "placeholder": "Enter a number" },
      { "name": "dateField", "type": "date", "placeholder": "Select a date" },
      { "name": "selectField", "type": "select", "label": "Select an option", "options": ["Option 1", "Option 2", "Option 3"] },
      { "name": "fileInput", "type": "file", "label": "Choose a file" },
      { "name": "colorField", "type": "color", "label": "Select a color" },
      { "name": "rangeField", "type": "range", "label": "Choose a value within a range" },
      { "name": "urlField", "type": "url", "placeholder": "Enter a URL" },
      { "name": "telField", "type": "tel", "placeholder": "Enter a phone number" },
      { "name": "searchField", "type": "search", "placeholder": "Search for something" },
      { "name": "weekField", "type": "week", "placeholder": "Select a week" },
      { "name": "timeField", "type": "time", "placeholder": "Select a time" },
      { "name": "monthField", "type": "month", "placeholder": "Select a month" },
      { "name": "datetimeField", "type": "datetime-local", "placeholder": "Select date and time" },
      { "name": "hiddenField", "type": "hidden", "value": "hidden value" },
      { "name": "submitButton", "type": "submit", "value": "Submit Form" },
      { "name": "resetButton", "type": "reset", "value": "Reset Form" },
      { "name": "clickButton", "type": "button", "value": "Click Me" },
      { "name": "imageButton", "type": "image", "src": "path/to/image.jpg", "alt": "Image Button" }
  ];

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
          overflow: auto; /* Fixed typo 'outflow' */
          max-height: 300%;
          margin-bottom: 40px;
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

        input, textarea, select {
          width: 100%;
          padding: 8px;
          margin-bottom: 15px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }

        /* Adjusted radio options styling */
        .radio-group {
          display: flex;
          flex-direction: column;
        }

        .radio-option {
          display: flex; /* Align the radio button and label horizontally */
          align-items: center; /* Center the items vertically */
          margin-bottom: 10px;
        }
        .radio-option input{
          order:2;
        }
        

        button {
          display: block;
          margin: 0 auto;
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
          ${generateFormFields(formConfig)}
          <button type="submit">Sign Up</button>
        </form>
      </div>
  `;
}

function generateFormFields(config) {
  return config.map(field => {
      if (field.type === 'textarea') {
          return `
            <label for="${field.name}">${field.name}:</label>
            <${field.type} id="${field.name}" name="${field.name}" required></${field.type}>
          `;
      } else if (field.type === 'checkbox') {
          return `
            <label>
              <input type="${field.type}" id="${field.name}" name="${field.name}" required> ${field.label}
            </label>
          `;
      } else if (field.type === 'radio') {
          return `
            <label>${field.label}:</label>
            <div class="radio-group">
              ${field.options.map(option => `
                <label class="radio-option">
                  <input type="${field.type}" name="${field.name}" value="${option}" required> ${option}
                </label>
              `).join('')}
            </div>
          `;
      } else if (field.type === 'select') {
          return `
            <label>${field.label}:</label>
            <select name="${field.name}" required>
              ${field.options.map(option => `<option value="${option}">${option}</option>`).join('')}
            </select>
          `;
      } else if (field.type === 'file' || field.type === 'hidden' || field.type === 'submit' || field.type === 'reset' || field.type === 'button') {
          return `
            <input type="${field.type}" id="${field.name}" name="${field.name}" value="${field.value || ''}" />
          `;
      } else if (field.type === 'image') {
          return `
            <label>${field.label}:</label>
            <input type="${field.type}" src="${field.src}" alt="${field.alt}" />
          `;
      } 
      else if (field.type === 'color' || field.type === 'range') {
        // Handle color and range fields separately
        return `
          <label>${field.label}:</label>
          <input type="${field.type}" id="${field.name}" name="${field.name}" ${
          field.type === 'range' ? 'min="0" max="100"' : ''} ${
          field.type === 'color' ? 'value="#000000"' : ''} />
        `;
      } 
      else {
          return `
            <label for="${field.name}">${field.placeholder}:</label>
            <input type="${field.type}" id="${field.name}" name="${field.name}" placeholder="${field.placeholder}" required />
          `;
      }
  }).join('');
}

loadFormUI();

function setFormConfiguration({ apiname, name }) {
  window.form.apiname = apiname;
  window.form.name = name;
}

window.form = {};
window.form.setFormConfiguration = setFormConfiguration;

setTimeout(() => {
  console.log("api: " + form.apiname);
  console.log("name: " + form.name);
}, 1000);
