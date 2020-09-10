import styled from 'styled-components';

interface ParagraphProps {
  big?: boolean;
}

const Paragraph = styled.p<ParagraphProps>`
  font-size: ${({ big }) => big ? 20 : 10}px;
`;

export default Paragraph;
