import {defineType} from 'sanity'

export const latestEpisode = defineType({
  name: 'latestEpisode',
  title: 'Latest Episode ("LISTEN" Page)',
  type: 'document',
  fields: [
    {
      name: 'appleUrl',
      title: 'Apple Podcasts URL',
      type: 'url',
    },
    {
      name: 'spotifyUrl',
      title: 'Spotify URL',
      type: 'url',
    },
    {
      name: 'youtubeUrl',
      title: 'YouTube URL',
      type: 'url',
    },
  ],
})
