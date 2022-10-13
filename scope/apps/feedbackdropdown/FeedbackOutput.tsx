import React from 'react';
import { Card } from 'react-bootstrap';
import DeleteIcon from '@mui/icons-material/Delete';

const FeedbackOutput = ({ feedbacks, deleteFeedback }) => {
  return feedbacks.map((feedback) => (
    <Card key={feedback.title}>
      <td>{feedback.title}</td>
      <td>{feedback.detail}</td>
      <td>{feedback.category}</td>
      <td onClick={() => deleteFeedback(feedback.title)}>
        <DeleteIcon />
      </td>
    </Card>
  ));
};

export default FeedbackOutput;
