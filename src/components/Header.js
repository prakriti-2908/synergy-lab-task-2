import "./styles/Header.scss";

const Header = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h2>BookMyCollab</h2>
      </div>
      <div className="right">
        <ul>
            <li>What We Do</li>
            <li>How It Works</li>
            <li>Join Us As Brand</li>
            <li>Join Us As Creator</li>
            <li><button>Login</button></li>
        </ul>
      </div>
    </div>
  )
}

export default Header
