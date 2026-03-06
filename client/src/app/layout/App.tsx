import { useState } from 'react';
import { Box, Container, CssBaseline, Typography } from '@mui/material';
import Navbar from './Navbar';
import ActivityDashboard from '../../features/activities/dasbhoard/ActivityDashboard';
import type { Activity } from '../../lib/types/index';
import { useActivities } from '../../lib/hooks/useActivities';

function App() {
  const [selectedActivity, setSelectedActivity] = useState<
    Activity | undefined
  >(undefined);
  const [editMode, setEditMode] = useState(false);

  const { activities, isPending } = useActivities();

  const handleSelectActivity = (id: Activity['id']) => {
    setSelectedActivity(activities!.find((x) => x.id === id));
  };

  const handleCancelSelectActivity = () => {
    setSelectedActivity(undefined);
  };

  const handleOpenForm = (id?: Activity['id']) => {
    if (id) handleSelectActivity(id);
    else handleCancelSelectActivity();
    setEditMode(true);
  };

  const handleFormClose = () => {
    setEditMode(false);
  };

  return (
    <Box sx={{ bgcolor: '#eeeeee', minHeight: '100vh' }}>
      <CssBaseline />
      <Navbar handleOpenForm={handleOpenForm} />
      <Container maxWidth="xl" sx={{ mt: 3 }}>
        {!activities || isPending ? (
          <Typography>Loading...</Typography>
        ) : (
          <ActivityDashboard
            activities={activities}
            handleSelectActivity={handleSelectActivity}
            handleCancelSelectActivity={handleCancelSelectActivity}
            selectedActivity={selectedActivity}
            handleOpenForm={handleOpenForm}
            editMode={editMode}
            handleFormClose={handleFormClose}
          />
        )}
      </Container>
    </Box>
  );
}

export default App;
