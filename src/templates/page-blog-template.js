import React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import Layout from "../components/core/layout";
import {
  Paragraf,
  H1,
  H2,
  NumberedList,
} from "../components/core/mdx-layout.js";
import { MDXProvider } from "@mdx-js/react";

export const query = graphql`
  query ($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        subtitle
        date
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
            <h1 className="text-4xl font-medium text-primary mb-2">
              {data.mdx.frontmatter.title}
            </h1>
            <h2 className="font-medium text-sm text-indigo-400 mb-4 uppercase tracking-wide">
              {data.mdx.frontmatter.subtitle}
            </h2>

            <div className="flex flex-wrap justify-between mt-4 w-full">
              <div className="w-full md:w-1/3 text-left">
                <p className="text-sm text-gray-500 flex items-center pb-3 pr-8">
                  {data.mdx.frontmatter.date}
                </p>
              </div>
              <div className="w-full md:w-2/3 pb-2 md:pb-0 text-left md:text-right">
                Tagi
              </div>
            </div>

            <hr className="pb-6" />
          </div>

          <div className="mt-8 mx-auto prose prose-indigo prose-sm sm:prose lg:prose-lg xl:prose-xl">
            <MDXProvider
              components={{
                p: Paragraf,
                h1: H1,
                h2: H2,
                ol: NumberedList,
              }}
            >
              {children}
            </MDXProvider>
          </div>

          <div>
            <div className="flex flex-wrap justify-between mt-4 w-full">
              <div className="w-full md:w-1/3 text-center md:text-left">
                {previous === false ? null : (
                  <>
                    {previous && (
                      <button className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
                        <Link to={"/blog/" + previous.node.frontmatter.slug}>
                          {previous.node.frontmatter.title}
                        </Link>
                      </button>
                    )}
                  </>
                )}
              </div>
              <div className="w-full md:w-1/3 pt-2 md:pt-0 text-center">
                <button className="bg-green-500 hover:bg-green-400 text-secondary font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
                  <Link to="/blog">Back to list</Link>
                </button>
              </div>

              <div className="w-full md:w-1/3 pt-2 md:pt-0 text-center md:text-right">
                {next === false ? null : (
                  <>
                    {next && (
                      <button className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
                        <Link to={"/blog/" + next.node.frontmatter.slug}>
                          {next.node.frontmatter.title}
                        </Link>
                      </button>
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
