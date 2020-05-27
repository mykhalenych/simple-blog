import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import styled from "styled-components";

const ActionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: 345,
    height: 270,
    margin: "10px 30px",
  },
  media: {
    height: 0,
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const PostCard = ({ title, content, id }) => {
  const classes = useStyles();
  const contentData = content && content.substr(0, 20) + "...";

  return (
    <Card className={classes.root}>
      <CardHeader title={title} subheader="May 23, 2020" />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {contentData}
        </Typography>
      </CardContent>
      <ActionsWrapper>
        <Link to={`/posts/${id}`}>
          <Button variant="contained" color="primary">
            Read more
          </Button>
        </Link>
      </ActionsWrapper>
    </Card>
  );
};

export default PostCard;
