
import React, { useState } from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import './App.css';
import TodoList from './hello';
import styled from "styled-components";


function App() {
  var imageUrl = ["/chocolate-mousse.png", "/coconut-rice-pudding.jpg","/keks.jpg"]
  var index = 0;
  var [image, SetImage] = useState(index)

  function nextImage(){
    if (image + 1 >= imageUrl.length){
      image = -1
    }
    SetImage(image + 1)
  }
  function previousImage(){
    if (image === 0){
      image = imageUrl.length - 1
    }
    SetImage(image-1)
  }

  const Button = styled.button`
  color: black;
  font-size: 16px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;
  return (
    <>
    <TodoList/>
   
    {/* <Button onClick = {previousImage}>
     Privous
    </Button> */}
  
    <div style = {{ display: "flex", justifyContent: "center", alignItems: "center",}}>
    <ArrowBackIosIcon  style={{ fontSize: 80, textAlign: "center", position: "relative", right:"150px"}}  onClick = {previousImage}/>

    <img style = {{textAlign: "center", alignSelf: "center", display: "flex", justifyContent: "center",
    alignItems: "center",}} src={imageUrl[image%4]} height="500" width="850" alt="No image"/>

    <ArrowForwardIosIcon style={{ fontSize: 80, display: "flex", justifyContent: "right", 
    alignItems: "right", position: "relative", left: "150px"}} onClick = {nextImage}/>
    </div>

    {/* <Button onClick = {nextImage}>
    Next
    </Button> */}
    </>
  )
}
 
export default App;
