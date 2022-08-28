import React from 'react';
import './../../../css/searchForm.css';
function SearchForm() {
  return (
    <div className="flex items-center justify-center w-4/6 h-16 border-4 border-yellow-300 border-solid rounded-full shadow-md">
      <select name="charServer" id="charServer" className=" w-32 h-10 text-center focus:outline-none cursor-pointer">
        <option value="all" className="">
          전체
        </option>
        <option value="cain">카인</option>
        <option value="diregie">디레지에</option>
        <option value="siroco">시로코</option>
        <option value="prey">프레이</option>
        <option value="casillas">카시야스</option>
        <option value="hilder">힐더</option>
        <option value="anton">안톤</option>
        <option value="bakal">바칼</option>
      </select>

      <input type="search" name="" id="" className="w-2/3 h-12 outline-0 " />
      <button className="w-20 h-12">검색</button>
    </div>
  );
}

export default SearchForm;
