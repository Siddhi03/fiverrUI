import React from 'react'
import { Link } from 'react-router-dom'
import "./Messages.scss"

const Messages= () =>{

  const currentUser={
    id:1,
    username: "John",
    isSeller: true
  };
  const message= `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`

  return (
    <div className='messages'>
      <div className="container">
        <div className="title">
          <h1>Messages</h1>
          
        </div>

        <table>
          <tr>
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr className='active'>
            <td>John Doe</td>
            <td><Link to="/message" className='link'>{message.substring(1,100)}...</Link></td>
            <td>1 day ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr className='active'>
            <td>John Doe</td>
            <td><Link to="/message" className='link'>{message.substring(1,100)}...</Link></td>
            <td>1 day ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td><Link to="/message" className='link'>{message.substring(1,100)}... </Link></td>
            <td>1 day ago</td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td><Link to="/message" className='link'>{message.substring(1,100)}...</Link></td>
            <td>1 day ago</td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td><Link to="/message" className='link'>{message.substring(1,100)}...</Link></td>
            <td>1 day ago</td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td><Link to="/message" className='link'>{message.substring(1,100)}...</Link></td>
            <td>1 day ago</td>
          </tr>
        </table>
      </div>
      
    </div>
  )
}

export default Messages
