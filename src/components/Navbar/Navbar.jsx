import "./Navbar.css";

const Navbar = () => {


  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">

        <img src="src/assets/logo.png" alt="logo" width={100}/>

        <div className="flexCenter h-menu">
          <a href="#residencies">Residencies</a>
          <a href="#value">Our Value</a>
          <a href="#contact-us">Contact Us</a>
          <a href="#get-started">Get Started</a>

          <button className="button">
            <a href="mailto:amitdew009@gmail.com">Contact</a>
          </button>

        </div>
      </div>
    </section>
  )
}

export default Navbar;