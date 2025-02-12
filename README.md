# E-Commerce-_FollowAlong
 **Features**

1. **Authentication Page**  
   - User Login and Signup functionality.  
   - Password security.  
   - Token-based authentication for session management.  

2. **Product Page**  
   - Displays a list of available products.  
   - Search and filter functionality for efficient product browsing.  

3. **Order Page**  
   - View all past orders with relevant details (product name, price, date).  
   - Track the status of current orders.  

4. **Payment Gateway**  
   - Multiple payment methods (credit/debit card, UPI, wallet).  
   - Secure transaction handling.  
   - Mock payment integration for testing.


   ## Tech Stack

### **Frontend**  
- **React**: For building an interactive and dynamic user interface.  
- **Next.js**: For server-side rendering and improving performance.  

### **Backend**  
- **Express.js**: For building the RESTful API to handle business logic.  
- **Mongoose**: For managing the MongoDB database and creating schemas.  

### **Database**  
- **MongoDB**: To store user information, product data, orders, and payment records. 
---

## MILESTONE1 :-
1. Set Up the Development Environment
Installed all the necessary tools and dependencies to set up the development environment for the MERN (MongoDB, Express, React, Node.js) stack project. This includes configuring the backend and frontend dependencies to ensure smooth development.
2. Understand Server-Client Interaction
Gained an understanding of how the frontend (React) interacts with the backend (Node.js/Express) using APIs. Focused on how the client sends requests to the server, and how the server processes them and sends back responses.
3. Set Up a Simple Server
Created a basic server using Node.js and Express, laying the foundation for the project. The server is set up to handle API requests and provide a foundation for future endpoints and business logic.

---
## MILESTONE 2  :-
1. Create a Structured Folder Hierarchy
Designed and implemented a structured folder hierarchy for the project, organizing the files in a way that ensures easy maintainability and scalability for both the frontend and backend.
2. Set Up React App (Frontend) and Node.js Server (Backend)
Frontend: Set up a React app to serve as the user interface for the project.
Backend: Configured a Node.js server using Express to handle API requests, providing the foundation for server-side logic and database interaction.
3. Configure Tailwind CSS for Styling
Integrated and configured Tailwind CSS into the project to streamline the styling process and improve the overall design flexibility with utility-first CSS.
4. Add Optional Extensions for Development Efficiency
Installed and configured optional extensions such as Prettier, ESLint, and others to improve code formatting, quality, and overall development workflow.
5. Build a Functional and Styled Login Page (Frontend)
Developed and styled a Login Page for the frontend using React, Tailwind CSS, and connecting it to the backend for user authentication functionality.

---
## MILESTONE3 :- 
1. Set Up Dedicated Folders for Organizing Backend Code
Created dedicated folders for organizing the backend code. This ensures better structure and maintainability of the server-side code, with clear separation of concerns.
2. Initialized and Configured a Node.js Server
Set up a Node.js server using Express to handle API requests. This provides the backbone for the backend, allowing it to process incoming requests and return responses.
3. Connected the Application to MongoDB
Established a connection to MongoDB, enabling the application to store and manage data in a NoSQL database. This allows for flexible data handling and seamless interactions with the backend.
4. Implemented Basic Error Handling
Incorporated basic error handling in the server to ensure smooth operation. This handles potential errors gracefully, improving the reliability and stability of the application.

---

## MILESTONE4 :-
1. Create a User Model
Designed and implemented a User Model that serves as a blueprint for how user data is structured and stored in the database. This model defines the user schema and the fields that are needed for user-related data.
2. Create a User Controller
Developed a User Controller that handles the logic related to user data. It manages tasks such as adding a new user, retrieving user information, and other user-related operations.
3. Enable and Configure Multer for File Uploads
Configured Multer to handle file uploads in the application. This allows users to upload files (like images) which will be stored appropriately in the system. Multer is set up to handle storage configurations and file validation.


---

## MILESTONE5 :-
1. Created a Sign-Up Page in React.
2. Implemented form validation for:
     - Name (required)
     - Email (valid format required)
     - Password (minimum 2 characters)
     - Password Confirmation (must match password)

4. Used React Router for navigation.

---

## Milestone 6: User Registration and Authentication
1. User Creation Endpoint (/create-user):
 - Implemented an endpoint to create a new user.
 - Validated the email to ensure the user doesn’t already exist.
 - Successfully handled file uploads (e.g., avatar) using multer.

 2. Password Hashing:
 Used bcryptjs to hash passwords before saving them to the database, ensuring secure password storage.

4. Error Handling:
- Incorporated centralized error handling using a custom ErrorHandler class.
- Applied catchAsyncErrors middleware to manage asynchronous errors in the routes.

5. User Data Storage:
Stored user details (e.g., name, email, password, avatar) in MongoDB with encrypted password.

6. Email Notification (Optional):
Integrated an email notification system to send a welcome email to the user after successful registration (using sendMail).

7. JWT Token Generation:
Added a method to generate JWT tokens upon user login (for future use in authentication routes).

---

## Milestone 7 : 

1. Created a Login Endpoint

- Accepts user credentials (email/username and password).

- Retrieves the corresponding user from the database.

- Returns an error message if the user does not exist.

2. Implemented Password Validation

- Used bcrypt to hash the entered password.

- Compared it with the stored hashed password for authentication.

- If the passwords match, authentication is successful; otherwise, an error is returned.

---


## Milestone 8: 

## Updates & Changes

1. Created a Product Card Component :

- Designed a reusable ProductCard component.

- The card displays product details such as:

    - Product Image

    - Product Name

    - Price

    - Description

    - Add to Cart Button

- Used props to pass dynamic product data.

2. Implemented the Homepage Layout  

- Created a HomePage component to display multiple product cards.

- Used array mapping to iterate over a product list and render cards dynamically.

- Ensured a clean and structured layout for better UI/UX.

3. Updated Routes in App.jsx

- Integrated HomePage into the routing system.

- Ensured seamless navigation across the application.

---

## Milestone : 9

Today, we will create a frontend form for taking products input. Let’s dive in and understand what this all means!

Learning Goals 🎯
By the end of this milestone, you will:

Learn how to create a form that will take all the details of product
Learn how to take multiple images as input.
Why Create Product form?
Here we will create an form to input all the details of product.
This details will be eventually saved in database and will be displayed on products home page we created in previous milestone.
Steps for Milestone 9📝
Create the form for products

This form will take multiple product images images as input

Note:- This lesson will help you in understanding the basic creating of products please feel free to experiment on adding more features like creating an admin access and allow only admin to upload products or create and shop profile and a user with only shop profile can upload.

---

## Milestone 10:

**Creating the Product Schema and API Endpoint**
In this milestone, we focused on defining the structure of product data and creating an API endpoint to store product details in MongoDB.
1. Product Schema Definition:
- Defined a structured product schema using Mongoose to store product data in MongoDB.
- Ensured each field has proper validation to maintain data integrity:
- Name: Required, string**
- Description: Required, string
- Price: Required, number, with validation for non-negative values
- Image URL(s): Required, array of strings for multiple image storage
- Category: Required, string
- CreatedAt: Automatically generated timestamp

2. Endpoint Creation:
- Developed a POST endpoint (/api/products) to accept product details from the frontend.
- Implemented validation to ensure only correctly formatted data is stored in the database.
- Saved product information to MongoDB using Mongoose models.
3. Data Validation & Integrity:
- Enforced strict validation to prevent invalid or incomplete product entries.
- Returned appropriate error messages for missing or incorrect data inputs.
4. Future Enhancements & Experimentation:
- Considered adding role-based access control:
- Admin Access: Only admin users can create new products.
- Shop Profiles: Restrict product uploads to users with a registered shop profile.
- Image Upload Handling: Implement a cloud-based solution (e.g., Cloudinary, AWS S3) for better image management. make this short

---

## Milestone 11 - Dynamic Home Page with Product Data

### Overview
#### In this milestone, we will make the home page dynamic by fetching and displaying all products stored in MongoDB.

- We will write a backend API endpoint to retrieve product data.
- The frontend will call this API and display the products dynamically using the ProductCard component.
#### Learning Goals 🎯
By completing this milestone, you will learn:
- ✅ How to write an API endpoint to fetch data from MongoDB.
- ✅ How to receive and handle data on the frontend.
- ✅ How to display data dynamically using components.

### Steps to Complete Milestone 11 📝

1. Backend: Create an API Endpoint
- Create an API route in Express.js to fetch all products from MongoDB.
- Use Mongoose to retrieve the data.
- This API fetches all products and sends them in JSON format.
- The frontend will call this API to get the list of products.


2. Frontend: Fetch Product Data
- Create a function to fetch product data from the backend using fetch() or Axios.
- Store the data in a state variable.
- useEffect calls the API when the page loads.
- setProducts stores the fetched data.
- map() loops through the products and passes each to ProductCard.


3. Display Products Dynamically
- The ProductCard component will receive product data as a prop and display it.
- Displays product image, name, and price dynamically.

#### Final Outcome 🎉
- ✅ The backend API sends all product data.
- ✅ The frontend fetches this data.
- ✅ Products are dynamically displayed using the ProductCard component.

---

# Milestone 12: My Products Page

## Overview
In this milestone, we will create a "My Products" page that displays all products added by a user based on their email. We will accomplish this by writing a backend endpoint to fetch products from MongoDB filtered by the user's email and dynamically displaying them on the frontend using the previously created product card component.

## Learning Goals 🎯
By the end of this milestone, you will:

- Learn how to write an endpoint to filter and send data from MongoDB based on a user's email.
- Understand how to fetch and receive data on the frontend.
- Display data dynamically using a product card component.

## Steps to Complete Milestone 12 📝

### Backend:
1. **Create an endpoint** in your backend application that retrieves all products associated with a user's email from MongoDB.
2. **Filter products** based on the email provided in the request.
3. **Send the filtered data** as a response to the frontend.

### Frontend:
1. **Write a function** to fetch the filtered product data from the backend.
2. **Process the received data** and pass it to the product card component.
3. **Dynamically display** the products on the "My Products" page.

## Notes
- This lesson will help in understanding how to filter data based on specific constraints and send it to the client efficiently.
- Ensure proper error handling for scenarios where no products are found for a given email.

## Next Steps
- Enhance the UI with better styling and user experience.
- Implement pagination if needed for better performance.
- Add authentication checks to ensure only the logged-in user's products are displayed.

---

# Milestone 13 - Edit and Update Products in MongoDB

## 🌟 Overview
In this milestone, we have implemented the functionality to **edit** the uploaded products. Users can now modify existing product details and save the updates in the MongoDB database.

## 🎯 Learning Goals
By completing this milestone, we have learned:
- How to write an **endpoint** that updates existing data in MongoDB.
- How to **auto-fill a form** with previous data and allow users to edit it.
- How to handle update operations effectively in a **full-stack** application.

---

# Milestone 14 - Delete Products in MongoDB

## 🌟 Overview
In this milestone, we have implemented the functionality to **delete** products from MongoDB. Users can now remove existing products by clicking a delete button.

## 🎯 Learning Goals
By completing this milestone, we have learned:
- How to write an **endpoint** that deletes a product from MongoDB using a specific ID.
- How to handle delete operations effectively in a **full-stack** application.

---
# Milestone 15

In this milestone, we created a navigation bar on the homepage where we can see "My Products," "Add Product," and "Cart."


# Milestone 16

In this milestone, we updated our product detail file so that we can access more information about our product.


