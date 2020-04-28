import React, { useState } from "react";
import {
  Item,
  TextBanner,
  Header,
  Image,
  Carousel,
  Button,
  LinkBar,
  Navigation,
  Footer,
} from "merch_components";
import styled from "styled-components";

const CarouselButtonContainer = styled.div`
  display: ${(props) =>
    props.topVisible && props.carouselButtonVisible ? "initial" : "none"};
`;

const EditCarouselButton = styled.button`
  position: absolute;
  left: 0;
`;

export const generateComponent = (
  component,
  item,
  builderMode,
  setEditComponent,
  setEditType = () => {},
  setEditId = () => {},
  carouselButtonVisible = false,
  setCarouselButtonVisible = () => {},
  mouseMove = [0, 0],
  setMouseMove = () => {}
) => {
  switch (component.contentType) {
    case "product-container":
      return (
        <div
          onMouseDown={
            builderMode
              ? (e) => {
                  setMouseMove([e.clientX, e.clientY]);
                }
              : false
          }
          onMouseUp={
            builderMode
              ? (e) => {
                  if (
                    e.clientX === mouseMove[0] &&
                    e.clientY === mouseMove[1]
                  ) {
                    setEditComponent((prevState) => !prevState);
                    setEditType(component.contentType);
                    setEditId(item.i);
                  }
                }
              : false
          }
        >
          <Item item={component.content} style={component.style} />
        </div>
      );
    case "banner":
      return <TextBanner message={component.content.message} />;
    case "store-name":
      return <Header title={component.content.title} />;
    case "image":
      return (
        <div
          onMouseDown={
            builderMode
              ? (e) => {
                  setMouseMove([e.clientX, e.clientY]);
                }
              : false
          }
          onMouseUp={
            builderMode
              ? (e) => {
                  if (
                    e.clientX === mouseMove[0] &&
                    e.clientY === mouseMove[1]
                  ) {
                    setEditComponent((prevState) => !prevState);
                    setEditType(component.contentType);
                    setEditId(item.i);
                  }
                }
              : false
          }
        >
          <Image
            src={component.content.src}
            style={{
              height: `${item.h * 75}px`,
              width: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      );
    case "carousel":
      return (
        <div
          onMouseEnter={() => setCarouselButtonVisible(true)}
          onMouseLeave={() => setCarouselButtonVisible(false)}
        >
          <CarouselButtonContainer
            topVisible={builderMode}
            carouselButtonVisible={carouselButtonVisible}
          >
            <EditCarouselButton
              onClick={() => {
                setEditComponent((prevState) => !prevState);
                setEditType(component.contentType);
                setEditId(item.i);
              }}
            >
              Edit Carousel
            </EditCarouselButton>
          </CarouselButtonContainer>
          <Carousel images={component.content.imageArray} />
        </div>
      );
    case "button":
      return <Button name="Button" style={{ margin: "0 auto" }} />;
    case "linkbar":
      return <LinkBar links={["facebook"]} />;
    case "navigation":
      return (
        <Navigation
          links={[{ name: "Home" }, { name: "Products" }, { name: "About" }]}
        />
      );
    case "footer":
      return (
        <Footer
          links={[{ name: "Home" }, { name: "Products" }, { name: "About" }]}
        />
      );
    default:
      return "broken";
  }
};
