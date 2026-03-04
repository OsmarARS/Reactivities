import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Typography,
} from '@mui/material';
import type { Activity } from '../../../lib/types';

type ActivityCardProps = {
  activity: Activity;
  handleSelectActivity: (id: Activity['id']) => void;
  handleDelete: (id: Activity['id']) => void;
};

export default function ActivityCard({
  activity,
  handleSelectActivity,
  handleDelete,
}: ActivityCardProps) {
  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardContent>
        <Typography variant="h5">{activity.title}</Typography>
        <Typography sx={{ color: 'text.secondary', mb: 1 }}>
          {activity.date}
        </Typography>
        <Typography variant="body2">{activity.description}</Typography>
        <Typography variant="subtitle1">
          {activity.city} / {activity.venue}
        </Typography>
      </CardContent>
      <CardActions
        sx={{ display: 'flex', justifyContent: 'space-between', pb: 2 }}
      >
        <Chip label={activity.category} variant="outlined" />
        <Box display="flex" gap={3}>
          <Button
            onClick={() => handleSelectActivity(activity.id)}
            size="medium"
            variant="contained"
          >
            View
          </Button>
          <Button
            onClick={() => handleDelete(activity.id)}
            size="medium"
            color="error"
            variant="contained"
          >
            Delete
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
}
