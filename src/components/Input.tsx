import { PaperPlaneRight } from "phosphor-react";
import { MouseEventHandler, RefObject } from "react";

interface InputProps {
 value: RefObject<HTMLInputElement>;
 sendMessage: MouseEventHandler;
}

export function Input({ value, sendMessage }: InputProps) {
 return (
  <div className="w-full bg-[#282843] flex justify-between rounded-full px-6 py-3 focus-within:border-2 focus-within:border-[#07847E]">
   <input type="text" placeholder="Digite sua mensagem" className="appearance-none bg-transparent w-full outline-none text-base" ref={value} />
   <button type="submit" onClick={sendMessage}>
    <PaperPlaneRight size={32} weight='fill' className="cursor-pointer" />
   </button>
  </div>
 )
}