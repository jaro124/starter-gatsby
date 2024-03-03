import React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import Layout from "../components/core/layout";
import { Seo } from "../components/core/seo";
import PostHeader from "../components/postheader";
import {
  Paragraf,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  NumberedList,
  DiscList,
  MyBlockquote,
  MyPRE,
} from "../components/core/mdx-layout.js";
import { MDXProvider } from "@mdx-js/react";

export const query = graphql`
  query ($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        subtitle
        date
        tags
      }
      id
      body
    }
  }
`;

const PostTemplate = ({ data, children, pageContext }) => {
  const { previous, next } = pageContext;
  return (
    <Layout>
      <div className="px-4">
        <div className="max-w-4xl bg-secondary rounded-lg mx-auto my-8 p-16">
          <div>
            <PostHeader
              title={data.mdx.frontmatter.title}
              subtitle={data.mdx.frontmatter.subtitle}
              date={data.mdx.frontmatter.date}
              tags={data.mdx.frontmatter.tags}
            />
          </div>

          <div className="mt-4 mx-auto text-primary">
            <MDXProvider
              components={{
                p: Paragraf,
                h1: H1,
                h2: H2,
                h3: H3,
                h4: H4,
                h5: H5,
                h6: H6,
                ol: NumberedList,
                ul: DiscList,
                blockquote: MyBlockquote,
                pre: MyPRE,
              }}
            >
              {children}
            </MDXProvider>
          </div>

          <div>
            <hr className="mt-8" />
            <div className="flex flex-wrap justify-between w-full">
              <div className="w-full md:w-1/3 text-center md:text-left">
                {previous === false ? null : (
                  <>
                    <p className="text-xs text-gray-500">Previous post</p>
                    {previous && (
                      <Link to={"/blog/" + previous.node.frontmatter.slug}>
                        <p className="block md:inline-block mt-4 md:mt-0 no-underline font-medium text-primary border-b-2 border-transparent hover:border-green-500">
                          {previous.node.frontmatter.title}
                        </p>
                      </Link>
                    )}
                  </>
                )}
              </div>
              <div className="w-full md:w-1/3 pt-2 md:pt-0 text-center md:text-right">
                {next === false ? null : (
                  <>
                    <p className="text-xs text-gray-500">Next post</p>
                    {next && (
                      <Link to={"/blog/" + next.node.frontmatter.slug}>
                        <p className="block md:inline-block mt-4 md:mt-0 no-underline font-medium text-primary border-b-2 border-transparent hover:border-green-500">
                          {next.node.frontmatter.title}
                        </p>
                      </Link>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PostTemplate;

export const Head = ({data}) => (
  <Seo
    title={data.mdx.frontmatter.title}
    description={data.mdx.frontmatter.subtitle}
    keywords={data.mdx.frontmatter.tags}
  />
);