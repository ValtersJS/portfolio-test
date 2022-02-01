import './App.css';
import Header from'./components/header/Header';

function App() {
  return (
    <Navbar>
      <NavItem icon="😄" />
      <NavItem icon="🥶" />
      <NavItem icon="😡" />

      <NavItem icon="🔰">
        <DropdownMenu />
      </NavItem>
    </Navbar>
  );
}

export default App;
