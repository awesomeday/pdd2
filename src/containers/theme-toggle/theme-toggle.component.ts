import { setTheme } from '../../store/user-settings/actions';
import { connect } from 'react-redux';
import { ThemeToggleComponent } from '../../components/theme-toggle';
import { PropsType } from '../../utility/type-helpers';

// todo: IAppState + readonly
const mapState = (state: any): PropsType<ThemeToggleComponent> => ({ currentTheme: state.userSettings.colorTheme });
const actions: PropsType<ThemeToggleComponent> = { onThemeChange: setTheme };

export const ThemeToggle = connect(mapState, actions)(ThemeToggleComponent);
