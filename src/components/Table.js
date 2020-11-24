import React from 'react';

function Table({state}) {
    return (
        <React.Fragment>
            <table>
            <tbody>
                <tr>
                    <th>Client</th>
                    <th>Matter</th>
                    <th style={{paddingRight:300}}>Description</th>
                    <th>Type</th>
                    <th>Time</th>
                </tr>
                {state.map(data=>
                <tr>
                    <td>{data.client}</td>
                    <td>{data.matter}</td>
                    <td>{data.description}</td>
                    <td>{data.type}</td>
                    <td>{data.time}</td>
                </tr>   )}
            </tbody>
            </table>
        </React.Fragment>
    );
}

export default Table;
