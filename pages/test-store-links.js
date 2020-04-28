import React from "react";
import Link from "next/link";

const testStoreLink = (props) => {
  return (
    <Link href="/shop/[shopper].js" as="/shop/merchos_test_store">
      test store
    </Link>
  );
};

export default testStoreLink;
