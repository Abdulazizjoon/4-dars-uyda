const butto1=document.getElementById("button")
const butto2=document.getElementById("button1")
const butto3=document.getElementById("button2")

butto1.addEventListener('click',function() {
    butto1.style.backgroundColor="#000"
    butto1.style.borderRadius="5px"
    butto1.style.color="red"
    document.body.style.backgroundColor="#000"
    document.body.style.color="#fff"
    document.querySelector(".img1").setAttribute("src","./img/images.jpg")
    
})
butto2.addEventListener('click',function() {
    document.body.style.backgroundColor="#fff"
    document.body.style.color="red"
    butto2.style.color="red"
})
butto3.addEventListener('click',function() {
    butto3.style.display="none"
    
})

//masalalar
//1-masala
// function a(students) {
//   if (!students || students.length === 0) {
//     return null;
//   }

//   let buutton = -1;
//   let b = null;

//   students.forEach((talaba) => {
//     if (talaba.baholar && talaba.baholar.length > 0) {
//       const aa =
//         talaba.baholar.reduce((total, baho) => total + baho, 0) /
//         talaba.baholar.length;
//       if (aa > buutton) {
//         buutton = aa;
//         b = talaba.ism;
//       }
//     }
//   });

//   return b;
// }

// let students = [
//   { ism: "Ali", yosh: 20, baholar: [85, 90, 88] },
//   { ism: "Vali", yosh: 21, baholar: [85, 87, 90] },
//   { ism: "Sami", yosh: 22, baholar: [88, 92, 84] },
// ];

// let d = a(students);
// console.log(d);

//3-masala

// function a(students) {
//   let d = {};
//   students.forEach((b) => {
//     if (b.fanlari && b.fanlari.length > 0) {
//       b.fanlari.forEach((fan) => {
//         if (d[fan]) {
//           d[fan]++;
//         } else {
//           d[fan] = 1;
//         }
//       });
//     }
//   });

//   return d;
// }

// let students = [
//   { ism: "Ali", yosh: 20, fanlari: ["Matematika", "Fizika"] },
//   { ism: "Vali", yosh: 21, fanlari: ["It-dasturlash", "Fizika"] },
//   { ism: "Sami", yosh: 22, fanlari: ["Matematika", "Kimyo", "It-dasturlash"] },
// ];

// let aa = a(students);
// console.log(aa);
