import "./styles/Grid.scss";

const Grid = () => {
  return (
    <div className="grid">
      <div className="top">
        <div className="left grid-card">
          <p className="green">Join As A Brand</p>
          <div>
            <p>Interdum et </p>
            <p>malesuada fames ac</p>
          </div>
          <p className="link">
            Join as a brand{" "}
            <span className="material-icons">arrow_forward</span>
          </p>
          <img src="/assets/mobile.png" alt="mobile" />
        </div>
        <div className="right grid-card">
          <p className="green">Join As A Creator</p>
          <div>
            <p>Interdum et </p>
            <p>malesuada fames ac</p>
          </div>
          <p className="link">
            Join as a Creator{" "}
            <span className="material-icons">arrow_forward</span>
          </p>
          <img src="/assets/mobile.png" alt="mobile" />
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <div className="icons">
            <span className="material-icons">photo_camera</span>
            <span className="material-icons yt">play_arrow</span>
            <span className="material-icons">facebook</span><span className="material-icons">music_note</span>
            <span className="material-icons">library_music</span>
          </div>
          <h2>Phasellus accumsan imperdiet tempor. Cras tincidunt, arcu </h2>
          <p>Integer id augue iaculis, iaculis orci ut, blandit quam. Donec in elit auctor, finibus quam in, phar </p>
        </div>
        <div className="right">
            <img src="/assets/grid-bottom.webp" alt="grid-bottom" />
        </div>
      </div>
    </div>
  );
};

export default Grid;
