import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button
} from '@mui/material';
import { Group } from '@mui/icons-material';
import { NavLink } from 'react-router';
import MenuItemLink from '../shared/components/MenuItemLink';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundImage:
            'linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%)',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>

            {/* Logo */}
            <Box component={NavLink} to='/' sx={{ display: 'flex', gap: 2, textDecoration: 'none', color: 'inherit' }}>
              <Group fontSize="large" />
              <Typography variant="h4" fontWeight="bold">
                Reactivities
              </Typography>
            </Box>

            {/* Navegación */}
            <Box sx={{ display: 'flex', gap: 2 }}>
              <MenuItemLink to="/activities">
                Activities
              </MenuItemLink>

              <MenuItemLink to="/createActivity">
                Create Activity
              </MenuItemLink>
            </Box>

            {/* Usuario */}
            <Button color="inherit">
              User menu
            </Button>

          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}