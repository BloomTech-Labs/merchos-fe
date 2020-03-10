import { Droppable } from "react-beautiful-dnd";
/**
 * 1. Specify the accepted types.
 */
const types = ["PRODUCTS", "GENERAL"];

/**
 * 2. Create a nested Droppable component, each of which contains
 *    the different type that it can accept.
 */
const DropConditions = types.reduce(
  (Wrapper, type, index) => ({ children }) => (
    <Wrapper>
      <Droppable type={type} droppableId={`droppable-${index}`}>
        {provided => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {children}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </Wrapper>
  ),
  React.Fragment
);

export default DropConditions;
