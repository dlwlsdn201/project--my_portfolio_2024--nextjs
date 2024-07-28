import { SharedTextInput } from "@shared/ui/input";
import { CommentContainer, CommentWrapper } from "../style/comment.styled";
import { SharedPrimaryButton } from "@shared/ui/button";
import { useState } from "react";

const InputComment = () => {
  const [comment, setComment] = useState("");

  /* TODO - API 연동 필요 */
  const onSubmit = () => {
    console.log("submit comment => ", comment);
  };

  return (
    <CommentContainer>
      <CommentWrapper>
        <SharedTextInput id='comment' label='comment' onChange={setComment} />
        <SharedPrimaryButton label='등록' onClick={onSubmit} />
      </CommentWrapper>
    </CommentContainer>
  );
};

export default InputComment;
