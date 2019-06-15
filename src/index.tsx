import * as React from 'react';
import { render } from 'react-dom';
import Hoge from './components/hoge';

const Main: React.FC = () => (
    <div>
        <div>Hello, Happy World!</div>
        <Hoge></Hoge>
    </div>
);

render(<Main />, document.getElementById('root'));