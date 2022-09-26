import React, { useState } from 'react';
import { itemColor } from '../../../asset/ts/serverList';
import { CharacterEquipmentData } from '../../Types/Character/CharacterEquipmentType';
interface characterEquipmentProps {
  characterEquipmentData: CharacterEquipmentData[] | undefined;
  characterId: string | null;
}

function CharacterEquipment({ characterEquipmentData, characterId }: characterEquipmentProps) {
  return (
    <div className="w-full flex flex-col">
      {characterEquipmentData &&
        characterEquipmentData.map(equipmentData => (
          <li className="" key={equipmentData.itemId}>
            <div className=" flex items-center h-16">
              <p className="w-20 text-center text-xs font-bold  border-solid border-r-2 border-gray-400 mr-2">{equipmentData.slotName}</p>
              <img src={`https://dnf-react-typescript.herokuapp.com/item/itemimage?itemId=${equipmentData.itemId}`} alt={equipmentData.itemName} className="mr-3 ml-1" />

              <p className={`w-48 text-xs font-bold ${itemColor[equipmentData.itemRarity]}`}>{equipmentData.itemName}</p>

              <div className="flex flex-col items-center">
                {equipmentData.enchant?.status &&
                  equipmentData.enchant?.status.map(equipmentStatus => (
                    <div className="w-40 flex flex-row justify-center item " key={equipmentStatus.name}>
                      <p className="text-xs mr-1 ">{equipmentStatus.name}</p>
                      <p className="text-xs mr-1  "> {equipmentStatus.value}</p>
                    </div>
                  ))}
              </div>
            </div>
          </li>
        ))}
    </div>
  );
}

export default CharacterEquipment;
