export const levels = [
  {
    value: 1,
    label: "Frontend"
  },
  {
    value: 2,
    label: "Backend"
  },
  {
    value: 3,
    label: "Fullstack"
  }
];

export const experiences = [
  {
    value: 1,
    label: "Junior"
  },
  {
    value: 2,
    label: "Midweight"
  },
  {
    value: 3,
    label: "Senior"
  }
];

export const contracts = [
  {
    value: 1,
    label: "PartTime"
  },
  {
    value: 2,
    label: "FullTime"
  }
];

export const formatPrettyDate = utcDate => {
  const date = new Date(utcDate);
  const now = new Date();
  const diff = now - date;
  let tempTime;
  // 691826327
  const second = 1000;
  const minute = 60000;
  const hour = 3600000;
  const day = 86400000;
  const week = 604800000;
  const month = 2592000000;
  const year = 31536000000;
  let prettyDate = "No date available";
  if (diff < 10000) {
    prettyDate = "just now";
  } else if (diff < minute) {
    tempTime = Math.floor(diff / second);
    if (tempTime === 1) {
      prettyDate = tempTime + " sec ago";
    } else {
      prettyDate = tempTime + " sec(s) ago";
    }
  } else if (diff < hour) {
    tempTime = Math.floor(diff / minute);
    if (tempTime === 1) {
      prettyDate = tempTime + " minute ago";
    } else {
      prettyDate = tempTime + " minutes ago";
    }
  } else if (diff < day) {
    tempTime = Math.floor(diff / hour);
    if (tempTime === 1) {
      prettyDate = tempTime + " hour ago";
    } else {
      prettyDate = tempTime + " hours ago";
    }
  } else if (diff < week) {
    tempTime = Math.floor(diff / day);
    if (tempTime === 1) {
      prettyDate = tempTime + " day ago";
    } else {
      prettyDate = tempTime + " days ago";
    }
  } else if (diff < month) {
    tempTime = Math.floor(diff / week);
    if (tempTime === 1) {
      prettyDate = tempTime + " week ago";
    } else {
      prettyDate = tempTime + " weeks ago";
    }
  } else if (diff < year) {
    tempTime = Math.floor(diff / month);
    if (tempTime === 1) {
      prettyDate = tempTime + " month ago";
    } else {
      prettyDate = tempTime + " months ago";
    }
  } else if (diff < year) {
    tempTime = Math.floor(diff / year);
    if (tempTime === 1) {
      prettyDate = tempTime + " year ago";
    } else {
      prettyDate = tempTime + " years ago";
    }
  } else {
    tempTime = Math.floor(diff / year);
    if (tempTime === 1) {
      prettyDate = tempTime + " year ago";
    } else {
      prettyDate = tempTime + " years ago";
    }
  }
  return prettyDate;
};
