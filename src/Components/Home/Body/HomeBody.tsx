import React from 'react';
import HorizenAdBanner from '../../../DesignPattern/AdBanner/HorizenAdBanner';
import CharacterDeatailViewContainer from '../../CharacterDetailView/CharacterDeatailViewContainer';
import BodyLogo from './../../../asset/images/mainlogo.png';
import HomeCharacterSearchForm from './HomeCharacterSearchForm';

function HomeBody() {
  return (
    <div className="w-Container flex flex-col relative items-center m-auto">
      <img src={BodyLogo} className="mt-common" alt="mainlogo" />
      <HomeCharacterSearchForm />
    </div>
  );
}

export default HomeBody;
