export const UserLinks = () => {
  return (
    <div className='space-y-2'>
      <a
        href='https://hailunzhou.com'
        className='flex items-center text-blue-600 hover:underline'
      >
        <i className='pi pi-globe mr-2'></i> Website
      </a>
      <a
        href='https://twitter.com/hailunzhou'
        className='flex items-center text-blue-600 hover:underline'
      >
        <i className='pi pi-twitter mr-2'></i> Twitter
      </a>
      <a
        href='https://linkedin.com/in/hailunzhou'
        className='flex items-center text-blue-600 hover:underline'
      >
        <i className='pi pi-linkedin mr-2'></i> LinkedIn
      </a>
      <a
        href='https://instagram.com/hailunzhou'
        className='flex items-center text-blue-600 hover:underline'
      >
        <i className='pi pi-instagram mr-2'></i> Instagram
      </a>
    </div>
  );
};
