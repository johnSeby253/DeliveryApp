import AgentHeaders from "../Compontents/AgentHeaders"

const AgentOdrCmplt = () => {
    return (
        <div>

            <div className="">
                <AgentHeaders />
            </div>

            <div className="newOrders w-full h-full flex items-center justify-center p-2 flex-col">
                <h2 className="font-bold 2xl:text-4xl text-primary
                 sm:text-2xl
                 square:text-xl
                 watch:text-sm ">Completed Orders</h2>

    <div className="card w-[80%] h-full bg-slate-300 flex items-center justify-center flex-col rounded-md mt-10
        lg:w-80%
        sm:flex-row sm:w-[95%] sm:p-2 sm:justify-evenly 
       square:w-full square:p-2
       watch:flex watch:w-full watch:p-2
         " >

        <div className="from w-[40%] bg-slate-100 rounded-lg
          lg:w-[30%]
          lg:p-5
          sm:p-2
         square:w-full square:p-3
         watch:w-full watch:p-5 
         ">
                        <h2>From:</h2>
                        <p>John Seby</p>
                        <p>P*******y K****an (H)</p>
                        <p>Angamaly,Thuravoor</p>
                        <p>85******52</p>
                        <p>68**72</p>
                    </div>

        <div className="arrows">
            <div className="arrow w-[10%] hidden
            sm:block sm:p-2">
            <i className="fa-solid fa-arrow-right fa-2xl"></i>
            </div>

        <div className="arrow w-[10%] hidden
            square:block square:p-3
           watch:block watch:p-2 ">
         <i className="fa-solid fa-arrow-down fa-2xl"></i>
        </div>
            </div>

        <div className="to w-[40%] bg-slate-100 rounded-lg
           lg:w-[30%]
          lg:p-5
          sm:p-2
          square:w-full square:p-3
          watch:w-full watch:p-5">
                        <h2>To:</h2>
                        <p>John Seby</p>
                        <p>P*******y K****an (H)</p>
                        <p>Angamaly,Thuravoor</p>
                        <p>85******52</p>
                        <p>68**72</p>
                    </div>
    
        </div>

         <div className="card w-[80%] h-full bg-slate-300 flex items-center justify-center flex-col rounded-md mt-10
        lg:w-80%
        sm:flex-row sm:w-[95%] sm:p-2 sm:justify-evenly 
       square:w-full square:p-2
       watch:flex watch:w-full watch:p-2 " >

         <div className="from w-[40%] bg-slate-100 rounded-lg
          lg:w-[30%]
          lg:p-5
          sm:p-2
         square:w-full square:p-3
         watch:w-full watch:p-5 ">
                        <h2>From:</h2>
                        <p>John Seby</p>
                        <p>P*******y K****an (H)</p>
                        <p>Angamaly,Thuravoor</p>
                        <p>85******52</p>
                        <p>68**72</p>
                    </div>

                    <div className="arrows">
        <div className="arrow w-[10%] hidden
            sm:block sm:p-2">
                            <i className="fa-solid fa-arrow-right fa-2xl"></i>
                        </div>
         <div className="arrow w-[10%] hidden
            square:block square:p-3
          watch:block watch:p-2 ">
                            <i className="fa-solid fa-arrow-down fa-2xl"></i>
                        </div>
                    </div>

        <div className="to w-[40%] bg-slate-100 rounded-lg
           lg:w-[30%]
          lg:p-5
          sm:p-2
          square:w-full square:p-3
          watch:w-full watch:p-5">
                        <h2>To:</h2>
                        <p>John Seby</p>
                        <p>P*******y K****an (H)</p>
                        <p>Angamaly,Thuravoor</p>
                        <p>85******52</p>
                        <p>68**72</p>
                    </div>

     
                </div>

    <div className="card w-[80%] h-full bg-slate-300 flex items-center justify-center flex-col rounded-md mt-10
        lg:w-80%
        sm:flex-row sm:w-[95%] sm:p-2 sm:justify-evenly 
       square:w-full square:p-2
       watch:flex watch:w-full watch:p-2
         " >

        <div className="from w-[40%] bg-slate-100 rounded-lg
          lg:w-[30%]
          lg:p-5
          sm:p-2
         square:w-full square:p-3
         watch:w-full watch:p-5 
         ">
                        <h2>From:</h2>
                        <p>John Seby</p>
                        <p>P*******y K****an (H)</p>
                        <p>Angamaly,Thuravoor</p>
                        <p>85******52</p>
                        <p>68**72</p>
                    </div>

                    <div className="arrows">
        <div className="arrow w-[10%] hidden
            sm:block sm:p-2">
                            <i className="fa-solid fa-arrow-right fa-2xl"></i>
                        </div>
        <div className="arrow w-[10%] hidden
            square:block square:p-3
          watch:block watch:p-2 ">
                <i className="fa-solid fa-arrow-down fa-2xl"></i>
                        </div>
                    </div>

        <div className="to w-[40%] bg-slate-100 rounded-lg
           lg:w-[30%]
          lg:p-5
          sm:p-2
          square:w-full square:p-3
          watch:w-full watch:p-5">
                        <h2>To:</h2>
                        <p>John Seby</p>
                        <p>P*******y K****an (H)</p>
                        <p>Angamaly,Thuravoor</p>
                        <p>85******52</p>
                        <p>68**72</p>
                    </div>

        
                </div>
            </div>
        </div>
    )
}

export default AgentOdrCmplt
