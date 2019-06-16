import * as React from 'react';
import { SizeType, Theme } from '../../../styles/theme';
import css from '@emotion/css';
import { withTheme } from 'emotion-theming';

interface PaddingProp {
    top?: SizeType,
    bottom?: SizeType,
    right?: SizeType,
    left?: SizeType,
    theme: Theme
}

const Padding: React.FC<PaddingProp> = ({top='none', bottom='none', right='none', left='none', children, theme}) => {
    const gen = (key: SizeType): string => theme.size[key];
    const styles = css({paddingTop: gen(top), paddingBottom: gen(bottom), paddingRight: gen(right), paddingLeft: gen(left)});
    return <div css={styles}>{children}</div>
}

export default withTheme(Padding);