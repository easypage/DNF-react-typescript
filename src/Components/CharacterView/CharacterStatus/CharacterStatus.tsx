import React from 'react';
import ListContainer from '../../../DesignPattern/CharacterDetailList/ListContainer';
import { characterStatusData } from '../../Types/Character/CharacterStatusType';
import CharacterImage from './CharacterImage';
interface characterStatusProps {
  characterStatusData: characterStatusData | undefined;
  serverId: string | null;
  characterId: string | null;
}
function CharacterStatus({ characterStatusData, serverId, characterId }: characterStatusProps) {
  return (
    <div>
      <CharacterImage serverId={serverId} characterId={characterId} />
      <div className="w-CharacterCard flex flex-wrap">
        <table className=" w-2/3 flex flex-wrap  justify-center m-auto">
          <tbody>
            {characterStatusData?.default.map(characterStatus => {
              if (characterStatus !== null) {
                return (
                  <tr>
                    <td>
                      <p className="text-lg mr-2">{characterStatus.name}</p>
                    </td>
                    <td>
                      <p className="text-lg">{characterStatus.value}</p>
                    </td>
                  </tr>
                );
              } else {
                return <div className="w-1/2 flex flex-wrap justify-center"> </div>;
              }
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CharacterStatus;
