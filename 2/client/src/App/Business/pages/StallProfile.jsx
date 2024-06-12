import React, {useState}  from 'react'

const StallProfile = () => {
  const [loading, setLoading]=useState(false);

  return (
    <div>
      <h1>STALL PROFILE</h1>
      <p>Sow the details to your stall</p>
      <div>
        <h2>Add your stall details</h2>
        <form action="" method="post">
          <div className="form-group">
            <label htmlFor="profileImage">Stall Profile Image</label>
            <input type="file" name="" id="" />
          </div>
          <div className="form-group">
            <label htmlFor="shopTitle">Stall Title</label>
            <input type="text" name="" id="" />
          </div>
          <div className="form-group">
            <label htmlFor="description">Describe what your stall deals in (electronics, shoes, etc...)</label>
            <input type="text" name="" id="" />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Enter phone number</label>
            <input type="tel" name="" id="" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Enter email</label>
            <input type="email" name="" id="" />
          </div>
          <div className="form-group">
            <label htmlFor="location">Enter your business location address</label>
            <input type="text" name="" id="" />
          </div>
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'UPDATING...' : 'UPDATE'}
        </button>
        </form>
      </div>
    </div>
  )
}

export default StallProfile