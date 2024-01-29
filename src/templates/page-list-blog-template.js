import React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import Layout from "../components/core/layout";
import PostListNavigation from "../components/postlistnavigation";
import PostHeader from "../components/postheader";

export const query = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMdx(sort: { frontmatter: { date: DESC } }, limit: $limit, skip: $skip) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            title
            subtitle
            slug
            date
            tags
          }
        }
      }
    }
  }
`;

const PostListTemplate = ({
  data,
  pageContext, // this prop will be injected by the GraphQL query below.
}) => {
  const { edges } = data.allMdx;
  const { numPages, currentPage } = pageContext;
  return (
    <Layout>
      <div className="px-4">
        <div className="max-w-4xl bg-secondary rounded-lg mx-auto my-8 p-16">
          {edges.map((edge) => (
            <div key={edge.node.id}>
            <div className="space-y-2">  
              <PostHeader title={edge.node.frontmatter.title} subtitle={edge.node.frontmatter.subtitle} date={edge.node.frontmatter.date} tags={edge.node.frontmatter.tags} />
              <div className="text-primary">{edge.node.excerpt}</div>

              <div className="mt-4 mb-16">
                <button className="bg-green-500 hover:bg-green-400 text-secondary font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
                  <Link to={edge.node.frontmatter.slug}>Read more</Link>
                </button>
              </div>
            </div>
            
            </div>
          ))}
          <div>
            <PostListNavigation 
              numPages={numPages}
              currentPage={currentPage} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PostListTemplate;
