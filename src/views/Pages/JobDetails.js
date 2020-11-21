import React, { useState } from "react";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import QuillEditor from "components/QuillEditor/QuillEditor";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { levels, experiences, contracts } from "../../services/common";
import SweetAlert from "react-bootstrap-sweetalert";
import sweetAlertStyle from "assets/jss/material-dashboard-pro-react/views/sweetAlertStyle.jsx";
import { successColor } from "assets/jss/material-dashboard-pro-react";
import history from "../../services/History";

const useStyles = makeStyles(() => ({
  createJobButton: {
    marginTop: 30,
    marginBottom: 30,
    color: "white",
    backgroundColor: "#5da5a4 !important",
    "&:hover": {
      backgroundColor: "#5da5a4  !important",
      color: "white"
    }
  },
  successButton: {
    backgroundColor: `${successColor[0]} !important`,
    "&:hover": {
      backgroundColor: `${successColor[0]} !important`
    }
  }
}));

const JobDetails = props => {
  const { location = {} } = props || {};
  const { state = {} } = location || {};
  const { job } = state || {};
  const [swAlert, setSwAlert] = useState(null);
  const customStyles = useStyles();

  const applyForJob = () => {
    setSwAlert(
      <SweetAlert
        success
        style={{ display: "block", marginTop: "-100px" }}
        title="Applied"
        onConfirm={() => {
          setSwAlert(null);
          history.goBack();
        }}
        confirmBtnCssClass={`${props.classes.button} ${customStyles.successButton}`}
        confirmBtnText="Ok"
      />
    );
  };

  const jobDetails = {
    IMAGE: job && job.IMAGE ? job.IMAGE : null,
    COMPANY_NAME: job && job.COMPANY_NAME ? job.COMPANY_NAME : "",
    ADDRESS: job && job.ADDRESS ? job.ADDRESS : "",
    OVERVIEW: job && job.OVERVIEW ? job.OVERVIEW : "",
    LEVEL:
      job && job.LEVEL
        ? levels.find(level => level.value === job.LEVEL).label
        : "",
    EXPERIENCE:
      job && job.EXPERIENCE
        ? experiences.find(experience => experience.value === job.EXPERIENCE)
            .label
        : "",
    CONTRACT:
      job && job.CONTRACT
        ? contracts.find(contract => contract.value === job.CONTRACT).label
        : "",
    JOB_DESCRIPTION: job && job.JOB_DESCRIPTION ? job.JOB_DESCRIPTION : "",
    LANGUAGES:
      job && job.LANGUAGES && job.LANGUAGES.length > 0 ? job.LANGUAGES : [],
    TOOLS: job && job.TOOLS && job.TOOLS.length > 0 ? job.TOOLS : []
  };

  return (
    <GridContainer
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      {swAlert}
      <GridItem xs={9}>
        <Card>
          <img
            style={{
              height: 200,
              width: "100%",
              borderTopLeftRadius: 6,
              borderTopRightRadius: 6
            }}
            src={require("../../assets/img/header_image.jpg")}
          />
          <CardBody>
            <GridContainer
              style={{
                flex: "display",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <GridItem sm={12} md={12} xs={12}>
                <img
                  src={
                    jobDetails.IMAGE
                      ? URL.createObjectURL(jobDetails.IMAGE)
                      : require("../../assets/img/myhome.svg")
                  }
                  style={{
                    objectFit: "fill",
                    height: 80,
                    width: 80,
                    padding: 2,
                    backgroundColor: "#fff",
                    borderRadius: 50,
                    marginTop: -55
                  }}
                />
              </GridItem>

              {/* Name */}
              <GridItem sm={12} md={12} xs={12}>
                <Typography
                  style={{
                    color: "#000",
                    fontSize: 16,
                    fontWeight: "500",
                    marginTop: 10
                  }}
                >
                  {jobDetails.COMPANY_NAME}
                </Typography>
                <Typography
                  style={{
                    color: "#000",
                    fontSize: 12,
                    fontWeight: "normal",
                    marginTop: 5
                  }}
                >
                  {jobDetails.ADDRESS}
                </Typography>
                <GridContainer
                  style={{
                    marginTop: 20
                  }}
                >
                  <GridItem sm={4} md={4} xs={4}>
                    <Paper
                      elevation={0}
                      style={{
                        backgroundColor: "#f3f7f9",
                        borderRadius: 5,
                        padding: 10
                      }}
                    >
                      <Typography
                        style={{
                          color: "gray",
                          fontSize: 10,
                          fontWeight: "500",
                          marginBottom: 5
                        }}
                      >
                        Experience
                      </Typography>
                      <Typography
                        style={{
                          color: "#000",
                          fontSize: 12,
                          fontWeight: "500"
                        }}
                      >
                        {jobDetails.EXPERIENCE}
                      </Typography>
                    </Paper>
                  </GridItem>
                  <GridItem sm={4} md={4} xs={4}>
                    <Paper
                      elevation={0}
                      style={{
                        backgroundColor: "#f3f7f9",
                        borderRadius: 5,
                        padding: 10
                      }}
                    >
                      <Typography
                        style={{
                          color: "gray",
                          fontSize: 10,
                          fontWeight: "500",
                          marginBottom: 5
                        }}
                      >
                        Level
                      </Typography>
                      <Typography
                        style={{
                          color: "#000",
                          fontSize: 12,
                          fontWeight: "500"
                        }}
                      >
                        {jobDetails.LEVEL}
                      </Typography>
                    </Paper>
                  </GridItem>
                  <GridItem sm={4} md={4} xs={4}>
                    <Paper
                      elevation={0}
                      style={{
                        backgroundColor: "#f3f7f9",
                        borderRadius: 5,
                        padding: 10
                      }}
                    >
                      <Typography
                        style={{
                          color: "gray",
                          fontSize: 10,
                          fontWeight: "500",
                          marginBottom: 5
                        }}
                      >
                        Contract
                      </Typography>
                      <Typography
                        style={{
                          color: "#000",
                          fontSize: 12,
                          fontWeight: "500"
                        }}
                      >
                        {jobDetails.CONTRACT}
                      </Typography>
                    </Paper>
                  </GridItem>
                </GridContainer>
              </GridItem>

              {/* Overview */}
              <GridItem sm={12} md={12} xs={12}>
                <GridContainer
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: 30,
                    marginBottom: 10
                  }}
                >
                  <GridItem sm={12} md={12} xs={12}>
                    <Typography
                      style={{
                        color: "#000",
                        fontSize: 16,
                        fontWeight: "500"
                      }}
                    >
                      Overview
                    </Typography>
                    <Typography
                      style={{
                        color: "#000",
                        fontSize: 14,
                        fontWeight: "lighter",
                        marginTop: 5
                      }}
                      align={"justify"}
                    >
                      {jobDetails.OVERVIEW}
                    </Typography>
                  </GridItem>
                </GridContainer>
              </GridItem>

              {/* Job Description */}
              <GridItem sm={12} md={12} xs={12}>
                <GridContainer
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: 20,
                    marginBottom: 10
                  }}
                >
                  <GridItem sm={12} md={12} xs={12}>
                    <Typography
                      style={{
                        color: "#000",
                        fontSize: 16,
                        fontWeight: "500",
                        marginBottom: 10
                      }}
                    >
                      Job Description
                    </Typography>
                    <QuillEditor
                      readOnly={true}
                      value={jobDetails.JOB_DESCRIPTION}
                    />
                  </GridItem>
                </GridContainer>
              </GridItem>

              {/* Programming Languages */}
              <GridItem sm={12} md={12} xs={12}>
                <GridContainer
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: 20,
                    marginBottom: 10
                  }}
                >
                  <GridItem sm={12} md={12} xs={12}>
                    <Typography
                      style={{
                        color: "#000",
                        fontSize: 16,
                        fontWeight: "500"
                      }}
                    >
                      Programming Languages
                    </Typography>
                  </GridItem>
                </GridContainer>
              </GridItem>
              <GridItem sm={12} md={12} xs={12}>
                <GridContainer>
                  <GridItem
                    sm={12}
                    md={12}
                    xs={12}
                    style={{
                      display: "flex",
                      marginTop: 10,
                      flexWrap: "wrap"
                    }}
                  >
                    {jobDetails.LANGUAGES.map((language, index) => (
                      <div
                        style={{
                          backgroundColor: "#f3f7f9",
                          borderRadius: 5,
                          padding: "5px 10px",
                          color: "#60abaa",
                          justifyContent: "center",
                          alignItems: "center",
                          width: "max-content",
                          marginRight: 10,
                          marginBottom: 10,
                          display: "flex"
                        }}
                        key={index}
                      >
                        {language}
                      </div>
                    ))}
                  </GridItem>
                </GridContainer>
              </GridItem>

              {/* Tools */}
              <GridItem sm={12} md={12} xs={12}>
                <GridContainer
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: 20,
                    marginBottom: 10
                  }}
                >
                  <GridItem sm={12} md={12} xs={12}>
                    <Typography
                      style={{
                        color: "#000",
                        fontSize: 16,
                        fontWeight: "500"
                      }}
                    >
                      Tools
                    </Typography>
                  </GridItem>
                </GridContainer>
              </GridItem>
              <GridItem sm={12} md={12} xs={12}>
                <GridContainer>
                  <GridItem
                    sm={12}
                    md={12}
                    xs={12}
                    style={{
                      display: "flex",
                      marginTop: 10,
                      flexWrap: "wrap"
                    }}
                  >
                    {jobDetails.TOOLS.map((tool, index) => (
                      <div
                        style={{
                          backgroundColor: "#f3f7f9",
                          borderRadius: 5,
                          padding: "5px 10px",
                          color: "#60abaa",
                          justifyContent: "center",
                          alignItems: "center",
                          width: "max-content",
                          marginRight: 10,
                          marginBottom: 10,
                          display: "flex"
                        }}
                        key={index}
                      >
                        {tool}
                      </div>
                    ))}
                  </GridItem>
                </GridContainer>
              </GridItem>

              <GridItem sm={12} md={12} xs={12}>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={customStyles.createJobButton}
                  onClick={applyForJob}
                >
                  Apply Now
                </Button>
              </GridItem>
            </GridContainer>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
};

JobDetails.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    jobs: state.jobs
  };
};
const contactPageWithRedux = connect(
  mapStateToProps,
  {}
)(JobDetails);
export default withStyles(sweetAlertStyle)(contactPageWithRedux);
