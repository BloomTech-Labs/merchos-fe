import React, { useState, useEffect } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import { connect } from "react-redux";
import {
  updateLayoutAction,
  onDrop
} from "../store/actions/ShopBuilderActions";
import {
  BasicLayout,
  contentExample
} from "../components/ShopBuilder/Layouts/BasicLayout";
import ModalLayout from "../components/ShopBuilder/ModalLayout";
import SideBar from "../components/ShopBuilder/SideBar";
import styled from "styled-components";

const ResponsiveGridLayout = WidthProvider(Responsive);

const GridItemContainer = styled.div`
  background: red;
  font-size: 2rem;
`;

const Button = styled.button`
  font-size: 1.5rem;
`;

const Page = styled.div`
  background: blue;
  display: flex;
`;

const ShopContainer = styled.div`
  ${props => (props.blurContainer ? "filter: blur(2px);" : "")}
`;

const Container = styled(ResponsiveGridLayout)`
  min-height: 100px;
`;

const ShopBuilder = props => {
  const [displayModal, setDisplayModal] = useState(false);
  const sidebarLayout = props.state.SideBar.layout;

  let currentLayout = props.state.Page.layout;
  console.log("CURRENT_LAYOUT: ", currentLayout);

  const display = e => {
    setDisplayModal(!displayModal);
  };

  const onDrop = elemParams => {
    alert(
      `Element parameters:\n${JSON.stringify(
        elemParams,
        ["x", "y", "w", "h"],
        2
      )}`
    );
  };

  const dragging = (...itemCallback) => {
    console.log("DRAGGING: ", itemCallback);
  };

  return (
    <div>
      <ModalLayout displayModal={displayModal} display={display} />
      <ShopContainer blurContainer={displayModal}>
        <Button onClick={display}>Show Layouts</Button>
        <div>
          {sidebarLayout.map((item, index) => {
            return (
              <SideBar
                key={index}
                content={item.content}
                index={index}
                dataItem={`data-${index}`}
              />
            );
          })}
          <div>
            <ResponsiveGridLayout
              className="layout"
              layouts={{ lg: currentLayout }}
              breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
              cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
              onDrop={props.onDrop}
              measureBeforeMount={true}
              useCSSTransforms={true}
              isDroppable={true}
              preventCollision={false}
              // droppingItem={{ i: `${currentLayout.length}`, w: 1, h: 1 }}
              onLayoutChange={currentLayout => {
                props.updateLayoutAction(currentLayout);
              }}
            >
              {currentLayout.map((gridItem, index) => {
                console.log("MAPPING");
                return (
                  <GridItemContainer key={gridItem.i}>
                    {gridItem.i === "Filler"
                      ? "Drop Items Here"
                      : props.state.Page.content[index].content}
                  </GridItemContainer>
                );
              })}
            </ResponsiveGridLayout>
          </div>
        </div>
      </ShopContainer>
    </div>
  );
};

// export default ShopBuilder;
const mapStateToProps = state => {
  return {
    state: state.workspace
  };
};

export default connect(mapStateToProps, { updateLayoutAction, onDrop })(
  ShopBuilder
);
//changed name of page of shopbuilder back to ShopBuilder