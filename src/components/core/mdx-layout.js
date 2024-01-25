import React from 'react';

export const Paragraf = ({ children }) => (
    <p className="text-blue-600">
        {children}
    </p>
);

export const H1 = ({ children }) => (
    <h1 className="text-3xl bg-blue-300 text-blue-800">
        {children}
    </h1>
);

export const H2 = ({ children }) => (
    <h2 className="text-xl bg-blue-100 text-red-700">
        {children}
    </h2>
);

export const NumberedList = ({ children }) => (
    <ol className="list-decimal pl-6">
        {children}
    </ol>
);