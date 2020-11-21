import React from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import routes from "routes.js";
import appStyle from "assets/jss/material-dashboard-pro-react/layouts/adminStyle.jsx";
import notificationsStyle from "assets/jss/material-dashboard-pro-react/views/notificationsStyle.jsx";
import sweetAlertStyle from "assets/jss/material-dashboard-pro-react/views/sweetAlertStyle.jsx";

const useStyles = {
  okButton: {
    textAlign: "center",
    backgroundColor: "#A4A4A4 !important",
    "&:hover": {
      backgroundColor: "#fc5f45 !important"
    }
  },
  soundGoodButton: {
    textAlign: "center",
    backgroundColor: "#405fc4 !important",
    "&:hover": {
      backgroundColor: "#405fc4 !important"
    }
  }
};

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false,
      miniActive: false,
      image: require("assets/img/sidebar-5.jpg"),
      color: "blue",
      bgColor: "black",
      hasImage: true,
      fixedClasses: "dropdown",
      logo: require("assets/img/logo-white.svg"),
      ORG_ID: "NCSV3",
      alert: null,
      swAlertOk: null,
      show: false,
      loginPopUP: false,
      redirectUrl: "",
      showWizardPopup: false,
      redirectToLogin: false
    };
  }
  mainPanel = React.createRef();

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  getActiveRoute = routes => {
    let activeRoute = "Default Brand Text";
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveRoute = this.getActiveRoute(routes[i].views);
        if (collapseActiveRoute !== activeRoute) {
          return collapseActiveRoute;
        }
      } else {
        if (
          window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
        ) {
          return routes[i].name;
        }
      }
    }
    return activeRoute;
  };
  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return this.getRoutes(prop.views);
      }
      if (prop.layout === "/app") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  sidebarMinimize = () => {
    this.setState({ miniActive: !this.state.miniActive });
  };
  resizeFunction = () => {
    if (window.innerWidth >= 960) {
      this.setState({ mobileOpen: false });
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <div className={classes.container}>
            <Switch>{this.getRoutes(routes)}</Switch>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};
const dashboardWithNotificationStyles = withStyles(notificationsStyle)(
  Dashboard
);

const dashboardWithNotificationAndSweetAlertStyles = withStyles(
  sweetAlertStyle
)(dashboardWithNotificationStyles);

const dashboardWithNotificationAndSweetAlertUseStyles = withStyles(useStyles)(
  dashboardWithNotificationAndSweetAlertStyles
);

export default withStyles(appStyle)(
  dashboardWithNotificationAndSweetAlertUseStyles
);
