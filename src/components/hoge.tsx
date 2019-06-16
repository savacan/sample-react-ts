import * as React from 'react';
import { css } from '@emotion/core';
import { withTheme } from 'emotion-theming'
import { Theme, PaletteType } from '../styles/theme';

interface HogeProps {
    theme: Theme,
    color: PaletteType
}


const Hoge:React.FC<HogeProps> = (props: HogeProps) => {
    const { theme, color } = props
    const styles = css({
        color: theme.palette[color]
    })
    return (
        <div css={styles}>Hoge {color}!</div>
    )
}

export default withTheme(Hoge);
