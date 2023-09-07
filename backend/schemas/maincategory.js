export default {
    name: 'maincategory',
    title: 'Main Category',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Category Title',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
    ],
  };

  