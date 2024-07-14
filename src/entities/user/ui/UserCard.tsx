import Image from "next/image";

export const UserCard = () => {
  return (
    <div className='flex items-center'>
      <Image
        width={24}
        height={24}
        src='https://placehold.co/100x100'
        alt='Helen Zhou'
        className='rounded-full mr-4'
      />
      <div>
        <h1 className='text-2xl font-bold'>Helen Zhou</h1>
        <p className='text-gray-600'>Product Designer at Pinterest</p>
      </div>
    </div>
  );
};
