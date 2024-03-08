'use client'
import React, { useEffect, useRef } from 'react'
import useUserStore from '../store/zustand'
export default function section5() {
        const d = useRef()
        const { updateUser3 } = useUserStore();
        useEffect(() => {
                updateUser3(d.current)
        }, [])
        return (
                <section className='w-full flex justify-center mt-6 flex-wrap'>
                        <div ref={d} className='w-[95%] md:w-[80%]  flex justify-center *:mx-2 text-black text-[22px] md:text-[30px]'>
                                <Sen />
                        </div >
                </section >
        )
}
function Sen() {
        let sentence = useUserStore((state) => state.sentence)
        let incorrect = useUserStore((state) => state.incorrect)
        let clic = useUserStore((state) => state.clic)
        let dark = useUserStore((state) => state.dark)
        let c = useRef()
        let y = 0
        let g = 0
        function repeat() {
                
                if (clic > c.current.childElementCount) { 
                } else {
                        c.current.children[incorrect - 1].style.color = 'red'
                        c.current.children[incorrect - 1].style.borderBottom = '3px solid red'
                        g++
                }
        }
        if (sentence.length != 0) {
                if (c.current !== undefined && incorrect != '') {
                        repeat()
                } 
                return (
                        <div className='font-all' ref={c}>
                                {sentence.map((val) => {
                                        return (
                                                <span className={dark ? 'text-black md:text-[38px] tracking-wider' : 'text-white md:text-[38px] tracking-wider' }>{val}</span>
                                        )
                                })}
                        </div>
                )
        }
}
