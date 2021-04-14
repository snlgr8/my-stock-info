import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Route, Switch } from 'react-router-dom';
import { SidebarData } from '../../Navigation/SidebarData';
import { Link as RouterLink } from 'react-router-dom';
import Category from '../Category/Category';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    backgroundColor: 'green',
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    // flexGrow: 1,
    // padding: theme.spacing(3),
  },
}));

export default function SideMenuBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />

      <Drawer
        className={classes.drawer}
        variant='permanent'
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {SidebarData.map((text, index) => (
              <ListItemLink
                title={text.title}
                icon={text.icon}
                link={text.link}
                component={text.component}
                key={index}
              ></ListItemLink>
            ))}
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Switch>
          <Route path='/category'>
            <Category />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

function ListItemLink(props) {
  const { title, icon, link, component } = props;
  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => (
        <RouterLink to={link} ref={ref} {...itemProps} />
      )),
    [link]
  );

  return (
    <ListItem button key={title} component={renderLink}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={title} />
    </ListItem>
  );
}
