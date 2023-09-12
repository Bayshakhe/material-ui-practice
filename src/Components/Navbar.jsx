import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div style={{ margin: "20px", display: 'flex', gap: "20px", justifyContent: "center" }}>
        <Link to='/'>Typography</Link>
        <Link to='/button'>Button</Link>
      </div>
      <hr />
    </>
  );
};

export default Navbar;
