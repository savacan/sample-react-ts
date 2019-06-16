// theme色の定義

export type PaletteType = 'base' | 'primary' | 'secondary' | 'strongAccent' | 'accent';

interface Palette {
    'base': string,
    'primary': string,
    'secondary': string,
    'strongAccent': string,
    'accent': string
}

// 共通で使うpx定義

export type SizeType = 'ss'|'s'|'ms'|'m'|'ls'|'l'|'ll'|'xl'|'none'

interface Size {
    none: string,
    ss: string,
    s: string,
    ms: string,
    m: string,
    ls: string,
    l: string,
    ll: string,
    xl: string
}

export interface Theme {
    palette: Palette,
    size: Size
}


const defaultTheme: Theme = {
    palette: {
        base: '#EAE7DC',
        primary: '#8E8D8A',
        secondary: '#D8C3A5',
        strongAccent: '#E85A4F',
        accent: '#E98074'
    },
    // 暫定的に
    size: {
        none: '0px',
        ss: '2px',
        s: '4px',
        ms: '8px',
        m: '12px',
        ls: '16px',
        l: '24px',
        ll: '32px',
        xl: '64px'
    }
}

export default defaultTheme