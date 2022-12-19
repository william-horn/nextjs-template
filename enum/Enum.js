

const enumCollectionPrototype = {
  _test() {
    console.log('Enum Collection method');
  }
}

const enumItemPrototype = {
  _test() {
    console.log('Enum Item method');
  }
}

export const EnumItem = function(fields) {
  Object.assign(this, fields);
}

export const EnumCollection = function(enumItems, options={}) {
  const {
    valuePrefix
  } = options;

  if (valuePrefix) {
    for (let key in enumItems) {
      const enumItem = enumItems[key];
      enumItem.value = valuePrefix + enumItem.value;
    }
  }

  Object.assign(this, enumItems);
}

Object.assign(EnumItem.prototype, enumItemPrototype);
Object.assign(EnumCollection.prototype, enumCollectionPrototype);

