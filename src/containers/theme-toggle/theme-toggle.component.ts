import { setTheme } from '../../store/user-settings/actions';
import { connect } from 'react-redux';
import { ThemeToggleComponent, Props } from '../../components/theme-toggle';


// todo: IAppState + readonly
const mapState = (state: any): Partial<Props> => ({ currentTheme: state.userSettings.colorTheme });
const actions: Partial<Props> = { onThemeChange: setTheme };

export const ThemeToggle = connect(mapState, actions)(ThemeToggleComponent);
