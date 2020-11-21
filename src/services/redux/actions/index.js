export const ActionTypes = {
  CREATE_JOB: "CREATE_JOB"
};

export const createJob = payload => {
  return async dispatch => {
    dispatch({
      type: ActionTypes.CREATE_JOB,
      payload: payload
    });
  };
};
