import React from 'react';
import {Divider, Checkbox} from 'semantic-ui-react';

const Tasks = ({tasks, setTasks}) => {
  const handleChange = (clickedIndex) => {
    setTasks(
      tasks.map(
        (item, index) =>
          index === clickedIndex ? {checked: !item.checked, text: item.text, id: item.id} : item
      )
    );
  };
  return (
    <div>
      {tasks.map((item, index) => {
        return (
          <div key={item.id}>
            {index !== 0 && <Divider />}
            <Checkbox
              onChange={() => handleChange(index)}
              checked={item.checked}
              label={<label>{item.text}</label>}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Tasks;
