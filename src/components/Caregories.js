import "./styles/Categories.scss";

const Caregories = () => {
  return (
    <div className="categories">
      <div className="top">
        <p className="heading">Categories</p>
        <button>View All</button>
      </div>
      <div className="category">
      {["D0A435", "1DB934", "2667E0", "E93248", "7635E1"].map((bg) => (
        <div className="category-card">
          <div className="bg" style={{backgroundColor:`#${bg}`}}>
            <h3>
              The <br /> Foodies
            </h3>
            <span className="material-icons">arrow_forward</span>
            <img src="/assets/category.png" alt="category" />
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Caregories;
