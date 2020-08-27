import React from 'react';
import { Progress } from 'react-sweet-progress';

import './styles.scss';

export const Skill = ({ percent, name }) => {
  return (
    <div className="skillWrapper">
      <p>{name}</p>
      <Progress
        percent={percent}
        status="default"
        theme={{
          default: {
            color: '#ff3366',
            trailColor: '#fff',
          }
        }}
      />
    </div>
  );
}