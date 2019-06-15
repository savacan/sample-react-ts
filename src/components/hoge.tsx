import * as React from 'react';
import * as emotion from '@emotion/core';


const Hoge:React.FC = () => {
    return (
        <div css={emotion.css({color: 'red'})}>Hoge red!</div>
    )
}

export default Hoge;
