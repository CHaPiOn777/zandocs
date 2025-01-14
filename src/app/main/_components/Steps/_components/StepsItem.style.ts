import styled from "@emotion/styled";

interface StackNumberProps {
  $isactive: boolean;
}
export const StackNumber = styled.div<StackNumberProps>`
  width: 48px;
  height: 48px;
  display: flex;
  border: 1px solid
    ${({ $isactive }) => ($isactive ? "transparent" : "#3375FF")};
  background: ${({ $isactive }) => ($isactive ? "#3375FF" : "#EBF1FF")};

  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: background 0.3s ease, border-color 0.3s ease;
`;
export const Number = styled.p<StackNumberProps>`
  font-family: Acumin Pro;
  font-size: 36px;
  font-weight: 400;
  line-height: 24px;
  padding-top: 5px;
  text-align: center;
  color: ${({ $isactive }) => ($isactive ? "#FFFEFA" : "#A4B4C7")};
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  transition: all 0.3s ease, border-color 0.3s ease;
`;
export const Container = styled.div<StackNumberProps>`
  z-index: 1;

  display: flex;
  gap: 32px;
  & .desc {
    opacity: ${({ $isactive }) => ($isactive ? 1 : 0.6)};
    transition: all 0.3s ease;
  }
  cursor: pointer;
  &:hover > .stack-number {
    border: 1px solid transparent;
    background: #3475ff;

    & > .number {
      color: #fffefa;
    }
  }
  &:hover > .desc {
    opacity: 1;
  }
`;
