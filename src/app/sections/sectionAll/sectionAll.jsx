'use client'
import React from 'react'
import Section1 from '../section1/section1'
import Section2 from '../section2/section2'
import Section3 from '../section3/section3'
import Section4 from '../section4/section4'
import Section5 from '../section5/section5'
import Section6 from '../section6/section6'
import useUserStore from '../store/zustand'
export default function sectionAll() {
        const dark = useUserStore((state) => state.dark)
        const check = useUserStore((state) => state.check)
        const stat = useUserStore((state) => state.stat)
        return (
                <main className={dark ? 'w-full flex flex-wrap content-start min-h-[100vh] bg-gradient-to-r from-cyan-400 to-blue-400 pt-10   2xl:justify-center font-all' : 'w-full font-all flex flex-wrap content-start min-h-[100vh] bg-gradient-to-r from-cyan-900 to-blue-950 pt-10   2xl:justify-center'} >
                        <section className='w-full 2xl:container flex flex-wrap content-center h-full'>
                                <Section1 />
                                <Section2 />
                                <Section5 />
                                <Section4 />
                                <Section3 />
                        </section>
                        {/* {stat?<div></div>:<Section6 /> } */}
                        <Section6 />
                </main>
        )
}
