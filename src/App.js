import './App.css';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import data from './data';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useState } from 'react';
import { FilterMatchMode } from 'primereact/api';


function App() {
  const [filter, setFilter] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });
  return (
    <div className="App">
      <div>

      </div>
      <DataTable value={data}>
        <Column field="id" header="ID" sortable></Column>
        <Column field="name" header="Name"></Column>
        <Column field="age" header="Age"></Column>
        <Column field="city" header="City"></Column>
      </DataTable>
    </div>
  );
}

export default App;
