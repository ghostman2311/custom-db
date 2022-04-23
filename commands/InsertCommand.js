const Table = require("../Table");
module.exports = class InsertCommand {
  constructor({ record, tableName }) {
    this.record = record;
    this.table = new Table(tableName);
  }

  async perform() {
    return await this.table.insertRecord(this.record);
  }
};
