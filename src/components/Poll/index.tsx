import { useParams } from "react-router-dom";
import { useGetPollQuery } from "../../redux/polls/api";
import { Accordion, AccordionTab } from "primereact/accordion";

export type PollWithMoreData = {
  _id: string;
  question: string;
  options: {
    _id: string;
    text: string;
    voteCount: number;
  }[];
  votes: {
    _id: string;
    optionId: string;
    user: {
      _id: string;
      username: string;
      email: string;
    };
  }[];
  createdBy: {
    _id: string;
    username: string;
    email: string;
  };
};
// const Option = ({
//   option,
// }: {
//   option: {
//     _id: string;
//     text: string;
//     voteCount: number;
//   };
// }) => {
//   return (
//     <div className="surface-card shadow-2 p-2 border-red-100 border-1">
//       {option.text} ({option.voteCount || 0} votes)
//     </div>
//   );
// };

const Poll = () => {
  const { id } = useParams();
  const { data: poll } = useGetPollQuery({
    pollId: id!,
  });

  return (
    <div
      className="mx-auto grid flex-column gap-2 mt-4 shadow-4 border-round p-2 bg-white"
      style={{ width: "60%" }}
    >
      <h1>{poll?.data.question}</h1>
      <p>Created by: {poll?.data.createdBy.username}</p>
      <div className="grid flex-column m-4 gap-4 w-6">
        {/* {poll?.data.options.map((option) => (
          <Option key={option._id} option={option} />
        ))} */}

        <Accordion activeIndex={0}>
          {poll?.data.options.map((vote) => (
            <AccordionTab header={vote.text}>
              <h3>Voted By</h3>
              {poll?.data.votes
                .filter((v) => v.optionId === vote._id)
                .map((v) => (
                  <div key={v._id}>{v.user.username}</div>
                ))}
            </AccordionTab>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Poll;
