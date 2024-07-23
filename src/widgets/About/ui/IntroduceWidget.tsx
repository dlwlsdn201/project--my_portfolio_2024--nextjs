"use client";

import { ProfileBio } from "@entities/profiles";
import { Section } from "../style/common.styled";

const IntroduceWidget = () => {
  return (
    <Section>
      <ProfileBio />
    </Section>
  );
};

export default IntroduceWidget;
