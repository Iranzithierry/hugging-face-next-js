import { Link } from '@geist-ui/core'
import React, { ChangeEvent, FormEventHandler } from 'react'
import { SendIcon } from './icons'

export interface chatInputProps {
    onSubmit: FormEventHandler<HTMLFormElement>,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    inputValue: string
}

export default function ChatInput({ onSubmit, onChange, inputValue }: chatInputProps) {
    return (
        <div className='fixed bottom-0 right-0 left-0 backdrop-blur-lg'>
            <div className='max-w-screen-md mx-auto'>
                <form className='flex flex-row px-3 md-0 md:mb-4 relative items-center' onSubmit={onSubmit}>
                    <input
                        className='w-full shadow-xl rounded-xl  py-3.5 px-2 ring-2 ring-gray-100 focus:ring-4 focus:ring-gray-200 text-slate-600/80'
                        value={inputValue}
                        placeholder="Say something..."
                        onChange={onChange} />
                    <button type='submit' className={`absolute right-5 flex h-9 w-9 items-center justify-center rounded-md transition-all ${inputValue.length < 1 ? 'cursor-not-allowed bg-white' : 'bg-green-500 tex-white'}`}>
                        <SendIcon disabled={inputValue.length < 1} />
                    </button>
                </form>
                <div className='w-full flex flex-row justify-center items-center'>
                    <p className='font-thin text-xs text-slate-500/80 line-clamp-2  text-center'>
                        <Link target='_blank' href='https://github.com/iranzithierry' className='underline-offset-2' underline={true} icon={true}>
                            Built with HuggingFace and Vercel AI SDK. View the repo or deploy your own.
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
