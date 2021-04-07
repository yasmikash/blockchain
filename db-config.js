const level = require("level");

let chainDB = "./chaindata";
let db = level(chainDB);

const addData = (key, value) => {
  return new Promise((resolve, reject) => {
    db.put(key, value, (error) => {
      if (error) reject(error);
      else resolve(value);
    });
  });
};

const getDataByKey = (key) => {
  return new Promise((resolve, reject) => {
    db.get(key, function (err, value) {
      if (err) reject(err);
      else resolve(value);
    });
  });
};

const getDataByKeyVal = (key, value) => {
  const rs = db.createReadStream();
  return new Promise((resolve, reject) => {
    rs.on("data", (data) => {
      const item = JSON.parse(data.value);
      if (item[key] === value) resolve(item);
    });

    rs.on("end", () => {
      resolve();
    });

    rs.on("error", (error) => {
      reject(error);
    });
  });
};

const getDataCount = () => {
  return new Promise((resolve, reject) => {
    let count = 0;

    const stream = db.createReadStream();

    stream.on("data", (data) => {
      count++;
    });

    stream.on("error", (error) => {
      reject(error);
    });

    stream.on("close", () => {
      resolve(count);
    });
  });
};

const getAllData = async () => {
  const dataList = [];
  const rs = db.createReadStream();

  rs.on("data", (data) => {
    dataList.push(JSON.parse(data.value));
  });

  return new Promise((resolve, reject) => {
    rs.on("error", (error) => reject(error));
    rs.on("end", () => resolve(dataList));
  });
};

module.exports = {
  addData,
  getDataByKey,
  getDataByKeyVal,
  getAllData,
  getDataCount,
};
