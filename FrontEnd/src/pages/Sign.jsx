import React, {useState}from 'react'

const Sign = () => {
    const [Contact, setContact] = useState('')
    const [errorContact, setErrorContact] = useState('')
    const [email, SetEmail]= useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const [password, setpassword] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    
    const [errorContactColor, setErrorContactColor] = useState('')
    const [errorEmailColor, setErrorEmailColor] = useState('')
    const [errorPasswordColor, setErrorPasswordColor] = useState('')
    
    const Validate = (e)=>{
    e.preventDefault()
    if(Contact.length === 11){
        setErrorContact('')
        setErrorContactColor('green')
    }
    else{
      
        setErrorContact('Phone number is not accurate')
        setErrorContactColor('red')
    
    }
    
    
    if(email !== ''){
        
        setErrorEmailColor('green')
        setErrorEmail('')
       
    }else if (!email.includes("@gmail.com") &&  !email.includes("@email.com")){
      `                                                                                                                                                                                 `
        setErrorEmailColor('red')
        setErrorEmail('Email must contain @gmail or @email')
    }
    else{
        setErrorEmail('Email can not be empty')
        setErrorEmailColor('red')
        
    }
    
    
    if(password.length <8){
        setErrorPassword('Password must be at minimum 8 characters and maximum of 12')
    setErrorPasswordColor('green')  
    }
    else{
     
        setErrorPasswordColor('red')
        setErrorPassword('')
    }
    }
    
    
    
      return (
        <div className='w-[300px] border-2 border-black rounded-lg mt-[100px] ml-[50px] mr-[50px] font-inter h-[600px] md:w-[500px] relative left-[10%] lg:left-[30%] xxs:ml-[-20px] sm:w-[500px]'>
        
    <form>
    <h1 className='text-2xl text-center mb-[40px] mt-[20px]'>Log In</h1>
    
    <input value={email} placeholder='Email' type='email' required onChange={(e)=>SetEmail(e.target.value)}autoComplete='true' style={{borderColor: errorEmailColor}} className='text-xl w-[90%] bg-white border-[1px] border-black ml-[20px] rounded-lg p-[10px]  mb-[30px] h-[50px]'/>
    <div className='ml-[20px] mb-[30px] '>
    <p style={{color:'red'}}>{errorEmail}</p>
    
    </div>
    <input value={password} onChange={(e)=>setpassword(e.target.value)} placeholder='Password' required type='password'  style={{borderColor: errorPasswordColor}} className='text-xl w-[90%] bg-white ml-[20px] rounded-lg p-[10px]  mb-[20px] border-[1px] border-black'/>
    <p style={{color:'red'}}>{errorPassword}</p>
    <button type='submit' onClick={Validate} className='bg-[#007BFF] text-white w-[100px] h-[50px] text-center rounded-lg relative left-[40%] mb-[30px]'>Sign in</button>
    <div className='flex ml-[20px] md:gap-[15px] xxs:flex-col sm:flex-row sm:gap-[15px]'>
    <input type='checkbox' required  className='relative '/>
    <p className='text-[12px]'>By Continuing, I agree to terms and conditions that apply</p>
    </div>
    
    
    </form>
        </div>
      )
}

export default Sign