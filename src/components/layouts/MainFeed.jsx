import * as React from "react";
import { Container } from "@material-ui/core";
import PostFeed from "./PostFeed";


export default function MainFeed() {
  return (
    <Container>
      <PostFeed />
      <PostFeed />
      <PostFeed />
      <PostFeed />
      <PostFeed />
    </Container>
  );
}
