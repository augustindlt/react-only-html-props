## react-only-html-props

![Build Status](https://img.shields.io/circleci/build/github/augustindlt/react-only-html-props)
[![Coverage Status](https://coveralls.io/repos/github/augustindlt/react-only-html-props/badge.svg?branch=master)](https://coveralls.io/github/augustindlt/react-only-html-props?branch=master)
[![NPM Version](https://img.shields.io/npm/v/react-only-html-props)](https://www.npmjs.com/package/react-only-html-props)

ohp allows to filter props to get only the react html props.

### Problem :

```js
import React, { useState } from "react";

const ArticlesList = props => {
  return (
    // source of the problem ({...props})
    <div {...props}>
      <ul>
        {props.articles.map((article, i) => (
          <li key={i}>{article.title}</li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  const articles = [{ title: "My super article" }, { title: "Lorem ipsum" }];
  const [, setEditingArticle] = useState();
  return (
    <div className="App">
      <ArticlesList
        articles={articles}
        style={{ background: "#fff" }}
        setEditingArticle={setEditingArticle}
      />
    </div>
  );
};

export default App;
```

The code below will trigger this warning :

```
Warning: React does not recognize the `setEditingArticle` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `seteditingarticle` instead. If you accidentally passed it from a parent component, remove it from the DOM element.
```

### Fix :

```js
import React, { useState } from "react";
import { ohp } from "react-only-html-props";

const ArticlesList = props => {
  return (
    // solution of the problem ({...ohp(props)})
    <div {...ohp(props)}>
      <ul>
        {props.articles.map((article, i) => (
          <li key={i}>{article.title}</li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  const articles = [{ title: "My super article" }, { title: "Lorem ipsum" }];
  const [, setEditingArticle] = useState();
  return (
    <div className="App">
      <ArticlesList
        articles={articles}
        style={{ background: "#fff" }}
        setEditingArticle={setEditingArticle}
      />
    </div>
  );
};

export default App;
```
