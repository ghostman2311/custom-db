const { v4: uuidV4 } = require("uuid");
const fs = require("fs");
const TableDoesNotExistError = require("./errors/TableDoesNotExistError");

module.exports = class Table {
  constructor(tableName) {
    this.tableName = tableName;
  }
  get filePath() {
    console.log("tablename",this.tableName)
    return `data/${this.tableName}.json`;
  }

  insertRecord(record) {
    //Give record an Id
    //Get Current Data
    //a. If the table exists add the record to the end of the table
    //b. if the table doesn't exist then create it and add the record
    const recordWithId = { _id: uuidV4(), ...record };
    return new Promise((resolve, reject) => {
      this.readData()
        .catch((e) => {
          if (e instanceof TableDoesNotExistError) {
            return [];
          } else {
            reject(e);
          }
        })
        .then((data) => {
          fs.writeFile(
            this.filePath,
            JSON.stringify([...data, recordWithId]),
            (error) => {
              if (error) return reject(error);
              resolve(recordWithId);
            }
          );
        });
    });
  }

  readData() {
    return new Promise((resolve, reject) => {
      fs.readFile(this.filePath, (err, data) => {
        if (err) return reject(new TableDoesNotExistError(this.tableName));
        resolve(JSON.parse(data));
      });
    });
  }
};
