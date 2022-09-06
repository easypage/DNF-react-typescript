import React from 'react';
import { UserType } from './CharSearchData';

type UserProps = {
  // 부모 컴포넌트에 import 해온 타입을 재사용
  user: UserType;
};
function CharSearch({ tr }: UserProps) {
  return <div>캐릭터페이지입니다.</div>;
}

export default CharSearch;
