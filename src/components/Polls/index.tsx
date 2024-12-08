import { useGetPollsQuery } from "../../redux/polls/api";
import PollComponent from "./poll";

export type Poll = {
  _id: string;
  question: string;
  options: {
    _id: string;
    text: string;
  }[];
  votes: {
    _id: string;
    optionId: string;
    user: string;
  }[];
  createdBy: string;
};

const Polls = () => {
  const { data: polls } = useGetPollsQuery();

  return (
    <div
      className="mx-auto grid flex-column gap-2 mt-4"
      style={{ width: "60%" }}
    >
      {polls?.data.map((poll: Poll) => (
        <PollComponent poll={poll} />
      ))}
    </div>
  );
};

export default Polls;
