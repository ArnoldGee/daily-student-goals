import React from 'react';
import _uniqueId from 'lodash/uniqueId';
import {Form, Input} from 'semantic-ui-react';

function TaskInput({currentTask, setCurrentTask, tasks, setTasks}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, {text: currentTask, checked: false, id: _uniqueId("id-")}]);
    setCurrentTask("");
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Input
          value={currentTask}
          onChange={(e) => setCurrentTask(e.target.value)}
          fluid
          icon="paper plane"
          placeholder="Add a goal and press Enter!"
        />
      </Form>
    </div>
  );
}

export default TaskInput;
