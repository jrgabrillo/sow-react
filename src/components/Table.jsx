import React, { useState } from "react";

import more from '../assets/images/more.png'

export default function SortableTable({ data = [], callback }) {
    const [tableData, setTableData] = useState(data);
    const [sortConfig, setSortConfig] = useState({ key: 0, direction: "asc" });

    const headers = ["Article No.","Product/Service","In Price","Price","Unit","In Stock","Description",""]
    const columns = Object.keys(tableData[0]);
    const col_size = [10, 20, 10, 10, 10, 10, 25, 5]
    const col_responsive = ["hide-smartphone-and-below","","hide-tablet-and-below","","hide-smartphone-and-below","hide-tablet-and-below","hide-tablet-and-below"]

    const handleChange = (index, column, value) => {
        const updated = [...tableData];
        updated[index][column] = value;
        setTableData(updated);

        callback({index, column, value})
    };

    const sortTable = (key) => {
        let direction = "asc";

        if (sortConfig.key === key && sortConfig.direction === "asc") {
            direction = "desc";
        }

        const sorted = [...tableData].sort((a, b) => {
            if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
            if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
            return 0;
        });

        setTableData(sorted);
        setSortConfig({ key, direction });
    };

    return (
        <table border="0">
            <thead>
                <tr>
                    {columns.map((col, i) => (
                        <th
                            width={`${col_size[i]}%`}
                            className={col_responsive[i]}
                            key={col}
                            onClick={() => sortTable(col)}
                            style={{ cursor: "pointer", textAlign: "left"}}
                        >
                            {headers[i]}
                            {sortConfig.key === col ? (sortConfig.direction === "asc" ? <div className="sort">↑</div> : <div className="sort">↓</div>) : <div className="sort"></div>}
                        </th>
                    ))}
                    <th width={`${col_size[col_size.length-1]}%`}></th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((row, i) => (
                    <tr key={i}>
                        {columns.map((col, col_i) => (
                            <td key={col} className={col_responsive[col_i]}>
                                <input type="text" style={{maxWidth: `100%`}} onChange={(e) => {handleChange(i, col, e.target.value)}} value={row[col]} />
                            </td>
                        ))}
                        <td>
                            <button className="more-action" style={{background: `url(${more}) no-repeat`}}></button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}