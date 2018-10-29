import { ColorTheme } from '../theming';
import { Entity, Column } from 'typeorm/browser';


@Entity()
export class UserSettings {
    @Column()
    colorTheme: ColorTheme;
}
