import { Grid } from '@mui/material';
import type { Activity } from '../../../lib/types';
import ActivityList from './ActivityList';
import ActivityDetail from '../details/ActivityDetail';
import ActivityForm from '../form/ActivityForm';

type ActivityDashboardProps = {
  activities: Activity[];
  handleSelectActivity: (id: Activity['id']) => void;
  handleCancelSelectActivity: () => void;
  selectedActivity: Activity | undefined;
  handleOpenForm: (id: Activity['id']) => void;
  handleFormClose: () => void;
  editMode: boolean;
};

export default function ActivityDashboard({
  activities,
  handleSelectActivity,
  handleCancelSelectActivity,
  selectedActivity,
  handleOpenForm,
  handleFormClose,
  editMode,
}: ActivityDashboardProps) {
  return (
    <Grid container spacing={3}>
      <Grid size={7}>
        <ActivityList
          activities={activities}
          handleSelectActivity={handleSelectActivity}
        />
      </Grid>
      <Grid size={5}>
        {selectedActivity && !editMode && (
          <ActivityDetail
            selectedActivity={selectedActivity}
            handleCancelSelectActivity={handleCancelSelectActivity}
            handleOpenForm={handleOpenForm}
          />
        )}
        {editMode && (
          <ActivityForm
            handleFormClose={handleFormClose}
            activity={selectedActivity}
          />
        )}
      </Grid>
    </Grid>
  );
}
