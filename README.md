<<<<<<< HEAD
# odore-test
Test work for Odore
=======
## Components:

### GenderSelector:
- **Responsibility:** Provides a selection option for gender.
- **Reusability:** Medium to high, depending on the need for gender selection in other parts of the application.

### PasswordInput:
- **Responsibility:** Renders an input field for password entry.
- **Reusability:** High, as password input fields are commonly used in various forms throughout the application.
## Folder Structure:

- **components:**
  - GenderSelector: Contains the component responsible for gender selection.
  - PasswordInput: Contains the component responsible for password input.
  - UsernameInput: Contains the component responsible for username input.
  - UserForm: Contains the generic form component with formik integration.

- **containers:**
  - SignUpForm: Contains the component for the basic sign-up form.
  - SignUpFormExtended: Contains the component for the extended sign-up form with additional fields.

- **App:** Contains the main component where Material-UI tabs are implemented for navigation between different forms.

## Installation

You can install the dependencies and set up the project using either npm or Yarn. It is recommended to use Yarn for consistency with the existing setup.

### Using Yarn (recommended)

To install with Yarn, run the following command:

```yarn install```
or 
```npm i```

### Running the Application

To start the application in development mode with hot reloading, use:

```yarn start```

### Building the Application

To build the application for production:

```yarn build```

### Running Tests

To run the unit tests:

```yarn test```

## Viewing the Built Application

If you want to view the built version of the application without running a development server, navigate to the dist folder after building and open the index.html file in your web browser
>>>>>>> master
