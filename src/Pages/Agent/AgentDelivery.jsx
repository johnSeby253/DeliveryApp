import { useEffect, useState } from "react";
import AgentHeaders from "../Compontents/AgentHeaders";
import { Button, Modal } from "flowbite-react";
import { getAgentOrderPickuped } from "../Services/All_Api";

const AgentDelivery = () => {
    const [openStatusModal, setOpenStatusModal] = useState(false);
    const [agentOrderData, setAgentOrderData] = useState([]);



    const handleAgentOrderData = async () => {
        try {
          const token = sessionStorage.getItem('agentToken');
          if (token) {
            const reqHeader = {
              "Authorization": `Bearer ${token}`,
              "Content-Type": "application/json"
            };
            const agentOrder = await getAgentOrderPickuped(reqHeader);
    
            if (agentOrder.status === 200) {
              setAgentOrderData(agentOrder.data.order_id);
            } else {
              console.log("Cannot find token::::");
            }
          }
        } catch (err) {
          console.log(err);
        }
      };

      useEffect(() => {
        handleAgentOrderData();
      }, []);

    const onCloseModal = () => setOpenStatusModal(false);
    const handleOpenStatusModal = () => setOpenStatusModal(true);
    return (
        <div>
            <div className="">
                <AgentHeaders />
            </div>

            <div className="newOrders w-full h-full flex items-center justify-center mt-5 p-2 flex-col">
                <h2 className="font-bold 2xl:text-4xl text-primary
                 sm:text-2xl
                 square:text-xl
                 watch:text-sm ">Delivery Orders</h2>

{agentOrderData.length > 0 ? agentOrderData.map((item) => (
          <div key={item._id} className="card w-[80%] h-full bg-slate-300 flex items-center justify-center flex-col rounded-md mt-10 lg:w-80% sm:flex-row sm:w-[95%] sm:p-2 sm:justify-evenly square:w-full square:p-2 watch:flex watch:w-full watch:p-2">
            <div className="from w-[40%] bg-slate-100 rounded-lg lg:w-[30%] lg:p-5 sm:p-2 square:w-full square:p-3 watch:w-full watch:p-5">
              <h2>From:</h2>
              <p>{item.fromAddress.customerName}</p>
              <p>{item.fromAddress.address}</p>
              <p>{item.fromAddress.fromLocation}</p>
              <p>{item.fromAddress.MobNo}</p>
              <p>{item.fromAddress.pinCode}</p>
            </div>

            <div className="arrows w-[10%] sm:block sm:p-2 square:block square:p-3 watch:block watch:p-2">
              <i className="fa-solid fa-arrow-right fa-2xl"></i>
            </div>

            <div className="to w-[40%] bg-slate-100 rounded-lg lg:w-[30%] lg:p-5 sm:p-2 square:w-full square:p-3 watch:w-full watch:p-5">
              <h2>To:</h2>
              <p>{item.toAddress.customerName}</p>
              <p>{item.toAddress.address}</p>
              <p>{item.toAddress.toLocation}</p>
              <p>{item.toAddress.MobNo}</p>
              <p>{item.toAddress.pinCode}</p>
            </div>

            <div className="btnn w-[10%] lg:p-5 sm:w-[20%] sm:p-2 square:w-[60%] square:m-4 watch:w-80% watch:m-5">
              <button onClick={handleOpenStatusModal} className="bg-primary p-2 w-full rounded-md text-white">View More</button>
            </div>
          </div>
        )) : <p>Nothing to Display</p>}

            
            </div>




            <Modal show={openStatusModal} size="md" onClose={onCloseModal} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Order Status</h3>
                        <div className="">

                            <div>
                                <label className="font-semibold p-2" htmlFor="">
                                    <input className="m-2" type="checkbox" />Delivered
                                </label>

                            </div>

                           


                        </div>
                        <div className="w-full">
                            <Button>Save</Button>
                        </div>

                    </div>
                </Modal.Body>
            </Modal>


        </div>
    )
}

export default AgentDelivery