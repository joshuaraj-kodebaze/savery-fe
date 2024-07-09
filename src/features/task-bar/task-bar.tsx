// Import libraries
import {
  useTheme,
  useMediaQuery,
  type DrawerProps,
} from '@mui/material';

// Import components
import { TaskbarContainer } from './task-bar.styles';

const TaskBar = (props: DrawerProps) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <TaskbarContainer
      variant="persistent"
      anchor={matches ? 'bottom' : 'right'}
      {...props}
    ></TaskbarContainer>
  );
};

export default TaskBar;
