const { v4: uuidV4 } = require("uuid");

module.exports = class Table {
  constructor({ tableName }) {
    this.tableName = tableName;
  }
  get filePath() {
    return `data/${this.tableName}.json`;
  }

  insertRecord(record) {
    //Give record an Id
    //Get Current Data
    //a. If the table exists add the record to the end of the table
    //b. if the table doesn't exist then create it and add the record
    const recordWithId = { _id: uuidV4(), ...record };
  }
};
