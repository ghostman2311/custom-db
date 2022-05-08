const parseInsertCommand = require("./insert");

describe("With a valid Command", () => {
  const command = `INSERT {"a":1} INTO table`;
  test("It run correct Insert command", () => {
    const insertCommand = parseInsertCommand(command);
    expect(insertCommand.record).toEqual({ a: 1 });
    expect(insertCommand.table.tableName).toBe("table");
  });
});

describe("With a invalid record", () => {
  const command = "INSERT { INTO table";
  test("it returns undefined", () => {
    expect(parseInsertCommand(command)).toBeUndefined();
  });
});

describe("With no insert clause", () => {
  const command = '{"a": 1} INTO table';
  test("it returns undefined", () => {
    expect(parseInsertCommand(command)).toBeUndefined();
  });
});

describe("With no into clause", () => {
  const command = 'INSERT {"a": 1}  table';
  test("it returns undefined", () => {
    expect(parseInsertCommand(command)).toBeUndefined();
  });
});

describe("With no table name", () => {
  const command = 'INSERT {"a": 1} INTO';
  test("it returns undefined", () => {
    expect(parseInsertCommand(command)).toBeUndefined();
  });
});
