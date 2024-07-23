"use client";
import { ConfigIcon } from "@shared/assets/icons";
import { Avatar } from "primereact/avatar";
import { Menubar } from "primereact/menubar";
import { SharedSearchInput } from "@shared/ui/input";
import {
  HeaderContainer,
  HeaderInnerContainer,
  ControlWrapper,
  LogoIcon,
  LogoLabel,
  LogoWrapper,
  MenubarWrapper,
} from "./style/header.styled";

const items = [
  { label: "About" },
  { label: "Resume" },
  { label: "Portfolio" },
  { label: "Blog" },
];

export const Header = () => {
  // const onSearch = (e) => {
  //   console.log("", e.target.value);
  // };

  const end = (
    <ControlWrapper>
      <SharedSearchInput />
      <ConfigIcon spinning iconSize={"1.125rem"} />
      <Avatar label='me' size='normal' shape='circle' />
    </ControlWrapper>
  );

  return (
    <HeaderContainer>
      <HeaderInnerContainer>
        <LogoWrapper>
          {/*TODO - Add logo here*/}
          <LogoIcon className='pi pi-euro'></LogoIcon>
          <LogoLabel>Leejinw</LogoLabel>
        </LogoWrapper>
        <MenubarWrapper>
          <Menubar model={items} end={end} style={{ background: "white" }} />
        </MenubarWrapper>
      </HeaderInnerContainer>
    </HeaderContainer>
  );
};
