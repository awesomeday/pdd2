import React from 'react';
import { Component } from 'react';
import { Button } from 'react-native';
import { ColorTheme, StyleDefinition } from '../../theming';
import { themes, IThemeToggleStyle } from './theme-toggle.styles';
import { connect } from 'react-redux';
import { setTheme } from '../../store/user-settings/actions';


type Props = {
    currentTheme: ColorTheme;
    onThemeChange: (theme: ColorTheme) => void;
    theme: StyleDefinition<IThemeToggleStyle>;
};

class ThemeToggleComponent extends Component<Props> {
    toggle() {
        this.props.onThemeChange(this.props.currentTheme === ColorTheme.Light ? ColorTheme.Dark : ColorTheme.Light);
    }

    render() {
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
