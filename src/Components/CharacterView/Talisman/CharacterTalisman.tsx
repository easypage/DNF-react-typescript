import React from 'react';
import { CharacterTalismanData } from '../../Types/Character/CharacterTalismanType';

interface characterTalismanProps {
  characterTalismanData: CharacterTalismanData[] | undefined;
}

function CharacterTalisman({ characterTalismanData }: characterTalismanProps) {
  console.log(characterTalismanData);
  return (
    <div className="flex flex-col ">
      {characterTalismanData === null ? (
        <div className="mt-2">탈리스만이 존재하지 않습니다.</div>
      ) : (
        <div>
          {characterTalismanData?.map(talisman => (
            <div key={talisman.talisman.itemId} className="flex flex-col items-center justify-center">
              <p className="text-sm font-bold text-[#FF00FF]"> {talisman.talisman.itemName}</p>
              {talisman.runes.map(talismanRune => (
                <p className="text-xs" key={talismanRune.itemId}>
                  {talismanRune.itemName}
                </p>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CharacterTalisman;
