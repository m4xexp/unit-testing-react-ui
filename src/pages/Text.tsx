import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import styled from 'styled-components';

interface Props {}

const Text: React.FC<Props> = () => {
  const chanelArr = [
    {
      chanelName: 'Coach',
      color: 'text-[#d3c5a7]',
      user: [
        {
          name: 'Locke',
          color: 'bg-[#5574ce]',
        },
        {
          name: 'Billy Goat',
          color: 'bg-[#cfdeff]',
        },
      ],
    },
    {
      chanelName: 'Student Lead',
      color: 'text-[#bed3ff]',
      user: [
        {
          name: 'Graggle',
          color: 'bg-[#ffb869]',
          active: true,
        },
        {
          name: 'Cap',
          color: 'bg-[#ff82a6]',
        },
      ],
    },
    {
      chanelName: 'Animal Crossing',
      color: 'text-[#d58a84]',
      user: [
        {
          name: 'Graggle',
          color: 'bg-[#ffb869]',
        },
      ],
    },
  ];

  return (
    <Container className=" flex h-[480px] w-[360px] flex-col gap-8  overflow-hidden rounded-xl bg-[#292841] py-8 px-6">
      {chanelArr.map((ch, index) => {
        const { chanelName, color, user } = ch;
        return (
          <div
            key={index}
            className="flex flex-col gap-1"
            data-testid="chanel-list"
          >
            <div className="flex justify-between">
              <h2 className={`font-semibold ${color}`}>{chanelName}</h2>
              <AiOutlinePlus className="h-6 w-6 cursor-pointer text-[#807eb5]" />
            </div>
            {user.map((user, index) => {
              const { name, color, active } = user;
              return (
                <User key={index} name={name} color={color} active={active} />
              );
            })}
          </div>
        );
      })}
    </Container>
  );
};
const Container = styled.div`
  box-shadow: 6px 7px 20px rgba(0, 0, 0, 0.06);
`;

interface UserProps {
  name: string;
  color: string;
  active?: boolean;
}

const User: React.FC<UserProps> = ({ name, color, active }) => {
  return (
    <div
      className={`flex cursor-pointer items-center gap-2 p-1 text-white ${
        active && 'rounded-lg bg-[#312f51]'
      }`}
    >
      <div className={`h-8 w-8 rounded-full ${color}`}></div>
      <h2 className="text-[#dcddde]">{name}</h2>
    </div>
  );
};

export default Text;
