import React, {useState, useEffect} from 'react';
import {Modal, Button, Image} from 'semantic-ui-react';

const Reward = ({numberOfTasks, percent, displayReward, setDisplayReward}) => {
  const [imageSrc, setImageSrc] = useState('');
  useEffect(() => {
    fetch(
      'https://api.giphy.com/v1/gifs/search?api_key=6HvmD6vNi4roJGlzkFNhEy8NGHa7VM1U&q=success&limit=25&offset=0&rating=g&lang=en'
    )
      .then((response) => {
        return response.json();
      })
      .then((myContent) => {
        setImageSrc(
          myContent.data[Math.floor(Math.random() * myContent.data.length)]
            .images.original.url
        );
      });
  }, [displayReward]);
  return (
    <Modal
      open={percent === 100 && displayReward}
      size="tiny"
      onClose={() => setDisplayReward(false)}
    >
      <Modal.Header>Success, you completed {numberOfTasks} goals today!</Modal.Header>
      <Modal.Content>
        <Image src={imageSrc} style={{width: "100%"}}/>
      </Modal.Content>
      <Modal.Actions>
        <Button positive onClick={() => setDisplayReward(false)}>
          Great!
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default Reward;
