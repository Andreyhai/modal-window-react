import React, {useState} from 'react';
import './Index.css';
import Modal from "./components/Modal";

function App() {

    const [opened, setOpened] = useState(false);
    const onClickOpen = () => {
        setOpened(true);
    }
    const onClickClose = () => {
        setOpened(false);
    }
    return (
      <div className="App">
        <button className="open-modal-btn" onClick={onClickOpen}>✨ Открыть окно</button>
          <Modal opened={opened} onClick={onClickClose} />
      </div>
  );
}

export default App;