export default {
    name: 'subCategory',
    title: 'Subcategory',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Subcategory Title',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'parentCategory',
        title: 'Parent Category',
        type: 'reference',
        to: [{ type: 'maincategory' }],
        validation: (Rule) => Rule.required(),
      },
    ],
  };