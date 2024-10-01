import "./styles/Hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left">
        <div className="left-flex">
          <div className="wave-emoji">
            <span className="material-icons">waving_hand</span>
          </div>
          <div>
            <p className="heading">Simplifying Influencer Marketing For You!</p>
            <p>
              Explore creators accross YouTube, Instagram & Facebook to curate
              unique content for your brand
            </p>
            <div className="form">
              <div className="dropdown">
                Facebook{" "}
                <span className="material-icons">keyboard_arrow_down</span>
              </div>
              <div className="dropdown">
                Select Category
                <span className="material-icons">keyboard_arrow_down</span>
              </div>
              <button>Search</button>
            </div>
          </div>
        </div>
        <div className="left-bottom">
          <p>Trusted By</p>
          <ul>
            <li>
              <b>CHANEL</b>
            </li>
            <li>LOUIS VUITTON</li>
            <li>
              <b>PRADA</b>
            </li>
            <li>Calvin Klein</li>
            <li>
              <b>DENIM</b>
            </li>
          </ul>
        </div>
      </div>

      <div className="right">
        <img src="/assets/hero.jpg" alt="hero-image" />
      </div>

      <div className="hero-bottom"></div>
    </div>
  );
};

export default Hero;
