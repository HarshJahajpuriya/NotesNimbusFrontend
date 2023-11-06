import React from "react";
import { Grid } from "@mui/material";
import Notes from './Notes';
import NotesContext from "../context/Notes";
import AddNote from "./AddNote";
import { notes, addNote } from "../context/NotesState"


const Home = () => {

  return (
    <Grid container spacing={2}>
      <NotesContext.Provider value={{ notes, addNote }}>
        <Grid item md={4}>
          <AddNote />
        </Grid>
        <Grid item md={8}>
          <Notes />
        </Grid>
      </NotesContext.Provider>
    </Grid>
  )
}

export default Home;