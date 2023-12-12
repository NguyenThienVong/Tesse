import React from 'react'
import { Pagination } from 'antd';
const PaginationPage = () => {

  return (
    <div className=' mx-auto max-w-max'>
    <Pagination defaultCurrent={1} total={100} />
    </div>
  ) 
}

export default PaginationPage