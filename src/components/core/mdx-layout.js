import React from 'react';

export const Paragraf = ({ children }) => (
    <p className="text-slate-700">
        {children}
    </p>
);

export const H1 = ({ children }) => (
    <h1 className="text-3xl text-slate-800 my-4">
        {children}
    </h1>
);

export const H2 = ({ children }) => (
    <h2 className="text-2xl text-slate-700 my-2">
        {children}
    </h2>
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