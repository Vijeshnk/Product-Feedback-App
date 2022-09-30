import React, { ReactNode } from 'react';

export type FeedbackFormProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function FeedbackForm({ children }: FeedbackFormProps) {
  return (
    <div>
     <h1>This is feedback form</h1>
    </div>
  );
}
