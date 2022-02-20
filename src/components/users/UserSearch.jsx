import { useState } from "react";

const UserSearch = () => {
  const [text, setText] = useState("");

  const searchHandler = (event) => setText(event.target.value);
  const submitHandler = (event)=>{
      event.preventDefault()
  }

  if(text===''){
      alert('please enter something')
  }else{
      setText('')
  }

  return (
    <div
      className="grid  grid-cols-1 xl:grid-cols-2 
        lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8"
    >
      <div>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 
                        input-lg text-black"
                placeholder="Search"
                value={text}
                onChange={searchHandler}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 r
                           ounded-l-none w-36 btn btn-lg"
                >           
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      <div>
        <button className="btn btn-warning btn-lg">Clear</button>
      </div>
    </div>
  );
};

export default UserSearch;