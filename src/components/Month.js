import React, {useEffect,useState} from 'react';
import Table from './Table';
import "../Table.css";
function Month() {
    const [state, setState] = useState([]);
    useEffect(()=>{
        getData();
      },[]);

    const getData = async () => {
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const targetUrl = 'https://7cg8uz8p69.execute-api.us-east-1.amazonaws.com/test/people/?period=week';
        await fetch(proxyUrl + targetUrl)
             .then(response=>response.json())
             .then(data=>setState(data.people));
    }

    return (
        <div>
            <Table state={state}/>
        </div>
    );
}

export default Month;
