import { useEffect, useState } from 'react';
import { Box, Container, CssBaseline } from '@mui/material';
import axios from 'axios';
import Navbar from './Navbar';
import ActivityDashboard from '../../features/activities/dasbhoard/ActivityDashboard';
import type { Activity } from '../../lib/types/index';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<
    Activity | undefined
  >(undefined);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    axios
      .get<Activity[]>('https://localhost:5001/api/activities')
      .then((response) => setActivities(response.data));

    return () => {};
  }, []);

  const handleSelectActivity = (id: Activity['id']) => {
    setSelectedActivity(activities.find((x) => x.id === id));
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

  const handleSubmitForm = (activity: Activity) => {
    if (activity.id) {
      setSelectedActivity(activity);
      setActivities(
        activities.map((x) => (x.id === activity.id ? activity : x)),
      );
    } else {
      const newActivity = { ...activity, id: activities.length.toString() };
      setSelectedActivity(newActivity);
      setActivities([...activities, { ...newActivity }]);
    }

    setEditMode(false);
  };

  const handleDelete = (id: Activity['id']) => {
    setActivities(activities.filter((x) => x.id !== id));
  };

  return (
    <Box sx={{ bgcolor: '#eeeeee' }}>
      <CssBaseline />
      <Navbar handleOpenForm={handleOpenForm} />
      <Container maxWidth="xl" sx={{ mt: 3 }}>
        <ActivityDashboard
          activities={activities}
          handleSelectActivity={handleSelectActivity}
          handleCancelSelectActivity={handleCancelSelectActivity}
          selectedActivity={selectedActivity}
          handleOpenForm={handleOpenForm}
          editMode={editMode}
          handleFormClose={handleFormClose}
          handleSubmitForm={handleSubmitForm}
          handleDelete={handleDelete}
        />
      </Container>
    </Box>
  );
}

export default App;
