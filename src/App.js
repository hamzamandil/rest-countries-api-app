import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/pages/Home';
import Country from './components/pages/Country';

function App() {

  const initialState = false;

  const [isDark, setDark] = useState(initialState);

  const darkModeHandler = () => {
    setDark(!isDark)
  }

 
  return (
    <div className={isDark === true ? "App dark" : "App"}>
      <Header darkModeHandler={darkModeHandler} isDark={isDark}/>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:name" component={Country} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
