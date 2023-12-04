import './App.css';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import data from './data';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


function App() {
  return (
    <div className="App">
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
