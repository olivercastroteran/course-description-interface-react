import { makeStyles } from '@material-ui/core/styles';
import Constants from './constants';


const useStyles = makeStyles((theme) => ({

  // //////////////////////////////////////////////////////
  // Common

  regularMarginTop: {
    marginTop: theme.spacing(5),
  },
  // //////////////////////////////////////////////////////
  // LAYOUT

  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${Constants.drawerWidth}px)`,
    marginLeft: Constants.drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: Constants.drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: Constants.drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -Constants.drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  addButton: {
    fontSize: 60,
    margin: theme.spacing(2),
    bottom: 0,
    right: 0,
    position: 'absolute',
  },

  // //////////////////////////////////////////////////////
  // COURSE SHOW
}));

export default useStyles;