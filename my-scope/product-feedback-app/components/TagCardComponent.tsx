import React from 'react';
import TagSolution from './TagSolution';

type Props = {};

const Tags = [
  {
    id: 1,
    heading: '4 tags for solutions',
    tagline: 'Easier to search for solutions based on a specific stack.',
    chipName: 'Bug',
    voteCount: 44,
    commentCount: 4,
  },
  {
    id: 2,
    heading: '2 tags for solutions',
    tagline: 'Easier to search for solutions based on a specific stack.',
    chipName: 'UI',
    voteCount: 22,
    commentCount: 3,
  },
  {
    id: 3,
    heading: '3 tags for solutions',
    tagline: 'Easier to search for solutions based on a specific stack.',
    chipName: 'UX',
    voteCount: 19,
    commentCount: 2,
  },
  {
    id: 4,
    heading: 'Add tags for solutions',
    tagline: 'Easier to search for solutions based on a specific stack.',
    chipName: 'Enhancement',
    voteCount: 17,
    commentCount: 4,
  },
];

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
