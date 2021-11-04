import { Route, Switch } from 'react-router-dom'
//Route defines different paths in the URL, and which component should be loaded
import Home from './pages/Notes'
import NewTask from './pages/NewTask'
import Search from './pages/Search'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path ='/' exact>
          <Home />
        </Route>
        <Route path ='/newtask'>
          <NewTask />
        </Route>
        <Route path ='/search'>
          <Search />
        </Route>
       </Switch>
    
    </div>
  );
}

export default App;
