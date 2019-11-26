getAllData = async () => {
  let response = await fetch("http://localhost:3000/todo/");
  let data = await response.json();
  return data;
};

module.exports = {
  getAllData
};
