import { Colors } from './Colors'
import { TextThemeData } from './TextThemeData'

export class ThemeData {
  contentContainerWidth = '1080px'
  bodyContrastingColor = '#333'
  bodyBackground = '#F5F5F9'
  baseBorderRadius = '5px'
  colors = Colors
  textTheme = TextThemeData.defaultTextTheme

  static defaultTheme = new ThemeData({})

  constructor(v: Partial<ThemeData>) {
    Object.keys(v).forEach(k => ((this as any)[k] = v[k]))
  }

  copyWith(v: Partial<ThemeData>) {
    return new ThemeData({ ...this, ...v })
  }
}
