import {
  UserCard,
  UserPronouns,
  UserLocation,
  UserLinks,
} from "@entities/user/ui";
import InterestWidget from "@widgets/About/ui/InterestWidget";
import IntroduceWidget from "@widgets/About/ui/IntroduceWidget";
import { Button } from "primereact/button";
import LocationWidget from "@widgets/About/ui/LocationWidget";
import LinkWidget from "@widgets/About/ui/LinkWidget";

const ProfilePage = () => {
  return (
    <div className='flex h-screen bg-gray-100 font-sans'>
      <main className='flex-1 p-10'>
        <header className='flex justify-between items-center mb-10'>
          <UserCard />
          <div>
            <Button label='Message' className='p-button-secondary mr-2' />
            <Button label='Follow' className='p-button-primary' />
          </div>
        </header>
        <IntroduceWidget />
        <InterestWidget />
        <LocationWidget />
        <LinkWidget />
      </main>
    </div>
  );
};

export default ProfilePage;
