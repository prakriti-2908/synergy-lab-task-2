import CreatorsCard from "./CreatorsCard";
import "./styles/OG.scss";

const OG = ({heading,para,bg}) => {
  return (
    <div className="og-creators" style={{backgroundColor:`#${bg}`}}>
      <div className="top">
        <div>
          <p className="heading">{heading}</p>
          <p>{para}</p>
        </div>
        <button>View All</button>
      </div>

      <div className="bottom">
        {
            [1,2,3,4].map(()=>(
                <CreatorsCard/>
            ))
        }
      </div>
    </div>
  );
};

export default OG;
