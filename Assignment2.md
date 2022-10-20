# React-Router-Intro Part 2 Assignment
- _Approach_: 
	- In our current setup, we have to import NavBar and include it in the JSX of every page in our application. React-router provides us with the ability to render a part of the page as a layout and have child components render within that layout using the <Outlet/> component. This will allow us to refactor our application so that we only have to import NavBar into a single page layout component, but have the NavBar show up on every page.
	- We will also be creating a Signups page that will dynamically display the users who signup via the contact form with <Outlet/>, the outlet context and the route params.
​
## High Level Instructions
​
1) Layout Refactor
- In ./src/index.js, refactor the routes we are passing into createBrowserRouter so that the topmost route has a path of "/" and the element is <App/>. Set the child routes of this new "/" <App/> route to be <HomePage/> as the index route, <AboutPage/> as the "/about" route and <ContactPage/> as the "/contact" route.
- In ./src/Pages/HomePage, ./src/Pages/AboutPage and ./src/Pages/ContactPage, remove the NavBar import and remove <NavBar/> from the JSX of each component.
- In ./src/App, import the <NavBar/> component and include it in the JSX of <App/>. Additionally, import the <Outlet/> component from 'react-router-dom' and add an instance of <Outlet/> to the JSX of <App/> below <NavBar/>
- Check that the above worked by visiting every page and verifying that each one has a NavBar and is displaying the dark grey background color.
​
**********STRETCH_GOALS**********
​
2) Adding a Signup
- In the body of <App/> in ./src/App.js:
	- Create a new state variable called signupList.
	- Create a new function called handleAddSignup that takes in three parameters: firstName, lastName and email. handleAddSignup should create a new signup object with those three properties and add them to the signupList state variable.
- In the <Outlet/> in the JSX of <App/>, pass in a prop called context with the value of an array containing signupList and handleAddSignup as the first two items.
	- <Outlet context={[signupList, handleAddSignup]}/>
- In <ContactPage/>, implement the following:
	- Import useOutletContext from react-router-dom and invoke it in the body <ContactPage/> to gain access to the handleAddSignup variable. 
	- Call handleAddSignup with the firstName, lastName and email passed as arguments in the Submit button onclick handler.
​
3) Signups Page Implementation
- Create a new page in ./src/Pages called SignupsPage and add it to the router in index.js as a child of the "/" route with the path "/signups".
- Create a new component in ./src/Components called SignupCard and add it to the router in index.js as a child of the "/signups" route with the path "/signups/:email".
- In <NavBar/>, add a new link that links to the "/signups" path for the Signup Page.
- In the <SignupsPage/>, implement the following:
	- Import useOutletContext from react-router-dom and invoke it to gain access to the signupList variable. 
	- Create a select dropdown that:
		- Has one empty option as the default option.
		- Maps through signupList and generates options for each user signup. The value of the options should be the signup email and the text should be the signup's first name.
		- On change, it programmatically navigates to /signups/{email-of-the-signup}
			- _Hint_: The email of the signup should be coming through on the event object.
	- Add an <Outlet/> with a context prop set to an array that containst signupList as its first item.
- In <SignupCard/>, implement the following:
	- Import useOutletContext from react-router-dom and invoke it to gain access to the signupList variable. 
	- Import useParams from react-router-dom and invoke it to gain access to the email url parameter.
	- Loop through signupList and search for a signup whose email matches the email in the url parameter.
	- Add a conditional render to the JSX of <SignupCard/> that will display the signup firstName, lastName and email if the signup exists (if the signup does not exist, only render the enclosing <div>'s for <SignupCard> to avoid react throwing an error).
- If the above was implemented properly, you should be able to add a new user signup via the contact form and see the info for that user display on the /signups/:email page
​
## Extended Instructions
​
1) Refactor the Application Routes
- _Approach_: In order to have our <App/> component act as the layout for our application, we will need to refactor our routes so that the routes we created for part 1 are children of the base <App/> route.
- In ./src/index.js, implement the following:
- Add a new route object in the createBrowserRouter routes array that has the property path set to "/", the property element set to <App/> and property children set to an empty array.
- Move all the route objects from part 1, including the original "/" Home Page route, the /about" route and the "/contact" route into the empty children array for the new "/" route. Then remove the path: "/" property from the <HomePage/> route and set the property index: true on it. [1]
	- _Note_: What we are doing here is setting the default page view for "/" to be <App/> and setting the children of this page view to be our other pages. This will eventually have the effect of rendering our other pages inside of the JSX of <App/> when react-router renders the route we visit. We remove the path for our Home Page and set the property index to be true so that when we visit the "/" route, the Home Page will render by default.
​
2) Refactor NavBar and App Layout
- _Approach_: Instead of importing NavBar three times into three separate files, we want to import it once and include it in our default <App/> layout. We also need to provide a way for react-router to use this layout to render our pages. We will implement this by using the <Outlet/> component provided by react-router.
- In ./src/HomePage.js, ./src/AboutPage.js and ./src/ContactPage.js, remove <NavBar/> from the JSX of each page and remove the NavBar import statement.
- In ./src/App.js, implement the following:
- Import NavBar from "./Components/NavBar" and add <NavBar/> to the JSX of <App/>.
- Import {Outlet} from 'react-router-dom' and add <Outlet/> to the JSX of <App/> below the <NavBar/>.
- If you implemented the above correctly, you should now be able to visit localhost:3000 and see the new page layout render with the grey background and white text styling.
- _Optional_: Add a class to <NavBar/> and add some styling so that the links have space between them and easier to see on the grey background.
​
**********STRETCH_GOALS**********
​
3) Adding a Signup
- _Approach_: We are going to add new user signups to our application by saving the inputs from the <ContactPage/> as a new signup in the state of <App/>. Because our application is now using react-router to render our components, we can no longer directly pass props into child components. Instead, we will be using the <Outlet/> component to pass our variables around our application. 
- In the body of <App/> in ./src/App.js, implement the following:
	- Create a new state variable called signupList with its setter function.
	- Create a new function called handleAddSignup that takes in three parameters: firstName, lastName and email. [2]
	- In the handleAddSignup function, create a new variable newSignup and set the key/value pairs to be equal to the parameters of the handleAddSignup function: firstName, lastName and email. Then add the new signup to the signupList state variable by making a copy of signupList (spread operator), adding newSignup to the signupListCopy and calling setSignupList with signupListCopy.
- In the <Outlet/> component in the JSX of <App/>, pass in a prop called context. Set the value of the context prop to be an array containing signupList and handleAddSignup as the first two items. [3]
	- _Commentary_: <Outlet/> is going to render whatever child element matches the current route, e.g. it will render the <ContactPage/> element for the "/contact" route. In order to pass variables from <App/> in to <ContactPage/> we will have to use the context prop of <Outlet/> to pass our variables through  since we can no longer pass props directly to <ContactPage/> from <App/>.
- In ./src/Pages/ContactPage, implement the following:
	- Import useOutletContext from react-router-dom 
	- In the body of <ContactPage/>, set a destructured array variable containing signupList and handleAddSignup as the two items equal to useOutletContext invoked. [4]
		- _Commentary_: Note how the two items in the destructured array provided by useOutletContext matches the array passed into the <Outlet/> context from <App/>. We can add as many items we wish from the parent element <App/> into this array and gain access to them from the rendered child element. The only thing we need to pay attention to is the order of the items in the array. The first item passed into the context array will be the first item in the destructured array given to us by useOutletContext(). E.G. if we pass [someVariable] into the <Outlet/> context, then the first item in the destructured array coming from useOutletContext() will be someVariable.
	- In the onClick handler for the Submit button, call handleAddSignup with the firstName, lastName and email passed as arguments. [5]
​
4) Adding the Signups Page Route
- _Approach_: Now that we are saving a new user signup with the contact form, we are going to implement a Signups Page that will dynamically display a signup on the page based upon a url parameter.
- Create a new file ./src/Pages/SignupsPage.
- In ./src/Pages/SignupsPage, create a new component <SignupsPage> with the title Signups Page in an h1 tag and export default SignupsPage from the file.
- Create a new file ./src/Components/SignupCard.
- In ./src/Components/SignupCard, create a new component <SignupCard> with just the enclosing <div> tags in the JSX and export default SignupCard from the file.
- In ./src/index.js, implement the following:
	- Import SignupsPage from "./Pages/SignupsPage"
	- Import SignupCard from "./Components/SignupCard"
	- Add a new route as a child of the "/" route, the path should be "/signups" and the element should be <SignupsPage />. 
	- Add a new route as a child of the "/signups" route, the path should be "/signups/:email" and the element should be <SignupCard/> [6]
	- _Commentary_: This will allow the Signup Page to be rendered in our <App/> layout when the user visits localhost:3000/signups. Additionally, when the user vists the url localhost:3000/signups/{some-user-email} the Signup Page will be rendered along with the Signup Card through <Outlet/> since <SignupCard/> is now a child of <SignupsPage/>.
- In the <NavBar/> component in ./src/Components/NavBar.js, add a new <Link/> that links to the "/signups" path with the text Signups.
​
5) Implementing the Signups Page
- In ./src/Pages/SignupsPage.js, implement the following:
	- Import { Outlet, useOutletContext, useNavigate } from 'react-router-dom'
	- In the body of <SignupsPage/>, 
		- Create a new variable navigate and set it equal to useNavigate().
		- Create a new destructured array variable with signupList as the first item and set it equal to useOutletContext(). [7]
	- In the JSX of <SignupsPage/>,
		- Add a new <select> dropdown with an empty <option> as the first option.
		- Inside the <select> tags, map through signupList and return an <option> for each signup in the signupList. The value of each <option> should be equal to the signup email and the displayed text should be equal to the signup firstName. [8]
		- Add an onChange handler to the <select> that will programmatically navigate (using navigate()) to the path `/signups/${e.target.value}`
		 - _Note_: This handler will now navigate the user to the /signups/:email url where the email is being set by the value of each <option> inside the <select>.
		- Add an <Outlet/> below the <select> dropdown. Pass in the context prop to outlet and set the value equal to an array containing signupList as the first item.
- In ./src/Components/SignupCard.js, implement the following:
	- Import { useOutletContext, useParams } from 'react-router-dom'
	- In the body of <SignupCard/>,
		- Create a new variable params and set it equal to useParams()
		- Create a new destructured array variable with signupList as the first item and set it equal to useOutletContext(). [7]
		- Loop through signupList (I recommend using .find()) to find a user signup whose email property matches the email url parameter (this can be accessed from params.email) and assign that found user signup to a new variable called foundSignup.
	- In the JSX of <SignupCard/>,
		- Add three conditional render statements that will render the firstName, lastName and email of foundSignup if foundSignup exists. [9]
			- _Note_: The conditional render here is to account for the usecase of there being no users in our signupList. This is because react will throw an error if we try to render foundSignup.firstName for instance when foundSignup does not exist.
- If you implemented all the above correctly, you should be able to add a new user signup by filling in and submitting the contact form. Then you should be able to navigate to the Signup Page and click on the dropdown menu to see the details of the user signup display on the page.
​
## Code References
- [1]
```
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);
```
- [2]
```
const handleAddSignup = (firstName, lastName, email) => {}
```
- [3]
```
<Outlet context={[signupList, handleAddSignup]}/>
```
- [4]
```
const [signupList, handleAddSignup] = useOutletContext()
```
- [5]
```
handleAddSignup(firstName, lastName, email)
```
- [6]
```
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
			{
				path: "/signups",
				element: <SignupsPage />,
				children: [
					{
						path: "/signups/:email",
						element: <SignupCard/>
					}
				]
			}
    ],
  },
]);
```
- [7]
```
const navigate = useNavigate()
const [signupList] = useOutletContext();
```
- [8]
```
{signupList.map((signup)=>{
	return (<option value={signup.email}>{signup.firstName}</option>)
})}
```
- [9]
```
{foundSignup && <p>{foundSignup.firstName}</p>}