"use client";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box } from "@mui/material";
function Page() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 20,
  });
  useEffect(() => {
    let active = true;
    async function getData() {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.escuelajs.co/api/v1/products/?offset=${paginationModel.page}&limit=${paginationModel.pageSize}`
        );
        if (!active) return;
        setProducts([...response.data]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getData();
    return () => {
      active = false;
    };
  }, [paginationModel.page]);

  return (
    <div>
      <Box sx={{ height: "70vh", mt: 20 }}>
        <DataGrid
          rows={products}
          getRowId={(product) => product.id}
          columns={[
            { headerName: "Title", field: "title", flex: 1 },
            { headerName: "Description", field: "description", flex: 1 },
            { headerName: "Price", field: "price", flex: 1 },
          ]}
          dataSet= 'Commodity'
          pagination
          rowLength={100}
          paginationModel={paginationModel}
          pageSizeOptions={[20]}
          paginationMode="server"
          experimentalFeatures={{ newEditingApi: true }}
          onPaginationModelChange={setPaginationModel}
          rowCount={100}
          checkboxSelection
          loading={loading}
        />
      </Box>
    </div>
  );
}

export default Page;
