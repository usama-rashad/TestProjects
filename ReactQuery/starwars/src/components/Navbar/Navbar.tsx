import "./Navbar.scss";

interface INavbarProps {
  setPage: (state: boolean) => void;
}

function Navbar({ setPage }: INavbarProps) {
  return (
    <div className="navbarMain">
      <div className="navbar">
        <button onClick={() => setPage(true)}>Planets</button>
        <button onClick={() => setPage(false)}>People</button>
      </div>
    </div>
  );
}

export default Navbar;
