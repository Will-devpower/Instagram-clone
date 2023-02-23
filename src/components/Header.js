import Image from 'next/image'
import React from 'react'
import { MagnifyingGlassIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import { HomeIcon } from '@heroicons/react/24/solid'

export const Header = () => {
  return (  
    <div className="shadow-md border-b sticky top-0 bg-white z-30">
      <div className='flex items-center justify-between max-w-6xl m-auto'>
            {/* Left */}
            <div className='h-24 w-24 relative hidden lg:block cursor-pointer'>
                <Image 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/640px-Instagram_logo.svg.png"
                    fill
                    className='object-contain'
                />
            </div>
            <div className='h-24 w-10 relative lg:hidden cursor-pointer'>
                <Image 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png"
                    fill
                    className='object-contain'
                />
            </div>

            {/* Middle */}
                <div>
                    <div className='relative mt-1'>                        
                        <MagnifyingGlassIcon className='h-5 text-gray-500 absolute top-2 left-2'/>
                    </div>
                    <input type="text" placeholder='Search' className='bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md'/>
                </div>

            {/* Right */}
                <div className="flex space-x-4 items-center">
                    <HomeIcon className="hidden md:inline-flex  h-6 cursor-pointer hover:scale-125 transition-tranform duration-200 ease-out"/>
                    <PlusCircleIcon className="hidden md:inline-flex  h-6 cursor-pointer hover:scale-125 transition-tranform duration-200 ease-out"/>
                    <img                        
                        src="https://media.istockphoto.com/id/1316420668/vector/user-icon-human-person-symbol-social-profile-icon-avatar-login-sign-web-user-symbol.jpg?s=612x612&w=0&k=20&c=AhqW2ssX8EeI2IYFm6-ASQ7rfeBWfrFFV4E87SaFhJE="
                        alt="user-image"
                        className="h-10 rounded-full cursor-pointer"
                    />
                </div>
        </div>    
    </div>   
  )
}
