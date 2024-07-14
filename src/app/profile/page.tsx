import {
  UserCard,
  UserPronouns,
  UserLocation,
  UserLinks,
} from "@entities/user/ui";
import { ProfileBio, ProfileInterests } from "@features/profiles";
import { Sidebar } from "@shared/ui/Sidebar";
import { Button } from "primereact/button";

const ProfilePage = () => {
  return (
    <>
      <div className='flex h-screen bg-gray-100 font-sans'>
        <Sidebar />
        <main className='flex-1 p-10'>
          <header className='flex justify-between items-center mb-10'>
            <UserCard />
            <div>
              <Button label='Message' className='p-button-secondary mr-2' />
              <Button label='Follow' className='p-button-primary' />
            </div>
          </header>
          <ProfileBio />
          <ProfileInterests />
          <section className='mb-10'>
            <h2 className='text-xl font-semibold mb-4'>Pronouns</h2>
            <UserPronouns />
          </section>
          <section className='mb-10'>
            <h2 className='text-xl font-semibold mb-4'>Location</h2>
            <UserLocation />
          </section>
          <section className='mb-10'>
            <h2 className='text-xl font-semibold mb-4'>Links</h2>
            <UserLinks />
          </section>
        </main>
      </div>
    </>
  );
};

export default ProfilePage;
