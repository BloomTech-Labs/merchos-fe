import React from "react";
import { useRouter } from "next/router";
import { Responsive, WidthProvider } from "react-grid-layout";
import { generateComponent } from "../../components/ShopBuilder/ReusableFunctions/ShopBuilderFunctions";
import useSWR from "swr";
import styled from "styled-components";
import { Reset } from "merch_components";

const Page = styled.div`
  width: 100%;
  display: flex;
`;

const GridItemContainer = styled.div`
  object-fit: contain;
  background: white;
  text-align: right;
`;

const fetcher = (args) => {
  return fetch(args).then((res) => res.json());
};

const ResponsiveGridLayout = WidthProvider(Responsive);

const shopper = (props) => {
  const server = process.env.BACKEND_URL;
  const router = useRouter();
  const { shopper } = router.query;
  console.log("SHOPPER: ", shopper);
  const { data, error } = useSWR(
    `${process.env.BACKEND_URL}/store/${shopper}`,
    fetcher
  );

  if (error) {
    return <div>ERROR</div>;
  }

  if (!data) {
    return <div>loading...</div>;
  }
  const layoutArrayString = data.data.page.info.layout;
  const contentArrayString = data.data.page.info.content;

  const layoutObject = layoutArrayString
    .slice(1, -1)
    .split(/^{.*}/g)
    .map((column) => {
      return JSON.parse(column);
    });

  const contentObject = contentArrayString
    .slice(1, -1)
    .split(/^{.*}/g)
    .map((column) => {
      return JSON.parse(column);
    });

  return (
    <Page>
      <ResponsiveGridLayout
        className="layout"
        layouts={{
          lg: layoutObject
        }}
        breakpoints={{ lg: 1000, md: 996, sm: 768, xs: 360 }}
        cols={{ lg: 12, md: 9, sm: 6, xs: 3 }}
        measureBeforeMount={true}
        useCSSTransforms={true}
        isDraggable={false}
        isDroppable={false}
        isResizable={false}
        style={{
          background: "white",
          minHeight: "100vh",
          width: "100vw",
          paddingTop: "0"
        }}
        autoSize={true}
        rowHeight={75}
      >
        {layoutObject.map((gridItem, index) => {
          return (
            <GridItemContainer key={index}>
              <div style={{ height: "auto" }}>
                <Reset />
                {generateComponent(
                  JSON.parse(contentObject[index]),
                  gridItem,
                  false
                )}
              </div>
            </GridItemContainer>
          );
        })}
      </ResponsiveGridLayout>
    </Page>
  );
};

export default shopper;
