import React, { useState, useMemo } from "react";
import { useTable, useGlobalFilter } from "@tanstack/react-table";
import InputField from "../Input/input";

// Global Search Input Component
const GlobalFilter = ({ globalFilter, setGlobalFilter }) => {
    return (
        <div className="row">
            <div className="col-md-2" style={{ marginLeft: "20px" }}>
                <input
                    value={globalFilter || ""}
                    onChange={(e) => setGlobalFilter(e.target.value || undefined)}
                    placeholder="Search..."
                    style={{
                        marginBottom: "10px",
                        padding: "8px",
                        width: "300px",
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                    }}
                />
            </div>

        </div>

    );
};

export default GlobalFilter