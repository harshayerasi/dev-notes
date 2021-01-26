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
                  'artificial-intelligence/statistics-essentials-for-data-science/hypothesis-testing',
                  'artificial-intelligence/statistics-essentials-for-data-science/regression-analysis']
        },
        {
          type: 'category',
          label: 'Data science with Python',
          items: ['artificial-intelligence/data-science-with-python/session1',
                  'artificial-intelligence/data-science-with-python/session2']
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
      id: "docker-cheat-sheet",
    },
    {
      type: "doc",
      id: "symbols",
    },
    {
      type: "doc",
      id: "tools",
    }
  ]
};
