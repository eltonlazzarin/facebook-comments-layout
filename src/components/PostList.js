import React, { Component } from "react";

import PostItem from "./PostItem";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Vanessa Romero",
          avatar: "https://i.pravatar.cc/150?img=1"
        },
        date: "10 Oct 2019",
        content: "Guys, does anyone know if Rocketseat is hiring?",
        comments: [
          {
            id: 2,
            author: {
              name: "Diego Fernandes",
              avatar: "https://avatars2.githubusercontent.com/u/2254731?v=4"
            },
            date: "10 Oct 2019",
            content:
              "Rocketseat is always looking for new members for the team, and we usually keep an eye on who stands out in Bootcamp, including 80% of our dev team is Bootcamp students. Also, if you feel like teaching videos and posts, you can call me on Discord! (Seriously, really call me, this comment is real)"
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Neil Cook",
          avatar: "https://i.pravatar.cc/150?img=8"
        },
        date: "10 Oct 2019",
        content:
          "Hey, guys! I'm doing Bootcamp GoStack and it's been great! Is anyone else doing? Comment on post to exchange an idea",
        comments: [
          {
            id: 4,
            author: {
              name: "Clara Lisboa",
              avatar: "https://i.pravatar.cc/150?img=5"
            },
            date: "10 Oct 2019",
            content:
              "I'm also doing Bootcamp and I'm loving it! I'm in the third module on Node and already have my challenge API built!"
          },
          {
            id: 5,
            author: {
              name: "Cézar Toledo",
              avatar: "https://i.pravatar.cc/150?img=11"
            },
            date: "10 Oct 2019",
            content:
              "Wonderful! I'm thinking of signing up for the next class to see what this BootStamp GoStack is, they say developers come out with super powers"
          }
        ]
      },
      {
        id: 6,
        author: {
          name: "Gabriel Lisboa",
          avatar: "https://i.pravatar.cc/150?img=51"
        },
        date: "10 Oct 2019",
        content:
          "Hey, guys! I'm doing Bootcamp GoStack and it's been great! Is anyone else doing? Comment on post to exchange an idea",
        comments: [
          {
            id: 4,
            author: {
              name: "Clara Lisboa",
              avatar: "https://i.pravatar.cc/150?img=5"
            },
            date: "10 Oct 2019",
            content:
              "I'm also doing Bootcamp and I'm loving it! I'm in the third module on Node and already have my challenge API built!"
          },
          {
            id: 5,
            author: {
              name: "Cézar Toledo",
              avatar: "https://i.pravatar.cc/150?img=11"
            },
            date: "10 Oct 2019",
            content:
              "Wonderful! I'm thinking of signing up for the next class to see what this Bootcamp GoStack is, they say developers come out with super powers"
          }
        ]
      }
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="postlist">
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;
