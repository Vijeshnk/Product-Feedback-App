import React from 'react';
import TagSolution from './TagSolution';
import { Tags } from '../data/Tags';
import { Container } from '@mui/material';

type Props = {};

const TagCardComponent = (props: Props) => {
  return (
    <>
      {Tags.map((tagItem) => {
        return (
          <Container>
            <TagSolution tagItem={tagItem} />
          </Container>
        );
      })}
    </>
  );
};

export default TagCardComponent;
