import React from 'react';

import './ShowOrder.css';

function ShowOrder() {
  return (
    <div>
      <div className = "topbar">
      
      </div>
      <div className = "topfont">
        <h2 id = "topFontDetail">Detail</h2>
        <h2 id = 'topFontList'>Menu List</h2>
      </div>
      <div className = "content">
        <div className = 'container'>
          <div className = "item detailBox">
            
            <div className = "part part1">
              <div className = "partt picture">
                <img src="" alt="" />
              </div>
              <div className = "partt price">
                <h3>Price : </h3>
                <input type="text" id = "boxShowPrice" readOnly/>
              </div>
            </div>
            <div className = "part part2">
              <h3>Menu Name : </h3>
              <input type="text" id = "boxShowMenuName" readOnly />
            </div>
            <div className = "part part3">
              <h3>Description : </h3>
              <textarea name="" id="boxShowDescription" cols={50} rows={5} readOnly></textarea>
            </div>
            <div className = "part part4">
              <h3>Ingredient : </h3>
              <textarea name="" id="boxShowIngredient" cols={50} rows={5} readOnly></textarea>
            </div>
          </div>
          <div className = "item listBox">
            <div className = "addBTN">
              <button className = 'addButton'><h2>Add Menu here...</h2></button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default ShowOrder;