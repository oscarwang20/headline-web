import React from "react";
import { JsxAttribute, JsxElement } from "typescript";
import "./App.css";

const summaries: string[] = [
  `Lorem ipsum`,
  `dolor sit amet`,
  `consectetur adipiscing`,
  `elit`,
  `sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non enim praesent elementum facilisis leo vel fringilla est. Nibh cras pulvinar mattis nunc. Dictum fusce ut placerat orci nulla pellentesque dignissim enim. Aliquet risus feugiat in ante metus dictum at. Nulla facilisi morbi tempus iaculis urna. Scelerisque purus semper eget duis at tellus. Lobortis feugiat vivamus at augue. Sit amet est placerat in egestas erat imperdiet. Facilisi nullam vehicula ipsum a. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Sem et tortor consequat id porta nibh venenatis. Eu ultrices vitae auctor eu. Semper risus in hendrerit gravida rutrum quisque. Tempor orci eu lobortis elementum nibh tellus molestie nunc. Nulla facilisi cras fermentum odio eu feugiat pretium nibh. In fermentum posuere urna nec tincidunt praesent semper feugiat. Massa tincidunt dui ut ornare lectus sit. Viverra tellus in hac habitasse platea dictumst vestibulum.

  Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. In fermentum posuere urna nec tincidunt praesent semper. Porttitor leo a diam sollicitudin. Ut pharetra sit amet aliquam id diam maecenas ultricies mi. Ultricies leo integer malesuada nunc vel risus commodo. Augue interdum velit euismod in pellentesque massa placerat duis. Commodo sed egestas egestas fringilla phasellus. Quis risus sed vulputate odio. Id eu nisl nunc mi ipsum faucibus vitae. Aliquam id diam maecenas ultricies mi eget mauris pharetra et. Elementum nisi quis eleifend quam adipiscing vitae proin. Est placerat in egestas erat imperdiet.
  `,
  `a`,
];

const links: string[] = [
  "http://google.com",
  "http://youtube.com",
  "http://cornell.edu",
  "http://xkcd.com",
  "http://github.com",
  "http://figma.com",
];

function App() {
  return (
    <div className="App">
      <div className="scroll_text">
        {summaries.map((item, index) => {
          return (
            <a className="article-link" href={links[index]}>
              {item}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default App;
