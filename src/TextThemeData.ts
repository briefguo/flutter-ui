import { Colors } from './Colors'
import { StyleData } from './StyleData'

export class TextThemeData {
  // level
  static default = new StyleData({
    fontSize: 14,
  })
  static small = new StyleData({
    fontSize: 12,
  })
  static middle = new StyleData({
    fontSize: 17,
  })
  static large = new StyleData({
    fontSize: 24,
  })
  static xlarge = new StyleData({
    fontSize: 36,
  })
  static xxlarge = new StyleData({
    fontSize: 48,
  })

  static defaultTextTheme = new TextThemeData({
    ...TextThemeData,
    title: TextThemeData.middle,
    description: TextThemeData.small.copyWith({ color: Colors.secondary }),
    body: TextThemeData.default,
  })

  constructor(v: { [key: string]: StyleData }) {
    Object.keys(v).forEach(k => ((this as any)[k] = v[k]))
  }

  copyWith(v: { [key: string]: StyleData }) {
    return new TextThemeData({ ...this, ...v })
  }
}
