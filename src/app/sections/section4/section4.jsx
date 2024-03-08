'use client'
import React, { useEffect, useState } from 'react'
import useUserStore from '../store/zustand'
export default function section4() {
        const [inp, setInp] = useState()
        const [leng, setLeng] = useState(false)
        const { updateUser4, updateUser6, updateUser7 } = useUserStore();
        const content1 = useUserStore((state) => state.content1)
        const check = useUserStore((state) => state.check)
        const dark = useUserStore((state) => state.dark)
        const paus = useUserStore((state) => state.paus)
        let u = 0
        let k = 0
        let t = 0
        useEffect(() => {
                if (inp != undefined && content1 != '') {
                        updateUser4(inp);
                        for (let i = 0; i < inp.length; i++) {
                                if (content1[i] == inp[i]) {
                                } else {
                                        let h = i
                                        updateUser6(h + 1);
                                        k++
                                }
                                u++
                        }
                        if ((inp.length) === (content1.length-1)) {
                                setLeng(true)
                        }
                }
                updateUser7(u, k ,leng);
                // console.log(leng);
        }, [inp, content1])
        return (
                <section className='w-full flex justify-center mt-6 flex-wrap'>
                        {paus ? <textarea disabled={(check) ? true : false} value={inp} onChange={(e) => { setInp(e.target.value) }} name="" id="" cols="30" rows="10" className={dark ? 'w-[90%] md:w-[80%] text-[36px] text-black h-[300px] bg-white  resize-none outline-none  tracking-wider' : 'w-[90%] md:w-[80%] text-[36px] tracking-wider  h-[300px]  resize-none outline-none bg-slate-400 text-white box '}></textarea> : <textarea disabled='true' value={inp} onChange={(e) => { setInp(e.target.value) }} name="" id="" cols="30" rows="10" className={dark ? 'w-[90%] md:w-[80%] text-[36px] text-black h-[300px] bg-white  resize-none outline-none  tracking-wider' : 'w-[90%] md:w-[80%] text-[36px] tracking-wider  h-[300px]  resize-none outline-none bg-slate-400 text-white box '}></textarea> }
                </section>
        )
}
