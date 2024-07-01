import React from 'react'

export default function SignUp() {
  return (
    <>
   
   <div className="container mt-5">
  <div className="row justify-content-center">
    <div className="col-md-6">
      <div className="card">
        <div className="card-header text-center">
          <h4>Sign Up</h4>
        </div>
        <div className="card-body">
          <form>
            <div className="form-group mb-3">
              <label htmlFor="username">Username</label>
              <input type="text" className="form-control" id="username" placeholder="Enter username"/>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="email">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="Enter email"/>
            </div>

            <label htmlFor="mobile-number">Mobile Number</label>
              <input type="tel" className="form-control" id="mobile-number" placeholder='Enter Your Mobile Number'/>

            <div className="form-group mb-3">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Password"/>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input type="password" className="form-control" id="confirm-password" placeholder="Confirm Password"/>
            </div>
            <div className="form-group mb-3">
             </div>
             
            <button type="submit" className="btn btn-primary w-100">Register</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>


    </>
  )
}
