import database from "./firestore";

const ITEMS_COLLECTION = "items";

export async function getAllItems() {
  const results = [];
  const documents = await database.collection(ITEMS_COLLECTION).get();

  if (!documents) return "No matching documents found";

  documents.forEach((document) =>
    results.push({ id: document.id, ...document.data() })
  );

  return results;
}

export async function getItemBy(searchParam) {
  const results = [];
  const documents = await database
    .collection(ITEMS_COLLECTION)
    .where("id", "==", searchParam)
    .get();

  if (!documents) return "No mathing documents";

  documents.forEach((document) =>
    results.push({ id: document.id, ...document.data() })
  );

  return results[0];
}

export async function addItem(data) {
  const ref = await dbRef.add({ timestamp: Date.now(), points: 0, ...data });

  return ref.id;
}
