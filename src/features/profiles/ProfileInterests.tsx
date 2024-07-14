import { SectionTitle } from "@shared/ui/Title";

export const ProfileInterests = () => {
  return (
    <section className='mb-10'>
      <SectionTitle>Interests</SectionTitle>
      <div className='flex flex-wrap gap-2'>
        <span className='bg-gray-200 py-1 px-3 rounded-full'>
          Product Design
        </span>
        <span className='bg-gray-200 py-1 px-3 rounded-full'>
          User Experience
        </span>
        <span className='bg-gray-200 py-1 px-3 rounded-full'>
          Visual Design
        </span>
        <span className='bg-gray-200 py-1 px-3 rounded-full'>
          Interaction Design
        </span>
        <span className='bg-gray-200 py-1 px-3 rounded-full'>
          Mobile Design
        </span>
        <span className='bg-gray-200 py-1 px-3 rounded-full'>Web Design</span>
      </div>
    </section>
  );
};
