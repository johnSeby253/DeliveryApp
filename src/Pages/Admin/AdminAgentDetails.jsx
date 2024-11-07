import { Table } from "flowbite-react"
import AdminHeader from "../Compontents/AdminHeader"

const AdminAgentDetails = () => {
  return (
    <div>
    <div className="">
      <AdminHeader/>
    </div>
    <div className="w-full h-full flex justify-center flex-col items-center ">
      <h2 className="mt-10 font-bold text-4xl text-primary
      square:text-2xl square:mt-5
      watch:text-lg watch:mt-3">
          Agent Details</h2>
      <div className="w-[90%] h-full bg-slate-100 flex items-center justify-center p-5 mt-3
      lg:mt-10
      square:w-full square:p-2
      watch:mt-5 watch:p-2 watch:w-full ">
      
      <div className="overflow-x-auto w-full ">
    <Table >
      <Table.Head>
        <Table.HeadCell>_id</Table.HeadCell>
        <Table.HeadCell>Agent Name</Table.HeadCell>
        <Table.HeadCell>Location</Table.HeadCell>
        <Table.HeadCell>Pickup Collection</Table.HeadCell>
        <Table.HeadCell>Delivery Collection</Table.HeadCell>
        <Table.HeadCell>Action</Table.HeadCell>
        <Table.HeadCell>Agent Code</Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell >_id12121</Table.Cell>
          <Table.Cell>Name of Agencie</Table.Cell>
          <Table.Cell>Angamaly,Ernakulam</Table.Cell>
          <Table.Cell>50</Table.Cell>
          <Table.Cell>49</Table.Cell>
          <Table.Cell><button className="bg-primary text-white ps-3 p-1 pe-3" >Active</button></Table.Cell>
          <Table.Cell>0131</Table.Cell>
        </Table.Row>
       
      </Table.Body>
    </Table>
  </div>
      

      </div>
    </div>
  </div>
  )
}

export default AdminAgentDetails
