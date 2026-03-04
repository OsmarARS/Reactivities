import { Box } from '@mui/material';
import type { Activity } from '../../../lib/types';
import ActivityCard from './ActivityCard';

type ActivityListProps = {
  activities: Activity[];
  handleSelectActivity: (id: Activity['id']) => void;
  handleDelete: (id: Activity['id']) => void;
};

export default function ActivityList({
  activities,
  handleSelectActivity,
  handleDelete,
}: ActivityListProps) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      {activities.map((activity) => (
        <ActivityCard
          key={activity.id}
          activity={activity}
          handleSelectActivity={handleSelectActivity}
          handleDelete={handleDelete}
        />
      ))}
    </Box>
  );
}
