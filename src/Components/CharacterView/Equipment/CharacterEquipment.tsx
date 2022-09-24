import React from 'react';
import { itemColor } from '../../../asset/ts/serverList';
import ListContainer from '../../../DesignPattern/CharacterDetailList/ListContainer';
import { CharacterEquipmentData } from '../../Types/Character/CharacterEquipmentType';
interface characterEquipmentProps {
  characterEquipmentData: CharacterEquipmentData[] | undefined;
  characterId: string | null;
}

function CharacterEquipment({ characterEquipmentData, characterId }: characterEquipmentProps) {
  console.log(characterEquipmentData);
  return (
    <div className="w-full flex flex-col">
      {characterEquipmentData &&
        characterEquipmentData.map(equipmentData => (
          <ListContainer key={equipmentData.itemId}>
            <div className=" flex items-center h-16">
              <p className="text-center text-xs font-bold w-20 border-solid border-r-2 border-gray-400 mr-2">{equipmentData.slotName}</p>
              <img src={`https://dnf-react-typescript.herokuapp.com/item/itemimage?itemId=${equipmentData.itemId}`} alt={equipmentData.itemName} className="mr-3 ml-5 " />
              <p className="w-48 text-xs text-center mr-2 font-bold">{equipmentData.itemName}</p>
              <div className="flex flex-col items-center">
                {equipmentData.enchant?.status &&
                  equipmentData.enchant?.status.map(equipmentStatus => (
                    <div className="w-40 flex flex-row justify-center " key={equipmentStatus.name}>
                      <p className=" text-xs mr-1 ">{equipmentStatus.name}</p>
                      <p className="text-xs mr-1  "> {equipmentStatus.value}</p>
                    </div>
                  ))}
              </div>
            </div>
          </ListContainer>
        ))}
    </div>
  );
}

export default CharacterEquipment;
