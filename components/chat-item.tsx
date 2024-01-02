import { Card } from '@geist-ui/core'
import React from 'react'
import { BotIcon, UserIcon } from './icons'
export interface chatItemProps {
  message: String,
  role: String | 'user'
}

export default function ChatItem({ message, role }: chatItemProps) {
  return (
    <div className={`w-full px-2 sm:px-4 md:px-6 lg:px-7 xl:px-8  py-4 overflow-hidden ${role === 'user' ? 'bg-white ' : 'bg-gray-100'}`}>
      <div className='max-w-screen-md mx-auto flex flex-row space-x-3'>
        <div className='w-fit py-3'>
          <div className={`h-8 w-8 flex  items-center justify-center ${role == 'user' ? 'bg-green-500 text-white' : 'bg-gray-900 text-white'} rounded-md px-2 py-1`}>
            {role === 'user' ?
              <UserIcon /> :
              <BotIcon />
            }
          </div>
        </div>
        <div>
          <p className='font-sans font-base'>{message}</p>
        </div>
      </div>
    </div>
  )
}
