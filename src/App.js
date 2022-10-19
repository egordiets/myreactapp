import './App.css';
import React, {useState, useCallback, useRef, useEffect, useId} from 'react';
import MyHeader from './components/Message.js';

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //     <MyHeader name={"Dear"}/>
  //     </header>
  //   </div>
  // );

  const [messageList, setMessageList] = useState([]);
  const [messageBody, setMessageBody] = useState({
    text: '',
    author:''
  });

  const ROBOT_MESSAGE = 'Привет! Твоё сообщение получено.';

  useEffect(() => {
    if(messageList.length > 0 && messageList.slice(-1)[0].author !== 'robot'){
      setTimeout(() => {
        setMessageList(prevstate => [...prevstate, {text:ROBOT_MESSAGE, author:'robot'}])
      }, 1500)
    }
  }, [messageList])

  return (
    <div className="App">
      <Form data = {messageBody} setData = {setMessageBody} setMessage = {setMessageList}></Form>
      <div>
        {
          messageList.map((e,i) => <Message text = {e.text} author = {e.author} key = {i}/>)
        }
      </div>
    </div>
  )
}

export default App;
