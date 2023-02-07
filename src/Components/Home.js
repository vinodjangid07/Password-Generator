import React from 'react'
// import {useRef} from 'react'

export default function Home() {
  // const ref = useRef(null);
   const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   const lowerSet = "abcdefghijklmnopqrstuvwxyz"
   const numberSet = "1234567890"
   const symbolSet = "!@#$%^&*()_+/<>"


   const getRandomData  = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]
   }
   const generatePassword = (password="") => {

    if(document.getElementById('uppercase').checked){
      password += getRandomData(upperSet)
    }
    if(document.getElementById('lowercase').checked){
      password += getRandomData(lowerSet)
    }
    if(document.getElementById('numbers').checked){
      password += getRandomData(numberSet)
    }
    if(document.getElementById('symbols').checked){
      password += getRandomData(symbolSet)
    }
    if(password.length < document.getElementById('length').value){
      return generatePassword(password)
    }
    document.getElementById('copy').innerText = "Copy";
    document.getElementById('inputField').value = truncateString(password,document.getElementById('length').value);
   }
   function Clicked(){
    generatePassword();
   }
   function Copy(){
    const textarea= document.createElement('textarea');
    var password = document.getElementById('inputField').value; 
    if(!password){
      return;
    }
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    // alert('Password copied');
    document.getElementById('copy').innerText = "Copied";
   }
   function truncateString(str,num){
    if(str.length > num){
      let subStr = str.substring(0, num);
      return subStr;
    }
    else{
      return str;
    }
   }
  return (
    <div className="daddy-container">
    <div className='main-container'>
    <div className='heading'>
      <article>Password Generator&nbsp;&nbsp;<i class="fas fa-cog"></i></article>
    </div>
          <div className="input-div">
            <input type="text" className='input' id='inputField' disabled/>
            <button className='copy' id='copy' onClick={Copy}>Copy</button>
          </div>
          <div className="checkbox-container">
          <div>
          <label htmlFor="length" id='length-label'>Password length</label>
            <input type="number" id='length' className='checkbox'/>
            </div>
            <div>
            <label htmlFor="uppercase" id='uppercase-label'>Include uppercase letters</label>
            <input type="checkbox" id='uppercase' className='checkbox'/>
            </div>

            <div>
            <label htmlFor="lowercase" id='lowercase-label'>Include lowercase letters</label>
            <input type="checkbox" id='lowercase' className='checkbox'/>
            </div>

            <div>
            <label htmlFor="numbers" id='numbers-label'>Include numbers</label>
            <input type="checkbox" id='numbers' className='checkbox'/>
            </div>

            <div>
            <label htmlFor="symbols" id='symbols-label'>Include symbols</label>
            <input type="checkbox" id='symbols' className='checkbox'/>
            </div>



          </div>
          <button className='generate-button' id='button' onClick={Clicked}>Generate Password</button>
    </div>
    </div>
  )
}
