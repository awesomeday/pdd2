import { ColorTheme } from './color-theme';
import { Entity, Column } from 'typeorm/browser';


@Entity()
export class UserSettings {
    @Column()
    colorTheme: ColorTheme;
}
