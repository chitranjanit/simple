import React from "react";

import "./style.css";

const Todo = () => {
  return (
    <>
      <div className="main-nav">
        <div className="child-div">
          <figure>
            <img src="./images/todo.svg" alt="todo" />
            <figcaption>Add Your List Hear</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              className="form-control"
              placeholder="Add items..."
            />
            <i className="fa fa-plus add-btn"></i>
          </div>

          {/* show our items */}
          <div className="showItems">
            <div className="eachItem">Kavita</div>
          </div>

          {/* Remove all button */}
          <div className="showItems">
            <button className="btn effect04" data-sm-link-text="Remove All">
              <span>CHECK LIST</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
