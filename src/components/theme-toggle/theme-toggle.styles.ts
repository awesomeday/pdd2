import { StyleSheet, ViewStyle } from 'react-native';
import { ThemeDictionary } from '../../theming';


export interface IThemeToggleStyle {
    examBtn: ViewStyle;
}

const light: IThemeToggleStyle = {
    examBtn: {
        backgroundColor: 'red'
    }
};

const dark: IThemeToggleStyle = {
    examBtn: {
        ...light.examBtn,
        backgroundColor: 'blue'
    }
};

export const themes: ThemeDictionary<IThemeToggleStyle> = {
    Light: StyleSheet.create(light),
    Dark: StyleSheet.create(dark)
};
