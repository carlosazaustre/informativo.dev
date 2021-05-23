import admin from "firebase-admin";
import config from "../../config";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      project_id: config.projectId,
      private_key: config.privateKey,
      client_email: config.clientEmail,
    }),
    databaseURL: config.databaseURL,
  });
}

const database = admin.firestore();
// database.settings({ timestampsInSnapshots: true });

export default database;
