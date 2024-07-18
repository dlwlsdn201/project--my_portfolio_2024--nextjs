import ImageProvider from "@shared/assets/ImageProvider";
import imageAvatar from "@shared/assets/images/avatar.jpg";
import { UserCardContainer } from "../style/UserCard";

export const UserCard = () => {
  return (
    <UserCardContainer>
      <ImageProvider
        ImageComponent={imageAvatar}
        alt='avatar'
        style={{
          borderRadius: "50% 50%",
          width: 128,
          height: 128,
          objectFit: "cover",
        }}
      />
      <div>
        <h1 className='text-2xl font-bold'>Lee Jin Woo</h1>
        <p className='text-gray-600'>Web FrontEnd Engineer</p>
      </div>
    </UserCardContainer>
  );
};
