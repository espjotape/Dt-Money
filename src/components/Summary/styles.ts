import styled, { css } from "styled-components";

export const SummaryContainer = styled.section`
 width: 100%;
 max-width: 1120px;
 margin: 0 auto;
 padding: 0 1.5rem;

 display: grid;
 grid-template-columns: repeat(3, 1fr);
 grid-gap: 2rem;
 
 margin-top: -5rem;
`

interface SummaryCardProps  {
 variant?: 'green'
}

export const SummaryCard = styled.div<SummaryCardProps>`
 background-color: ${props => props.theme["gray-600"]};
 padding: 2rem;
 border-radius: 6px;

 header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${props => props.theme["gray-300"]}
 }

 strong {
  display: block;
  margin-top: 1rem;
  font-size: 2rem;
 }

 ${props => props.variant === 'green' && css `
 background-color: ${props.theme["green-700"]};
 `}
`