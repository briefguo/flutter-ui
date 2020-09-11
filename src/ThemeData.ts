import { Colors } from './Colors'
import { TextThemeData } from './TextThemeData'

export class ThemeData {
  static defaultTheme = {
    defaultBodyBackground: '#F5F5F9',
    defaultContrastingColor: '#333',
    baseBorderRadius: '5px',
    colors: Colors,
    textTheme: TextThemeData.defaultTheme,
  }
}
