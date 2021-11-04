import { Route } from 'react-router-dom'
//Route defines different paths in the URL, and which component should be loaded
import Home from './pages/Home'
import NewTask from './pages/NewTask'
import Search from './pages/Search'

function App() {
  return (
    <div className="App">
      <Route path ='/'>
        <Home />
      </Route>
      <Route path ='/newtask'>
        <NewTask />
      </Route>
      <Route path ='/search'>
        <Search />
      </Route>
    
    </div>
  );
}

export default App;
