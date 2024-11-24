import { useState, useEffect, useContext } from 'react'
import Grid from '@mui/material/Grid2';
import { Card, CardContent, CardMedia, Typography, Badge, TextField } from '@mui/material';
import { ApiContext } from './context/ApiContext'


function App() {
  const { results, getResults, filteredResults, searchCharacters } = useContext(ApiContext)
  const [validation, setValidation] = useState(false)

  useEffect(() => {
    getResults();
  }, [])

  const handleSearch = (e) => {
    searchCharacters(e.target.value);
    if (e.target.value !== "") {
      setValidation(false)
    } else {
      setValidation(true)
    }
  };

  return (
    <>
      <Typography variant="h3" sx={{ textAlign: "center" }}>Rick and Morty Characters</Typography>
      <TextField
        error={validation}
        type="text"
        placeholder="Search characters..."
        onChange={handleSearch}
        fullWidth
        style={{
          margin: '20px 0',
          fontSize: '16px',
        }}
        helperText={validation == false ? "" : "Insert a character name."}
      />
      <Grid container spacing={2}>
        {filteredResults.map((item) => (
          <Grid size={{ xs: 12, md: 3 }} key={item.id}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt={item.name}
                height="300"
                image={item.image}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  {item.name}
                </Typography>
                <Typography>
                  Specie: {item.species}
                </Typography>
                <Typography>
                  Status: <Badge variant="dot" color={item.status === "Alive" ? "success" : "secondary"} sx={{ mx: 1 }} />  {item.status}
                </Typography>
                <Typography>
                  Origin: {item.origin.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <div>
        <button>Anterior</button>
        <button>Próximo</button>
      </div>
    </>
  )
}

export default App
