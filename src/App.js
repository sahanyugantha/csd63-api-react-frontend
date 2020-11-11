import NavBar from './components/NavBarComponent';
import PostComponent from './components/PostComponent';
import About from './components/AboutComponent';
import AddPostComponent from './components/AddPostComponent';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

/** Types of Components **/
//Hooks - Functions
//Class based
//JSX


//Main Component.
function App() {
  return (
    <div>

      <NavBar />

      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <PostComponent />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/add-post" exact>
            <AddPostComponent />
          </Route>
        </Switch> 
      </BrowserRouter>
    </div>
  );
}
//Publishing the component.
export default App;
