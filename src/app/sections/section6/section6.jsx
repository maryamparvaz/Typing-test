import React, { useEffect, useRef, useState } from 'react'
import useUserStore from '../store/zustand'
export default function section6() {
        const q = useRef()
        const { updateUser10 } = useUserStore();
        const time1 = useUserStore((state) => state.time1)
        const time2 = useUserStore((state) => state.time2)
        const dark = useUserStore((state) => state.dark)
        const [good, setGood] = useState(true)
        const [bad, setBad] = useState(true)
        const stat = useUserStore((state) => state.stat)
        const eror = useUserStore((state) => state.eror)
        const lang = useUserStore((state) => state.lang)
        const clic = useUserStore((state) => state.clic)
        function playagain() {
                window.location.reload(false);
        }
        useEffect(() => {
                if (stat) {
                        q.current.style.display = 'flex'
                } else {
                        q.current.style.display = 'none'
                }
                updateUser10(q.current)
                if (time1 < 2 && eror <= 5 && lang == true) {
                        // console.log(lang);
                        setGood(true)
                } else {
                        setGood(false)
                }
        }, [time1])
        useEffect(() => {
                if (clic <= 10) {
                        setBad(true)

                } else {
                        setBad(false)
                }

        }, [clic])
        return (
                <section className='w-full h-full'>
                        <section ref={q} className={dark ? 'hidden w-[100%] h-[100%]  fixed left-[50%] flex  justify-center items-center top-[50%] bg-white1 translate-x-[-50%] translate-y-[-50%]' : 'overflow-hidden w-[100%] h-[100%]  fixed left-[50%] flex  justify-center items-center top-[50%] bg-black1 translate-x-[-50%] translate-y-[-50%]'}>
                                <div className={dark ? 'w-[70%] h-[70%] bg-blue-300 flex  flex-wrap  content-center *:text-black *:flex *:justify-center *:my-2 justify-center' : 'w-[70%] h-[70%] bg-blue-950 flex  flex-wrap  content-center *:text-white *:flex *:justify-center *:my-2 justify-center'}>
                                        {good ? <h1 className='w-full text-[50px] md:text-[100px]'>Exellent</h1> : <h1 className='w-full text-[50px] md:text-[100px]'>Its bad </h1>}
                                        <p className='w-full mb-10 text-[25px] md:text-[30px]'>You finished in {time1} :  {time2} minute</p>
                                        {bad ? <h1 className='w-full text-[250px] md:text-[30px]'>You typed a few letters</h1> : <h1 className='w-full text-[25px] md:text-[30px]'> You typed  {clic} letters </h1>}
                                        <p className='w-full mb-10 text-[25px] md:text-[30px]'>You have {eror} typos</p>
                                        <button onClick={playagain} className='w-[150px] p-2 flex text-[30px] border '>Play Again</button>
                                </div>
                        </section>
                </section>
        )
}
