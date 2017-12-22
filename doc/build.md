## 框架构建过程
### 1.初始化

```
 npm install -g create-react-app  
 create-react-app my-app  
 cd my-app/  
 npm start  
```

### 2.配置bootstrap

```
npm install --save bootstrap@4.0.0-beta.2
npm install --save reactstrap@next react@^16.0.0 react-dom@^16.0.0
```
 在 src/index.js 引入样式
 ```
import 'bootstrap/dist/css/bootstrap.css';
```

在 src/App.js 引入组件:
```
import { Button } from 'reactstrap';
```
参考：https://reactstrap.github.io/


### 3.接入路由

```
yarn add react-router-dom 
```

Routes.js
````
import React, {Component} from 'react';
import Page from './components/Page';

import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

class Routes extends Component {
  render() {
    return (
        <BrowserRouter>
          <Switch>
          <Route path="*" component={Page}/>
          </Switch>
        </BrowserRouter>
    );
  }
}

export default Routes;

````

components/Page.js
```
import React, { Component } from 'react';
   
   import { Badge, Button } from 'reactstrap';
   import {Link} from 'react-router-dom';
   
   class Page extends Component {
     render() {
       return (
           <div>
             <ul>
               <li><Link to="/app">Public Page</Link></li>
               <li><Link to="/page">Protected Page</Link></li>
             </ul>
             <Button color="primary" outline>
               Page <Badge color="secondary">4</Badge>
             </Button>
           </div>
       );
     }
   }
   
   export default Page;
```

App.js
```
import React, { Component } from 'react';
import Routes from './Routes';

import './App.css';
class App extends Component {
  render() {
      return <Routes />;
  }
}

export default App;


```
使用文档
https://reacttraining.com/react-router/web/example/auth-workflow

### 4.配置redux

```
yarn add redux
yarn add react-redux
```

修改App.js
```
+ import reducers from './reducers'
+ import { createStore } from 'redux'
+ import { Provider } from 'react-redux'
+ import { combineReducers } from 'redux'

-  render() {
-      return <Routes />;
-  }

+ render() {
+
+    let store = createStore(
+        combineReducers(reducers),
+        window.__REDUX_DEVTOOLS_EXTENSION__ &&
+        window.__REDUX_DEVTOOLS_EXTENSION__()
+    );
+    return <Provider store={store}>
+      <Routes/>
+    </Provider>;
+  }
```

reducers.js
```
const reducers = {
}
export default reducers
```


### 5.对默认配置进行自定义

引入 react-app-rewired 并修改 package.json 里的启动配置。
```
yarn add react-app-rewired --dev
```

/* package.json */
```
"scripts": {
-   "start": "react-scripts start",
+   "start": "react-app-rewired start",
-   "build": "react-scripts build",
+   "build": "react-app-rewired build",
-   "test": "react-scripts test --env=jsdom",
+   "test": "react-app-rewired test --env=jsdom",
}
```

然后在项目根目录创建一个 config-overrides.js 用于修改默认配置。  
```
const {injectBabelPlugin} = require('react-app-rewired');
var path = require('path');

module.exports = function override(config, env) {
  //实现 actions components 绝对路径引入
  config.resolve.alias = {
    actions: path.join(process.cwd(), './src/actions'),
    components: path.join(process.cwd(), './src/components'),
  };

  return config;
};
```
参考文档  
https://ant.design/docs/react/use-with-create-react-app-cn  

markdown语法  
http://xianbai.me/learn-md/article/syntax/paragraphs-and-line-breaks.html

