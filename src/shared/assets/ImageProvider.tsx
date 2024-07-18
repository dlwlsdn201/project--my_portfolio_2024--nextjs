import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

interface ImageProviderProps {
  ImageComponent: StaticImport;
  alt: string;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
}

const ImageProvider = ({
  ImageComponent,
  alt,
  width,
  height,
  style,
}: ImageProviderProps): React.ReactElement => {
  return <Image src={ImageComponent} alt={alt} style={style} />;
};

export default ImageProvider;
