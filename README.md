
# FreeGameAds - React Gaming Website
Welcome to FreeGameAds, a single-source gaming website where users can explore a diverse range of games, purchase from official gaming stores, and stay updated with the latest gaming news. This README will provide an overview of the project highlights, how to get started with the project, and future development plans.

# Project Highlights
### Search Functionality: Users can search for their favorite games using the search feature, powered by the Rawg.io API.
### Store Page: Explore different official gaming stores to make purchases directly.
### Games Page: Browse through various types of games and explore their details.
### Stay in the Loop: Keep updated with the latest gaming news by subscribing to the newsletter.
### Shared State: Users can share their favorite games and receive recommendations based on the shared state.

# Getting Started
To get started with FreeGameAds, follow these steps:

Clone the Git repository to your local machine:

Copy code
git clone https://github.com/Harmani25/FREEGAMEADSwebsite.git
Navigate to the project directory:

Copy code
cd FreeGameAds
###Install the required dependencies and libraries:

Copy code
npm install
Locate the api folder and navigate to the api_keys.js file. Insert your API key obtained from Rawg.io:
javascript
Copy code
// api_keys.js

const RAWG_API_KEY = 'YOUR_RAWG_API_KEY';

Similarly, navigate to the Supes.jsx file and insert your API keys obtained from SuperHeroAPI.com:
javascript
Copy code
// Supes.jsx

const API_KEY = 'YOUR_SUPERHERO_API_KEY';
Start the development server:
bash
Copy code
npm start
Explore a series of games, stores, and stay updated with the latest gaming news!

# Libraries Used
### Node.js: Used as the runtime environment for server-side JavaScript execution.
### Formik: Formik is employed for building and managing complex forms in React applications. It simplifies form validation, handling form state, and form submission.
Yup: Yup is a JavaScript schema builder for value parsing and validation. It works seamlessly with Formik to define validation rules for form fields.
### Styled Components: Styled Components is a CSS-in-JS library used for styling React components. It enables developers to write CSS code directly within their JavaScript files, facilitating component-based styling and enhancing maintainability.
### React Breadcrumbs: React Breadcrumbs is a React component library used for implementing breadcrumb navigation functionality in web applications. Breadcrumbs provide users with a hierarchical trail of links, allowing them to easily navigate back to previous pages.
### Axios: Axios is a popular JavaScript library used for making HTTP requests from the browser. It simplifies the process of sending asynchronous HTTP requests and handling responses.
### Chakra UI: Chakra UI is a simple, modular, and accessible component library for building React applications. It provides a set of customizable UI components that follow best practices for design and accessibility

# Challenges
Search Integration: Despite successful search requests to the Rawg.io API, the search results are not rendering on the homepage. The search functionality appears to work correctly in the console, indicating a potential issue with rendering or state management in the React components.

# Future Development
In the future, FreeGameAds aims to implement the following features:

### Game Trailers: Integrate video trailers as part of the game descriptions to provide a better user experience.
### Ratings and Reviews: Display ratings and reviews for each game to help users make informed decisions.
### Comparison Feature: Allow users to compare game character powers and games for better decision-making.
### Classified Marketplace: Freegameads aims to evolve into a comprehensive classified website dedicated to gaming items. Users will have the opportunity to buy, sell, or exchange various gaming-related products, including consoles, accessories, collectibles, and digital goods. Implementing robust user authentication, secure payment gateways, and streamlined listing and search functionalities will be crucial for facilitating safe and efficient transact

# Citations and References
The project was developed with the help of various resources and tutorials:

How to Use Redux in ReactJS with Real-Life Examples
Redux React Tutorial: Beginner's Guide to Redux and React
How to Use Axios with React
Using Axios with React
React Documentation
Live Deployment
The project is live and deployed via Netlify. You can access it at https://freegameads.netlify.app/