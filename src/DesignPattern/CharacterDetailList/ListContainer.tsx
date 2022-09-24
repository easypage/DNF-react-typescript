import React from 'react';

function ListContainer({ children }: React.PropsWithChildren<Record<never, any>>) {
  return <li className="w-CharacterStatus  flex flex-col justify-center border-2  border-solid mt-3 pl-3 pr-3 border-gray-400 rounded-md shadow-md">{children}</li>;
}

export default ListContainer;
