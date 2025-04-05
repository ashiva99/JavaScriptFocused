

This project is a simple web-based login system with a landing page. It demonstrates basic HTML, CSS, and JavaScript functionality for user authentication and navigation.
1. **Login Page (`index.html`)**
   - Allows users to input a username and password.
   - Displays error messages for invalid credentials or missing input.
   - Redirects to the landing page upon successful login.

2. **Landing Page (`landing.html`)**
   - Displays a welcome message after successful login.
   - Provides a logout button to return to the login page.

3. **Styling**
   - Custom styles for both pages using `styles.css` and `landingstyles.css`.
   - Background images enhance the visual appeal.

4. **JavaScript Functionality**
   - `handleLogin()` validates user credentials and handles redirection.
   - `signOut()` handles logout and redirects to the login page.
   - `outText()` displays a logout success message.

## How to Use

1. Open `index.html` in a browser.
2. Enter the following credentials to log in:
   - Username: `admin`, Password: `password`
   - Username: `goggles`, Password: `2start`
3. Upon successful login, you will be redirected to the landing page.
4. Click the "Logout" button to return to the login page.

## Technologies Used

- **HTML**: Structure of the web pages.
- **CSS**: Styling for the pages.
- **JavaScript**: Logic for login and logout functionality.

1. **Login Page**
   - Background: `lock.jpg`
   - Form with username and password fields.

2. **Landing Page**
   - Background: `unlock.jpg`
   - Welcome message and logout button.

## Future Enhancements

- Add server-side authentication for enhanced security.
- Implement session management to track user login state.
- Improve error handling and user feedback.
