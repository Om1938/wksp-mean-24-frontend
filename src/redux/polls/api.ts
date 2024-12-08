import { PollWithMoreData } from "../../components/Poll";
import { Poll } from "../../components/Polls";
import api from "../api";

const pollsAPI = api.injectEndpoints({
  endpoints: (build) => ({
    getPolls: build.query<
      {
        message: string;
        data: Poll[];
      },
      void
    >({
      query: () => "polls",
    }),
    vote: build.mutation<
      {
        message: string;
        data: Poll;
      },
      { pollId: string; optionId: string }
    >({
      query: ({ pollId, optionId }) => ({
        url: `polls/${pollId}/vote`,
        method: "POST",
        body: { optionId },
      }),
    }),
    getPoll: build.query<
      {
        message: string;
        data: PollWithMoreData;
      },
      { pollId: string }
    >({
      query: ({ pollId }) => `polls/${pollId}`,
    }),
  }),
});

export const { useGetPollsQuery, useVoteMutation, useGetPollQuery } = pollsAPI;
