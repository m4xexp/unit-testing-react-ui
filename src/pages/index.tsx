import React, { useState } from 'react';

// * External components-------------------------------------------
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// * Components----------------------------------------------------
import Sidebar from '@/components/sidebar';
import Date from './Date';
import Card from './Card';
import Button from './Button';
import Text from './Text';

function IndexPage() {
  const [selectedMenu, setSelectedMenu] = useState<string>('button');
  const notify = (toastText: string) => toast(toastText);

  const handleSelectedMenu = (menu: string) => {
    setSelectedMenu(menu);
  };

  return (
    <div className="h-screen w-screen bg-gray-800">
      <Sidebar
        onToast={notify}
        menu={selectedMenu}
        setMenu={handleSelectedMenu}
      />

      <div className="flex h-full w-full items-center justify-center p-10 pl-[4.5rem]">
        {selectedMenu === 'date' && <Date />}
        {selectedMenu === 'button' && <Button onToast={notify} />}
        {selectedMenu === 'text' && <Text />}
        {selectedMenu === 'card' && <Card />}
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default IndexPage;
