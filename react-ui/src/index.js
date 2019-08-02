import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import connect from '@vkontakte/vkui-connect';
import '@vkontakte/vkui/dist/vkui.css';

// Init VK App
connect.send('VKWebAppInit', {});


ReactDOM.render(<App />, document.getElementById('root'));
