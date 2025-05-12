import React from "react";
var year=new Date().getFullYear();
var fname="Aryann";
var lname="Jain";
function Footer(){
   return <footer><p>Created By {` ${fname} ${lname}`} in {year} </p></footer> ;
}
export default Footer;