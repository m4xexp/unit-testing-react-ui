import React, { ButtonHTMLAttributes } from 'react';

import { Id } from 'react-toastify/dist/types';

// * Assets---------------------------------------------------------------
import { BsFillCalendarDateFill, BsFillLightningFill } from 'react-icons/bs';
import { FaAddressCard } from 'react-icons/fa';
import { FiToggleLeft } from 'react-icons/fi';

type SidebarProps = {
  onToast?: (toastText: string) => Id;
  menu: string;
  setMenu: (menu: string) => void;
};

const Sidebar: React.FC<SidebarProps> = ({ onToast, menu, setMenu }) => {
  return (
    <div
      className="fixed top-0 left-0 m-0 flex h-screen w-[4.5rem] flex-col 
                    bg-gray-900 text-white shadow-lg "
    >
      {/* <SidebarIcon
        icon={<BsFillCalendarDateFill size="20" />}
        menu={menu}
        text="Date"
        onClick={() => setMenu('date')}
      /> */}
      <SidebarIcon
        icon={<FiToggleLeft size="28" />}
        menu={menu}
        text="Button"
        onClick={() => setMenu('button')}
      />
      <SidebarIcon
        icon={<BsFillLightningFill size="20" />}
        menu={menu}
        text="Text"
        onClick={() => setMenu('text')}
      />
      <SidebarIcon
        icon={<FaAddressCard size="20" />}
        menu={menu}
        text="Card"
        onClick={() => setMenu('card')}
      />
    </div>
  );
};

export default Sidebar;

interface SidebarIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactElement;
  menu?: string;
  text?: string;
}

const SidebarIcon: React.FC<SidebarIconProps> = ({
  icon,
  text = 'Tooltip',
  menu,
  ...rest
}) => {
  return (
    <button
      data-testid="sidebar-menu"
      className={`sidebar-icon group  ${
        menu === text.toLowerCase() && 'rounded-xl bg-green-600 text-white'
      }`}
      {...rest}
    >
      <span className="left-dot group-hover:scale-100"></span>
      {icon}

      <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </button>
  );
};
