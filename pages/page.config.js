
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
    layout: {}
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
}

export const findPageByUrl = url => {
  for (let key in pageConfig) {
    const page = pageConfig[key];
    if (page.url === url) {
      return page;
    }
  }
}

export default pageConfig;

