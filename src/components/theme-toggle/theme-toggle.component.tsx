import React from 'react';
import { Component } from 'react';
import { Button } from 'react-native';
import { ColorTheme, StyleDefinition, ThemeDictionary } from '../../theming';
import { themes, IThemeToggleStyle } from './theme-toggle.styles';
import { connect } from 'react-redux';
import { setTheme } from '../../store/user-settings/actions';

import { store } from '../../store';
import { Unsubscribe } from 'redux';


type Props = {
    currentTheme: ColorTheme;
    onThemeChange: (theme: ColorTheme) => void;
    theme: StyleDefinition<IThemeToggleStyle>;
};

abstract class ThemedComponent<P = {}, T = any, S = {}, SS = any> extends Component<P, S, SS> {
    private unsubscribe: Unsubscribe;
    protected theme: StyleDefinition<T>;

    constructor(props) {
        super(props);

        const themes = this.getThemes();

        this.unsubscribe = store.subscribe(() => {
            this.theme = themes[store.getState().userSettings.colorTheme]
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    protected abstract getThemes(): ThemeDictionary<T>;
}

class ThemeToggleComponent extends ThemedComponent<Props, IThemeToggleStyle> {
    protected getThemes = () => themes;

    toggle() {
        // this.theme.examBtn
        this.props.onThemeChange(this.props.currentTheme === ColorTheme.Light ? ColorTheme.Dark : ColorTheme.Light);
    }

    render() {
        // this.theme
        // color={this.props.theme.examBtn.backgroundColor}
        return <Button
            title={this.props.currentTheme} onPress={() => this.toggle()} />;
    }
}


const mapState = (state: any): Partial<Props> => ({
    currentTheme: state.userSettings.colorTheme,
    theme: themes[state.userSettings.colorTheme]
});

const actions: Partial<Props> = { onThemeChange: setTheme };

export const ThemeToggle = connect(mapState, actions)(ThemeToggleComponent);
