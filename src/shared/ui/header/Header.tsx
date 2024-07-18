"use client";
import { ConfigIcon } from "@shared/assets/icons";
import { Avatar } from "primereact/avatar";
import {
  HeaderContainer,
  HeaderInnerContainer,
  IconWrapper,
  LogoIcon,
  LogoLabel,
  LogoWrapper,
} from "./style/header.styled";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderInnerContainer>
        <LogoWrapper>
          {/*TODO - Add logo here*/}
          <LogoIcon className='pi pi-euro'></LogoIcon>
          <LogoLabel>Leejinw</LogoLabel>
        </LogoWrapper>
        <IconWrapper>
          <ConfigIcon spinning iconSize={"1.125rem"} />
          <Avatar label='me' size='normal' shape='circle' />
        </IconWrapper>
      </HeaderInnerContainer>
    </HeaderContainer>
  );
};
