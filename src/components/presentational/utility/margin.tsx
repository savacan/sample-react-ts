import * as React from 'react';
import { SizeType, Theme } from '../../../styles/theme';
import css from '@emotion/css';
import { withTheme } from 'emotion-theming';

interface MarginProps {
    top?: SizeType,
    bottom?: SizeType,
    right?: SizeType,
    left?: SizeType,
    theme: Theme
}


const Margin:React.FC<MarginProps> = ({top='none', bottom='none', right='none', left='none', children, theme}) => {
    const gen = (key: SizeType): string => theme.size[key];
    const styles = css({marginTop: gen(top), marginBottom: gen(bottom), marginRight: gen(right), marginLeft: gen(left)});
    return (
        <div css={styles}>{children}</div>
    )
}

export default withTheme(Margin);