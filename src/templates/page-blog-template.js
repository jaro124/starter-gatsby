import React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import Layout from "../components/core/layout";
import PostHeader from "../components/postheader";
import {
  Paragraf,
  H1,
  H2,
  NumberedList,
  DiscList,
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
        <div className="max-w-4xl bg-white rounded-lg mx-auto my-8 p-16">
          <div>
            <PostHeader
              title={data.mdx.frontmatter.title}
              subtitle={data.mdx.frontmatter.subtitle}
              date={data.mdx.frontmatter.date}
              tags={data.mdx.frontmatter.tags}
            />
          </div>

          <div className="mt-4 mx-auto prose prose-indigo prose-sm sm:prose lg:prose-lg xl:prose-xl">
            <MDXProvider
              components={{
                p: Paragraf,
                h1: H1,
                h2: H2,
                ol: NumberedList,
                ul: DiscList,
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
                        <p className="text-indigo-800 font-medium">
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
                        <p className="text-indigo-800 font-medium">
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
