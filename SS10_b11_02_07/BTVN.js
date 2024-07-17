// CRD create read update delete

//  Mô tả thuật toán tính điểm trung bình

// let math = +prompt("Nhập điểm Toán");
// let physics = +prompt("Nhập điểm Lý");
// let chemistry = +prompt("Nhập điểm Hoá");
// let average = (math + physics + chemistry) / 3;
// console.log(average);
// =============================================
//Mô tả thuật toán chuyển đổi tiền tệ
// Nhập số tiền Đô la Mỹ

// Tính số tiền Việt Nam Đồng bằng cách nhân số tiền Đô la Mỹ với tỉ giá

// Hiển thị số tiền Việt Nam Đồng.

// Hãy viết Pseudo-code và vẽ Flowchart dựa trên 3 bước trên.

// let usd = +prompt("Nhập số tiền Đô la Mỹ");
// let vnd = usd * 23000;
// console.log(vnd + "VND");
// =============================================
// Mô tả thuật toán tìm giá trị lớn nhất
// Bắt đầu, chúng ta cho phép nhập 3 giá trị vào. Sau đó, chúng ta thực hiện việc so sách lần lượt từng giá trị để tìm ra giá trị lớn nhất.

// Giả sử a, b, c là 3 biến được nhập vào. Gọi a là phần tử có giá trị lớn nhất, so sánh a với các phần tử còn lại, nếu a lớn hơn 2 phần tử còn lại thì a là lớn nhất, nếu a nhỏ hơn 1 trong hai phần tử còn lại, so sánh các phần tử còn lại với nhau để tìm được giá trị lớn nhất.

// let a = Number(prompt("Nhập vào số a"));
// let b = Number(prompt("Nhập vào số b"));
// let c = Number(prompt("Nhập vào số c"));
// if (a > b && a > c) {
//   console.log("Số lớn nhất là " + a);
// } else {
//   if (b > a && b > c) {
//     console.log("Số lớn nhất là " + b);
//   } else {
//     console.log("Số lớn nhất là " + c);
//   }
// };
// =============================================
// Mô tả thuật toán tìm giá trị lớn nhất trong một dãy số
// Bắt đầu, chúng ta cho phép nhập vào điểm số của học viên trên thang điểm 100. Sau đó sẽ phân loại học viên theo các khoảng khác nhau, bao gồm:

// Nếu điểm => 75 - Loại A

// Nếu 60 <= điểm < 75 - Loại B

// Nếu 45 <= điểm < 60 - Loại C

// Nếu 35 <= điểm < 45 - Loại D

// Nếu điểm < 35 - Loại E
// do {
//   diem = prompt("Mời nhập điểm của bạn :");
// } while (parseInt(diem) > 100 || parseInt(diem) < 0); //Nhập lại
// if (diem >= 75) {
//   console.log("Bạn đạt loại A");
// } else {
//   if (diem < 75 && diem >= 60) {
//     console.log("Bạn đạt loại B");
//   } else {
//     if (diem < 60 && diem >= 45) {
//       console.log("Bạn đạt loại C");
//     } else {
//       if (diem < 45 && diem >= 35) {
//         console.log("Bạn đạt loại D");
//       } else {
//         console.log("Bạn đạt loại E");
//       }
//     }
//   }
// }
// =============================================

// Bài 1 : Hiển thị tab console một câu chào “wellcome to Rikkei Academy”.

// Bài 2: Hiển thị form cho người dùng nhập với nội dung form: “mời bạn nhập số tuổi của mình”.

// Bài 3: Hiển thị trên màn hình trình duyệt câu : “Quyết tâm học lập trình javascript”.

// Bài 4: Hiển thị hộp thoại thông báo với nội dung : “Chào mừng bạn đến với học viện Rikkei Academy”.

// Bài 5: Hiển thị một hộp thoại thông báo và yêu cầu người dùng phải xác nhận “yes” or “no” với nội dung: “bạn đã đủ 18 tuổi chưa!”.
// =============================================
// Bài 1 : Hiển thị tab console một câu chào “wellcome to Rikkei Academy”.
// console.log("Wellcome to Rikkei Academy");
// =============================================
// Bài 2: Hiển thị form cho người dùng nhập với nội dung form: “mời bạn nhập số tuổi của mình”.
// let age = +prompt("Mời bạn nhập số tuổi của mình");
// =============================================
// Bài 3: Hiển thị trên màn hình trình duyệt câu : “Quyết tâm học lập trình javascript”.
// document.write("Quyết tâm học lập trình javascript")
// =============================================
// Bài 4: Hiển thị hộp thoại thông báo với nội dung : “Chào mừng bạn đến với học viện Rikkei Academy”.
// alert("Chào mừng bạn đến với học viện Rikkei Academy");
// =============================================
// Bài 5: Hiển thị một hộp thoại thông báo và yêu cầu người dùng phải xác nhận “yes” or “no” với nội dung: “bạn đã đủ 18 tuổi chưa!”.

// let a = 5;
// let b = "5";
// console.log(a == b);
// let a = +prompt("Mời bạn nhập điểm a");
// let b = +prompt("Mời bạn nhập điểm b");
// let c = +prompt("Mời bạn nhập điểm c");
// let average = (a + b + c) / 3;
// // Học sinh giỏi Học sinh khá Học sinh trung bình
// if (average > 8) {
//   console.log("Học sinh giỏi");
// } else {
//   if (average > 5 && average <= 8) {
//     console.log("Học sinh khá");
//   } else {
//     console.log("Học sinh trung bình");
//   }
// }
// =============================================
// nhập vào 3 cạnh của tam giác vuông đều cân thường
// a b c
// a=b
// Math.pow(base, exponent ) ;

// let a = +prompt("Mời bạn cạnh a");
// let b = +prompt("Mời bạn cạnh b");
// let c = +prompt("Mời bạn cạnh c");
// if (a == b && b == c) {
//   console.log("Tam giác đều");
// } else {
//   if (a - b == 0 || b - c == 0 || c - a == 0) {
//     console.log("Tam giác cân");
//   } else {
//     if (
//       a * a + b * b - c * c == 0 ||
//       a * a + c * c - b * b == 0 ||
//       b * b + c * c - a * a == 0
//     ) {
//       console.log("Tam giác vuông");
//     } else {
//       console.log("Tam giác thường");
//     }
//   }
// }
// =============================================
// giải phương trình bậc 2
// let a = +prompt("Mời bạn nhập số a");
// let b = +prompt("Mời bạn nhập số b");
// let c = +prompt("Mời bạn nhập số c");
// if (a == 0) {
//   if (b == 0) {
//     if (c == 0) {
//       console.log("Phương trình có vô số nghiệm");
//     } else {
//       console.log("Phương trình vô nghiệm");
//     }
//   } else {
//     console.log("Phương trình có nghiệm duy nhất x = -c / b");
//   }
// } else {
//   let delta = b * b - 4 * a * c;
//   if (delta < 0) {
//     console.log("Phương trình vô nghiệm ");
//   } else {
//     if (delta == 0) {
//       let x = -b / (2 * a);
//       {
//         console.log("Phương trình có nghiệm kép " + x);
//       }
//     } else {
//       let x1 = +(-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
//       let x2 = +(-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);
//       console.log("Phương trình có 2 nghiệm " + x1, +x2);
//     }
//   }
// }
// console.log("Phương trình có 2 nghiệm " x1 = ${x1}, x2 = ${x2});

// ĐK ? ĐK đúng : ĐK sai
// chỉ dùng với trường hợp 1, 2 if else
// let a = [1, 2, 3, 4, 5];
// let max = 0;
// for (let i = 0; i < a.length; i++) {
//   if (a[i] > max) {
//     max = a[i];
//   }
// }

// ngày 03 tháng 7 năm 2024

// console.log(max);
// let a = 10;
// console.log(a++ + a);
// console.log(a);
// a++ tiếp xúc toán tử là se được thực thi luôn
// =============================================
// let x = [5, 7, 9, 12];

// let sum = 0;
// for (let i = 0; i < x.length; i++) {
//   sum += x[i];
// }
// console.log(sum);
// =============================================
// tính tổng các số chia hết cho 5 trong màng
// let a = [5, 8, 15, 15, "10", 21, 25, 26, 30, "5"];

// let sum = 0;
// for (let i = 0; i < a.length; i++) {
//   if (typeof a[i] == "number") {
//     if (a[i] % 5 == 0) {
//       sum += a[i];
//     }
//   }
// }
// for (let i = 0; i < a.length; i++) {
//   if (typeof a[i] == "number" && a[i] % 5 == 0) {
//     sum += a[i];
//   }
// }
// console.log(sum);

// Number.isInteger(x[i]);

// Cho mảng: [2, 7, 9, 1, 6, 44, 7, 23]
// Duyệt qua vòng lặp và tính tổng các số chắn, tổng các số lẻ.
// Tìm số lớn nhất và nhỏ nhất.
// Tìm số lớn thứ ba.
// Đảo ngược các số trong mảng.
// Kiểm tra và in ra số nguyên tố.
// =============================
// Duyệt qua vòng lặp và tính tổng các số chắn, tổng các số lẻ
// let a = [2, 7, 9, 1, 6, 44, 7, 23];
// let sumEven = 0;
// let sumOdd = 0;
// for (let i = 0; i < a.length; i++) {
//   if (a[i] % 2 === 0) {
//     sumEven += a[i];
//   } else {
//     sumOdd += a[i];
//   }
// }
// console.log(`Sum Even = ${sumEven}`);
// console.log(`Sum Odd = ${sumOdd}`);
// ===============================
// // Tìm số lớn nhất và nhỏ nhất.
// let max = a[0];
// let min = a[0];
// for (let i = 0; i < a.length; i++) {
//   if (a[i] > max) {
//     max = a[i];
//   } else {
//     if (a[i] < min) {
//       min = a[i];
//     }
//   }
// }
// console.log(`Max : ${max}`);
// console.log(`Min : ${min}`);

// ====================
// Tìm số lớn thứ ba.
// let a = [2, 7, 9, 1, 6, 44, 7, 23];
// for (let i = 0; i < a.length - 1; i++) {
//   for (let j = i + 1; j < a.length; j++) {
//     if (a[i] > a[j]) {
//       let s = a[i];
//       a[i] = a[j];
//       a[j] = s;
//     }
//   }
// }
// console.log(a);
// console.log(a[a.length - 3]);
// ====================
// Đảo ngược các số trong mảng.
// for (let i = a.length - 1; i >= 0; i--) {
//   console.log(a[i]);
// }

// console.log(a.reverse());
// console.log(a.sort((a, b) => b - a));
// ====================
// Kiểm tra và in ra số nguyên tố.
// let a = [2, 7, 9, 1, 6, 44, 7, 23];
// for (let i = 0; i < a.length - 1; i++) {
//   for (let j = 2; j <= Math.sqrt; i++) {
//     if (a[i] % j != 0) {
//       console.log("số nguyên tố");
//     }
//   }
// }
// let a;
// console.log(typeof a);
// let mang = [34, 4562, 345, 3, 44];
// let vitri = n ;
// for (let i = 0; i < a.length - 1; i++) {
//       for (let j = i + 1; j < a.length; j++) {
//         if (a[i] > a[j]) {
//           let s = a[i];
//           a[i] = a[j];
//           a[j] = s;
//         }
//       }
//     }
//     console.log(mang)

// if(n =="undefined"|| n > mang.length){
//     console.log(`Số lớn thứ n là ${mang[n]}`)
// }
//     else{
//         function sapSepMangTangDan (mang) {

//         }
//     }

// function timsolonthun(mang, n = mang.;eng)
// let w = 70;
// let h = 1.58;
// let bmi = w / h ** 2;
// document.write(bmi);
// if (bmi < 18.5) {
//   document.write("cân nặng thấp");
// } else if (bmi >= 18.5 && bmi < 24.9) {
//   document.write("Binh thuong");
// } else if (bmi >= 25 && bmi < 29.9) {
//   document.write("Tien beo phi");
// } else if (bmi >= 30 && bmi < 34.5) {
//   document.write("Beo phi do I");
// } else if (bmi >= 35 && bmi < 39.9) {
//   document.write("Beo phi do II");
// } else {
//   document.write("Beo phi do III");
// }

// function
// ==================================================
// let thang = +prompt("Moi ban nhap thang vao");
// switch (thang) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     alert(`${thang} + "co 31 ngay"`);
//     break;
//   case 2:
//     alert(`${thang} + "co 28 ngay"`);
//     break;
//   case 2:
//   case 4:
//   case 6:
//   case 18:
//   case 11:
//     alert(`${thang} + "co 30 ngay"`);
//     break;
//   default:
//     alert("moi ban nhap lai");
// }
// =======================================
// let a = +prompt("Moi ban nhap vao so a");
// let b = +prompt("Moi ban nhap vao so b");
// let logic = prompt("Moi ban nhap vao so các phép tính +, -, *, /");
// let result;
// switch (logic) {
//   case "+":
//     alert((result = a + b));
//     break;
//   case "-":
//     alert((result = a - b));
//     break;

//   case "*":
//     alert((result = a * b));
//     break;

//   case "/":
//     alert((result = a / b));
//     break;
// }
// ========================================
// let a = +prompt("Moi ban nhap vao so a");
// let b = +prompt("Moi ban nhap vao so b");
// let c = +prompt("Moi ban nhap vao so c");
// ========================================
// let thang = +prompt("Moi ban nhap vao thang sinh");
// let ngay = +prompt("Moi ban nhap vao ngay sinh");
// if (thang > 12 || thang < 1 || ngay > 31 || ngay < 1) {
//   alert("Moi ban nhap lai");
// } else {
//   switch (thang) {
//     case 1:
//       ngay < 20 ? alert("Cung ma ket") : alert("Cung bao binh");
//       break;
//     case 2:
//       ngay < 19 ? alert("Cung bao binh") : alert("Cung song ngu");
//       break;
//     case 3:
//       ngay < 21 ? alert("Cung song ngu") : alert("Cung bach duong");

//       break;
//     case 4:
//       ngay < 21 ? alert("Cung bach duong") : alert("Cung kim nguu");

//       break;
//     case 5:
//       ngay < 21 ? alert("Cung kim nguu") : alert("Cung song tu");

//       break;
//     case 6:
//       ngay < 22 ? alert("Cung su tu") : alert("Cung cu giai");

//       break;
//     case 7:
//       ngay < 23 ? alert("Cung cu giai") : alert("Cung su tu");

//       break;
//     case 8:
//       ngay < 23 ? alert("Cung su tu") : alert("Cung xu nu");

//       break;
//     case 9:
//       ngay < 23 ? alert("Cung xu nu") : alert("Cung thien binh");

//       break;
//     case 10:
//       ngay < 24 ? alert("Cung thien binh") : alert("Cung bo cap");

//       break;
//     case 11:
//       ngay < 23 ? alert("Cung bo cap") : alert("Cung nhan ma");

//       break;
//     case 12:
//       ngay < 22 ? alert("Cung nhan ma") : alert("Cung ma ket");
//   }
// }

// =====================================
// Bài 1: Viết chương trình nhập vào số tuổi của 1 người.Nếu số tuổi người đó >=18 tuổi , hiển thị thông báo trên 18 tuổi ngược lại bạn chưa đủ 18 tuổi!
// let age = +prompt("Moi ban nhap vao tuoi cua minh");
// age >= 18 ? alert("Tren 18 tuoi") : alert("Duoi 18 tuoi");
// =====================================
// Bài 2: Viết chương trình cho phép người dùng nhập vào số giờ trong ngày.

// Nếu dưới 18h thì hiển thị : “Good day”.

// Nếu trên 18h thì hiển thị : “Good evening”.
// let hour = +prompt("Moi ban nhap gioi hien tai");
// hour < 18 ? alert("Good day") : alert("Good evening");
// ======================================
// Bài 3: Viết chương trình cho phép người dùng nhập vào số giờ trong ngày.

// Nếu trước 10h thì hiển thị : “Good morning”.

// Nếu thời gian chưa tới 20h thì hiển thị : “Good day”.

// -Nếu sau 20h hiển thị : “Good evening”.
// let time = +prompt("Moi ban nhap vao gio hien tai");
// time < 10
//   ? alert("Good morning")
//   : time < 20
//   ? alert("Good day")
//   : alert("Good evening");
// ======================================
//Bài 4: Viết chương trình cho phép người dùng nhập vào 1 số.
// Kiểm tra xem số nhập vào là số chẵn hay số lẻ (sử dụng câu điều kiện if-else).
// let a = +prompt("Moi ban nhap vao so a");
// if (a % 2 == 0) {
//   alert("so chan");
// } else {
//   alert("so le");
// }
// ======================================
// Bài 5: Viết chương trình cho phép người dùng nhập vào 1 số.
// Kiểm tra xem số nhập vào là số chẵn hay số lẻ (sử dụng switch case).
// let a = +prompt("Moi ban nhap vao so a");
// switch (a % 2) {
//   case 0:
//     alert("so chan");
//     break;
//   default:
//     alert("so le");
// }

// ======================================
// Bài 6: Viết chương trình cho phép người dùng nhập màu vào kiểm tra.

// Nếu nhập 1 trong các màu : xanh, đỏ,vàng thì hiển thị màu người dùng nhập

// Nếu nhập màu khác hiển thị màu không hợp lệ!
// let mau = prompt("Moi ban nhap vao mau");
// switch (mau) {
//   case "xanh":
//   case "đỏ":
//   case "vàng":
//     alert(mau);
//     break;
//   default:
//     alert("mau khong hop le");
// }
// ======================================
// Bài 7: Viết chương trình cho phép người dùng nhập vào số nguyên x:

// Nếu x==0 thì in ra x có giá trị là 0;

// Nếu x>0 thì in ra x là số nguyên dương.

// // Nếu x<0 thì in ra x là số nguyên âm.
// let a = +prompt("Moi ban nhap so nguyen a");
// switch (true) {
//   case a > 0:
//     alert("So nguyen duong");
//     break;
//   case a == 0:
//     alert("a co gia tri 0");
//     break;
//   case a < 0:
//     alert("So nguyen am");
//     break;
// }

// ======================================
// Bài 9: Viết chương trình cho phép người dùng nhập điểm các môn:Toán,Lí,Hoá,
// Văn, Sử , Địa (thang điểm 10);

// Sau đó tính điểm trung bình các môn học

// Hiển thị kết quả học tập theo loại như sau:

// 8.0 <=ĐTB<=10: xếp loại GIỎI.

// 6.5<=ĐTB<=7.9: xếp loại KHÁ.

// 5.0<=ĐTB<=6.4: xếp loại TRUNG BÌNH.

// ĐTB<5.0 : xếp loại YẾU.

//
// let toan = +prompt(" Moi ban nhap diem toan");
// let li = +prompt(" Moi ban nhap diem li");
// let hoa = +prompt(" Moi ban nhap diem hoa");
// let van = +prompt(" Moi ban nhap diem van");
// let su = +prompt(" Moi ban nhap diem su");
// let dia = +prompt(" Moi ban nhap diem dia");
// let average = (toan + li + van + su + dia + hoa) / 6;
// if (average >= 8 && average <= 10) {
//   alert("xếp loại GIỎI");
// } else if (average >= 6.5 && average <= 7.9) {
//   alert("xếp loại KHÁ.");
// } else if (average >= 5.0 && average <= 6.4) {
//   alert("xếp loại TRUNG BÌNH");
// } else {
//   alert("xếp loại YẾU.");
// }
// ======================================
// Bài 10: Viết chương trình nhập vào số tháng trong năm,in ra số ngày trong tháng đó.

// Ví dụ : Người dùng nhập vào số 7 thì in ra tháng 7 có 31 ngày.
