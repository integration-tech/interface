### 🌐 Dynamic Form Generator

This project provides a dynamic form generation functionality using HTML and JavaScript. Users can easily configure various form fields through a provided script and incorporate it into their web applications.

### 🚀 Getting Started

To integrate this dynamic form generator into your project, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/integration-tech/interface.git
    ```

2. **Open the project directory:**
    ```bash
    cd interface
    ```

3. **Include the provided script directly in your HTML document:**
    ```html
    <!-- Include the styles from the script here -->

    <script>
        // Include the combined script here
        function loadFormUI() {
            // ... (rest of the code)
        }

        function setFormConfiguration({ apiname, name }) {
            // ... (rest of the code)
        }

        window.form = {};
        window.form.setFormConfiguration = setFormConfiguration;

        setTimeout(() => {
            console.log("api: " + form.apiname);
            console.log("name: " + form.name);
        }, 1000);

        loadFormUI();
    </script>
    ```

4. **Configure the form by updating the `formConfig` array in the script and set the configuration using:**
    ```html
    <script>
        form.setFormConfiguration({
            apiname: "ram",
            name: "ravan"
        });
    </script>
    ```

   Customize the `apiname` and `name` parameters as needed.

### ⚙️ Form Configuration

The form can be configured with various field types and options. Modify the `formConfig` array in the combined script file (`script` tag in the HTML) to customize the form fields.

Example configuration:

```javascript
const formConfig = [
    { "name": "nameField", "type": "text", "placeholder": "Enter your name" },
    // ... other field configurations ...
];
