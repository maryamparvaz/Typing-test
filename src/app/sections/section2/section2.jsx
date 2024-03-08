'use client'
import React, { useEffect, useRef, useState } from 'react'
import useUserStore from '../store/zustand'
export default function section2() {
        const { updateUser2, updateUser4, updateUser9, updateUser11, updateUser12 } = useUserStore()
        const t = useRef()
        let h = 1
        let l = ''
        let i = 0
        const eror = useUserStore((state) => state.eror)
        const dark = useUserStore((state) => state.dark)
        const page6 = useUserStore((state) => state.page6)
        const[stat ,setStat] = useState(true)
        function time() {
                l = setInterval(() => {
                        if (i < 59) {
                                i++
                                t.current.children[1].innerText = i
                                if (i == 59) {
                                        i = 0
                                        t.current.children[0].innerText = h++
                                }
                        }
                        updateUser9(h ,i)
                }, 1000);
                setStat(true)
        }
        function finish() {
                clearInterval(l)
                i = 0
                h = 0
                updateUser12(t.current.children[0].innerText, t.current.children[1].innerText)
                t.current.children[1].innerText = 0
                t.current.children[0].innerText = 0
                setStat(false)
        }
        function stop() {
                clearInterval(l)
        }
        useEffect(() => {
                updateUser2(time, finish, stop)
                updateUser11(stat)
        }, [stat])
        return (
                <section className='w-full flex justify-center mt-6'>
                        <div className='w-[100%] md:w-[80%]  flex justify-center *:mx-4 relative'>
                                {dark ? <i class="bi bi-cloud-fill text-white text-[40px] hidden md:flex  absolute left-[80px]"></i> : <i class="bi bi-cloud-fill text-blue-600 text-[40px] hidden md:flex absolute left-[80px]"></i>}
                                {dark ? <i class="bi bi-cloud-fill text-white text-[25px] hidden md:flex  absolute left-[-90px]"></i> : <i class="bi bi-cloud-fill text-blue-600 text-[25px] hidden md:flex absolute left-[-90px]"></i>}
                                <div className='flex items-center'>
                                        <i class="bi bi-alarm mr-2 text-[24px] text-yellow-300"></i>
                                        <div className={dark?'flex text-[24px] sm:text-[36px] text-black':'flex text-[24px] sm:text-[36px] text-white'}>
                                                <span>Time :</span>
                                                <div ref={t} className='sm:ml-2 flex *:mx-3'><span>0</span>:<span>0</span></div>
                                        </div>
                                </div>
                                
                                <div className='flex items-center '>
                                        <i class="bi bi-ban mr-2 text-[24px] text-red-500"></i>
                                        <div className={dark?'flex text-[24px] sm:text-[36px] text-black':'flex text-[24px] sm:text-[36px] text-white'}>
                                                <span>Error :</span>
                                                <span className='sm:ml-2'>{eror}</span>
                                        </div>
                                </div>
                                {dark ? <i class="bi bi-cloud-fill text-white text-[40px] hidden md:flex  absolute right-[80px]"></i> : <i class="bi bi-cloud-fill text-blue-600 text-[40px] hidden md:flex absolute right-[80px]"></i>}
                        {dark ? <i class="bi bi-cloud-fill text-white text-[55px] hidden md:flex absolute right-[200px] top-[-35px] "></i> : <i class="bi bi-cloud-fill text-blue-600 text-[55px] hidden md:flex absolute right-[200px] top-[-35px]"></i>}
                        </div>

                </section>
        )
}
