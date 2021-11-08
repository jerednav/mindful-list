import "./Navbar.css";

const Header = () => {
  return (
    <div className='navContainer'>
      <div class='navWrapper'>
        <div className='logo'>mindful {`<List />`} </div>
        <div className='menu'>
          <ul className='navList'>
            <li className='navSection'>Home</li>
            <li className='navSection'>New Task</li>
            <li className='navSection'>Search</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
