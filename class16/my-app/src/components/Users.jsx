import { useState } from "react";
import AppLayout from "./Layout"
import AppPagination from "./Pagination"
import { Button } from "antd";

function Users(){
    const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
   {
    key: '4',
    name: 'Joe Blue',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
let [page, setPage] = useState(0)
let PaginatedArray = ()=>{
  let arr = []
  let chunks = 2;
  for(let i = 0; i < data.length; i += chunks){
arr.push(data.slice(i, i + chunks))
}
return arr
}


    return(
        <div>
       <AppLayout>
         <h1>Users</h1>
         <AppPagination data={PaginatedArray()[page]}/>
         <div>
          {
            PaginatedArray().map((v,i)=> <button onClick={()=> setPage(i)} key={i}>
              {i}
              </button>)
          }
         </div>
       </AppLayout>
        </div>
    )
}
export default Users