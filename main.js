import React, {useState} from "react";
import allInventory from "./Inventory";

function store(){
    cost[itemName, setItemName] = useState(null);
    cost[storeName, setStoreName] = useState(null);
    cost[quantity, setQuantity] = useState(1);
    cost[exDate, setExDate] = useState(null);

//change functions
    function changeItemName(e){
        setItemName(e.target.value);
    }

    function changeStoreName(e){
        setStoreName(e.target.value);
    }

    function changeQuantity(e){
        setQuantity(e.target.value);
    }

    function changeExDate(e){
        setExDate(e.target.value);
    }

//add function
    function addInventory(e){

    }

    return  <div className="main">
        <section className="control">
            <input
            type="string"
            placeholder="e.g salad"
            onChange={changeItemName}
            />

            <input
            type="string"
            placeholder="e.g Costco"
            onChange={changeStoreName}
            />

            <input
            type="number"
            placeholder="e.g 1"
            onChange={changeQuantity}
            />

            <input
            type="string"
            placeholder="e.g 6/21/2021"
            onChange={changeExDate}
            />

            <button onClick={addInventory}>Add My Item</button>
        </section>
    </div>


}
