import React, {useState}  from 'react'
import Layout from '../Components/Layout/Layout'


const StallProfile = () => {
  const [loading, setLoading]=useState(false);


  const handleSubmit=(e)=>{
    e.preventDefault();
    const form = document.forms.addProfile;
    const profile = {
      stallTitle: form.stallTitle.value, description: form.description.value,
      phoneNumber: form.phoneNumber.value, email: form.email.value, location:form.location.value,
      profileImage: form.profileImage.value
    }
    console.log(profile);
  }

  return (
    <Layout>
      <h1>STALL PROFILE</h1>
      <p>Show the details to your stall</p>
      <div>
        <h2>Add your stall details</h2>
        <form  name="addProfile" method="post">
          <div className="form-group">
            <label htmlFor="shopTitle">Stall Title</label>
            <input type="text" name="stallTitle" id="shopTitle" autoComplete='false' />
          </div>
          <div className="form-group">
            <label htmlFor="description">Describe what your stall deals in (electronics, shoes, etc...)</label>
            <input type="text" name="description" id="description" autoComplete='false'/>
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Enter phone number</label>
            <input type="tel" name="phoneNumber" id="phoneNumber" autoComplete='false'/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Enter email</label>
            <input type="email" name="email" id="email" autoComplete='false'  />
          </div>
          <div className="form-group">
            <label htmlFor="location">Enter your business location address</label>
            <input type="text" name="location" id="location" autoComplete='false' />
          </div>
          <div className="form-group">
            <label htmlFor="profileImage">Stall Profile Image</label>
            <input type="file" name="profileImage" id="profileImage" autoComplete='false'/>
          </div>
          <button type="submit" className="btn btn-primary" disabled={loading} onClick={handleSubmit}>
            {loading ? 'UPDATING...' : 'UPDATE'}
        </button>
        </form>
      </div>
    </Layout>
  )
}

export default StallProfile