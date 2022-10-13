import React, { useContext, useEffect } from 'react';
import { Tags } from '../data/Tags';
import TagSolution from './TagSolution';
import { Container } from '@mui/material';

const SortTagItems = () => {
  const comment = localStorage.getItem('commentValue');
  // const Tags = JSON.parse(localStorage.getItem('Tags') || '');
  console.log(comment);
  switch (comment) {
    case 'Most Upvotes': {
      Tags.sort((a, b) => b.voteCount - a.voteCount); //descending order -> most upvotes
      console.log('hi');
      console.log(Tags);
      break;
    }
    case 'Least Upvotes': {
      Tags.sort((a, b) => a.voteCount - b.voteCount); //descending order -> most upvotes
      console.log('hi');
      break;
    }
    case 'Most Comments': {
      Tags.sort((a, b) => b.commentCount - a.commentCount); //descending order -> most Comments
      console.log('hi');
      break;
    }
    case 'Least Comments': {
      Tags.sort((a, b) => a.commentCount - b.commentCount); //descending order -> most upvotes
      console.log('hi');
      break;
    }
  }
  localStorage.setItem('Tags', JSON.stringify('Tags'));
};

const TagCardComponent = () => {
  // const Tags = JSON.parse(localStorage.getItem('Tags') || '');
  return (
    <>
      {SortTagItems()}
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
