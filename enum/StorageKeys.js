
import { EnumCollection, EnumItem } from './Enum';

const StorageKeys = new EnumCollection({
  Theme: new EnumItem({
    value: 'current-theme',
    info: 'the currently selected theme'
  })
}, {
  valuePrefix: 'app-name:'
})

export default StorageKeys;
