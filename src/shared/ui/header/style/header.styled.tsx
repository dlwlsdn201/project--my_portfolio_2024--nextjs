import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 0.5rem 1.25rem;
  width: 100%;
  position: sticky;
  z-index: 1000;
  top: 0;
  background-color: #fff;
`;

export const HeaderInnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  display: flex;
  gap: 0.875rem;
  align-items: center;
`;

export const LogoIcon = styled.i``;

export const LogoLabel = styled.span`
  font-weight: 700;
  font-size: 1.125rem;
`;

export const MenubarWrapper = styled.div`
  display: flex;
`;

export const ControlWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-left: 0.5rem;
`;
