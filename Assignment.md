# React-Router-Intro Assignment
- _Approach_: 
	- We are going to create a simple react application that is capable of switching through different page views without having to re-render the entire DOM by using react-router. 
	- To do this, we are going to create three simple pages, a Home page, an About page and a Contact page (to simulate a simple website). 
	- We are then going to create a Browser Router using react-router and add it to our application so that we can enter different urls in our browser address bar and visit different pages.
	- We are then going to add a simple navigation bar that will allow us to visit different pages in our application with simple button clicks.
	- Lastly, we are going to add a programmatic redirect to one of our pages to simulate a user visiting our site, filling out a contact form and then being redirected to the Home page.
​
## High Level Instructions
- Create a new github repository called react-router-intro and add the link to populi
- Clone the repository and initialize it by running 'create-react-app .' inside the project directory and running 'npm i react-router-dom' to install react router
- Create 3 pages Home.js, About.js and Contact.js in the .src/Pages directory. Each page should have a simple initial react component with an h1 that says the name of the page.
- Add some lorem ipsum sample text to the Home and About pages.
- Import createBrowserRouter from 'react-router-dom' in index.js and create a new router variable using createBrowserRouter with an empty array of routes.
- Add three new routes to the router array with the following pages as their elements
	- Path "/" should display the Home page
	- Path "/about" should display the About page
	- Path "/contact" should display the Contact page
- Import the RouterProvider component from 'react-router-dom' and replace the default <App/> component in index.js with <RouterProvider/> with the router passed in as a prop.
- Create a new component NavBar in the ./src/Components directory. Import the <Link/> component from 'react-router-dom' and add three links to the NavBar component that link to "/", "/about" and "/contact"
- Import NavBar into Home.js, About.js and Contact.js and add the <NavBar /> component to each page so that the NavBar displays above the h1 header for all the pages.
- Add a basic text input fields to the Contact page for firstName, lastName and email (just as an example contact page) and a button that says 'Submit' that programmatically redirects to the home page onClick
​
## Expanded Instructions
​
1) Project Setup:
- Create a new github repo called react-router-intro
- Clone the repo to your computer and add the link to populi
- cd into the react-router-intro directory
- Run 'npx create-react-app .' to initialize react in the repository
- Run 'npm i react-router-dom'
- Open App.js and replace the initial code with the following code:
​
```
import "./App.css";
​
const App = () => {
	return (
		<div className="App-header">
​
		</div>
	);
}
​
export default App;
```
- Run 'npm start' after react has finished installing
- If the above worked properly, you should see the react start page on localhost:3000
​
2) Create the Application Pages
- _Approach_: We are going to create three simple pages, a Home Page, an About Page and a Contact Page, for our application to render based upon the url path.  
- Create a new directory ./src/Pages
- Create three new files
	- ./src/Pages/Home.js
	- ./src/Pages/About.js
	- ./src/Pages/Contact.js
- In each of the three files, create a simple react component. The name of the component should be the page name + Page (e.g. HomePage for Home.js). The components should all be the default export of the file. The components should also have an h1 inside the JSX with the title of the page (e.g. About Page in h1 tags for the about page)[1]
- In the JSX of the Home Page and the About Page, add some lorem ipsum example text separated into paragraphs using <p> tags.
	- https://www.lipsum.com/
​
3) Add the Browser Router and Create the Routes
- _Approach_: We are going to create a new Browser Router using react-router. The Browser Router will act as the main component that handles the url and page routing for our application.
- Open index.js and implement the following:
- import createBrowserRouter and RouterProvider from 'react-router-dom'
- import HomePage from './src/Pages/HomePage'
- import AboutPage from './src/Pages/AboutPage'
- import ContactPage from './src/Pages/ContactPage'
- Above the root variable, create a new variable called 'router' and set the value equal to createBrowserRouter([]). [2]
- In the empty array of createBrowserRouter([]), add three new objects which represent our routes with the following properties: [3]
	- The first object should have a path equal to "/" and the element should be <HomePage/>
	- The second object should have a path equal to "/about" and the element should be <AboutPage/>
	- The third object should have a path equal to "/contact" and the element should be <ContactPage/>
	- _Commentary_: These three objects represent the different url paths for our application. E.G. The path '/about' will be the path in the url after localhost:3000 (i.e. localhost:3000/about) and will display the About Page when visited.
- In the JSX of root (between the <React.StrictMode> tags), replace <App/> with <RouterProvider/> and pass in router as a prop. [4]
- If you implemented the above correctly,	you should be able to visit the following urls and see their respective pages render:
	- localhost:3000 => Home Page
	- localhost:3000/about => About Page
	- localhost:3000/contact => Contact Page
​
4) Adding a Navigation Bar
- _Approach_: We cannot expect our users to manually enter urls into the address bar when they want to visit different pages in our application. Thus, we are going to create a navigation bar component with links to our pages. We are then going to import the navigation bar into every page of our application so that our users can click simply through to the various pages.
- Create a new folder ./src/Components
- Create a new file ./src/NavBar.js
- In ./src/NavBar.js, implement the following:
- Create a simple react component called NavBar and have it default exported from the file.
- Import Link from 'react-router-dom' at the top of the file.
- Add three <Link><Link/> components into the JSX of NavBar. The text inside the <Link> tags should be names of the three pages of our application Home, About and Contact. The 'to' prop for each <Link> should be set to the appropriate path for each page (e.g. '/contact' for the Contact Page).[5]
- In each of the three page files ./src/HomePage.js, ./src/AboutPage.js and ./src/ContactPage.js, import the NavBar component. Then in the JSX of each Page, add an instance of <NavBar/> above the h1 tag. [6]
- If you implemented the above correctly, you should now be able to view every page of your application and click on the links in the navigation bar to switch between pages.
	- _Note_: Even though we are switching between pages, we are not reloading the browser and the nagivation between pages is fast since we are simply rendering different componets as our pages using react-router.
​
5) Building the Contact Form 
- _Approach_: We are going to implement basic form fields to simulate a user entering information on our site. We are then going to add a programmatic on our submit button to simulate a user submitting the form and being redirected to the Home Page.
- In ./src/ContactPage.js, implement the following:
- Import useNavigate from 'react-router-dom'
- Add the variable navigate = useNavigate() to the body of Contate Page (above the JSX return statement).
- Add three new text input fields in the JSX of ContactPage with accompanying state variables for firstName, lastName and email.
- Add a button with the text 'Submit' to the JSX of ContactPage. Add an onClick handler that calls useNavigate with "/" passed in as the argument. [7]
- If you implemented the above correctly, you should be able to visit the contact page and click the Submit button and be redirected to the Home Page.
​
**********STRETCH_GOALS**********
​
6) Add Basic Form Validation to the Contact Page
- In the onClick handler of the contact form Submit button, add conditionals that will check to see that all three fields firstName, lastName and email have truthy values before allowing the user to submit the form. I.E. Check to see that all three state variables have truthy values before calling navigate("/")
​
## Code References
- [1] 
```
const HomePage = () => {
	return (
		<div>
			<h1>
				Home Page
			</h1>
		</div>
	)
}
​
export default HomePage
```
- [2] 
```
const router = createBrowserRouter([])
```
- [3]
```
const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage/>
	},
	{
		path: "/about",
		element: <AboutPage/>
	},
	{
		path: "/contact",
		element: <ContactPage/>
	}
])
```
- [4]
```
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```
- [5]
import { Link } from "react-router-dom";
​
const NavBar = () => {
	return (
		<div>
			<Link to="/">Home</Link>
			<Link to="/about">About</Link>
			<Link to="/contact">Contact</Link>
		</div>
	)
}
​
export default NavBar;
- [6] 
```
import NavBar from '../Components/Navbar'
​
const HomePage = () => {
	return (
		<div>
			<NavBar/>
			<h1>
				Home Page
			</h1>
		</div>
	)
}
​
export default HomePage
```
- [7]
```
<button onClick={()=>{
	navigate("/")
}}></button>
```