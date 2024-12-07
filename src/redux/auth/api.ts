import api from "../api";

const authAPI = api.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation<
      { message: string },
      { email: string; password: string; username: string }
    >({
      query: (body) => ({
        url: "/auth/register",
        method: "POST",
        body,
      }),
    }),
    login: build.mutation<
      { message: string; token: string },
      { email: string; password: string }
    >({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
    }),
    greet: build.query<{ message: string }, void>({
      query: () => "/auth/greet",
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useGreetQuery } = authAPI;
