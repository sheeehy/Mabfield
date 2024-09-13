import {defineType} from 'sanity'

export const episode = defineType({
  name: 'episode',
  title: 'Episode ("EPISODES" Page)',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      description: '16:9 Aspect Ratio',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'Duration of the episode, e.g. 45:31',
    },
    {
      name: 'releaseDate',
      title: 'Release Date',
      type: 'date',
      description: 'The date when the episode was released',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Brief description of the episode',
    },
    {
      name: 'watchUrl',
      title: 'Watch URL',
      type: 'url',
      description: 'Youtube URL to watch the episode',
    },
  ],
})
