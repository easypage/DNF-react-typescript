import React from 'react';
import ListContainer from '../../../DesignPattern/CharacterDetailList/ListContainer';
import { CharacterFlagData } from '../../Types/Character/CharacterFlagType';
interface characterFlagProps {
  characterFlagData: CharacterFlagData | undefined;
}
function CharacterFlag({ characterFlagData }: characterFlagProps) {
  return (
    <div>
      <ListContainer>
        <div className="text-center ">
          {characterFlagData && (
            <img src={`https://dnf-react-typescript.herokuapp.com/item/itemimage?itemId=${characterFlagData?.itemId}`} alt={characterFlagData?.itemName} className="m-auto text-center" />
          )}
          <p className="text-sm font-bold mr-3">{characterFlagData?.itemName}</p>
          <p className="text-xs mr-2">{characterFlagData?.itemAbility}</p>
        </div>
      </ListContainer>
      <ListContainer>
        {characterFlagData?.gems.map(flagGem => (
          <div className="flow flex-row text-center" key={flagGem.itemId}>
            {characterFlagData && <img src={`https://dnf-react-typescript.herokuapp.com/item/itemimage?itemId=${flagGem?.itemId}`} alt={flagGem?.itemName} className="m-auto mt-5" />}
            <p className="text-base font-bold">{flagGem.slotNo}번째 슬롯</p>
            <p className="text-xs">{flagGem.itemName}</p>
            <p className="text-xs mb-3">{flagGem.itemAbility}</p>
          </div>
        ))}
      </ListContainer>
    </div>
  );
}

export default CharacterFlag;
