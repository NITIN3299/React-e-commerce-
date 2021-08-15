import React from "react";

import { Link } from "react-router-dom";

import { useGlobalContext } from "../context/scanner_context";
import { useFilterContext } from "../context/filter_context";

function ItemList() {

    const { detectedItems } = useGlobalContext();
    const { updatefilters } = useFilterContext();

    let itemsSet = new Set();
    detectedItems.map((items) => itemsSet.add(items.class));
    itemsSet = Array.from(itemsSet);
    itemsSet.sort();



    const changeSearchValue = (item_value) => {
        console.log("item is: ", item_value);
        let e = {
            target: {
                name: "text",
                value: item_value
            }
        }

        updatefilters(e);
    }

    return (
        <div
            style={{
                textAlign: "center",
                paddingTop: "20px",
                paddingBottom: "200px",
                textTransform: "capitalize",
            }}
        >
            <h1>this is item list</h1>
            <ul>
                {itemsSet.map((item, index) => {
                    return (
                        <h1 key={index}>
                            <Link to="/products" onClick={() => changeSearchValue(item)}>{item}</Link>
                        </h1>
                    );
                })}
            </ul>
        </div>
    );
}

export default ItemList;