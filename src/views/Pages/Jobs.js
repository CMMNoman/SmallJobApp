import React from "react";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import PropTypes from "prop-types";
import adminNavbarStyle from "assets/jss/material-dashboard-pro-react/components/adminNavbarStyle.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import ButtonBase from "@material-ui/core/ButtonBase";
import {
  levels,
  experiences,
  contracts,
  formatPrettyDate
} from "services/common";
import moment from "moment";
import history from "../../services/History";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const Jobs = props => {
  const { jobs } = props || {};

  const showJobDetails = job => {
    history.push("/app/jobdetails", { job });
  };

  return (
    <GridContainer
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Fab
        color="primary"
        style={{ position: "fixed", bottom: 50, right: 50 }}
        onClick={() => history.push("/app/createjob")}
      >
        <AddIcon />
      </Fab>
      <img
        style={{
          height: 130,
          width: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          padding: 0,
          marginTop: -70
        }}
        src={require("../../assets/img/jobs_header.jpg")}
      />
      <GridItem sm={9} md={9} xs={9}>
        <GridContainer
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 50
          }}
        >
          <GridItem sm={12} md={12} xs={12}>
            {jobs &&
              jobs.length > 0 &&
              jobs
                .sort((a, b) => b.TIME_POSTED - a.TIME_POSTED)
                .map((job, index) => (
                  <ButtonBase
                    style={{ marginTop: 10, width: "100%" }}
                    onClick={() => showJobDetails(job)}
                    key={index}
                  >
                    <Paper
                      square
                      elevation={5}
                      style={{
                        backgroundColor: "#f3f7f9",
                        padding: "20px 10px",
                        width: "100%",
                        borderLeft: moment(job.TIME_POSTED).isAfter(
                          moment().subtract("d", 2)
                        )
                          ? "3px solid #63a49c"
                          : null,
                        cursor: "pointer"
                      }}
                    >
                      <GridContainer>
                        <GridItem
                          sm={2}
                          md={2}
                          xs={12}
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                          }}
                        >
                          <img
                            src={
                              job.IMAGE
                                ? URL.createObjectURL(job.IMAGE)
                                : require("../../assets/img/myhome.svg")
                            }
                            style={{
                              objectFit: "fill",
                              height: 60,
                              width: 60,
                              backgroundColor: "#fff",
                              borderRadius: 50
                            }}
                          />
                        </GridItem>
                        <GridItem
                          sm={4}
                          md={4}
                          xs={12}
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginLeft: "-5%"
                          }}
                        >
                          <GridContainer>
                            <GridItem sm={12} md={12} xs={12}>
                              <Typography
                                style={{
                                  fontSize: 12,
                                  fontWeight: "500",
                                  color: "#59a49f",
                                  textAlign: "left",
                                  display: "flex",
                                  justifyContent: "left",
                                  alignItems: "center"
                                }}
                              >
                                {job.COMPANY_NAME}
                                {moment(job.TIME_POSTED).isAfter(
                                  moment().subtract("d", 2)
                                ) ? (
                                  <>
                                    <div
                                      style={{
                                        backgroundColor: "#64a0a1",
                                        borderRadius: 25,
                                        padding: "0px 7px",
                                        color: "#fff",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        width: "max-content",
                                        height: "max-content",
                                        marginLeft: 5,
                                        display: "flex",
                                        fontSize: 10,
                                        fontWeight: "bold"
                                      }}
                                      key={index}
                                    >
                                      NEW!
                                    </div>
                                    <div
                                      style={{
                                        backgroundColor: "#000",
                                        borderRadius: 25,
                                        padding: "0px 7px",
                                        color: "#fff",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        width: "max-content",
                                        height: "max-content",
                                        marginLeft: 5,
                                        display: "flex",
                                        fontSize: 10,
                                        fontWeight: "bold"
                                      }}
                                      key={index}
                                    >
                                      FEATURED
                                    </div>
                                  </>
                                ) : (
                                  ""
                                )}
                              </Typography>
                              <Typography
                                style={{
                                  color: "#000",
                                  fontSize: 14,
                                  fontWeight: "500",
                                  textAlign: "left"
                                }}
                              >
                                Senior Frontend Developer
                              </Typography>
                              <Typography
                                style={{
                                  color: "gray",
                                  fontSize: 12,
                                  fontWeight: "lighter",
                                  textAlign: "left"
                                }}
                              >
                                {`${formatPrettyDate(job.TIME_POSTED)} - ${
                                  contracts.find(
                                    contract => contract.value === job.CONTRACT
                                  ).label
                                } - USA only`}
                              </Typography>
                            </GridItem>
                          </GridContainer>
                        </GridItem>
                        <GridItem
                          sm={6}
                          md={6}
                          xs={12}
                          style={{
                            display: "flex",
                            justifyContent: "end",
                            alignItems: "center",
                            marginTop: 10,
                            flexWrap: "wrap"
                          }}
                        >
                          <div
                            style={{
                              backgroundColor: "#D5E8E7",
                              borderRadius: 5,
                              padding: "5px 6px",
                              color: "#59a49f",
                              justifyContent: "center",
                              alignItems: "center",
                              width: "max-content",
                              height: "max-content",
                              marginRight: 10,
                              marginBottom: 10,
                              display: "flex",
                              fontSize: 10,
                              fontWeight: "bold"
                            }}
                          >
                            {
                              levels.find(level => level.value === job.LEVEL)
                                .label
                            }
                          </div>
                          <div
                            style={{
                              backgroundColor: "#D5E8E7",
                              borderRadius: 5,
                              padding: "5px 6px",
                              color: "#59a49f",
                              justifyContent: "center",
                              alignItems: "center",
                              width: "max-content",
                              height: "max-content",
                              marginRight: 10,
                              marginBottom: 10,
                              display: "flex",
                              fontSize: 10,
                              fontWeight: "bold"
                            }}
                          >
                            {
                              experiences.find(
                                experience => experience.value === job.LEVEL
                              ).label
                            }
                          </div>
                          {job.LANGUAGES.map((language, index) => (
                            <div
                              style={{
                                backgroundColor: "#D5E8E7",
                                borderRadius: 5,
                                padding: "5px 6px",
                                color: "#59a49f",
                                justifyContent: "center",
                                alignItems: "center",
                                width: "max-content",
                                height: "max-content",
                                marginRight: 10,
                                marginBottom: 10,
                                display: "flex",
                                fontSize: 10,
                                fontWeight: "bold"
                              }}
                              key={index}
                            >
                              {language}
                            </div>
                          ))}
                        </GridItem>
                      </GridContainer>
                    </Paper>
                  </ButtonBase>
                ))}
          </GridItem>
        </GridContainer>
      </GridItem>
    </GridContainer>
  );
};

Jobs.propTypes = {
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
)(Jobs);
export default withStyles(adminNavbarStyle)(contactPageWithRedux);
