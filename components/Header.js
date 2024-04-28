"use client"
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

function Header() {
    const route=useRouter();
    const headerMenu=[
        {
            id:1,
            name:'Ride',
            icon:'/taxi.jpeg'
        },
        {
            id:2,
            name:'Package',
            icon:'/box.jpeg'
        }
    ]
  return (
    <div className=' hidden p-5 pb-3 pl-10 border-b-[4px] 
    border-gray-200 flex items-center justify-between md:flex'>
        <div className='flex gap-24 items-center'>
            <Image src='/logo.png'
            width={70} height={70}
            alt='Logo' className='cursor-pointer'
            onClick={()=>route.push('/')} />
            <div className='flex gap-6 items-center'>
                {headerMenu.map((item)=>(
                    <div key={item.name} className='flex gap-2 items-center'>
                        <Image alt='icon' src={item.icon} 
                        width={17} height={17}/>
                        <h2 className='text-[14px] font-medium'>{item.name}</h2>
                    </div>
                ))}
            </div>
        </div>
        <UserButton/>
    </div>
  )
}

export default Header