export class StyleData {
  constructor(v: React.CSSProperties = {}) {
    Object.keys(v).forEach(
      k => ((this as any)[k] = v[k as keyof React.CSSProperties]),
    )
  }

  copyWith(v: React.CSSProperties) {
    return new StyleData({ ...this, ...v })
  }
}
