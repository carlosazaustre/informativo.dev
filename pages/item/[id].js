import Link from "next/link";
import moment from "moment";

import { getDomainFromUrl } from "../../utils";
import { GET_ITEMS, GET_UNIQUE_ITEM } from "../../services/queries";
import client from "../../services/client";

export default function Item({ item = {} }) {
  return (
    <div>
      <div>
        <span>▲</span>
        <a href={item.url}>{item.title}</a>
        <span>({getDomainFromUrl(item.url)})</span>
      </div>
      <small>
        {item.points} by {item.author}{" "}
        <Link href={`item/${item.id}`}>{moment(item.timestamp).fromNow()}</Link>{" "}
        | <Link href={`item/${item.id}`}>comments</Link>
      </small>
    </div>
  );
}

export async function getStaticPaths() {
  const { data } = await client.query({ query: GET_ITEMS });

  return {
    paths: data.items.map((item) => ({ params: { id: item.id } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { data } = await client.query({
    query: GET_UNIQUE_ITEM,
    variables: { itemId: params.id },
  });

  return {
    props: { item: data.item },
  };
}
