import React from 'react';
function SearchForm() {
  return (
    <div className="flex justify-center mt-16">
      <div className="border-4 border-yellow-300 border-solid rounded-full w-2/5 h-14 text-center pt-1 shadow-md">
        <select name="charServer" id="charServer" className="w-1/5 focus:outline-none text-center mr-7 cursor-pointer">
          <option value="all">전체</option>
          <option value="cain">카인</option>
          <option value="diregie">디레지에</option>
          <option value="siroco">시로코</option>
          <option value="prey">프레이</option>
          <option value="casillas">카시야스</option>
          <option value="hilder">힐더</option>
          <option value="anton">안톤</option>
          <option value="bakal">바칼</option>
        </select>
        <input type="search" name="" id="" className="w-2/4 h-10 outline-1 " />
        <button className="ml-9">검색</button>
      </div>
    </div>
  );
}

export default SearchForm;
