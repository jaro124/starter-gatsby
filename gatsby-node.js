const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {

    const blogPostTemplate = path.resolve(`./src/templates/page-blog-template.js`)

    const { createPage } = actions;
    
    const result = await graphql(`
    query MyQuery {
      allMdx (sort: {frontmatter: {date: DESC}}) {
        edges {
          previous {
            frontmatter {
              slug
            }
          }
          node {
            frontmatter {
              slug
              title
            }
            internal {
              contentFilePath
            }
            id
          }
          next {
            frontmatter {
              slug
            }
          }
          
        }
      }
    }
    `);

    if (result.errors) {
        reporter.panicOnBuild('Error loading MDX result', result.errors)
    }
  
    const posts = result.data.allMdx.edges

    // Create blog pages

    posts.forEach(( post, index ) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1];
      const next = index === 0 ? null : posts[index - 1];
      createPage({
        path: `/blog/${post.node.frontmatter.slug}`,
        component: `${blogPostTemplate}?__contentFilePath=${post.node.internal.contentFilePath}`,
        context: {
          id: post.node.id,
          slug: post.node.frontmatter.slug,
          next,
          previous,
        }, 
      })
    })

    // Create blog-list pages
};