import { createContext, useState } from 'react'
import axios from 'axios'

const ApiContext = createContext()

function ApiContextProvider({ children }) {
  const [results, setResults] = useState([])
  const [filteredResults, setFilteredResults] = useState([]);

  async function getResults() {
    try {
      const response = await axios.get("https://rickandmortyapi.com/api/character");
      setResults(response.data.results);
      setFilteredResults(response.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  function searchCharacters(query) {
    if (!query) {
      setFilteredResults(results); // Mostra todos os personagens se a busca estiver vazia
    } else {
      const lowerQuery = query.toLowerCase();
      const filtered = results.filter((character) =>
        character.name.toLowerCase().includes(lowerQuery)
      );
      setFilteredResults(filtered);
    }
  }


  const data = {
    results,
    getResults,
    filteredResults,
    searchCharacters
  }

  return (
    <ApiContext.Provider value={data}>
      {children}
    </ApiContext.Provider>
  )
}

export { ApiContext, ApiContextProvider }