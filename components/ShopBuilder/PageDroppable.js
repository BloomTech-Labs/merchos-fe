import React from "react";
import { connect } from "react-redux";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const PageContainer = styled.div`
  height: 100vh;
  width: 90vw;
  border: 1px solid black;
  background: ${props => (props.isDraggingOver ? "green" : "white")};
`;

//this component is the page component and is the main droppable
//that holds the rest of the draggable and droppable components
const PageDroppable = props => {
  return (
    <Container>
      {/*droppableId brought in from state in redux store */}
      <Droppable droppableId={props.dropId}>
        {/*provided passes down all the props required to make a container a draggable
        or droppable usable by DragDropContext, snapshot is an argument that takes
        the current snapshot of the events going on and can be used to style the
        containers based off of the current events like isDragging (used by draggable) 
        or isDraggingOver (used by droppable)*/}
        {(provided, snapshot) => (
          <PageContainer
            {...provided.droppableProps}
            ref={provided.innerRef}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {props.children}
            {provided.placeholder}
          </PageContainer>
        )}
      </Droppable>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    dropId: state.workspace.Page.id
  };
};

export default connect(mapStateToProps, {})(PageDroppable);
