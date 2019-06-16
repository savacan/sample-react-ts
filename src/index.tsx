import * as React from 'react';
import { render } from 'react-dom';
import Hoge from './components/hoge';

import { ThemeProvider } from 'emotion-theming';
import { Global } from '@emotion/core';

import defaultTheme from './styles/theme';
import globalCss from './styles/global';
import Margin from './components/presentational/utility/margin';
import Padding from './components/presentational/utility/padding';
import Border, { BorderDef } from './components/presentational/utility/border';

const testObj:BorderDef = {
    type: 'solid',
    width: '1px',
    color: 'accent'
}

const Main: React.FC = () => (
    <div>
        <ThemeProvider theme={defaultTheme}>
            <Global styles={globalCss} />
            <div>Hello, Happy World!</div>
            <Margin top='m' bottom='m'>
                <Hoge color='primary'></Hoge>
            </Margin>
            <Padding top='m' bottom='m'>
                <Hoge color='secondary'></Hoge>
            </Padding>
            <Border top={testObj} bottom={Object.assign({}, testObj, {type: 'dashed', width: '2px'})}>
                <Hoge color='strongAccent'></Hoge>
            </Border>
            <Hoge color='accent'></Hoge>
        </ThemeProvider>
    </div>
);

render(<Main />, document.getElementById('root'));