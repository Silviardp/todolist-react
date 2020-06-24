import React from "react";
import "./ListItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlipMove from "react-flip-move";
import { Droppable } from "react-beautiful-dnd";
import { Draggable } from "react-beautiful-dnd";

function ListItems(props) {
  const items = props.items;

  const listItems = items.map((item) => {
    return (
      <div className="list" key={item.key}>
        <p>
          <input
            type="text"
            id={item.key}
            value={item.text}
            onChange={(e) => {
              props.setUpdate(e.target.value, item.key);
            }}
          />
          <span>
            <FontAwesomeIcon
              className="faicons"
              icon="trash"
              onClick={() => {
                props.deleteItem(item.key);
              }}
            />
          </span>
        </p>
      </div>
    );
  });

  return (
    <Droppable droppableId={id}>
      {(provided) => (
        <div
          className="todo-app"
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          <FlipMove duration={300} easing="ease-in-out">
            {listItems}
          </FlipMove>
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

export default ListItems;
