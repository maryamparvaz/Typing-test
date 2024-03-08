'use client'
import React, { useEffect, useRef, useState } from 'react'
import useUserStore from '../store/zustand';
export default function section1() {
        const c = useRef()
        const[dark ,setDark] = useState(true)
        const [status, setStatus] = useState(true)
        const check = useUserStore((state) => state.check)
        const { updateUser8 } = useUserStore()
        useEffect(() => {
                updateUser8(dark)
        },[dark])
        return (
                <section className='w-full flex text-black  justify-center '>
                        {dark ? <i class="bi bi-cloud-fill text-white text-[50px] hidden md:flex"></i> : <i class="bi bi-cloud-fill text-blue-700 text-[50px] hidden md:flex"></i>}
                        <div ref={c} className={dark ? 'w-[90%] md:w-[70%] text-black  flex justify-center *:cursor-pointer *:sm:mx-6 *:mx-4 items-center' : 'w-[90%] md:w-[70%] text-white  flex justify-center *:cursor-pointer *:sm:mx-6 *:mx-4 items-center' }>
                                {check ? <i class="bi bi-pause-circle text-[30px] md:text-[40px]"></i> : <Puase/>}
                                {check ? <i class="bi bi-arrow-repeat text-[30px] md:text-[40px]"></i> : <Repeat />}
                                <div className={dark ? 'text-[22px] md:text-[32px] flex box2  rounded-[20px] w-[170px] h-[50px] md:w-[220px] md:h-[60px] justify-center' : 'text-[22px] box md:text-[32px] flex border border-white  w-[170px] h-[50px] md:w-[220px] md:h-[60px] justify-center'}>{dark ? <div className='flex items-center ' onClick={() => { setDark(false) }}>Dark mode<i class="bi bi-moon ml-2 text-[24px] md:text-[30px]"></i></div> : <div className='flex items-center ' onClick={() => { setDark(true) }}>Light mode<i class="bi bi-sun ml-2 text-[24px] md:text-[30px]"></i></div> } </div>
                                {dark ? <i class="bi bi-cloud-fill text-white text-[30px] hidden md:flex"></i> : <i class="bi bi-cloud-fill text-blue-700 text-[30px] hidden md:flex"></i>}
                        </div>
                        {dark ? <i class="bi bi-cloud-fill text-white text-[70px] hidden md:flex"></i> : <i class="bi bi-cloud-fill text-blue-700 text-[70px] hidden md:flex"></i>}
                </section>
        )
}
function Puase() {
        const stop = useUserStore((state) => state.stop)
        const func = useUserStore((state) => state.func)
        const [stat, setStat] = useState(true)
        const { updateUser13 } = useUserStore()
        useEffect(() => {
                updateUser13(stat)
        },[stat])
        return (
                <div>{(stat) ? <i onClick={() => { setStat(false), stop() }} class="bi bi-pause-circle text-[30px] md:text-[40px]"></i> : <i onClick={() => { setStat(true), func() }} class=" bi bi-skip-start-circle text-[30px] md:text-[40px]"></i>}</div>
        )
}
function Repeat() {
        const select = useUserStore((state) => state.select)
        function para() {
                window.location.reload(false);
        }
        return (
                <i onClick={para} class="bi bi-arrow-repeat text-[30px] md:text-[40px]"></i>
        )
}
