import './App.css';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import data from './data';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useState } from 'react';
import { FilterMatchMode } from 'primereact/api';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';

function App() {
  const [filter, setFilter] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });
  return (
    <div className="App">
      <div>
        <InputText value={filter.global.value} onChange={(e) => setFilter({ ...filter, global: { value: e.target.value, matchMode: FilterMatchMode.CONTAINS }, })} />
      </div>
      <DataTable value={data} filters={filter}
        paginator rows={3} rowsPerPageOptions={[3, 5, 10]} totalRecords={data.length}
      >
        <Column field="id" header="ID" sortable></Column>
        <Column field="name" header="Name"></Column>
        <Column field="age" header="Age"></Column>
        <Column field="city" header="City"></Column>
      </DataTable>

      <br />
      <Password />
    </div>
  );
}

export default App;
