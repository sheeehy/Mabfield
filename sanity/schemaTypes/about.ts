import {defineType} from 'sanity'

export const about = defineType({
  name: 'about',
  title: 'About ("ABOUT" Page)',
  type: 'document',
  fields: [
    {
      name: 'Text',
      type: 'array',
      of: [
        {
          type: 'block',
          // Enable basic styles to support line breaks
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
          marks: {
            decorators: [
          
            ],
            annotations: [],
          },
        },
      ],
    },
  ],
})
