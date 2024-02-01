import React from 'react';

export const Paragraf = ({ children }) => (
    <p className="pt-2 pb-2">
        {children}
    </p>
);

export const H1 = ({ children }) => (
    <h1 className="text-4xl font-medium mb-2">
        {children}
    </h1>
);

export const H2 = ({ children }) => (
    <h2 className="text-3xl font-medium my-2">
        {children}
    </h2>
);

export const H3 = ({ children }) => (
    <h3 className="text-2xl font-medium my-2">
        {children}
    </h3>
);

export const H4 = ({ children }) => (
    <h4 className="text-xl font-medium my-2">
        {children}
    </h4>
);

export const H5 = ({ children }) => (
    <h5 className="text-xl font-medium my-2">
        {children}
    </h5>
);

export const H6 = ({ children }) => (
    <h6 className="text-xl font-medium my-2">
        {children}
    </h6>
);

export const NumberedList = ({ children }) => (
    <ol className="list-decimal pl-12">
        {children}
    </ol>
);

export const DiscList = ({ children }) => (
    <ul className="list-disc pl-12">
        {children}
    </ul>
);

export const MyBlockquote = ({ children }) => 
    <blockquote className="text-lg italic m-8 p-8 rounded-md border-solid border-l-4 border-primary">
        {children}
    </blockquote>