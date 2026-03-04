import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import type { Activity } from '../../../lib/types';

type ActivityDetailProps = {
  activity: Activity;
  handleCancelSelectActivity: () => void;
  handleOpenForm: (id: Activity['id']) => void;
};

export default function ActivityDetail({
  activity,
  handleCancelSelectActivity,
  handleOpenForm,
}: ActivityDetailProps) {
  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardMedia
        component="img"
        src={`/images/categoryImages/${activity.category}.jpg`}
      ></CardMedia>

      <CardContent>
        <Typography variant="h5">{activity.title}</Typography>
        <Typography variant="subtitle1" fontWeight="light">
          {activity.date}
        </Typography>
        <Typography variant="body1">{activity.description}</Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => handleOpenForm(activity.id)} color="primary">
          Edit
        </Button>
        <Button onClick={handleCancelSelectActivity} color="inherit">
          Cancel
        </Button>
      </CardActions>
    </Card>
  );
}
