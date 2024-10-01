import Header from "./components/Header";
import Hero from "./components/Hero";
import OG from "./components/OG";
import Caregories from "./components/Caregories.js";
import DesignCreator from "./components/DesignCreator.js";
import Grid from "./components/Grid.js";
import Brands from "./components/Brands.js";
import "./components/styles/media-queries.scss";

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <OG heading={"The OG Creators"} para={"Lorem ipsum dolor sit amet, consectetur adipiscing"} bg={"FAFAFA"}/>
      <Caregories/>
      <OG heading={"In The Spotlight"} para={"Lorem ipsum dolor sit amet, consectetur adipiscing "} bg={"FFFF"}/>
      <DesignCreator/>
      <OG heading={"On The Rise"} para={"Lorem ipsum dolor sit amet, consectetur adipiscing"} bg={"FFFF"}/>
      <Grid/>
      <OG heading={"UGC"} para={"Lorem ipsum dolor sit amet, consectetur adipiscing "} bg={"FFFF"}/>
      <Brands/>
    </div>
  );
}

export default App;
