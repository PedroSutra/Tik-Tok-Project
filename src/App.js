import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./pages/video";
import db from "./config/firebase";
import { collection, getDocs } from "firebase/firestore/lite";

function App() {

let maxheight;
if(window.innerHeight <= 800){
maxheight = window.innerHeight /* tela cheia pelo html*/
}

  const [videos, setVideos] = useState([]);

  async function getVideos() {
    const videosCollection = collection(db, "videos");
    const videosSnapshot = await getDocs(videosCollection);
    const videosList = videosSnapshot.docs.map((doc) => doc.data());
    setVideos(videosList);
  }

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="App" style={{ maxHeight:maxheight + "px" }}>
      <div className="app__videos">
        {videos.map((item) => {
          return (
            <Video
              likes={item.likes}
              messages={item.messages}
              shares={item.shares}
              name={item.name}
              description={item.description}
              music={item.music}
              url={item.url}
            />
          );
        })}
        {/* <Video
    likes={123}
    messages={234}
    shares={356}
    name="User1567426845325"
    description="Pegou no pulo do gato kkkkkkkk"
    music="musica épica"
    url="https://firebasestorage.googleapis.com/v0/b/jornada-b5e9d.appspot.com/o/bird.mp4?alt=media&token=38b50871-393f-4fa4-9951-c6fc08af7e9e"
    />
     */}
      </div>
    </div>
  );
}

export default App;
