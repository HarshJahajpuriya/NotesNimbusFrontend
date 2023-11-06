import React from "react";
import { Grid } from "@mui/material";
import NoteItem from "./NoteItem";
import NotesContext from "../context/Notes";

const Notes = () => {

  const contextNotes = React.useContext(NotesContext).notes
  const [notes, setNotes] = React.useState(contextNotes)
  
  React.useEffect(() => {
    alert(contextNotes.length)
  }, [contextNotes])

  return (
    <Grid container spacing={4}>
      {
        notes.map(note => {
          return (
            <Grid key={note._id} item md={6} sm={6} xs={12}>
                <NoteItem note={note} />
            </Grid>
          )
        })
      }
    </Grid>
  )
}

export default Notes;