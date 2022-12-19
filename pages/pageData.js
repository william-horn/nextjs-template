
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

const LayoutNames = {

}

const Page = function(settings) {
  Object.assign(this, settings);
}

Object.assign(Page.prototype, {
  // add methods for page
});

const pageData = {
  Example: new Page({
    title: "Example",
    renderedName: "Example",
    id: "example",
    url: "/example",
    layout: {
      name: LayoutNames.ExampleLayout,
    }
  }),
}

export const findPageByUrl = url => {
  for (let key in pageData) {
    const page = pageData[key];
    if (page.url === url) {
      return page;
    }
  }
}

export default pageData;

