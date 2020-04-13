import { useState, useEffect } from "react";

const getFormat = (format) => {
    let formatQuery = {};
    if(format.length != 0) {
        const updatedFormat = [];
        format.map((f) => {
            updatedFormat.push({ format: { $regex: f, '$options': 'i' } });
        });
        formatQuery = { $or: updatedFormat };
    }
    return formatQuery;
};

const getGenre = (genre) => {
    return {};
};

const getPrice = (price) => {
    return { price: { $lte: price } };
};

const getSearch = (search) => {
    return ({
        $or: [{ label: { $regex: search, '$options': 'i' } },
        { artist: { $regex: search, '$options': 'i' } },
        { title: { $regex: search, '$options': 'i' } }]
    });
}

const getSort = (sort) => {
    switch (sort) {
        case 0:
            return { sort: { listing_id: -1 } };
        case 1:
            return { sort: { price: -1 } };
        case 2:
            return { sort: { price: 1 } };
        default:
            return;
    };
};

const getQuery = (format, genre, price, search) => {
    const query = [];
    const searchQuery = getSearch(search);
    console.log(`!!! ${searchQuery}`);
    const priceQuery = getPrice(price);
    const formatQuery = getFormat(format);
    const genreQuery = getGenre(genre);
    query.push(getSearch(search));
    query.push(getPrice(price));
    query.push(getFormat(format));
    query.push(getGenre(genre));
    return query;
};

export default (format, genre, price, search, sort) => {
    const query = getQuery(format, genre, price, search)
    const sortQuery = getSort(sort);
    console.log(`from useQuery: ${query}`);
    console.log(`from useQuery: ${sort}`);

    return [query, sortQuery];
};