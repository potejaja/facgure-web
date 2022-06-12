import axios from "axios";

const getData = async () => {
  try {
    let res = await axios({
      headers: {
        "Content-Type": "multipart/form-data",
      },
      url: "/our_solution/getData",
      method: "get",
    });

    return {
      status: true,
      response: res,
    };
  } catch (err) {
    return {
      status: false,
      response: err,
    };
  }
};

const apiOurSolution = {
  getData: getData,
};

export default apiOurSolution;
