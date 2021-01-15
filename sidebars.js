module.exports = {
  docs: [
    {
      type: "doc",
      id: "index",
    },
    {
      type: 'category',
      label: 'Artificial Intelligence',
      items: [
        {
          type: 'category',
          label: 'Statistics Essentials for Data science',
          items: ['artificial-intelligence/statistics-essentials-for-data-science/estimators-and-estimates',
                  'artificial-intelligence/statistics-essentials-for-data-science/hypothesis-testing']
        }
      ],
    },
    {
      type: 'category',
      label: 'Azure',
      items: [
        {
          type: 'category',
          label: 'AZ 900',
          items: ['azure/az-900/azure-fundamentals-cloud-computing']
        }
      ],
    },
    {
      type: "doc",
      id: "symbols",
    }
  ]
};
