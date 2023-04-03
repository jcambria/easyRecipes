function Timer() {
    return (
      <>
        <div className="card bg-white w-[200px] h-[350px] m-2 rounded-lg shadow-lg">
          <div className="top">
            <img
              className="w-[200px] h-[200px] object-cover  p-2"
              src = 'https://assets.epicurious.com/photos/5ed94926dd87b9e5df92999b/16:9/w_2560%2Cc_limit/StatementTimers_HERO_060320_8443.jpg'
              alt="img"
            />
          </div>
          <div className="bottom flex flex-col justify-center items-start p-3 bg-">
            <div className="title font-semibold text-xl my-1">
            <a href="https://www.timeanddate.com/timer/" target="_blank" rel="noreferrer" >Online Timer</a>
            </div>

          </div>
        </div>
      </>
    );
  }
  function Measurment() {
    return (
      <>
        <div className="card bg-white w-[200px] h-[350px] m-2 rounded-lg shadow-lg">
          <div className="top">
            <img
              className="w-[200px] h-[200px] object-cover  p-2"
              src = 'https://images.unsplash.com/photo-1523901839036-a3030662f220?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGFwZSUyMG1lYXN1cmV8ZW58MHx8MHx8&w=1000&q=80'
              alt="img"
            />
          </div>
          <div className="bottom flex flex-col justify-center items-start p-3 bg-">
            <div className="title font-semibold text-xl my-1">
            <a href="https://www.tasteofhome.com/article/cooking-measurement-conversion/" target="_blank" rel="noreferrer">Measurment Converter</a>
            </div>

          </div>
        </div>
      </>
    );
  }
  
  function Practises() {
    return (
      <>
        <div className="card bg-white w-[200px] h-[350px] m-2 rounded-lg shadow-lg">
          <div className="top">
            <img
              className="w-[200px] h-[200px] object-cover  p-2"
              src = 'https://d39l2hkdp2esp1.cloudfront.net/img/photo/136620/136620_00_2x.jpg'
              alt="img"
            />
          </div>
          <div className="bottom flex flex-col justify-center items-start p-3 bg-">
            <div className="title font-semibold text-xl my-1">
            <a href="https://learntocook.com/techniques/top-6-kitchen-best-practices/" target="_blank" rel="noreferrer">Best Practices</a>
            </div>

          </div>
        </div>
      </>
    );
  }

    function Essentials() {
        return (
          <>
            <div className="card bg-white w-[200px] h-[350px] m-2 rounded-lg shadow-lg">
              <div className="top">
                <img
                  className="w-[200px] h-[200px] object-cover  p-2"
                  src = 'https://www.fivestarhomefoods.com/blogs/wp-content/uploads/sites/2/2021/07/kitchen-essentials.jpg'
                  alt="img"
                />
              </div>
              <div className="bottom flex flex-col justify-center items-start p-3 bg-">
                <div className="title font-semibold text-xl my-1">
                <a href="https://www.cooksmarts.com/cooking-guides/create-a-functional-kitchen/20-must-have-kitchen-tools/" target="_blank" rel="noreferrer">Kitchen Essentials</a>
                </div>
    
              </div>
            </div>
          </>
        );
  }
  export {
    Timer,
    Measurment,
   Practises,
    Essentials,
  }


