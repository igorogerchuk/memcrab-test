import uuid from "uuid/v4";
jest.mock("uuid/v4");
let i = 1;
uuid.mockImplementation(() => `${i++}`);
jest.spyOn(Math, "random").mockReturnValue(0.5);
