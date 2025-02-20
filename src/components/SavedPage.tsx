import React from "react";
import { IJoke } from "../types/joke";
import { Button, Card, CardHeader, CardContent, Typography, Box } from "@mui/material";

interface SavedPageProps {
  savedJokes: IJoke[];
  deleteJoke: (id: number) => void;
}

const SavedPage: React.FC<SavedPageProps> = ({ savedJokes, deleteJoke }) => {

    console.log(savedJokes)

  return (
    <Box sx={{ p: 3 }}>
      {savedJokes.length === 0 ? (
        <Typography>No saved jokes yet.</Typography>
      ) : (
        savedJokes.map((joke) => (
            <Card key={joke.id} variant="outlined">
            <CardHeader title={joke.setup} />
            <CardContent><Typography>{joke.punchline}</Typography></CardContent>
            <Button onClick={() => deleteJoke(joke.id)}>Delete</Button>
        </Card>
        ))
      )}
    </Box>
  );
};

export default SavedPage;