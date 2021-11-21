import { initPlasmicLoader } from "@plasmicapp/loader-react";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "s61qQuGkyQKTNHx9hpu2Qk",  // ID of a project you are using
      token: "Vgs7zAODalyflM00ACtVaR3rPfpaCLEGDAzZFRfKqhMqPyV4tGunSNzkGXwxLq3jSKJN4dqvQtymnjt7gzXZg"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})
export default PLASMIC;