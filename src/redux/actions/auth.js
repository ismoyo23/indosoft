import axios from "axios";

export const login = (data) => ({
  type: "LOGIN",
  payload: axios({
    method: "POST",
    url: `${data.env}books/login`,
    data: {
      nik: data.nik,
    },
  }),
});

export let logout = () => {
  return {
    type: "LOGOUT",
  };
};
