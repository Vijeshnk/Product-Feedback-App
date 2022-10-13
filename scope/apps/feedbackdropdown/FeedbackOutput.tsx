import React from 'react'
import { Card } from 'react-bootstrap'

type Props = {}

 const FeedbackOutput = ({feedbacks}) => {
  return feedbacks.map(feedback =>(
    <Card key={feedback.title}>
      <td>{feedback.title}</td>
      <td>{feedback.detail}</td>
      <td>{feedback.category}</td>
    </Card>
  ))
    
  
}

export default FeedbackOutput