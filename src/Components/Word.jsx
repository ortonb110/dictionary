/* eslint-disable react/prop-types */
import { Howl } from "howler";
import { useEffect } from "react";

const Word = ({ word, phonetic, phonetics, audioSrc, setAudioSrc }) => {
  const handleAudio = (phonetics) => {
    for (let i = 0; i < phonetics.length; i++) {
      if (phonetics[i].audio) {
        setAudioSrc(phonetics[i].audio);
        break;
      }
    }
  };

  const soundPlay = (uri) => {
    var sound = new Howl({
      src: [`${uri}`],
      html5: true,
      volume: 1.0,
    });

    sound.play();
  };

  useEffect(() => {
    handleAudio(phonetics);
  }, [phonetics]);

  return (
    <section className="flex justify-between w-full items-center mt-[4.3rem] ">
      <div className="gap-[11px] flex flex-col ">
        <h1 className="h1">{word}</h1>
        <h2 className="h2 text-lightPurple">{phonetic}</h2>
      </div>
      {audioSrc && (
        <button className="" onClick={() => soundPlay(audioSrc)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 75 75"
            className="w-[4.8rem] h-[4.8rem] md:w-[7.5rem] md:h-[7.5rem] hover:fill-lightOrange fill-[#A445ED] transition-all ease-in-out duration-150"
          >
            <g fill="" fillRule="evenodd">
              <circle cx="37.5" cy="37.5" r="37.5" opacity=".25" />
              <path d="M29 27v21l21-10.5z" />
            </g>
          </svg>
        </button>
      )}
    </section>
  );
};

export default Word;
