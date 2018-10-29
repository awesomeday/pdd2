import { ColorTheme } from '.';
import { RegisteredStyle } from 'react-native';


export type StyleDefinition<T> = { [P in keyof T]: RegisteredStyle<T[P]> }

export type ThemeDictionary<T> = { [key in keyof typeof ColorTheme]: StyleDefinition<T> }
