export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Product Title',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'mainCategory',
        title: 'Main Category',
        type: 'reference',
        to: [{ type: 'maincategory' }],
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'subCategory',
        title: 'Subcategory',
        type: 'reference',
        to: [{ type: 'subCategory' }],
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'image',
        title: 'Product Image',
        type: 'image',
        options: {
          hotspot: true, 
        },
      },
      {
        name: 'description',
        title: 'Product Description',
        type: 'text',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'price',
        title: 'Product Price',
        type: 'number',
        // validation: (Rule) => Rule.required(),
      },
    ],
  };
  