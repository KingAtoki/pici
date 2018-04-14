module.exports = {
  siteMetadata: {
    title: 'People In Crisis, Inc.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: 'keyEvd4PvQslvlmrU',
        baseId: 'apppozSKQstGfzfWm',
        tableName: `Table 1`,
        tableView: `Grid view`,
        queryName: `People_Helped`,
      },
    },
    `gatsby-plugin-less`,
  ],
}
