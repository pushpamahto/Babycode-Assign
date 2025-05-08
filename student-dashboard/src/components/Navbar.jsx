import Auth from './Auth';

function Navbar({ user, setUser }) {
  return (
    <nav className="navbar">
      <h1>Student Dashboard</h1>
      <Auth user={user} setUser={setUser} />
    </nav>
  );
}

export default Navbar;







