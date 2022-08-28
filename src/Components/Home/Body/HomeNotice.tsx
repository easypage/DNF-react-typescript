import React from 'react';

function HomeNotice() {
  return (
    <div className="flex flex-col w-4/6 mt-5  ">
      <ul className=" border-yellow-400 border-solid border-2 shadow-md">
        <h1 className="text-3xl mb-3">공지사항</h1>
        <li className="text-sm font-Nanum Gothic font-bold opacity-95 cursor-pointer underline">
          <a href="https://df.nexon.com/df/news/notice?p=web&mode=view&no=2708626">8/26(금) 클라이언트 패치 안내</a>
        </li>
        <li className="text-sm font-Nanum Gothic font-bold opacity-95 underline">
          <a href="https://df.nexon.com/df/news/notice?p=web&mode=view&no=2708350">8/25(목) 고객센터 문의 이력이 확인되지 않는 오류 수정 안내</a>
        </li>
        <li className="text-sm font-Nanum Gothic font-bold opacity-95 underline">
          <a href="https://df.nexon.com/df/news/notice?p=web&mode=view&no=2708168">(15:16 추가) 8/25(목) 클라이언트 패치 안내</a>
        </li>
        <li className="text-sm font-Nanum Gothic font-bold opacity-95 underline">
          <a href="https://df.nexon.com/df/news/notice?p=web&mode=view&no=2708164">(12:40 추가) 8/25(목) 확인된 오류 안내</a>
        </li>
        <li className="text-sm font-Nanum Gothic font-bold opacity-95 underline">
          <a href="https://df.nexon.com/df/news/notice?p=web&mode=view&no=2708114">8/25(목) 불량이용자 단속 결과 안내</a>
        </li>
      </ul>
    </div>
  );
}

export default HomeNotice;
