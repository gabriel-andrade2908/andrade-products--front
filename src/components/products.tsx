import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { ProductService } from '../services/products-service.tsx';
import { ToastServices } from '../utils/toast-services.tsx';
import { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router';
import "./styles/products-style.scss"
export const Products = () => {
const columns: GridColDef[] = [
  { field: 'name', headerName: 'Product Name', width: 180 },
  { field: 'value', headerName: 'Price ($)', width: 100 },
  { field: 'creationDate', headerName: 'Creation Date', width: 150 },
];
  const [rows, setRows] = useState([]);
  const productService = new ProductService();
  const toastService = new ToastServices();
  var nagivate = useNavigate();

  const backToLogin = () => {
    nagivate('/login')
  }

  useEffect(() => {
    productService.getAllProducts()
        .then((data: any) => {
          setRows(data.data);
        })
        .catch((error: any) => {
          toastService.showErrorRequestMessage(error);
        });
  }, []);

  return (
    <div className={"div"}>
      <div className={"button"}>
       <Button variant="contained" 
       onClick={() => backToLogin() } 
       >Return to login
       </Button>
      </div>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}