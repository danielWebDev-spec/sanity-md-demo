import {
  createCurrentUserHook,
  createClient,
  //   createImageUrlBuilder,
} from 'next-sanity'

import imageUrlBuilder from '@sanity/image-url'

export const config = {
  // https://nextjs.org/docs/basic-features/environment-variables

  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: '2022-02-28',
  useCdn: process.env.NODE_ENV === 'production',
}

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config)

// Set up a higher function for generating Image URLs with only the asset reference data in your documents.
// Read more: https://www.sanity.io/docs/image-url
// export const urlFor = (source) => createImageUrlBuilder(config).image(source)
export const urlFor = (source) => imageUrlBuilder(config).image(source)

// Helper function for using the current logged in user account
export const useCurrentUser = createCurrentUserHook(config)
