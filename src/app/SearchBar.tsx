import React, { useState } from 'react';
import styles from './SearchBar.module.css';

const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Pizzas');
  
  const categories = [
    'All Pizzas', 
    'Vegetarian', 
    'Meat Lovers', 
    'Specialty', 
    'Sides',
    'Drinks'
  ];
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search query:', searchQuery);
    console.log('Selected category:', selectedCategory);
    // Here you would typically call an API or update state in a parent component
  };
  
  return (
    <form className={styles.searchContainer} onSubmit={handleSearch}>
      <div className={styles.searchBar}>
        <select 
          className={styles.dropdown}
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search for pizzas, sides, or drinks..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        
        <button type="submit" className={styles.searchButton}>
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;