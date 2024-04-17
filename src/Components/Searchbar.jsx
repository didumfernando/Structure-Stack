import React from "react";
import { Input} from 'antd';

const {Search} = Input;

const Searchbar = () => {
    return(
        <Search 
        style = {{marginTop: 10, marginBottom:10}}
        placeholder = "Search away!" enterButton />    
    )
}
export default Searchbar;