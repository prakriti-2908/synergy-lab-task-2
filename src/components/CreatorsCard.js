import "./styles/CreatorsCard.scss";

const CreatorsCard = () => {
  return (
    <div className="creators-card">
      <div className="image-div">
        <img src="/assets/card.jpg" alt="creators-card" />
      </div>
      <div className="info">
        <div className="left">
          <p className="creator-name">
            Tanmay Bhatt <span className="material-icons">check</span>
          </p>
          <p className="username">tanmaybhatt</p>
        </div>
        <div className="right">
          <p className="follower-count">3.7M</p>
          <p>Followers</p>
        </div>
      </div>
      <div className="icons">
        <div className="left">
            <span className="material-icons">photo_camera</span>
            <span className="material-icons yt">play_arrow</span>
            <span className="material-icons">facebook</span>
        </div>
        <button>Compare</button>
      </div>
    </div>
  );
};

export default CreatorsCard;
