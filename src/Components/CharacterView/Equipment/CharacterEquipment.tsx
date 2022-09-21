import React from 'react';
import ListContainer from '../../../DesignPattern/CharacterDetailList/ListContainer';
import { CharacterEquipmentData } from '../../Types/Character/CharacterEquipmentType';
interface characterEquipmentProps {
  characterEquipmentData: CharacterEquipmentData[] | undefined;
}
function CharacterEquipment({ characterEquipmentData }: characterEquipmentProps) {
  return (
    <div className="flex flex-col">
      {characterEquipmentData &&
        characterEquipmentData.map(equipmentData => (
          <ListContainer key={equipmentData.itemId}>
            <div className="flex items-center">
              <p className="text-center font-bold w-32 border-solid border-r-2 border-gray-400 mr-4">{equipmentData.slotName}</p>
              <img src={`https://dnf-react-typescript.herokuapp.com/item/itemimage?itemId=${equipmentData.itemId}`} alt={equipmentData.itemName} className="mr-3" />
              <p className="text-sm font-bold mr-3">{equipmentData.itemName}</p>
              {equipmentData.enchant.status.map(equipmentStatus => (
                <div className="flex flex-row" key={equipmentStatus.name}>
                  <p className="text-xs mr-1">{equipmentStatus.name}</p>
                  <p className="text-xs mr-3">{equipmentStatus.value}</p>
                </div>
              ))}
            </div>
          </ListContainer>
        ))}
    </div>
  );
}

export default CharacterEquipment;
