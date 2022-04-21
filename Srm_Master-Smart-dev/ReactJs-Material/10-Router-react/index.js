// React Router

// Create React App doesn't include page routing.

// React Router is the most popular solution.

// Add React Router
// To add React Router in your application, run this in the terminal from the root directory of the application:

// npm i -D react-router-dom


// Folder Structure

// To create an application with multiple page routes, let's first start with the file structure.

// Within the src folder, we'll create a folder named pages with several files:

// src\pages\:

Layout.js
Home.js
Blogs.js
Contact.js
NoPage.js
// Each file will contain a very basic React component.

// Basic Usage
// Now we will use our Router in our index.js file.

// Example
// Use React Router to route to pages based on URL:

// index.js:

import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));