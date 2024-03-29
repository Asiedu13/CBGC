export let validator = (obj) => {
  let isValid = false;
  let message = {
    isValid,
    error: undefined,
  };

  if (obj.email !== "" && obj.email !== undefined) {
    isValid = true;
  } else {
    isValid = false;
    message.error = `Empty email field`;
  }

  if (obj.password !== "" && obj.password !== undefined) {
    isValid = true;
  } else {
    isValid = false;
    message.error = `Empty password field`;
  }

  return message;
};
