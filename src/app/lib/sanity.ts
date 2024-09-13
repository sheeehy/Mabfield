import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "uu1b4vjx",
  dataset: "production",
  apiVersion: "2023-05-03",
  useCdn: false,
});

export async function getEpisodeData() {
  const query = `*[_type == "episode"] | order(releaseDate desc) {
  title,
  "thumbnailUrl": thumbnail.asset->url,
  duration,
  releaseDate,
  description,
  watchUrl
}`;
  const data = await client.fetch(query);
  return data;
}

export async function getListenData() {
  const query = `*[_type == "latestEpisode"]  {
  spotifyUrl,
  youtubeUrl,
  appleUrl
}`;
  const data = await client.fetch(query);
  return data;
}

export async function getAboutData() {
  const query = `*[_type == "about"] {
  _id,
  _createdAt,
  _updatedAt,
  title,
  "text": Text[]{
    ...,
    children[]{
      text,
      marks
    }
  }
}
`;
  const data = await client.fetch(query);
  return data;
}
