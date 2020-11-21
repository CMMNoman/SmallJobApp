import React, { useEffect, useState } from "react";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import { createJob } from "../../services/redux/actions";
import ImageUploader from "components/ImageUploader/ImageUploader";
import QuillEditor from "components/QuillEditor/QuillEditor";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import { levels, experiences, contracts } from "../../services/common";
import history from "../../services/History";
import SweetAlert from "react-bootstrap-sweetalert";
import sweetAlertStyle from "assets/jss/material-dashboard-pro-react/views/sweetAlertStyle.jsx";
import { successColor } from "assets/jss/material-dashboard-pro-react";

const useStyles = makeStyles(() => ({
  editor: {
    "& .ql-editor": {
      height: 150
    }
  },
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
  },
  error: {
    color: "red"
  }
}));

const CreateJob = props => {
  const { createJob } = props || {};

  useEffect(() => {
    setImage(null);
    setCompanyName("");
    setAddress("");
    setOverview("");
    setLevel("");
    setExperience("");
    setContract("");
    setJobDescription("");
    setLanguage("");
    setLanguages([]);
    setTool("");
    setTools([]);
    setSwAlert(null);
  }, []);

  const [image, setImage] = useState(null);
  const [companyName, setCompanyName] = useState("");
  const [address, setAddress] = useState("");
  const [overview, setOverview] = useState("");
  const [level, setLevel] = useState("");
  const [experience, setExperience] = useState("");
  const [contract, setContract] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [language, setLanguage] = useState("");
  const [languages, setLanguages] = useState([]);
  const [tool, setTool] = useState("");
  const [tools, setTools] = useState([]);
  const [swAlert, setSwAlert] = useState(null);

  const [imageError, setImageError] = useState(false);
  const [companyNameError, setCompanyNameError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [overviewError, setOverviewError] = useState(false);
  const [levelError, setLevelError] = useState(false);
  const [experienceError, setExperienceError] = useState(false);
  const [contractError, setContractError] = useState(false);
  const [jobDescriptionError, setJobDescriptionError] = useState(false);
  const [languagesError, setLanguagesError] = useState(false);
  const [toolsError, setToolsError] = useState(false);
  const customStyles = useStyles();

  const createNewJob = () => {
    let error = false;
    if (image && image.name) {
      setImageError(false);
    } else {
      setImageError(true);
      error = true;
    }
    if (companyName) {
      setCompanyNameError(false);
    } else {
      setCompanyNameError(true);
      error = true;
    }
    if (address) {
      setAddressError(false);
    } else {
      setAddressError(true);
      error = true;
    }
    if (overview) {
      setOverviewError(false);
    } else {
      setOverviewError(true);
      error = true;
    }
    if (level) {
      setLevelError(false);
    } else {
      setLevelError(true);
      error = true;
    }
    if (experience) {
      setExperienceError(false);
    } else {
      setExperienceError(true);
      error = true;
    }
    if (contract) {
      setContractError(false);
    } else {
      setContractError(true);
      error = true;
    }
    if (jobDescription) {
      setJobDescriptionError(false);
    } else {
      setJobDescriptionError(true);
      error = true;
    }
    if (languages && languages.length > 0) {
      setLanguagesError(false);
    } else {
      setLanguagesError(true);
      error = true;
    }
    if (tools && tools.length > 0) {
      setToolsError(false);
    } else {
      setToolsError(true);
      error = true;
    }
    if (!error) {
      const newJob = {
        IMAGE: image,
        COMPANY_NAME: companyName,
        ADDRESS: address,
        OVERVIEW: overview,
        LEVEL: level,
        EXPERIENCE: experience,
        CONTRACT: contract,
        JOB_DESCRIPTION: jobDescription,
        LANGUAGES: languages,
        TOOLS: tools,
        TIME_POSTED: Date.parse(new Date())
      };
      createJob(newJob);
      setSwAlert(
        <SweetAlert
          success
          style={{ display: "block", marginTop: "-100px" }}
          title="Job Created"
          onConfirm={() => history.goBack()}
          confirmBtnCssClass={`${props.classes.button} ${customStyles.successButton}`}
          confirmBtnText="Ok"
        />
      );
    }
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
          <CardHeader color="primary" icon>
            <GridContainer>
              <GridItem
                sm={12}
                md={12}
                xs={12}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 20
                }}
              >
                {/* <GridItem>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => {
                      alert("back");
                    }}
                  >
                    <ArrowBackIcon />
                  </IconButton>
                </GridItem> */}
                <GridItem>
                  <Typography style={{ color: "#000", fontSize: 30 }}>
                    Job Creation
                  </Typography>
                </GridItem>
              </GridItem>
            </GridContainer>
          </CardHeader>
          <CardBody>
            <GridContainer
              style={{
                flex: "display",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <GridItem sm={10} md={10} xs={10}>
                <GridContainer>
                  <GridItem sm={12} md={12} xs={12}>
                    <GridContainer
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                    >
                      <ImageUploader
                        value={image}
                        onChange={image => setImage(image)}
                      />
                    </GridContainer>
                  </GridItem>
                  <GridItem sm={12} md={12} xs={12}>
                    <GridContainer
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                    >
                      {imageError && (
                        <FormHelperText className={customStyles.error}>
                          Please upload image
                        </FormHelperText>
                      )}
                    </GridContainer>
                  </GridItem>

                  {/* Company Info */}
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
                            fontSize: 20,
                            fontWeight: "500"
                          }}
                        >
                          Company Info
                        </Typography>
                      </GridItem>
                    </GridContainer>
                  </GridItem>
                  <GridItem sm={12} md={12} xs={12}>
                    <GridContainer>
                      <GridItem sm={6} md={6} xs={12}>
                        <TextField
                          required
                          label="Company Name"
                          value={companyName}
                          fullWidth
                          style={{ marginTop: 10 }}
                          onChange={e => setCompanyName(e.target.value)}
                          helperText={
                            companyNameError && (
                              <div className={customStyles.error}>
                                Please enter company name
                              </div>
                            )
                          }
                        />
                      </GridItem>
                      <GridItem sm={6} md={6} xs={12}>
                        <TextField
                          required
                          label="Address"
                          value={address}
                          fullWidth
                          style={{ marginTop: 10 }}
                          onChange={e => setAddress(e.target.value)}
                          helperText={
                            addressError && (
                              <div className={customStyles.error}>
                                Please enter address
                              </div>
                            )
                          }
                        />
                      </GridItem>
                      <GridItem sm={6} md={6} xs={12}>
                        <TextField
                          required
                          label="Overview"
                          value={overview}
                          fullWidth
                          onChange={e => setOverview(e.target.value)}
                          style={{ marginTop: 20 }}
                          helperText={
                            overviewError && (
                              <div className={customStyles.error}>
                                Please enter overview
                              </div>
                            )
                          }
                        />
                      </GridItem>
                    </GridContainer>
                  </GridItem>

                  {/* Job Info */}
                  <GridItem sm={12} md={12} xs={12}>
                    <GridContainer
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: 50
                      }}
                    >
                      <GridItem sm={12} md={12} xs={12}>
                        <Typography
                          style={{
                            color: "#000",
                            fontSize: 20,
                            fontWeight: "500"
                          }}
                        >
                          Job Info
                        </Typography>
                      </GridItem>
                    </GridContainer>
                  </GridItem>
                  <GridItem sm={12} md={12} xs={12}>
                    <GridContainer>
                      <GridItem sm={6} md={6} xs={12}>
                        <FormControl
                          fullWidth
                          required
                          style={{ marginTop: 10 }}
                        >
                          <InputLabel>Level</InputLabel>
                          <Select
                            value={level}
                            onChange={e => setLevel(e.target.value)}
                          >
                            {levels &&
                              levels.length > 0 &&
                              levels.map(level => (
                                <MenuItem value={level.value} key={level.value}>
                                  {level.label}
                                </MenuItem>
                              ))}
                          </Select>
                          {levelError && (
                            <FormHelperText className={customStyles.error}>
                              Please select level
                            </FormHelperText>
                          )}
                        </FormControl>
                      </GridItem>
                      <GridItem sm={6} md={6} xs={12}>
                        <FormControl
                          fullWidth
                          required
                          style={{ marginTop: 10 }}
                        >
                          <InputLabel>Experience</InputLabel>
                          <Select
                            value={experience}
                            onChange={e => setExperience(e.target.value)}
                          >
                            {experiences &&
                              experiences.length > 0 &&
                              experiences.map(experience => (
                                <MenuItem
                                  value={experience.value}
                                  key={experience.value}
                                >
                                  {experience.label}
                                </MenuItem>
                              ))}
                          </Select>
                          {experienceError && (
                            <FormHelperText className={customStyles.error}>
                              Please select experience
                            </FormHelperText>
                          )}
                        </FormControl>
                      </GridItem>
                      <GridItem sm={6} md={6} xs={12}>
                        <FormControl
                          fullWidth
                          required
                          style={{ marginTop: 20 }}
                        >
                          <InputLabel>Contract</InputLabel>
                          <Select
                            value={contract}
                            onChange={e => setContract(e.target.value)}
                          >
                            {contracts &&
                              contracts.length > 0 &&
                              contracts.map(contract => (
                                <MenuItem
                                  value={contract.value}
                                  key={contract.value}
                                >
                                  {contract.label}
                                </MenuItem>
                              ))}
                          </Select>
                          {contractError && (
                            <FormHelperText className={customStyles.error}>
                              Please select contract
                            </FormHelperText>
                          )}
                        </FormControl>
                      </GridItem>
                    </GridContainer>
                  </GridItem>

                  {/* Job Overview */}
                  <GridItem sm={12} md={12} xs={12}>
                    <GridContainer
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: 50,
                        marginBottom: 15
                      }}
                    >
                      <GridItem sm={12} md={12} xs={12}>
                        <Typography
                          style={{
                            color: "#000",
                            fontSize: 20,
                            fontWeight: "500"
                          }}
                        >
                          Job Overview
                        </Typography>
                      </GridItem>
                    </GridContainer>
                  </GridItem>
                  <GridItem sm={12} md={12} xs={12}>
                    <GridContainer>
                      <GridItem sm={12} md={12} xs={12}>
                        <QuillEditor
                          placeholder="Job description here..."
                          className={customStyles.editor}
                          value={jobDescription}
                          onChange={val => setJobDescription(val)}
                        />
                        {jobDescriptionError && (
                          <FormHelperText className={customStyles.error}>
                            Please enter job description
                          </FormHelperText>
                        )}
                      </GridItem>
                    </GridContainer>
                  </GridItem>

                  {/* Languages */}
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
                            fontSize: 20,
                            fontWeight: "500"
                          }}
                        >
                          Languages
                        </Typography>
                      </GridItem>
                    </GridContainer>
                  </GridItem>
                  <GridItem sm={12} md={12} xs={12}>
                    <GridContainer>
                      <GridItem sm={12} md={12} xs={12}>
                        <TextField
                          fullWidth
                          required
                          variant="outlined"
                          placeholder="Type and press enter to add"
                          // helperText="Some important text"
                          margin="dense"
                          value={language}
                          onChange={e => setLanguage(e.target.value)}
                          onKeyDown={e => {
                            if (e.keyCode === 13 && language) {
                              const allLanguages = languages.slice();
                              allLanguages.push(language);
                              setLanguages(allLanguages);
                              setLanguage("");
                            }
                          }}
                          helperText={
                            languagesError && (
                              <div
                                className={customStyles.error}
                                style={{ marginLeft: -12 }}
                              >
                                Please add atleast one language
                              </div>
                            )
                          }
                        />
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
                        {languages &&
                          languages.length > 0 &&
                          languages.map((language, index) => (
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
                              <CloseIcon
                                style={{
                                  height: 12,
                                  width: 12,
                                  marginLeft: 5,
                                  color: "#000",
                                  cursor: "pointer"
                                }}
                                onClick={() => {
                                  const allLanguages = languages.slice();
                                  allLanguages.splice(index, 1);
                                  setLanguages(allLanguages);
                                }}
                              />
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
                        marginTop: 30,
                        marginBottom: 10
                      }}
                    >
                      <GridItem sm={12} md={12} xs={12}>
                        <Typography
                          style={{
                            color: "#000",
                            fontSize: 20,
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
                      <GridItem sm={12} md={12} xs={12}>
                        <TextField
                          fullWidth
                          required
                          variant="outlined"
                          placeholder="Type and press enter to add"
                          margin="dense"
                          value={tool}
                          onChange={e => setTool(e.target.value)}
                          onKeyDown={e => {
                            if (e.keyCode === 13 && tool) {
                              const allTools = tools.slice();
                              allTools.push(tool);
                              setTools(allTools);
                              setTool("");
                            }
                          }}
                          helperText={
                            toolsError && (
                              <div
                                className={customStyles.error}
                                style={{ marginLeft: -12 }}
                              >
                                Please add atleast one tool
                              </div>
                            )
                          }
                        />
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
                        {tools &&
                          tools.length > 0 &&
                          tools.map((language, index) => (
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
                              <CloseIcon
                                style={{
                                  height: 12,
                                  width: 12,
                                  marginLeft: 5,
                                  color: "#000",
                                  cursor: "pointer"
                                }}
                                onClick={() => {
                                  const allTools = tools.slice();
                                  allTools.splice(index, 1);
                                  setTools(allTools);
                                }}
                              />
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
                      onClick={createNewJob}
                    >
                      Create Job
                    </Button>
                  </GridItem>
                </GridContainer>
              </GridItem>
            </GridContainer>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
};

CreateJob.propTypes = {
  classes: PropTypes.object.isRequired,
  createJob: PropTypes.func
};

const mapStateToProps = state => {
  return {
    jobs: state.jobs
  };
};
const contactPageWithRedux = connect(
  mapStateToProps,
  {
    createJob
  }
)(CreateJob);
export default withStyles(sweetAlertStyle)(contactPageWithRedux);
