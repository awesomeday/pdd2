import React from 'react';
import { Component } from 'react';
import { Button } from 'react-native';
import { setTheme } from '../../store/user-settings/actions';
import { ColorTheme } from '../../models';
import { connect } from 'react-redux';
import { s } from './theme-toggle.styles';


type Props = {
    currentTheme: ColorTheme
    setTheme: typeof setTheme
};

class ThemeToggleComponent extends Component<Props> {
    toggle() {
        this.props.setTheme(this.props.currentTheme === ColorTheme.Light ? ColorTheme.Dark : ColorTheme.Light);
    }

    render() {
        return (
            <Button color={s[this.props.currentTheme].backgroundColor} title={this.props.currentTheme} onPress={() => this.toggle()}/>
        );
    }
}


export const ThemeToggle = connect(
    (state: any) => ({ currentTheme: state.userSettings.colorTheme }),
    { setTheme }
    )(ThemeToggleComponent);
