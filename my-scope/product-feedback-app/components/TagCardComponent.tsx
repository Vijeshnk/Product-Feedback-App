import React, { useContext, useEffect } from 'react';
import TagSolution from './TagSolution';
import { Container } from '@mui/material';

const SortTagItems = (Tags) => {
  const comment = localStorage.getItem('commentValue');
  console.log(Tags);
  switch (comment) {
    case 'Most Upvotes': {
      Tags.sort((a, b) => b.voteCount - a.voteCount); //descending order -> most upvotes
      break;
    }
    case 'Least Upvotes': {
      Tags.sort((a, b) => a.voteCount - b.voteCount); //ascending order -> least upvotes
      break;
    }
    case 'Most Comments': {
      Tags.sort((a, b) => b.commentCount - a.commentCount); //descending order -> most Comments
      break;
    }
    case 'Least Comments': {
      Tags.sort((a, b) => a.commentCount - b.commentCount); //ascending order -> least Comments
      break;
    }
  }
};

const TagCardComponent = () => {
  const Tags = JSON.parse(localStorage.getItem('Tags') || '');
  return (
    <>
      {SortTagItems(Tags)}
      {Tags.map((tagItem) => {
        return (
          <Container key={tagItem.id}>
            <TagSolution tagItem={tagItem} />
          </Container>
        );
      })}
    </>
  );
};

export default TagCardComponent;
