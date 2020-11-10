import './App.css';
import React, {useState, useEffect} from 'react';

import Title from './components/title';
import MotivationalQuote from './components/motivational-quote';
import TaskInput from './components/task-input';
import Tasks from './components/tasks';
import Footer from './components/footer';
import ProgressBar from './components/progress-bar';
import Reward from './components/reward';
import {Container, Segment} from 'semantic-ui-react';

// has de fer servir això per les imatges recompensa: https://thecatapi.com/

function App() {
  const [displayReward, setDisplayReward] = useState(true);
  const [currentTask, setCurrentTask] = useState('');
  const [tasks, setTasks] = useState([
    {text: "Clean your room", checked: false, id: '001'},
    {text: 'Do amazing sh**', checked: true, id: '002'},
  ]);

  useEffect(() => {
    setDisplayReward(true);
  }, [tasks])

  const percent =
    (tasks.reduce((acc, item) => (item.checked ? acc + 1 : acc), 0) * 100) /
    tasks.length;
  return (
    <div className="App">
      <Container text>
        <Title />
        <MotivationalQuote />
        <Segment.Group stacked>
          <Segment>
            <TaskInput
              currentTask={currentTask}
              setCurrentTask={setCurrentTask}
              setTasks={setTasks}
              tasks={tasks}
            />
          </Segment>
          <Segment>
            <Tasks tasks={tasks} setTasks={setTasks} />
          </Segment>
          <Segment>
            <ProgressBar percent={percent} />
          </Segment>
        </Segment.Group>
        <Reward
          numberOfTasks={tasks.length}
          percent={percent}
          displayReward={displayReward}
          setDisplayReward={setDisplayReward}
        />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
