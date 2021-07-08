const fs = require('fs');
const yaml = require('js-yaml');

// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`


module.exports = function (api) {
    api.loadSource(({addCollection}) => {
        const fileContents = fs.readFileSync('./content/issues.yml', 'utf8');
        const issues = yaml.safeLoad(fileContents);
        const collection = addCollection({
            typeName: 'Issue'
        })
        for (const issue of issues) {
            collection.addNode(issue);
        }
    })

    api.createPages(async ({createPage, graphql}) => {

        const {data} = await graphql(`
        {
            allIssue (sortBy: "tag", order: DESC) {
            edges {
                node  {
                    tag
                }
            } 
            }
        }
        `);

        data.allIssue.edges.forEach(({node}) => {
            const issue = node.tag;
            createPage({
                path: `/sessions/${issue}`,
                component: './src/templates/SessionsIssue.vue',
                context: {
                    issue: issue
                }
            });
            createPage({
                path: `/speakers/${issue}`,
                component: './src/templates/SpeakersIssue.vue',
                context: {
                    issue: issue
                }
            });
            createPage({
                path: `/sponsors/${issue}`,
                component: './src/templates/SponsorsIssue.vue',
                context: {
                    issue: issue
                }
            });
            createPage({
                path: `/agenda/${issue}`,
                component: './src/templates/AgendaIssue.vue',
                context: {
                    issue: issue
                }
            });

        });
        // Use the Pages API here: https://gridsome.org/docs/pages-api/
    })

    api.loadSource(({addSchemaTypes, schema}) => {

        addSchemaTypes(
            `type Session implements Node @infer {
        speakers: [Speaker] @reference(by: "slug")
      }`
        )

        addSchemaTypes(`
type Speaker implements Node @infer {
  sessions: [Session] @reference(by: "slug")
}
`)
    })

    const issues = [2009, 2004]
}
