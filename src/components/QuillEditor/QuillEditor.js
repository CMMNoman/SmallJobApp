import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import ReactQuill from "react-quill";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  rootEnabled: {
    "& .ql-toolbar": {
      // display: "none", // hide toolbar
      backgroundColor: "#f6f8fa",
      borderLeft: "none",
      borderTop: "none",
      borderRight: "none",
      borderBottomColor: "#fff",
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      "& .ql-picker-label:hover": {
        color: theme.palette.secondary.main
      },
      "& .ql-picker-label.ql-active": {
        color: theme.palette.secondary.main
      },
      "& .ql-picker-item:hover": {
        color: theme.palette.secondary.main
      },
      "& .ql-picker-item.ql-selected": {
        color: theme.palette.secondary.main
      },
      "& button:hover": {
        color: theme.palette.secondary.main,
        "& .ql-stroke": {
          stroke: theme.palette.secondary.main
        }
      },
      "& button:focus": {
        color: theme.palette.secondary.main,
        "& .ql-stroke": {
          stroke: theme.palette.secondary.main
        }
      },
      "& button.ql-active": {
        "& .ql-stroke": {
          stroke: theme.palette.secondary.main
        }
      },
      "& .ql-stroke": {
        stroke: theme.palette.text.primary
      },
      "& .ql-picker": {
        color: theme.palette.text.primary
      },
      "& .ql-picker-options": {
        padding: theme.spacing(2),
        backgroundColor: theme.palette.background.default,
        border: "none",
        boxShadow: theme.shadows[10],
        borderRadius: theme.shape.borderRadius
      }
    },
    "& .ql-container": {
      border: `1px solid ${theme.palette.divider}`,
      "& .ql-editor": {
        fontFamily: theme.typography.fontFamily,
        fontSize: 16,
        color: theme.palette.text.primary,
        "&.ql-blank::before": {
          color: theme.palette.text.secondary
        }
      }
    }
  },
  rootDisabled: {
    "& .ql-toolbar": {
      display: "none" // hide toolbar
    },
    "& .ql-container": {
      border: `0px solid ${theme.palette.divider}`,
      "& .ql-editor": {
        fontFamily: theme.typography.fontFamily,
        fontSize: 16,
        color: theme.palette.text.primary,
        "&.ql-blank::before": {
          color: theme.palette.text.secondary
        }
      }
    }
  },
  stepButton: {
    "& + &": {
      marginLeft: theme.spacing(2)
    }
  }
}));

function QuillEditor({ className, readOnly, ...rest }) {
  const classes = useStyles();

  return readOnly ? (
    <ReactQuill
      readOnly={true}
      className={clsx(classes.rootDisabled, className)}
      {...rest}
    />
  ) : (
    <ReactQuill
      modules={{
        toolbar: {
          container: [
            ["bold", "italic", "underline"],
            [
              { align: null },
              { align: "center" },
              { align: "right" },
              { align: "justify" }
            ],
            ["link"],
            [{ list: "bullet" }, { list: "ordered" }]
          ]
        }
      }}
      className={clsx(classes.rootEnabled, className)}
      {...rest}
    />
  );
}

QuillEditor.propTypes = {
  className: PropTypes.string,
  readOnly: PropTypes.bool
};

export default QuillEditor;
