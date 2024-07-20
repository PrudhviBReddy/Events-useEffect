import React, { useEffect, useRef } from 'react'

function ResultForm() {
    let firstNameInputRef = useRef();
    let lastNameInputRef = useRef();
    let teluguInputRef = useRef();
    let hindiInputRef = useRef();
    let englishInputRef = useRef();
    let mathsInputRef = useRef();
    let scienceInputRef = useRef();
    let socialInputRef = useRef();
    let resultParaRef = useRef();

    let firstNameResultRef = useRef();
    let lastNameResultRef = useRef();
    let teluguResultRef = useRef();
    let hindiResultRef = useRef();
    let englishResultRef = useRef();
    let mathsResultRef = useRef();
    let scienceResultRef = useRef();
    let socialResultRef = useRef();

    useEffect(()=>{
       alert("Welcome to Our Website")
    },[]);

  return (
    <div>
        <form className="markssheet">
            <div>
                <label>First Name</label>
                <input type="text" ref={firstNameInputRef}
                onFocus={()=>{
                    console.log("FirstName-onFocus");
                    firstNameInputRef.current.style.backgroundColor = "lightblue";
                    firstNameInputRef.current.style.color = "black";
                }} 
                onChange={()=>{
                    console.log("FirstName-onChange");
                }} 
                onBlur={()=>{
                    console.log("FirstName-onBlur");
                    firstNameInputRef.current.style.backgroundColor = "";
                    firstNameInputRef.current.style.color = "black";
                }}></input>
                <span ref={firstNameResultRef}></span>
            </div>
            <div>
                <label>Last Name</label>
                <input type="text" ref={lastNameInputRef}
                onFocus={()=>{
                    console.log("LastName-onFocus");
                    lastNameInputRef.current.style.backgroundColor = "lightpink";
                    lastNameInputRef.current.style.color = "black";
                }} 
                onChange={()=>{
                    console.log("LastName-onChange");
                }} 
                onBlur={()=>{
                    console.log("LastName-onBlur");
                    lastNameInputRef.current.style.backgroundColor = "";
                    lastNameInputRef.current.style.color = "black";
                }}></input>
                <span ref={lastNameResultRef}></span>
            </div>
            <div>
                <label>Telugu</label>
                <input type="number" ref={teluguInputRef}
                onFocus={()=>{
                    console.log("Telugu-onFocus");
                    teluguInputRef.current.style.backgroundColor = "green";
                    teluguInputRef.current.style.color = "white";
                }} 
                onChange={()=>{
                    console.log("Telugu-onChange");
                    teluguResultRef.current.innerHTML = teluguInputRef.current.value >=35 ? "Pass" : "Fail";
                    teluguResultRef.current.style.backgroundColor = teluguInputRef.current.value >=35 ? "green" : "red";
                    teluguResultRef.current.style.color = "white";
                }} 
                onBlur={()=>{
                    console.log("Telugu-onBlur");
                    teluguInputRef.current.style.backgroundColor = "";
                    teluguInputRef.current.style.color = "black";
                }}></input>
                <span ref={teluguResultRef}></span>
            </div>
            <div>
                <label>Hindi</label>
                <input type="number" ref={hindiInputRef}
                onFocus={()=>{
                    console.log("Hindi-onFocus");
                    hindiInputRef.current.style.backgroundColor = "orange";
                    hindiInputRef.current.style.color = "white";
                }} 
                onChange={()=>{
                    console.log("Hindi-onChange");
                    hindiResultRef.current.innerHTML = hindiInputRef.current.value >= 35 ? "Pass" : "Fail";
                    hindiResultRef.current.style.color = hindiInputRef.current.value >=35 ? "green" : "red";
                }} 
                onBlur={()=>{
                    console.log("Hindi-onBlur");
                    hindiInputRef.current.style.backgroundColor = "";
                    hindiInputRef.current.style.color = "black";
                }}></input>
                <span ref={hindiResultRef}></span>
            </div>
            <div>
                <label>English</label>
                <input type="number" ref={englishInputRef}
                onFocus={()=>{
                    console.log("English-onFocus");
                    englishInputRef.current.style.backgroundColor = "black";
                    englishInputRef.current.style.color = "white";
                }} 
                onChange={()=>{
                    console.log("English-onChange");
                    englishResultRef.current.innerHTML = englishInputRef.current.value >= 35 ? "😎" : "😞";
                }} 
                onBlur={()=>{
                    console.log("English-onBlur");
                    englishInputRef.current.style.backgroundColor = "";
                    englishInputRef.current.style.color = "black";
                }}></input>
                <span ref={englishResultRef}></span>
            </div>
            <div>
                <label>Maths</label>
                <input type="number" ref={mathsInputRef}
                onFocus={()=>{
                    console.log("Maths-onFocus");
                    mathsInputRef.current.style.backgroundColor = "red";
                    mathsInputRef.current.style.color = "white";
                }} 
                onChange={()=>{
                    console.log("Maths-onChange");
                    mathsResultRef.current.innerHTML = mathsInputRef.current.value >= 35 ? "Congrats" : "ButterLuckNextTime";
                    mathsResultRef.current.style.color = mathsInputRef.current.value >=35 ? "green" : "red";
                }} 
                onBlur={()=>{
                    console.log("Maths-onBlur");
                    mathsInputRef.current.style.backgroundColor = "";
                    mathsInputRef.current.style.color = "black";
                }}></input>
                <span ref={mathsResultRef}></span>
            </div>
            <div>
                <label>Science</label>
                <input type="number" ref={scienceInputRef}
                onFocus={()=>{
                    console.log("Science-onFocus");
                    scienceInputRef.current.style.backgroundColor = "Yellow";
                    scienceInputRef.current.style.color = "black";
                }} 
                onChange={()=>{
                    console.log("Science-onChange");
                    scienceResultRef.current.innerHTML = scienceInputRef.current.value >= 35 ? "Congrats" : "Don'tGiveUp,TryAgain";
                    scienceResultRef.current.style.color = scienceInputRef.current.value >=35 ? "green" : "red";
                }} 
                onBlur={()=>{
                    console.log("Science-onBlur");
                    scienceInputRef.current.style.backgroundColor = "";
                    scienceInputRef.current.style.color = "black";
                }}></input>
                <span ref={scienceResultRef}></span>
            </div>
            <div>
                <label>Social</label>
                <input type="number" ref={socialInputRef}
                onFocus={()=>{
                    console.log("Social-onFocus");
                    socialInputRef.current.style.backgroundColor = "blue";
                    socialInputRef.current.style.color = "white";
                }} 
                onChange={()=>{
                    console.log("Social-onChange");
                    socialResultRef.current.innerHTML = socialInputRef.current.value >= 35 ? "AllTheBest" : "TryAgain";
                    socialResultRef.current.style.color = socialInputRef.current.value >=35 ? "green" : "red";
                }} 
                onBlur={()=>{
                    console.log("Social-onBlur");
                    socialInputRef.current.style.backgroundColor = "";
                    socialInputRef.current.style.color = "black";
                }}></input>
                <span ref={socialResultRef}></span>
            </div>
            <div>
                <button type="button" 
                onMouseMove={()=>{
                    let firstName = firstNameInputRef.current.value;
                    let lastName = lastNameInputRef.current.value;
                    let teluguMarks = Number(teluguInputRef.current.value);
                    let hindiMarks = Number(hindiInputRef.current.value);
                    let englishMarks = Number(englishInputRef.current.value);
                    let mathsMarks = Number(mathsInputRef.current.value);
                    let scienceMarks = Number(scienceInputRef.current.value);
                    let socialMarks = Number(socialInputRef.current.value);
                    let totalMarks = teluguMarks+hindiMarks+englishMarks+mathsMarks+scienceMarks+socialMarks;
                    
                    
                    alert(`Total Marks are ${totalMarks}`);
                    resultParaRef.current.innerHTML = `${firstName} ${lastName} got total marks are ${totalMarks}`;
                    console.log(totalMarks);



                }}>Result</button>
            </div>
            <p ref={resultParaRef}>Please Enter Values and Click Calculate</p>
        </form>
    </div>
  )
}

export default ResultForm