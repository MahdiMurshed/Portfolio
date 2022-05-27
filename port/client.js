// client.js
import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "uklyd61u",
  dataset: "production", // or the name you chose in step 1
  useCdn: true, // `false` if you want to ensure fresh data
});
