import React from "react";
import { connect } from "react-redux";
import { selectLayoutAction } from "../../store/actions/ShopBuilderActions";
import styled from "styled-components";

const Container = styled.div`
  ${props => (props.displayModal ? "" : "display: none;")}
  position: fixed;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;

const Modal = styled.div`
  display: inherit;
  position: absolute;
  width: 200px;
  height: 400px;
  background: rgba(25, 181, 254, 1);
  margin: 15% 50%;
`;

const LayoutContainer = styled.div`
  display: inherit;
  border-radius: 5px;
  min-width: 10px;
  height: 20px;
  text-align: center;
  background: white;
`;

const ModalLayout = props => {
  return (
    <Container
      displayModal={props.displayModal}
      onClick={() => props.display(prevState => !prevState)}
    >
      <Modal>
        {props.layouts.map((layout, index) => {
          return (
            <LayoutContainer
              key={index}
              onClick={() => props.selectLayoutAction(layout)}
            >
              {layout}
            </LayoutContainer>
          );
        })}
      </Modal>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    layouts: state.workspace.Page.layoutType
  };
};

export default connect(mapStateToProps, { selectLayoutAction })(ModalLayout);
