import React, { useState, useEffect, Fragment } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import { connect } from "react-redux";
import {
  updateLayoutAction,
  onDrop,
  onBreakpointChange,
  onDragStop,
  onResizeStop,
  deleteItemAction
} from "../store/actions/ShopBuilderActions";
import ModalLayout from "../components/ShopBuilder/ModalLayout";
import SideBar from "../components/ShopBuilder/SideBar";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faArrowsAltH } from "@fortawesome/free-solid-svg-icons";
import {
  Item,
  TextBanner,
  Header,
  Image,
  Reset,
  Carousel
} from "merch_components";

// Nav and subsequent components
import ShopBuilderNav from "../components/ShopBuilder/ShopNavBar";
import AuthModal from "../components/auth/AuthModal";

const ResponsiveGridLayout = WidthProvider(Responsive);

//STYLES
const GridItemContainer = styled.div`
  object-fit: contain;
  background: white;
  text-align: right;
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
  border-radius: 45px 45px 45px 45px;
  background: #eee;
  box-shadow: -2px -2px 6px 2px #fff, 2px 2px 6px 2px #8e9093;
  position: fixed;
  z-index: 900;
`;

const SideBarTitle = styled.div`
  background: #464646;
  color: white;
  font-size: 1.4vw;
  border-radius: 45px 45px 0 0;
  padding: 13%;
  text-align: center;
  height: 60px;
`;

const DropZone = styled.div`
  width: 100%;
  height: 100%;
  min-height: 500px;
  margin-left: 9vw;
  margin-right: 2vw;
`;

const ShopContainer = styled.div`
  ${props => (props.blurContainer ? "filter: blur(2px);" : "")}
`;

const ClosedSideBarButton = styled.div`
  background: #aaacb1;
  border-radius: 75px;
  font-size: 15px;
  display: flex;
  font-weight: 700;
  border-radius: 0 45px 45px 0;
  box-shadow: -2px -2px 6px 2px #fff, 2px 2px 6px 2px #8e9093;
  padding: 10vw 1vw 1vw 1vw;
`;

const ShopBuilder = props => {
  const [displayModal, setDisplayModal] = useState(false);

  const [dragId, setDragId] = useState();
  const sidebarLayout = props.state.SideBar.layout;

  const currentLayout = props.state.Page.layout;

  const generateComponent = (component, item) => {
    switch (component.contentType) {
      case "product-container":
        return <Item item={component.content} style={component.style} />;
      case "banner":
        return <TextBanner message={component.content.message} />;
      case "store-name":
        return <Header title={component.content.title} />;
      case "image":
        return (
          <Image
            src={component.content.src}
            style={{
              height: `${item.h * 75}px`,
              width: "100%",
              objectFit: "cover"
            }}
          />
        );
      case "carousel":
        return <Carousel images={component.content.imageArray} />;
      default:
        return "broken";
    }
  };

  // function to open and close sidebar
  const [SideBarDisplay, setSideBarDisplay] = useState(true);
  function openClose() {
    if (SideBarDisplay) {
      setSideBarDisplay(false);
      document.getElementById("dropZone").style.marginLeft = "3vw";
    } else {
      setSideBarDisplay(true);
      document.getElementById("dropZone").style.marginLeft = "9vw";
    }
  }

  const placeholderSize = id => {
    switch (id) {
      case "banner":
        return { w: 12, h: 2, minW: 12, maxW: 12, minH: 2, maxH: 2 };
      case "product-container":
        return { w: 3, h: 9, minW: 3, maxW: 6, minH: 9, maxH: 9 };
      case "store-name":
        return { w: 12, h: 4, minW: 12, maxW: 12, minH: 4, maxH: 4 };
      case "image":
        return { w: 6, h: 10, minW: 6, maxW: 12, minH: 6, maxH: 12 };
      case "carousel":
        return { w: 6, h: 9, minW: 6, maxW: 12, minH: 9, maxH: 9 };
      default:
        return { w: 1, h: 1 };
    }
  };

  return (
    <Fragment>
      <ShopBuilderNav
        userAuthed={props.userAuthed}
        setSideBarDisplay={setSideBarDisplay}
        authModalActive={props.authModalActive}
        workspace={props.state}
      />
      {props.authModalActive && <AuthModal />}
      <ModalLayout displayModal={displayModal} display={setDisplayModal} />
      <ShopContainer blurContainer={displayModal}>
        <Page>
          {/* side bar that you drag stuff from */}
          {/* side bar can be toggled open and close */}
          {SideBarDisplay ? (
            <SideBarContainer>
              <SideBarTitle>
                Draggable
                <br />
                Items
              </SideBarTitle>
              {sidebarLayout.map((item, index) => {
                return (
                  <SideBar
                    key={index}
                    content={item.content}
                    itemId={item.id}
                    setDragId={setDragId}
                    setDisplayModal={setDisplayModal}
                  />
                );
              })}
              <SideBarTitle
                onClick={() => openClose()}
                style={{
                  height: "5vh",
                  borderRadius: "0 0 45px 45px",
                  fontSize: "1vw",
                  cursor: "pointer"
                }}
              >
                close
              </SideBarTitle>
            </SideBarContainer>
          ) : (
            <ClosedSideBarButton onClick={() => openClose()}>
              O<br />P<br />E<br />N<br />
              &nbsp;
              <br />D<br />R<br />A<br />G<br />A<br />B<br />E<br />L<br />S
            </ClosedSideBarButton>
          )}
          {/* area where you assemble the shop builder */}
          <DropZone id="dropZone">
            <ResponsiveGridLayout
              className="layout"
              layouts={{
                lg: currentLayout
              }}
              breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 360 }}
              cols={{ lg: 12, md: 9, sm: 6, xs: 3 }}
              onDrop={item => {
                props.onDrop(item, dragId, placeholderSize(dragId));
              }}
              measureBeforeMount={true}
              useCSSTransforms={true}
              isDroppable={true}
              preventCollision={false}
              onBreakpointChange={props.onBreakpointChange}
              onLayoutChange={props.updateLayoutAction}
              onDragStop={(...itemCallback) =>
                props.onDragStop(itemCallback[1], itemCallback[2])
              }
              onResizeStop={(...itemCallback) =>
                props.onResizeStop(itemCallback[1], itemCallback[2])
              }
              onDragStart={undefined}
              droppingItem={{
                i: `${dragId}__dropping-elem__`,
                ...placeholderSize(dragId)
              }}
              style={{
                background: "white",
                minHeight: "500px",
                width: "100vw",
                paddingTop: "0"
              }}
              autoSize={true}
              rowHeight={75}
            >
              {currentLayout.map((gridItem, index) => {
                return (
                  <GridItemContainer key={gridItem.i}>
                    <FontAwesomeIcon
                      icon={faTimes}
                      style={{
                        fontSize: "3.8rem",
                        opacity: "0.72",
                        marginRight: "10px",
                        marginTop: "10px"
                      }}
                      onClick={() => props.deleteItemAction(index)}
                    />
                    <div style={{ height: "auto" }}>
                      <Reset />
                      {props.state.Page.content.length
                        ? generateComponent(
                            props.state.Page.content[index],
                            gridItem
                          )
                        : "+"}
                    </div>
                  </GridItemContainer>
                );
              })}
            </ResponsiveGridLayout>
          </DropZone>
        </Page>
      </ShopContainer>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    state: state.workspace,
    userAuthed: state.userData.userIsAuthed,
    authModalActive: state.authInterface.authModalActive
  };
};

export default connect(mapStateToProps, {
  updateLayoutAction,
  onDrop,
  onBreakpointChange,
  onDragStop,
  onResizeStop,
  deleteItemAction
})(ShopBuilder);
//changed name of page of shopbuilder back to ShopBuilder
