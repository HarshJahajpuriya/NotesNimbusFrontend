import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Badge, Chip } from '@mui/material';


const NoteItem = (props) => {

  const { _id, title, tag, description, date } = props.note;

  return (
    <Card sx={{ minWidth: 100 }}>
      <CardHeader title={title} />
      <hr />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <EditIcon />
        </IconButton>
        <IconButton aria-label="share">
          <DeleteIcon sx={{ color: 'red' }} />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default NoteItem;