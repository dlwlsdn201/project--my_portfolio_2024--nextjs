import { Menubar } from "primereact/menubar";

export const Sidebar = () => {
  const items = [
    { label: "About" },
    { label: "Resume" },
    { label: "Portfolio" },
    { label: "Blog" },
  ];

  return (
    <aside className='w-64 p-6 bg-white border-r border-gray-200'>
      <Menubar model={items} />
    </aside>
  );
};
