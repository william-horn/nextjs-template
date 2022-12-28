
/*
pageData {
  Page {
    title: "Example",
    renderedName: "Example",
    id: "example",
    url: "/example",
    layout {
      name: "ExampleLayout",
      components {
        header: "transition" | "hide",
        ...
      }
    }
  }
}
*/

import Enum from '../enum';

const Page = function(settings) {
  Object.assign(this, settings);
}

Object.assign(Page.prototype, {
  // add methods for page
});

const pageConfig = {
  Home: new Page({
    title: "Home",
    renderedName: "Home",
    id: "home",
    url: "/",
    layout: { name: Enum.LayoutNames.ExampleLayout.value }
  }),
  
  Example: new Page({
    title: "Example",
    renderedName: "Example",
    id: "example",
    url: "/example",
    layout: {
      name: Enum.LayoutNames.ExampleLayout.value,
    }
  }),

  _404: new Page({
    title: "Not Found",
    id: "not_found",
    url: "/_error"
  })
}

export const findPageByUrl = url => {
  for (let key in pageConfig) {
    const page = pageConfig[key];
    if (page.url === url) {
      return page;
    }
  }

  console.log(`INTERNAL ERROR: No such page exists for url: '${url}'`);
  return pageConfig._404;
}

export default pageConfig;

