import { useState, useEffect } from "react";
import Player from "./components/player.js";

function App() {
  const [songs] = useState([
    {
      title: "Kidme alem negus",
      artist: "zemari zewdu getachew",
      img_src: "./images/kidist sillase.webp",
      src: "./music/kidme alem negus.mp3",
    },
    {
      title: "Bezeru yenberch",
      artist: "zemari zewdu getachew",
      img_src: "./images/Emebetachen.jpg",
      src: "./music/10 Track 10.mp3",
    },
    {
      title: "Hige amlakun belebu",
      artist: "zemari zewdu getachew",
      img_src: "./images/meimenan1.jpg",
      src: "./music/ህገ አምላኩን በልቡ.mp3",
    },
    {
      title: "wengel kidus",
      artist: "zemarit Marta",
      img_src: "./images/metmke melkot kidus yohanis (2).jpg",
      src: "./music/Marta wengel kidus.mp3",
    },
    {
      title: "simion aklesiya ",
      artist: "zemari zewdu getachew",
      img_src: "./images/Abune gebre menfeskidus (2).jpg",
      src: "./music/🔴 አዲስ ዝማሬ   ስምኦን አቅሌስያ   simion aklesiya   ዘማሪ ዘውዱ ጌታቸው - zemari zewdu getachew.mp4",
    },
    {
      title: "kefeterew ftret",
      artist: "zemarit marta",
      img_src: "./images/Emebetachen.jpg",
      src: "./music/Marta kefeterew ftret.mp3",
    },
    {
      title: "aneta-meneche-hoye-felaqe",
      artist: "zemari zewdu getachew",
      img_src: "./images/medhanialem.jpg",
      src: "./music/adise-yamadexaanee-aalame-mazemure-aneta-meneche-hoye-felaqe-zamaari-zawedu-geetaacawe.mp4",
    },
    {
      title: "degmeh kedisen ahunm",
      artist: "zemarit fasika dinku",
      img_src: "./images/medhanialem.jpg",
      src: "./music/Ethiopia_zemarit fasika dinku mihrete ''ደግመ ደግመህ ቀድሰን'' new  ethiopia orthodox tewahido mezmur.mp4",
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex, songs.length]);

  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;
