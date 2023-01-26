import styled from "styled-components"

type TMessageProps = {
 typeMessage: "ANSWER" | "QUESTION";
}

export const MessageDiv = styled.div<TMessageProps>`
 width: max-content;
 background-color: ${(props) => props.typeMessage === 'ANSWER' ? '#633BBC' : '#07847E'};
 padding: 14px;

 border-top-left-radius: ${(props) => props.typeMessage === 'ANSWER' ? '' : '10px'};
 border-bottom-right-radius: ${(props) => props.typeMessage === 'QUESTION' ? '' : '10px'};
 border-top-right-radius: 10px;
 border-bottom-left-radius: 10px;
`