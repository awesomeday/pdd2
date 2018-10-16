import { setTheme } from '../../store/user-settings/actions';
import { connect } from 'react-redux';
import { ThemeToggleComponent, ValueProps, ActionProps } from '../../components/theme-toggle';


const mapState = (state: any): ValueProps => ({ currentTheme: state.userSettings.colorTheme });
const actions: ActionProps = { onThemeChange: setTheme };

export const ThemeToggle = connect(mapState, actions)(ThemeToggleComponent);
