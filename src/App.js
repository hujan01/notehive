import React, { useState } from 'react';
import { Button } from 'antd';
import axios from 'axios';


export default function App() {
    const [msg, setMsg] = useState();

    const sendMsg = () => {
        console.log('sendMsg');
        axios.get('/api/getMessage')
        .then(function (response) {
            console.log(response.data);
            setMsg(response.data)
        })
    }

    return (
        <div>
            <Button type="primary" onClick={sendMsg}>发送消息</Button>
            <div>{msg}</div>
        </div>
    )
}