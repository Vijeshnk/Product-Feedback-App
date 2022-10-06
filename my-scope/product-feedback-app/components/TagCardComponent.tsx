import React from 'react';
import TagSolution from './TagSolution';
import { Tags } from '../data/Tags';

type Props = {};

const TagCardComponent = (props: Props) => {
  return (
    <>
      {Tags.map((tagItem) => {
        return <TagSolution tagItem={tagItem} />;
      })}
    </>
  );
};

export default TagCardComponent;
