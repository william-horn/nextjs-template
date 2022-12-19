
import { EnumCollection, EnumItem } from './Enum';

const Themes = new EnumCollection({
  Default: new EnumItem({
    value: 'default',
    info: 'the default theme'
  })
}, {
  valuePrefix: 'theme-'
})

export default Themes;
