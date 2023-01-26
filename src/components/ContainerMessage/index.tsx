import { Message } from "../Message";
import { Container } from "./container.style";

interface ContainerMessageProps {
 placeholder: string | undefined;
 type: "ANSWER" | "QUESTION";
 name?: string;
}

export function ContainerMessage({ placeholder, type, name }: ContainerMessageProps) {
 return(
  <Container typeMessage={type}>
   <Message
        placeholder={placeholder}
        name={name}
        type={type}
      />
  </Container>
 )
}