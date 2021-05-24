import app from "../app";
import supertest from "supertest";

const request = supertest(app);

describe("Express Server", () => {
  it("return hello world", async (done) => {
    const response = await request.get("/");
    expect(response.body.message).toBe("Hello, World");
    done();
  });
});

// test express server is running

// test that an html file is renderend;

// test that the function is actually resizing
