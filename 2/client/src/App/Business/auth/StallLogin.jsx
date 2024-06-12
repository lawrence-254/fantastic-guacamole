import React, {useState} from 'react'

const StallLogin = () => {
    const [loading, setLoading]=useState(false);

    const handleChange = (e) => {
        setData({...data, [e.target.id]: e.target.value})
    };
  return (
  <div>
    <h1>LOGIN TO YOUR STALL</h1>
    <form>
        <div className="form-group">
            <label htmlFor="stallId">Enter a unique identification (can be phone no., email etc...)*</label>
            <input className='form0control' placeholder='Enter a unique business Id'/>
        </div>
        <div className="form-group">
            <label htmlFor="password">Password*</label>
            <input type="password" className="form-control" id="password" placeholder='Enter password' onChange={handleChange}/>
        </div>
        <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'LOADING...' : 'LOGIN'}
        </button>
    </form>
    {/* <p>Dont have an account? <Link to="/register">REGISTER</Link></p> */}
    </div>
  )
}
export default StallLogin