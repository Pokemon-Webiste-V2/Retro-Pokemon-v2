import React, { useEffect } from "react";
import styled from "styled-components";
import useFetch from "../../backend/useFetch";

const Container = styled.ul`
display:flex;
flex-direction:column;
width: 200px;
padding: 20px;
margin: 20px;
border: 5px solid #c7a008ff;
border-radius: 10px;
box-shadow: #c7a008ff 10px 7px 20px 0px;

div {
    display:flex;
}

img {
 height: 100px;
 margin: auto;
}

p{
    color: white;
    font-size: 25px;
    font-weight: bold;
    text-align: center;
}
`;

export default function Card(props: any)  {
    const { data } =  useFetch(props.url);

    let image = data?.sprites?.front_default

    return (    
     <Container>
        <div>
           <img src={image} alt={props?.label}></img>
        </div>
           <p>{props.name}</p>
    </Container>    
    );
  }