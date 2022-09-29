"use strict";

import functions from "firebase-functions";
import { initializeApp, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import serviceAccount from "./serviceAccount.json" assert { type: "json" }; // TODO fixme

const adminConfig = JSON.parse(process.env.FIREBASE_CONFIG);
adminConfig.credential = cert(serviceAccount);
const app = initializeApp(adminConfig);
const auth = getAuth(app);

exports.getShareToken = functions.https.onCall(async (data, context) => {
  if (!data.shareId)
    throw new functions.https.HttpsError(
      "invalid-argument",
      "shareId not provided"
    );

  if (!data.password)
    throw new functions.https.HttpsError(
      "invalid-argument",
      "password not provided"
    );

  if (!context.auth)
    throw new functions.https.HttpsError(
      "permission-denied",
      "you need to sign in anonymously first"
    );

  // TODO check password

  await auth.setCustomUserClaims(context.auth.uid, { shareId: data.shareId }); // Is this permanent or only for the next token?
  // auth.createCustomToken(context.auth.uid, { shareId: shareId });
});

exports.scheduledCleanup = functions.pubsub
  .schedule("every minute")
  .onRun((context) => {
    context.params;
    console.log("This will be run every minute!");
    // TODO cleanup expired tasks
    return null;
  });
