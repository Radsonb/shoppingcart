import React, { useState, useContext } from 'react';
import { IoIosSearch } from 'react-icons/io';

import './SearchBar.css';
import fetchProducts from '../../api/fetchProdutcs';
import AppContext from '../../context/AppContext';

function SearchBar() {

  const {setProducts, setLoading} = useContext(AppContext);
  const [searchValue, setSearchValue] = useState('');

  const { name } = useContext(AppContext);

  const handleSearch =  async (e) => {
    e.preventDefault();
    setLoading(true);
    const products = await fetchProducts(searchValue);

    setProducts(products);
    setLoading(false);
    setSearchValue('');
  };

  return ( 
    <form className="search-bar" onSubmit={handleSearch}>
      {name}
      <input value={searchValue} onChange={({ target }) => setSearchValue(target.value)} type="search" placeholder="Buscar produtos" className="search__input" required />
      
      <button type="submit" className="search__button">
        <IoIosSearch />
      </button>
    </form>
  );
}

export default SearchBar;
