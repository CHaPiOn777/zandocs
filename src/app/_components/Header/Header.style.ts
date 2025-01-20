import styled from "@emotion/styled";
type TIsActive = {
  $isActive: boolean;
};
export const HeaderBox = styled.header`
  max-height: 80px;
  height: 100%;
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  top: 0px;
  z-index: 100;
  box-shadow: 0px 8px 24px -0.86px #1521331a;
  background: #f3f9fe;
  width: 100vw;
`;
export const Header = styled.div`
  max-height: 100px;
  height: 100%;
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: space-between;
  max-width: 1228px;
  width: 100%;
`;
export const List = styled.ul`
  display: flex;
  gap: 8px;
  align-items: center;
`;
export const ListItem = styled.li<TIsActive>`
  padding: 32px 12px;
  /* border-radius: 4px; */
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  color: ${({ $isActive }) => ($isActive ? "#060083" : "inherit")};
  background-color: ${({ $isActive }) => ($isActive ? "#0088ff33" : "inherit")};
  &:hover {
    background-color: #0088ff33;
    color: #060083;
  }
`;
