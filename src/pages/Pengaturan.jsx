import React, { useState } from 'react';

const ContentComponent = ({ activeTab }) => {
  return (
    <>
      {activeTab === 'home' && <div>Ini adalah halaman Beranda</div>}
      {activeTab === 'about' && <div>Ini adalah halaman Tentang</div>}
      {activeTab === 'courses' && <div>Ini adalah halaman Kursus</div>}
    </>
  );
};

const Pengaturan = () => {
    const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col">
      <ul className="flex">
        <li className="mr-3">
          <button onClick={() => handleTabClick('home')}>Beranda</button>
        </li>
        <li className="mr-3">
          <button onClick={() => handleTabClick('about')}>Tentang</button>
        </li>
        <li>
          <button onClick={() => handleTabClick('courses')}>Kursus</button>
        </li>
      </ul>
      <div>
        <ContentComponent activeTab={activeTab} />
      </div>
    </div>
  );
}

export default Pengaturan