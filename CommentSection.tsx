import React, { useState } from "react";

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  // Handle adding a new comment
  const addComment = () => {
    if (newComment.trim() === "") return;
    setComments([...comments, { id: Date.now(), text: newComment, replies: [] }]);
    setNewComment("");
  };

  // Handle adding a reply to a specific comment
  const addReply = (commentId, replyText) => {
    if (replyText.trim() === "") return;
    setComments(
      comments.map((comment) =>
        comment.id === commentId
          ? { ...comment, replies: [...comment.replies, { id: Date.now(), text: replyText }] }
          : comment
      )
    );
  };

  return (
    <div style={{ width: "400px", margin: "auto" }}>
      <h2>Comment Section</h2>
      <textarea
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Write a comment..."
        rows="3"
        style={{ width: "100%" }}
      />
      <button onClick={addComment} style={{ marginTop: "5px" }}>Submit</button>

      <div style={{ marginTop: "20px" }}>
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} addReply={addReply} />
        ))}
      </div>
    </div>
  );
};

const Comment = ({ comment, addReply }) => {
  const [replyText, setReplyText] = useState("");
  const [showReplyBox, setShowReplyBox] = useState(false);

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", marginTop: "10px" }}>
      <p>{comment.text}</p>
      <button onClick={() => setShowReplyBox(!showReplyBox)}>
        {showReplyBox ? "Cancel" : "Reply"}
      </button>

      {showReplyBox && (
        <div style={{ marginTop: "5px" }}>
          <input
            type="text"
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Write a reply..."
            style={{ width: "80%" }}
          />
          <button onClick={() => { addReply(comment.id, replyText); setReplyText(""); setShowReplyBox(false); }}>
            Reply
          </button>
        </div>
      )}

      {/* Display Replies */}
      <div style={{ marginLeft: "20px", marginTop: "10px" }}>
        {comment.replies.map((reply) => (
          <div key={reply.id} style={{ borderLeft: "2px solid #ddd", paddingLeft: "10px", marginTop: "5px" }}>
            <p>{reply.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
