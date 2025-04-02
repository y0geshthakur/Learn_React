import React from 'react'
import { Link, Outlet, useSearchParams } from 'react-router-dom'

export default function Users() {
    const [searchParams, setSearchParams] = useSearchParams()
    const showActiveUsers = searchParams.get('filter') === 'active'
  return (
    <div>
      {/* <h4>User 1</h4>
      <h4>User 2</h4>
      <h4>User 3</h4> */}
      <br></br>
      <Link to='1'>User 1</Link><br></br><br></br>
      <Link to='2'>User 2</Link><br></br><br></br>
      <Link to='3'>User 3</Link><br></br><br></br>
      {/* <Outlet></Outlet> */}
      <button onClick={() => setSearchParams({filter: 'active'})}>Apply Filter</button>
      <button onClick={() => setSearchParams({})}>Reset Filter</button>
      <br></br><br></br>
      {showActiveUsers ? <h3>Showing Active Users</h3> : <h3>Showing All Users</h3>}
    </div>
  )
}
