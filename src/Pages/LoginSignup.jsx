import React, { useState } from 'react';

const LoginSignup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState(''); 
  const handleSubmit = (event) => {

    event.preventDefault();
    // You can perform authentication logic here, for simplicity, let's just log the values
    console.log('Username:', username);
    console.log('Password:', password);
    // After authentication logic, you can redirect the user to another page
    // For example, using React Router: history.push('/dashboard');
  };
  return (
    <div className='flex justify-center items-center h-screen'>
      <form className="box-border h-[450px] w-[550px] rounded-[20px] drop-shadow-2xl bg-[#fff]" onSubmit={handleSubmit}>
      <div className=" justify-center pt-4">
                <p className="text-3xl font-bold text-orange-500  leading-normal text-center">
                  SHOPPER!
                </p>
                <p className="text-[#1D3557] font-[400] text-center">
                  LOG IN TO START SHOPPING
                </p>
              </div>
        <div className='mt-20 flex justify-center'>
          <label>Username:</label>
          <input className='mt-1 ml-2 block flex align-center justify-center h-[4vh] w-[30vw]  px-2 py-2 bg-white border
            border-slate-300 rounded-md text-sm shadow-sm ' type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className='mt-10 flex justify-center'>
          <label>Password:</label>
          <input className='mt-1 ml-2 block flex align-center justify-center h-[4vh] w-[30vw]  px-2 py-2 bg-white border  border-slate-300 rounded-md text-sm shadow-sm' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div >
        <div className='mt-20 flex justify-center'>
        <button className='rounded-md   bg-orange-500 h-[4vh] w-[25vw] sm:h-[36px] sm:w-[435px]' type="submit">Login</button>
        </div>
        
      </form>
    </div>
  )
}

export default LoginSignup