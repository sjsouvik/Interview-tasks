import serverRequests from "./serverRequests";

export const loginWithCreds = async (email, password) => {
  const { response, statusCode } = await serverRequests({
    requestType: "post",
    url: `${process.env.REACT_APP_BACKEND}/login`,
    data: { email: email, password: password },
  });

  if (statusCode === 401 || statusCode === 400 || statusCode === 422) {
    return { error: true, message: "Invalid email and password combination" };
  }

  if (statusCode !== 200) {
    return { error: true, message: "Something went wrong" };
  }

  return response && response.data ? { data: response.data } : { data: null };
};

export const signup = async (firstName, lastName, email, password) => {
  const { statusCode } = await serverRequests({
    requestType: "post",
    url: `${process.env.REACT_APP_BACKEND}/signup`,
    data: {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    },
  });

  if (statusCode === 422) {
    return {
      error: true,
      message: "Give a valid email to register",
    };
  }

  if (statusCode === 409) {
    return {
      error: true,
      message: "This email is already registered",
    };
  }

  if (statusCode !== 200) {
    return { error: true, message: "Something went wrong" };
  }

  return { message: "Successfully registered" };
};
