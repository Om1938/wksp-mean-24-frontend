import { useNavigate } from "react-router-dom";
import { Poll } from ".";
import { useVoteMutation } from "../../redux/polls/api";

type Props = {
  poll: Poll;
};

const PollComponent = ({ poll }: Props) => {
  const navigate = useNavigate();
  const [vote, { isLoading: isVoting, isError: voteError }] = useVoteMutation();

  const handleOptionSelect = (option: any) => {
    vote({
      pollId: poll._id,
      optionId: option._id,
    });
  };

  return (
    <div
      className="surface-card shadow-1 p-2 border-100"
      onClick={() => navigate(`/poll/${poll._id}`)}
    >
      <h1 className="text-2xl font-bold">{poll.question}</h1>
      <div className="surface-card w-6 grid flex-column ml-4 gap-2 ">
        {poll.options.map((option) => (
          <div
            className="surface-card shadow-1 p-2 border-100 w-full border-round"
            key={option._id}
            onClick={() => handleOptionSelect(option)}
          >
            {option.text}
          </div>
        ))}
        {isVoting && <div>Submitting vote...</div>}
        {voteError && <div>Failed to submit vote</div>}
      </div>
    </div>
  );
};

export default PollComponent;
