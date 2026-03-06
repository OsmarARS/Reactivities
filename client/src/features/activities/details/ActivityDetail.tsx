import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import type { Activity } from '../../../lib/types';
import { useActivities } from '../../../lib/hooks/useActivities';

type ActivityDetailProps = {
  selectedActivity: Activity;
  handleCancelSelectActivity: () => void;
  handleOpenForm: (id: Activity['id']) => void;
};

export default function ActivityDetail({
  selectedActivity,
  handleCancelSelectActivity,
  handleOpenForm,
}: ActivityDetailProps) {
  const { activities } = useActivities();
  const activity = activities?.find((x) => x.id === selectedActivity.id);

  if (!activity) return <Typography>Loading...</Typography>;

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
