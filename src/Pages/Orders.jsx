import React from 'react'
import { GridComponent,ColumnsDirective,ColumnDirective,Resize,Sort,ContextMenu,Filter,Page,ExcelExport,PdfExport,Edit,Inject } from '@syncfusion/ej2-react-grids';
import { ordersData,contextMenuItems,ordersGrid } from '../data/dummy';
import { Header } from '../components';

const Orders = () => {
  return (
    <div className='bg-white m-2 md:m-10 rounded-3xl p-2 md:p-10'>
      <Header category="Page" title="Orders"/>
      <br></br>
      <GridComponent id="gridcomp" dataSource={ordersData} allowPaging allowSorting>
        <ColumnsDirective>
         {ordersGrid.map((item,index)=>(
          <ColumnDirective key={index} {...item}/>
         ))}
        </ColumnsDirective>
        <Inject services={[Resize,Sort,ContextMenu,Filter,Page,ExcelExport,Edit,PdfExport]}/>
      </GridComponent>
    </div>
  )
}

export default Orders
