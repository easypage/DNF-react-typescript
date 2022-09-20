interface serverName {
  value: 'all' | 'cain' | 'diregie' | 'siroco' | 'prey' | 'casillas' | 'hilder' | 'anton' | 'bakal';
  text: '전체' | '카인' | '디레지에' | '시로코' | '프레이' | '카시야스' | '힐더' | '안톤' | '바칼';
}

export const serverList: serverName[] = [
  { value: 'all', text: '전체' },
  { value: 'cain', text: '카인' },
  { value: 'diregie', text: '디레지에' },
  { value: 'siroco', text: '시로코' },
  { value: 'prey', text: '프레이' },
  { value: 'casillas', text: '카시야스' },
  { value: 'hilder', text: '힐더' },
  { value: 'anton', text: '안톤' },
  { value: 'bakal', text: '바칼' },
];
export const serverReName = {
  cain: '카인',
  diregie: '디레지에',
  siroco: '시로코',
  prey: '프레이',
  casillas: '카시야스',
  anton: '안톤',
  hilder: '힐더',
  bakal: '바칼',
};
