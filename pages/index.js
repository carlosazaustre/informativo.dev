import Link from "next/link";
import moment from "moment";

import { getDomainFromUrl } from "../utils";
import { GET_ITEMS } from "../services/queries";
import client from "../services/client";
import { ItemList, Item } from "../components";

export default function Home({ items }) {
  return (
    <main>
      <h1>JakerNews</h1>
      <section>
        <ItemList>
          {items.map((item) => (
            <Item key={item.id} {...item} />
          ))}
        </ItemList>
      </section>
    </main>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({ query: GET_ITEMS });

  return {
    props: {
      items: data.items,
    },
    revalidate: 1,
  };
}
