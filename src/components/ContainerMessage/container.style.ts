import styled from "styled-components";

type TContainerProps = {
 typeMessage: "ANSWER" | "QUESTION";
}

export const Container = styled.div<TContainerProps>`
 width: 100%;
 display: flex;
 justify-content: ${props => props.typeMessage === 'QUESTION' ? 'end' : 'baseline'};
`