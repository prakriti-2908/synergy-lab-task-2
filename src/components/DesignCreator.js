import "./styles/DesignCreator.scss";

const DesignCreator = () => {
  return (
    <div className="design-creator">
      <div className="left">
        <div className="top">
          <p className="meet">Meet</p>
          <h1>The Design Creator</h1>
        </div>
        <div className="bottom">
          <p>
            Read More <span className="material-icons">north_east</span>
          </p>
        </div>
      </div>

      <div className="right">
        <h1>Aman K.</h1>
        <h1 className="grey">
          <span className="material-icons">account_circle</span> Design Creator
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          mini
        </p>
        <div className="icons">
          <span className="material-icons">account_circle</span>
          <span className="material-icons">account_circle</span>
          <span className="material-icons">account_circle</span>
          <span className="material-icons">account_circle</span>
        </div>
      </div>
    </div>
  );
};

export default DesignCreator;
