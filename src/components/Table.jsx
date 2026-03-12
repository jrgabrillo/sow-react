import React, { useState } from "react";

export default function SortableTable({ data = [], callback }) {
    console.log(data)

    const [tableData, setTableData] = useState(data);
    const [sortConfig, setSortConfig] = useState({ key: 0, direction: "asc" });

    const columns = Object.keys(tableData[0]);
    const col_size = [100, 200, 80, 80, 80, 80, 200]

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
        <table border="0" cellPadding="8" style={{ borderCollapse: "collapse", width: "100%" }}>
            <thead>
                <tr>
                    {columns.map((col, i) => (
                        <th
                            key={col}
                            onClick={() => sortTable(col)}
                            style={{ cursor: "pointer", textAlign: "left" }}
                        >
                            {col.toUpperCase()}
                            {sortConfig.key === col ? (sortConfig.direction === "asc" ? <div className="sort">↑</div> : <div className="sort">↓</div>) : <div className="sort"></div>}
                        </th>
                    ))}
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((row, i) => (
                    <tr key={i}>
                        {columns.map((col, col_i) => (
                            <td key={col}>
                                <input type="text" s style={{minWidth: `${col_size[col_i]}px`, width: "100%"}} onChange={(e) => {handleChange(i, col, e.target.value)}} value={row[col]} />
                            </td>
                        ))}
                        <td>...</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}