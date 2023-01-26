import { FormEvent, useRef, useState } from "react";

import { X, Circle } from "phosphor-react";
import Photo from "./assets/Foto.png";
import { ContainerMessage } from "./components/ContainerMessage";
import { Input } from "./components/Input";

function App() {
  type Message = {
    id: number;
    mensagem: string | undefined;
  };
  const [messages, setMessages] = useState<Message[]>([]);
  const value = useRef<HTMLInputElement>(null);
  const listMessages = useRef<HTMLInputElement>(null);

  async function sendMessage(event: FormEvent) {
    await event.preventDefault();

    if (value.current?.value) {
      const mensagem = {
        id: Math.random(),
        mensagem: value.current?.value,
      };

      await setMessages((prev) => [...prev, mensagem]);
    }

    await listMessages.current?.lastElementChild?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="h-[100vh] px-20 py-8 flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <div className="w-full flex justify-between text-[#E1E1E6]">
          <div className="flex gap-2">
            <img src={Photo} alt="Foto de perfil" />
            <div>
              <p className="font-roboto text-base font-bold">Cecilia Sassaki</p>
              <div className="flex gap-1 items-center text-[#00B37E] text-xs">
                <Circle size={10} weight="fill" />
                <p className="font-roboto">Online</p>
              </div>
            </div>
          </div>

          <X size={20} weight="bold" />
        </div>
        <p className="text-[#E1E1E6] font-roboto text-xs text-center">
          Hoje {new Date().getHours()}:{new Date().getMinutes()}
        </p>
      </div>
      <div ref={listMessages} className="h-4/5 flex flex-col gap-8 overflow-y-scroll container-snap scroll-smooth">
        <ContainerMessage
          placeholder="Tive uma ideia incrível para um projeto! 😍"
          type="ANSWER"
          name="Cecilia"
        />
        <ContainerMessage placeholder="Sério? Me conta mais." type="QUESTION" />
        <ContainerMessage
          placeholder="E se a gente fizesse um chat moderno e responsivo em apenas uma semana?"
          type="ANSWER"
          name="Cecilia"
        />
        <ContainerMessage placeholder="#boraCodar! 🚀" type="QUESTION" />
        {messages.map((prop) => {
          return (
            <ContainerMessage
              key={prop.id}
              placeholder={prop.mensagem}
              type="QUESTION"
            />
          );
        })}
      </div>

      <form className="w-full text-[#E1E1E6]">
        <Input value={value} sendMessage={sendMessage} />
      </form>
    </div>
  );
}

export default App;
