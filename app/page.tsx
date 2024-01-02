'use client';

import { useChat } from 'ai/react';
import Providers from './providers';
import { Input, Loading } from '@geist-ui/core';
import ChatItem from '@/components/chat-item';
import ChatInput from '@/components/chat-input';
import { useEffect } from 'react';
import { toast } from 'sonner';
import { BotIcon } from '@/components/icons';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat();
  useEffect(() => {
    if (error) toast.error(error.message.toString())
  }, [error])
  return (
    <Providers>
      <div className="w-full mx-auto pb-[5rem] md:pb-28">
        {messages.map(message => (
          <ChatItem
            key={message.id}
            message={message.content}
            role={message.role} />
        ))}
      </div>
      <ChatInput onSubmit={handleSubmit} onChange={handleInputChange} inputValue={input} />
    </Providers>
  );
}
