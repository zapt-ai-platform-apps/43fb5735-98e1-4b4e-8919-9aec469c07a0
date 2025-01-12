# Register and Login

This document explains the process of creating a new account and logging into EventEase.

1. **Navigate to the Register page (/register)**  
   - Enter your email and password.  
   - Click "Register".  
   - If registration is successful, you will be automatically redirected to the login page.

2. **Navigate to the Login page (/login)**  
   - Enter the same email and password you used when registering.  
   - Click "Login".  
   - On success, you will be redirected to the home page showing a welcome message.

3. **Post-Login**  
   - Once logged in, you can create, view, and manage events.  
   - Your authentication token is stored in the browser (not visible to you directly), and you remain logged in until you explicitly log out (or the token expires).

Important:  
- If an error occurs (e.g., user already exists, invalid credentials), an error message will be shown on the page.  
- For security, passwords are hashed on the server using bcrypt.  
- JWT is used for session management.  