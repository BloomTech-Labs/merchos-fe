import React, { useState, useEffect } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import { connect } from "react-redux";
import {
  updateLayoutAction,
  onDrop,
  onBreakpointChange,
  onWidthChange
} from "../store/actions/ShopBuilderActions";
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
  width: 100%;
  display: flex;
`;

const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const DropZone = styled.div`
  width: 100%;
  height: 100%;
  min-height: 500px;
`;

const ShopContainer = styled.div`
  ${props => (props.blurContainer ? "filter: blur(2px);" : "")}
`;

const ShopBuilder = props => {
  const [displayModal, setDisplayModal] = useState(false);
  const [dragId, setDragId] = useState();
  const sidebarLayout = props.state.SideBar.layout;

  const currentLayout = props.state.Page.layout;

  const display = e => {
    setDisplayModal(!displayModal);
  };

  const placeholderSize = id => {
    switch (id) {
      case "banner":
        return { w: 12, h: 2 };
      case "product-container":
        return { w: 1, h: 3 };
      case "store-name":
        return { w: 12, h: 1 };
      default:
        return { w: 1, h: 1 };
    }
  };

  return (
    <div>
      <ModalLayout displayModal={displayModal} display={display} />
      <ShopContainer blurContainer={displayModal}>
        <Button onClick={display}>Show Layouts</Button>
        <Page>
          <SideBarContainer>
            {sidebarLayout.map((item, index) => {
              return (
                <SideBar
                  key={index}
                  content={item.content}
                  itemId={item.id}
                  setDragId={setDragId}
                />
              );
            })}
          </SideBarContainer>
          <DropZone>
            <ResponsiveGridLayout
              className="layout"
              layouts={{ lg: currentLayout }}
              breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 360 }}
              cols={{ lg: 12, md: 9, sm: 6, xs: 3 }}
              onDrop={item => {
                props.onDrop(item, dragId);
              }}
              measureBeforeMount={true}
              useCSSTransforms={true}
              isDroppable={true}
              preventCollision={false}
              onLayoutChange={currentLayout => {
                props.updateLayoutAction(currentLayout);
              }}
              // onBreakpointChange={props.onBreakpointChange}
              onWidthChange={props.onWidthChange}
              droppingItem={{
                i: `${dragId}__dropping-elem__`,
                ...placeholderSize(dragId)
              }}
              margin={[10, 75]}
              style={{
                background: "blue",
                minHeight: "500px",
                width: "100vw",
                paddingTop: "0"
              }}
              rowHeight={75}
            >
              {currentLayout.map((gridItem, index) => {
                return (
                  <GridItemContainer key={gridItem.i}>
                    {props.state.Page.content.length
                      ? `${props.state.Page.content[index].content}-${gridItem.i}`
                      : "+"}
                  </GridItemContainer>
                );
              })}
            </ResponsiveGridLayout>
          </DropZone>
        </Page>
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

export default connect(mapStateToProps, {
  updateLayoutAction,
  onDrop,
  onBreakpointChange,
  onWidthChange
})(ShopBuilder);
//changed name of page of shopbuilder back to ShopBuilder
