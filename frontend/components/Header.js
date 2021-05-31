export const Header = () => {
  if (process.browser) {
    function changeCss() {
      let navElement = document.querySelector("nav");
      this.scrollY > 1
        ? (navElement.className = "opacity")
        : (navElement.className = "reset-opacity");
    }

    window.addEventListener("scroll", changeCss, false);
    const toggleButton = document.querySelector(".toggle-button");
    const navLinks = document.querySelector(".nav-links");
    const navElement = document.querySelector("nav");
    const firstBar = document.querySelector(".first-bar");
    const secondBar = document.querySelector(".second-bar");
    const thirdBar = document.querySelector(".third-bar");
    toggleButton.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      navElement.classList.toggle("nav-opacity");
      firstBar.classList.toggle("bar1");
      secondBar.classList.toggle("bar2");
      thirdBar.classList.toggle("bar3");
    });
  }

  return (
    <nav className="nav-container">
      <div className="toggle-button">
        <span className="bar first-bar"></span>
        <span className="bar  second-bar"></span>
        <span className="bar third-bar"></span>
      </div>
      <ul className="nav-links">
        <li>
          <a className="nav-link" href="#1">
            پیلتونت
          </a>
        </li>
        <li>
          <a className="nav-link" href="#2">
            نقشه راه
          </a>
        </li>
        <li>
          <a className="nav-link" href="#3">
            تیم ما
          </a>
        </li>
        <li>
          <a className="nav-link" href="#4">
            همیاران
          </a>
        </li>
        <li>
          <a className="nav-link" href="#5">
            ارتباط با ما
          </a>
        </li>
      </ul>
    </nav>
  );
};
