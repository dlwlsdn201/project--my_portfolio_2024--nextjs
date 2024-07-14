import Image from "next/image";

export const UserProfileImage = () => {
  return (
    <Image
      width={24}
      height={24}
      src='https://placehold.co/100x100'
      alt='Helen Zhou'
      className='rounded-full'
    />
  );
};
