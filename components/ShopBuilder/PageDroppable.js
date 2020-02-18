import React from "react";
import { connect } from "react-redux";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const PageContainer = styled.div`
  height: 90vh;
  width: 90vw;
  border: 1px solid black;
`;

const PageDroppable = props => {
  return (
    <Container>
      <Droppable droppableId={props.dropId}>
        {(provided, snapshot) => (
          <PageContainer {...provided.droppableProps} ref={provided.innerRef}>
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
