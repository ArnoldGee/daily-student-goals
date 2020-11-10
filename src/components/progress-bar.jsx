import React from 'react';
import {Progress} from 'semantic-ui-react';

const ProgressBar = ({percent}) => {
  return (
    <div>
      <Progress
        percent={percent}
        progress="percent"
        label="Progress"
        indicating
      />
    </div>
  );
};

export default ProgressBar;
