import { ImageProps } from "next/image";
import Image from "next/image";

const PromoBanner = (props: ImageProps) => {
  return (
    <Image
      width={0}
      height={0}
      className="h-full w-auto px-5"
      sizes="100vh"
      {...props}
    />
  );
};

export default PromoBanner;
