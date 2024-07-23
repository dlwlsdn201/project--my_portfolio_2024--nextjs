"use client";

import { ProfileInterests } from "@entities/profiles";
import { Section } from "../style/common.styled";

const InterestWidget = () => {
  return (
    <Section>
      <ProfileInterests />
    </Section>
  );
};

export default InterestWidget;
