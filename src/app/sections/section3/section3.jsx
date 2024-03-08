'use client'
import React, { useEffect, useRef, useState } from 'react'
import useUserStore from '../store/zustand';
export default function section3() {
  let letter = ''
  const [z, setZ] = useState(true)
  const func = useUserStore((state) => state.func)
  const finish = useUserStore((state) => state.finish)
  const reff = useUserStore((state) => state.reff)
  const stat = useUserStore((state) => state.stat)
  const { updateUser, updateUser5} = useUserStore();
  let verbs, nouns, adjectives, adverbs, preposition;
  nouns = ["bird", "clock", "boy", "plastic", "duck", "teacher", "old lady", "professor", "hamster", "dog"];
  verbs = ["kicked", "ran", "flew", "dodged", "sliced", "rolled", "died", "breathed", "slept", "killed"];
  adjectives = ["beautiful", "lazy", "professional", "lovely", "dumb", "rough", "soft", "hot", "vibrating", "slimy"];
  adverbs = ["slowly", "elegantly", "precisely", "quickly", "sadly", "humbly", "proudly", "shockingly", "calmly", "passionately"];
  preposition = ["down", "into", "up", "on", "upon", "below", "above", "through", "across", "towards"];
  function refresh() {
    let rand1 = Math.floor(Math.random() * 10);
    let rand2 = Math.floor(Math.random() * 10);
    let rand3 = Math.floor(Math.random() * 10);
    let rand4 = Math.floor(Math.random() * 10);
    let rand5 = Math.floor(Math.random() * 10);
    let rand6 = Math.floor(Math.random() * 10);
    let content = "The " + adjectives[rand1] + " " + nouns[rand2] + " " + adverbs[rand3] + " " + verbs[rand4] + " because some " + nouns[rand1] + " " + adverbs[rand1] + " " + verbs[rand1] + " " + preposition[rand1] + " a " + adjectives[rand2] + " " + nouns[rand5] + " which, became a " + adjectives[rand3] + ", " + adjectives[rand4] + " " + nouns[rand6] + ".";
    letter = Array.from(content)
    updateUser5(content, letter)
  }
  function sentence() {
    refresh()
    if (z) {
      func()
      setZ(false)
    }
    
  };
  useEffect(() => {
    updateUser(refresh, z)
  }, [z])
  return (
    <section className='w-full  mt-6 flex-wrap'>
      <div className='w-full flex justify-center'>{z ? <button onClick={sentence} className='text-black w-[200px] text-[32px] h-[50px] bg-white mb-5 rounded-[20px]'>start</button> : <button onClick={() => { finish(); setZ(true) }} className=' rounded-[20px] text-black w-[200px] h-[50px] bg-white mb-5 text-[32px] '>finish</button>}</div>
    </section>
  )
}
