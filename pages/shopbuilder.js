import React, { useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import { connect } from "react-redux";
import {
  updateLayoutAction,
  onDrop
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
  border-radius: 0 45px 45px 0;
  background: #EEE;
  box-shadow: -2px -2px 6px 2px #FFF, 2px 2px 6px 2px #8e9093;
  `;

const SideBarTitle= styled.div`
background: #464646;
color: white;
font-size: 2.4vw;
border-radius: 0 45px 0  0;
padding: 3%;
text-align: center;
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

  const sidebarLayout = props.state.SideBar.layout;

  const currentLayout = props.state.Page.layout;

  const display = e => {
    setDisplayModal(!displayModal);
  };

  return (
    <div>
      <ModalLayout displayModal={displayModal} display={display} />
      <ShopContainer blurContainer={displayModal}>
        <Button onClick={display}>Show Layouts</Button>
        <Page>
          {/* side bar that you drag stuff from */}
          <SideBarContainer>
            <SideBarTitle>Draggable<br/>Items</SideBarTitle>
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
            <SideBarTitle style={{height: '5vh', borderRadius:"0 0 45px 0"}} />
          </SideBarContainer>
          {/* area where you assemble the shop builder */}
          <DropZone>
            <ResponsiveGridLayout
              className="layout"
              layouts={{ lg: currentLayout }}
              breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 360 }}
              cols={{ lg: 12, md: 9, sm: 6, xs: 3 }}
              onDrop={props.onDrop}
              measureBeforeMount={true}
              useCSSTransforms={true}
              isDroppable={true}
              preventCollision={false}
              onLayoutChange={currentLayout => {
                props.updateLayoutAction(currentLayout);
              }}
              style={{ background: "blue", minHeight: "500px" }}
            >
              {currentLayout.map((gridItem, index) => {
                return (
                  <GridItemContainer key={gridItem.i}>
                    {props.state.Page.content.length
                      ? props.state.Page.content[index].content
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

export default connect(mapStateToProps, { updateLayoutAction, onDrop })(
  ShopBuilder
);
//changed name of page of shopbuilder back to ShopBuilder
