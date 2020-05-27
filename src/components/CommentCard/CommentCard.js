import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { getSinglePostCommentSelector } from "../../store/selectors/rootSelectors";
import { getNewComments } from "../../store/selectors/rootSelectors";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import { createComment } from "../../store/actions/rootActions";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  comment: {
    margin: 5,
  },
}));

export default function CommentCard() {
  const classes = useStyles();
  const dispatch = useDispatch();

  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createComment(value));
    handleClose();
  };
  const commentsData = useSelector(getSinglePostCommentSelector);
  const newCommentsList = useSelector(getNewComments);
  const comment = commentsData.map((item) => (
    <div className={classes.comment} key={item.id}>
      {item.body}
    </div>
  ));

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Create Comment</h2>
      <input value={value} onChange={handleChange} />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Create
      </Button>
    </div>
  );

  return (
    <div className={classes.root}>
      <div>{comment}</div>
      <div className={classes.comment}>
        {newCommentsList && newCommentsList ? (
          <div key={newCommentsList.id}>{newCommentsList.body}</div>
        ) : null}
      </div>
      <Button onClick={handleOpen} variant="contained" color="primary">
        Create comment
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
