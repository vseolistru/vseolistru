import React from 'react';
import {Link} from "react-router-dom";

const Tables = () => {
    return (
        <div>
            <Link to="/">Navigation</Link>
            <table style={{marginTop: '20px'}}>
                <caption>Table 1</caption>
                <tr >
                    <th >Cell 1</th>
                    <th>Cell 2</th>
                    <th>Cell 3</th>
                    <th>Cell 4</th>
                </tr>
                <tr>
                    <td>Cell 5</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
            <table style={{marginTop: '20px'}}>
                <caption>Some Marks</caption>
                <tr>
                    <td rowSpan="2">Some Man</td>
                    <td colSpan="3">Study period</td>
                </tr>
                <tr>
                    <td> 1 - milestone </td>
                    <td> 2 - milestone </td>
                    <td> 3 - milestone </td>
                </tr>
                <tr>
                    <td>Name </td>
                    <td>Mark</td>
                    <td>Mark</td>
                    <td>Mark</td>
                </tr>
                <tr>
                    <td>Name </td>
                    <td>Mark</td>
                    <td>Mark</td>
                    <td>Mark</td>
                </tr>
                <tr>
                    <td>Name </td>
                    <td>Mark</td>
                    <td>Mark</td>
                    <td>Mark</td>
                </tr>
                <tr>
                    <td>Name </td>
                    <td>Mark</td>
                    <td>Mark</td>
                    <td>Mark</td>
                </tr>
            </table>

        </div>
    );
};

export default Tables;