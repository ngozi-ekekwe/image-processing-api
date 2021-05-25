import app from "../app";
import supertest from "supertest";

const request = supertest(app);

// describe("Express Server", () => {
//   // it("return hello world", async (done) => {
//   //   const response = await request.get("/");
//   //   console.log(response)
//   //   // expect(response.status).toBe(200);
//   //   done();
//   });
// });
