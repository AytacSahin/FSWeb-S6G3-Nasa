import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import axios from "axios";

function App() {
  const [image, setImage] = useState();
  const [date, setDate] = useState();
  const [copyright, setCopyright] = useState();
  const [title, setTitle] = useState();
  const [exp, setExp] = useState();

  useEffect(() => {
    const nasaData = axios.get("https://api.nasa.gov/planetary/apod?api_key=vADrtAAH2DOWuPKz2nbaUqPSzTCQG09zFjhVq6nA");
    nasaData.then((nasa) => {
        setImage(nasa.data["url"]);
        setDate(nasa.data["date"]);
        setCopyright(nasa.data["copyright"]);
        setTitle(nasa.data["title"]);
        setExp(nasa.data["explanation"]);
      });
  }, []);

  return (
  <div className="back-ground">
    <Header dateProp={date} />
      {/* <p>NASA uygulamasını yapmak için README.md dosyasıdaki talimatları takip edin. İyi eğlenceler! <span role="img" aria-label='go!'>🚀</span>!</p>
      <h2>Merhaba</h2>*/}
    <Body imageURL={image} titleProp={title} expProp={exp} copyrightProp={copyright} dateProp={date}/>  
    <Footer copyrightProp={copyright}/>
  </div>
  );
}

export default App;

// https://api.nasa.gov/planetary/apod?api_key=vADrtAAH2DOWuPKz2nbaUqPSzTCQG09zFjhVq6nA
// https://www.webtekno.com/images/editor/default/0003/39/1c89bf763882ab65981d4a1978228e468b8da5ef.jpeg