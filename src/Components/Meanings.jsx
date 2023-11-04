/* eslint-disable react/prop-types */
import {useState, useEffect} from 'react'
const Meanings = ({partOfSpeech, synonyms, definitions, }) => {
    const [syn, setSyn]= useState('')

  const setSynonym = (syno) => {
    for(let i =0; i<syno.length; i++) {
        if(i>0) {
            return
        } else {
            return syno[i];
        }
    }
  }  

  useEffect(()=> {
    setSyn(setSynonym(synonyms));
  }, [synonyms])

  return (
    <section className="mt-[4rem]">
      <div className="flex  items-center gap-[2rem]">
        <h2 className="h2 font-[700] ">{partOfSpeech}</h2>
        <div className="w-full h-[1px] bg-veryLightGray dark:bg-defaultGray"></div>
      </div>
      <div>
        <h3 className="text-lightGray capitalize mt-[4rem] mb-[1.7rem] mb:mb-[2.5rem]">
          meaning
        </h3>
        <ul className="ml-[2rem] md:ml-[4.2rem] list-disc marker:text-lightPurple list-outside space-y-[1.3rem]">
            {
                definitions.map((def, index)=> {
                    return <li key={index}>{def.definition}</li>
                })
            }
        </ul>
        {
            synonyms && (
                <p className="mt-[2.4rem] flex gap-[2.4rem]">
            <span className="capitalize text-[1.6rem] text-lightGray ">
                {
                    synonyms.length < 1 ?  '': 'synonyms'
                }
            </span>
            <span className="text-lightPurple ">
                {
                    syn
                }
            </span>
        </p>
            )
        }
      </div>
    </section>
  );
};

export default Meanings;
