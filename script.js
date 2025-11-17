const fristName = "Noura Alaidy"
const website = "Noura257"
// in the past:-
console.log("My name is "+ fristName +  " and my website is " + website );
// now:-
console.log(`My frist name is ${fristName} 
    and my website is ${website}`);





// DOM, WINDOW

window.addEventListener("resize",()=>{
    console.log("window resized")
})    // بيحسب عدد مرات تغيير حجم الموقع



// document

const element = document.createElement("h3")
// انشاء عنصر html من نوع h3 فى ذاكره المتصفح و يخزنه فى متغير element 

element.innerText = "2025";
//تعيين النص 2025 كمحتوى داخل للعنصر h3 الذى تم انشاؤه

document.body.appendChild(element)
// يضيف العنصر 2025 فى ال body  فى مستند ال html علشان يظهر فى صفحه الويب

console.log(element);
// الطباعه فى المتصفح


