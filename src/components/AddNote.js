import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';
import { Button, Container, Grid, Typography } from '@mui/material';
import NotesContext from '../context/Notes';

const blue = {
  100: '#DAECFF',
  200: '#b6daff',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const TextareaAutosize = styled(BaseTextareaAutosize)(
  ({ theme }) => `
  width: 190px;
  font-family: IBM Plex Sans, Roboto;
  font-size: 0.975rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 8px 12px;
  border-radius: 8px;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`,
);

const AddNote = () => {

  const addNote = React.useContext(NotesContext).addNote;


  const formRef = React.createRef();
  const [formVals, setFormVals] = React.useState({
    title: "",
    description: "",
    tag: "General"
  })

  const changeFormVals = (ev) => {
    console.dir(ev.target.name)
    let name = ev.target.name;
    if(name === 'title')  setFormVals({...formVals, title: ev.target.value})
    if(name === 'description')  setFormVals({...formVals, description: ev.target.value})
    if(name === 'tag')  setFormVals({...formVals, tag: ev.target.value})
  }

  const submit = () => {
    console.log(addNote(formVals))
  }

  return (
    <Grid container>
      <Grid item sm={12} md={4} sx={{ width: "90vw" }}>
        <Box
          component="form"
          ref={formRef}
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
            width: '200px',
            margin: 'auto'
          }}
        >
          <h2>
            <Typography sx={{ textAlign: 'center', width: '232px' }}>
              Add a Note
            </Typography>
          </h2>
          <div>
            <TextField
              fullWidth
              required
              id="outlined-required"
              name="title"
              label="Title"
              placeholder='Enter Title'
              value={formVals.title}
              onChange={changeFormVals}
              />
            <TextareaAutosize
              required
              id="outlined-required"
              label="Description"
              name="description"
              placeholder="Enter Description"
              value={formVals.description}
              onChange={changeFormVals}
              sx={{
                minWidth: '190px',
                maxWidth: '190px',
                marginLeft: '8px'
              }}
              minRows={4}
              />
            <TextField
              fullWidth
              required
              name="tag"
              id="outlined-required"
              label="Tag"
              value={formVals.tag}
              onChange={changeFormVals}
            />

            <Container sx={{ width: '224px', marginLeft: 0, textAlign: 'center', my: 2 }}>
              <Button variant="contained" onClick={submit}> Add </Button>
            </Container>

          </div>
        </Box>
      </Grid>
    </Grid>
  );
}

export default AddNote;