
import { EnumCollection, EnumItem } from './Enum';

const StorageKeys = new EnumCollection({
  Theme: new EnumItem({
    value: 'current-theme',
    info: 'the currently selected theme'
  }),

  SearchHistory: new EnumItem({
    value: 'search-history',
    info: 'locally saved search queries'
  })
}, {
  valuePrefix: 'app-name:'
})

export default StorageKeys;
