import axios from "axios";
import serverRequests from "./serverRequests";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("testing get user service", () => {
  test("should return user details when API request is successful", async () => {
    mockedAxios.get.mockResolvedValue({
      data: [
        {
          id: 1,
          name: "Arvind Kumar",
          email: "arvind@geektrust.com",
          role: "admin",
        },
        {
          id: 2,
          name: "Chetan Kumar",
          email: "chetan@gmail.com",
          role: "member",
        },
      ],
      status: 200,
    });

    const request = {
      requestType: "get",
      url: "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json",
    };

    const serverResponse = await serverRequests(request);

    expect(serverResponse).toEqual({
      response: {
        data: [
          {
            id: 1,
            name: "Arvind Kumar",
            email: "arvind@geektrust.com",
            role: "admin",
          },
          {
            id: 2,
            name: "Chetan Kumar",
            email: "chetan@gmail.com",
            role: "member",
          },
        ],
        status: 200,
      },
      statusCode: 200,
    });
  });
});
