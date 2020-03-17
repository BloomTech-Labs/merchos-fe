import React, { useState, Fragment } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { connect } from 'react-redux';
import styled, { keyframes } from 'styled-components';

// Components
import {
  updateLayoutAction,
  onDrop
} from '../store/actions/ShopBuilderActions';
import ModalLayout from '../components/ShopBuilder/ModalLayout';
import SideBar from '../components/ShopBuilder/SideBar';
import ShopBuilderNav from '../components/ShopBuilder/ShopNavBar';

const ResponsiveGridLayout = WidthProvider(Responsive);

//STYLES
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
  ${props => (props.blurContainer ? 'filter: blur(2px);' : '')}
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

  const display = e => {
    setDisplayModal(!displayModal);
  };

  // function to open and close sidebar
  const [SideBarDisplay, setSideBarDisplay] = useState(true);
  function openClose() {
    if (SideBarDisplay) {
      setSideBarDisplay(false);
      document.getElementById('dropZone').style.marginLeft = '3vw';
    } else {
      setSideBarDisplay(true);
      document.getElementById('dropZone').style.marginLeft = '9vw';
    }
  }

  const placeholderSize = id => {
    switch (id) {
      case 'banner':
        return { w: 12, h: 2 };
      case 'product-container':
        return { w: 1, h: 2 };
      case 'store-name':
        return { w: 12, h: 1 };
      default:
        return { w: 1, h: 1 };
    }
  };

  return (
    <Fragment>
      <ShopBuilderNav />
      <ModalLayout displayModal={displayModal} display={display} />
      <ShopContainer blurContainer={displayModal}>
        <Button onClick={display}>Show Layouts</Button>
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
                  />
                );
              })}
              <SideBarTitle
                onClick={() => openClose()}
                style={{
                  height: '5vh',
                  borderRadius: '0 0 45px 45px',
                  fontSize: '1vw',
                  cursor: 'pointer'
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
          <DropZone id='dropZone'>
            <ResponsiveGridLayout
              className='layout'
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
              droppingItem={{
                i: `${dragId}__dropping-elem__`,
                ...placeholderSize(dragId)
              }}
              style={{ background: 'blue', minHeight: '500px' }}
            >
              {currentLayout.map((gridItem, index) => {
                return (
                  <GridItemContainer key={gridItem.i}>
                    {props.state.Page.content.length
                      ? props.state.Page.content[index].content
                      : '+'}
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
