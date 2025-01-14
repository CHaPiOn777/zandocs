import styled from "@emotion/styled";

export const HeaderBox = styled.header`
  max-height: 80px;
  height: 100%;
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: space-between;

  position: sticky;
  top: 0px;
  z-index: 100;
  box-shadow: 0px 8px 24px -0.86px #1521331a;
  background: #f3f9fe;
  width: 100vw;
`;
export const Header = styled.header`
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
export const ListItem = styled.li`
  padding: 13px 12px 8px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #0088ff33;
    color: #060083;
  }
`;
