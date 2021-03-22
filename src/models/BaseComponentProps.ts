import cx from 'classnames'
import { RSStyleSheet } from '../helpers/RSStyleSheet'

const _commonKeys = ['lg', 'xs']

export class BaseComponentProps {
  
  get cssProperties() {
    return {}
  }

  get identifier() {
    return 'this.name'.replace('Props', '').toLowerCase()
  }

  get selector() {
    return `.s-${this.identifier}-[uuid]`
  }

  static props2CSSProperties = (p): React.CSSProperties => ({})

  
}
