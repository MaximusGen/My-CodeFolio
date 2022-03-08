import "./nav.css";

const Nav = () => {
  const navClick = (e) => {
    e.preventDefault();
    const menu = document.querySelector(".nav-menu");
    const menuOverlay = document.querySelector(".nav-menu-overlay");

    menu.classList.toggle("open");
    menuOverlay.classList.toggle("open");
  };

  return (
    <div className="nav-container">
      <div className="nav-menu" onClick={navClick}>
        <span className="nav-menu-circle"></span>
        <a href="#" className="nav-menu-link">
          <span className="nav-menu-icon">
            <span className="nav-menu-line menu-line-1"></span>
            <span className="nav-menu-line menu-line-2"></span>
            <span className="nav-menu-line menu-line-3"></span>
          </span>
        </a>
      </div>

      <div className="nav-menu-overlay">
        <a href="#aboutMe">About Me</a>
        <a href="#">Projects</a>
        <a href="#">Contact Me</a>
      </div>
    </div>
  );
};

export default Nav;
