import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div style={{ margin: "20px", display: 'flex', gap: "20px", justifyContent: "center" }}>
        <Link to='/'>Typography</Link>
        <Link to='/button'>Button</Link>
        <Link to='/textfield'>TextField</Link>
        <Link to='/othersFields'>Other Fields</Link>
        <Link to='/rating'>Rating</Link>
        <Link to='/autoComplete'>AutoComplete</Link>
      </div>
      <hr />
    </>
  );
};

export default Navbar;
