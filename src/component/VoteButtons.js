import { useState } from "react";
import supabase from "../connector/supabase";
import Alerts from "./Alerts";

const VoteButtons = ({ selectedFact }) => {
  const [likes, setLikes] = useState(selectedFact.likes);
  const [wows, setWows] = useState(selectedFact.wows);
  const [dislikes, setDislikes] = useState(selectedFact.dislikes);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleVote = async (btnName) => {
    setIsUpdating(true);
    const { data: updatedContent, error } = await supabase
      .from("Thoughts")
      .update({ [btnName]: selectedFact[`${btnName}`] + 1 })
      .eq("id", selectedFact.id)
      .select();

    if (!error) {
      setLikes(updatedContent[0].likes);
      setWows(updatedContent[0].wows);
      setDislikes(updatedContent[0].dislikes);
      setIsUpdating(false);
    } else {
      setIsError(true);
    }
  };

  return (
    <>
      <div className="vote-buttons">
        <button onClick={() => handleVote("likes")} disabled={isUpdating}>
          👍 <strong>{likes}</strong>
        </button>
        <button onClick={() => handleVote("wows")} disabled={isUpdating}>
          😯 <strong>{wows}</strong>
        </button>
        <button onClick={() => handleVote("dislikes")} disabled={isUpdating}>
          😕 <strong>{dislikes}</strong>
        </button>
        <div>
          {isError ? <Alerts severity={"error"} message={"Error"} /> : null}
        </div>
      </div>
    </>
  );
};
export default VoteButtons;
