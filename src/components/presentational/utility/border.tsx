import * as React from 'react';
import { BorderStyleProperty } from 'csstype';
import { PaletteType, Theme } from '../../../styles/theme';
import { withTheme } from 'emotion-theming';
import css from '@emotion/css';

export interface BorderDef {
    type: BorderStyleProperty,
    width: string,
    color: PaletteType
}

interface BorderProps {
    top?: BorderDef,
    bottom?: BorderDef,
    right?: BorderDef,
    left?: BorderDef,
    all?: BorderDef,
    theme: Theme
}

const genStyle = (theme: Theme) => ({ type, width, color }: BorderDef) => {
    return `${type} ${width} ${theme.palette[color]}`
}

const Border: React.FC<BorderProps> = ({ top, bottom, right, left, all, children, theme }) => {
    const gen = genStyle(theme);
    if (all) {
        return (
            <div css={css({ border: gen(all) })}>{children}</div>
        )
    } else {
        const topStyle = top ? { borderTop: gen(top) } : null;
        const bottomStyle = bottom ? { borderBottom: gen(bottom) } : null;
        const rightStyle = right ? { borderRight: gen(right) } : null;
        const leftStyle = left ? { borderRight: gen(left) } : null;
        const styles = css(...[topStyle, bottomStyle, rightStyle, leftStyle].filter(e => e))
        return (
            <div css={styles}>{children}</div>
        )
    }
}

export default withTheme(Border);