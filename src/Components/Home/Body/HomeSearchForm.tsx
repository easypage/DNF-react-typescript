import React from 'react';
import './../../../css/searchForm.css';
function SearchForm() {
  return (
    <div className="flex justify-center w-4/5 h-16 border-4 border-yellow-300 border-solid rounded-full shadow-md">
      <select name="charServer" id="charServer" className="h-10 focus:outline-none cursor-pointer">
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

      <input type="search" name="" id="" className="h-12 outline-1" />
      <button className="">검색</button>
    </div>
  );
}

export default SearchForm;
