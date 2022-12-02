import dataApi from "../model/dataApi";

const random = () => {
  let number = Math.floor(Math.random() * 10);
  let magic = dataApi.length;
  return number % magic;
};

export default random();
