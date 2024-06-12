import React from 'react'

const Sidebar = () => {
    const menu = {
      "Dashboard":"<Link to='./Index.jsx'/>",
      "My Stall Profile": "<Link to='./StallProfile.jsx'/>",
      "Add inventory": "<Link to='./AddInventory.jsx'/>",
      "Update inventory": "<Link to='./UpdateInventory.jsx'/>",
      "Remove Inventory": "<Link to='./RemoveInventory.jsx'/>",
      "New Inventory": "<Link to='./NewInventory.jsx'/>"
    }

  return (
    <div>Sidebar</div>
  )
}

export default Sidebar