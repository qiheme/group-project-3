import React from "react";
import API from "../../utils/API";
// const totPop = document.getElementById("totPopVal");
// const totMales = document.getElementById("totMalesVal");
// const totFemales = document.getElementById("totFemalesVal");
// const totHH = document.getElementById("totHHVal");
// const medHinc = document.getElementById("medHincVal");
// const pci = document.getElementById("pciVal");
// const divIndx = document.getElementById("divIndxVal");

//   totPop.prepend(JSON.parse(response).results[0].value.FeatureSet[0].features[0].attributes.TOTPOP_CY);
//   totMales.prepend(JSON.parse(response).results[0].value.FeatureSet[0].features[0].attributes.TOTMALES);
//   totFemales.prepend(JSON.parse(response).results[0].value.FeatureSet[0].features[0].attributes.TOTFEMALES);
//   totHH.prepend(JSON.parse(response).results[0].value.FeatureSet[0].features[0].attributes.TOTHH_CY);
//   medHinc.prepend(JSON.parse(response).results[0].value.FeatureSet[0].features[0].attributes.MEDHINC_CY);
//   pci.prepend(JSON.parse(response).results[0].value.FeatureSet[0].features[0].attributes.PCI_CY);
//   divIndx.prepend(JSON.parse(response).results[0].value.FeatureSet[0].features[0].attributes.DIVINDX_CY);


{/*export function showTable() {
  document.getElementsByClassName("demographics-table").css("display", "block");
};*/}

// const philly = {
//   "x": -75.165222,
//   "y": 39.952583
// }
// const wilmington = {
//   "x": -75.546667,
//   "y": 39.745833
// }
// const trenton = {
//   "x": -74.764001,
//   "y": 40.223748
// }

export function getDemographics() {

  console.log("i was clicked!");
  API.auth().then((response) => {
    console.log(response)
  }, (error) => {
    console.log(error);
  });
}


export default function renderDemographics() {
  return (
    <div>
      {/*DEMOGRAPHICS TABLE*/}
      < div className="demographics-table" >

        {/* Selected City */}
        < div className="row" >
          <div className="columns medium-6 cell-output">
            <strong><p>Selected City:</p></strong>
          </div>
          <div className="columns medium-6 cell-output">
            <p>Philadelphia</p>
          </div>
        </div >

        {/* Total Population */}
        < div className="row" >
          <div className="columns medium-6 cell-output">
            <strong><p>Total Population:</p></strong>
          </div>
          <div className="columns medium-6 cell-output">
            <p><span id="totPopVal"></span></p>
          </div>
        </div >

        {/* Total Male Population */}
        < div className="row" >
          <div className="columns medium-6 cell-output">
            <strong><p>Total Male Population:</p></strong>
          </div>
          <div className="columns medium-6 cell-output">
            <p><span id="totMalesVal"></span></p>
          </div>
        </div >

        {/* Total Female Population */}
        < div className="row" >
          <div className="columns medium-6 cell-output">
            <strong><p>Total Female Population:</p></strong>
          </div>
          <div className="columns medium-6 cell-output">
            <p><span id="totFemalesVal"></span></p>
          </div>
        </div >

        {/* Total Households */}
        < div className="row" >
          <div className="columns medium-6 cell-output">
            <strong><p>Total Households:</p></strong>
          </div>
          <div className="columns medium-6 cell-output">
            <p><span id="totHHVal"></span></p>
          </div>
        </div >

        {/* Median Household Income */}
        < div className="row" >
          <div className="columns medium-6 cell-output">
            <strong><p>Median Household Income:</p></strong>
          </div>
          <div className="columns medium-6 cell-output">
            <p><span id="medHincVal"></span></p>
          </div>
        </div >

        {/* Per Capita Income */}
        < div className="row" >
          <div className="columns medium-6 cell-output">
            <strong><p>Per Capita Income:</p></strong>
          </div>
          <div className="columns medium-6 cell-output">
            <p><span id="pciVal"></span></p>
          </div>
        </div >

        {/* Diversity Index */}
        < div className="row" >
          <div className="columns medium-6 cell-output">
            <strong><p>Diversity Index:</p></strong>
          </div>
          <div className="columns medium-6 cell-output">
            <p><span id="divIndxVal"></span></p>
          </div>
        </div >

      </div >
    </div>
  )
}