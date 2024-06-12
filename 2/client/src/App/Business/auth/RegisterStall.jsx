import React, {useState} from 'react'

const RegisterStall = () => {
    const [loading, setLoading]=useState(false);

      const handleChange = (e) => {
    setData({...data, [e.target.id]: e.target.value});
  }

  return (
    <div>
        <h1>REGISTER YOUR STALL</h1>
        <form>
            <div className="form-group">
                <label htmlFor="stallId">Enter a unique identification (can be phone no., email etc...)*</label>
                <input className='form0control' placeholder='Enter a unique business Id'/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" placeholder='Enter password' onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" className="form-control" id="confirmPassword" placeholder='Enter password confirmation' onChange={handleChange}/>
            </div>
            <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? 'REGISTERING...' : 'REGISTER'}
            </button>
        </form>
        <p>Have an account? <Link to="/login">LOGIN</Link></p>
    </div>
  )
}

export default RegisterStall