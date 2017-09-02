import root from '../app';
import Home from '../pages/Home.js';
import Splash from '../pages/Splash.js';

const Pages = {
  '/home': {
    component: Home,
    params: {},
  },
  '/splash': {
    component: Splash,
    params: {},
  }
};

const Router = {
  gotoPage: (path, data) => {
    let page = Pages[path];
    let router = {
      ...page,
      component: page.component,
      params: {
        ...page.params,
        ...data
      }
    };
    root.getInstance().push(router);
  },

  pop: (num = 1) => {
    root.getInstance().pop(num);
  },

  popToRoot: () => {
    root.getInstance().popToRoot();
  },

  replace: (path, data) => {
    let page = Pages[path];
    console.log(page.component);
    let router = {
      ...page,
      component: page.component,
      params: {
        ...page.params,
        ...data
      }
    };
    root.getInstance().replace(router);
  },
  pages: Pages,
}

export default Router;
