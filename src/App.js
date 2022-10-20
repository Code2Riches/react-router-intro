import './App.css';
import NavBar from './Components/NavBar';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [signupList, setSignUpList] = useState([]);

  const handleAddSignup = (firstName, lastName, email) => {

    let newSignup = {
      firstName: firstName,
      lastName: lastName,
      email: email,
    }

    const signupListCopy = [...signupList, newSignup];
    setSignUpList(signupListCopy);
  }


  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Outlet context={[signupList, handleAddSignup]} />
      </header>
    </div>
  );
}

export default App;