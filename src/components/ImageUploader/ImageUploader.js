import React, { useRef } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import AddIcon from "@material-ui/icons/Add";

const useStyles = {
  dropbox: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: "#f4f7f9",
    alignSelf: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  imageThumbnail: {
    objectFit: "fill",
    height: 100,
    width: 100,
    borderRadius: 50
  }
};

const ImageUploader = ({ classes, value = null, onChange = () => {} }) => {
  const inputFileRef = useRef(null);

  const handleBrowseFile = e => {
    e.stopPropagation();
    inputFileRef.current.click();
  };

  const onChangeHandler = async e => {
    if (e.target && e.target.files && e.target.files[0]) {
      onChange(e.target.files[0]);
    }
  };

  return (
    <div
      className={classes.dropbox}
      onClick={handleBrowseFile}
      onDragOver={e => {
        e.preventDefault();
      }}
      onDrop={onChangeHandler}
    >
      {value ? (
        <img
          src={value && URL.createObjectURL(value)}
          className={classes.imageThumbnail}
        />
      ) : (
        <AddIcon />
      )}
      <input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={onChangeHandler}
        ref={inputFileRef}
      />
    </div>
  );
};

ImageUploader.propTypes = {
  onChange: PropTypes.func,
  classes: PropTypes.object,
  value: PropTypes.object
};

export default withStyles(useStyles)(ImageUploader);
