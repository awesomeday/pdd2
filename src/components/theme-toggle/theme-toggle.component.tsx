import React from 'react';
import { Component } from 'react';
import { Button } from 'react-native';
import { ColorTheme } from '../../models';
import { s } from './theme-toggle.styles';


export type ValueProps = {
    currentTheme: ColorTheme
};

export type ActionProps = {
    onThemeChange: (theme: ColorTheme) => void
};

export type Props = ValueProps & ActionProps;

export class ThemeToggleComponent extends Component<Props> {
    toggle() {
        this.props.onThemeChange(this.props.currentTheme === ColorTheme.Light ? ColorTheme.Dark : ColorTheme.Light);
    }

    render() {
        return (
            <Button color={s[this.props.currentTheme].backgroundColor} 
                    title={this.props.currentTheme} onPress={() => this.toggle()}/>
        );
    }
}
