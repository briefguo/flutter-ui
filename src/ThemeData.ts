import { Colors } from './Colors'
import { TextThemeData } from './TextThemeData'

export class ThemeData {
  static defaultTheme = {
    contentContainerWidth: 1080,
    bodyContrastingColor: '#333',
    bodyBackground: '#F5F5F9',
    baseBorderRadius: '5px',
    colors: Colors,
    textTheme: TextThemeData.defaultTextTheme,
  }
}
