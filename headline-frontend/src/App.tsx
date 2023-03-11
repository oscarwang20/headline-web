import React from "react";
import { JsxAttribute, JsxElement } from "typescript";
import "./App.css";

const summaries: string[] = [
  `Lorem ipsum`,
  `dolor sit amet`,
  `consectetur adipiscing`,
  `elit`,
];

const links: string[] = [
  "http://google.com",
  "http://youtube.com",
  "http://cornell.edu",
  "http://xkcd.com",
];

function App() {
  return (
    <div className="App">
      <div className="m-scroll">
        <div className="m-scroll__title">
          <div>
            {summaries.map((item, index) => {
              return (
                <a className="article-link" href={links[index]}>
                  {item}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
