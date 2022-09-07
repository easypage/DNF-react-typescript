import React, { useState } from 'react';
import { serverList } from '../../../asset/js/serverList';
import './../../../css/searchForm.css';

import { Link } from 'react-router-dom';

function SearchForm() {
  const [text, setText] = useState('');
  const [Selected, setSelected] = useState('all');

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value);
  };
  const handleSelect = (e: React.FormEvent<HTMLSelectElement>) => {
    setSelected(e.currentTarget.value);
  };
  return (
    <div className="flex items-center justify-center w-4/6 h-16 border-4 border-yellow-300 border-solid rounded-full shadow-md">
      <select name="charServer" id="charServer" className=" w-32 h-10 text-center focus:outline-none cursor-pointer" onChange={handleSelect}>
        {serverList.map(server => (
          <option value={server.value} key={server.value}>
            {server.text}
          </option>
        ))}
      </select>

      <input type="search" className="w-2/3 h-12 outline-0" onChange={onChange} />

      <Link to={`charSearch?serverId=${Selected}&nickname=${text}`}>
        <button className="w-20 h-12">검색</button>
      </Link>
    </div>
  );
}

export default SearchForm;