import React from "react";
import { List } from "semantic-ui-react";
import SearchBar from "./SearchBar";

const PostsList = ({ query, setQuery, posts, setPosts }) => {
  return (
    <div>
      <List divided relaxed>
        {posts.map((item, index) => {
          return (
            <>
              <List.Item key={Math.random()}>
                <List.Content>
                  <List.Header as="a">
                    {index + 1} {item.story_title}
                  </List.Header>
                  <List.Description as="a">
                    Create at {item.created_at} by {item.author}
                  </List.Description>
                </List.Content>
              </List.Item>
            </>
          );
        })}
        <SearchBar query={query} setQuery={setQuery} />
      </List>
    </div>
  );
};

export default PostsList;
