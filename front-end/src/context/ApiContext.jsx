import { createContext, useState, useMemo } from 'react'
import axios from 'axios'

const ApiContext = createContext()

function ApiContextProvider({ children }) {
  const [results, setResults] = useState([])
  const [query, setQuery] = useState("")

  async function getResults() {
    try {
      const response = await axios.get("https://rickandmortyapi.com/api/character");
      setResults(response.data.results);
      console.log(response)
    } catch (error) {
      console.log(error);
    }
  }

  const filteredResults = useMemo(() => {
    if (!query) return results;
    const lowerQuery = query.toLowerCase();
    return results.filter((character) =>
      character.name.toLowerCase().includes(lowerQuery)
    );
  }, [query, results]);

  function searchCharacters(newQuery) {
    setQuery(newQuery);
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