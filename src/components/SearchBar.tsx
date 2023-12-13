import React, { useState } from 'react';

const SearchBar: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        // Implement search functionality here
        console.log(`Searching for: ${searchTerm}`);
    };

    return (
        <form onSubmit={handleSearch}>
            <input 
                type="text" 
                placeholder="Search for professionals..." 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;
