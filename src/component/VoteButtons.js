import { useState } from "react";

const VoteButtons = () => {
  const [likes, setLikes] = useState(0);
  const [wows, setWows] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  return (
    <>
      <div className="vote-buttons">
        <button onClick={() => setLikes((likes) => likes + 1)}>
          👍 <strong>{likes}</strong>
        </button>
        <button onClick={() => setWows((wows) => wows + 1)}>
          😯 <strong>{wows}</strong>
        </button>
        <button onClick={() => setDislikes((dislikes) => dislikes + 1)}>
          😕 <strong>{dislikes}</strong>
        </button>
      </div>
    </>
  );
};
export default VoteButtons;
