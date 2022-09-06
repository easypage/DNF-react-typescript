import React from 'react';
import { serverList } from '../../../asset/js/serverList';
import './../../../css/searchForm.css';

function SearchForm() {
  return (
    <div className="flex items-center justify-center w-4/6 h-16 border-4 border-yellow-300 border-solid rounded-full shadow-md">
      <select name="charServer" id="charServer" className=" w-32 h-10 text-center focus:outline-none cursor-pointer">
        {serverList.map(server => (
          <option value={server.value} key={server.value}>
            {server.text}
          </option>
        ))}
      </select>

      <input type="search" className="w-2/3 h-12 outline-0 " />

      <button className="w-20 h-12">검색</button>
    </div>
  );
}

export default SearchForm;
