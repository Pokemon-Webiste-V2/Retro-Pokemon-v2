import React from "react";

export default function ImageHolder(props: any) {
    return (     
           <img src={props.src} alt={props?.label} width={props?.width} height={props?.height}></img>
    );
  }
  
