import React, { useEffect,useState } from 'react'
const skills = ['Web Aplication', 'for the user', 'Products']
const Textslider = () => {
    const [currenttext, setcurrenttext] = useState(0)
    useEffect(()=>{
        const intervalId = setInterval(() => {
            setcurrenttext((currenttext + 1) % skills.length)
        }, 2000);
        return () => {
            clearInterval(intervalId)
        }
    },[currenttext])

  return (
    <div className='w-max select-none overflow-hidden'>
        {skills.map((items,index)=>{
            return (
                <div key={index} className={`w-full overflow-hidden duration-1000 ${index === currenttext ? 'h-9': 'h-0'}`}>
            <p className={`font-regular text-3xl duration-100 ${index === currenttext ? 'translate-y-0': 'translaye-y-10'}`}>{items}</p>
                </div>
            )
        })}
    </div>
  )
}

export default Textslider