// Cách làm 1: Tạo function cho từng phép tính, sự kiện onclick sẽ thực hiện function tương ứng cho từng phép tính
//Tạo các function tinhtong, tinhhieu... bên trong của từng function tạo khối lênh như sau:
//B1: Lấy dũ liệu 2 biến (2 ô input có id number1,  number2 trong HTML và gán giá trị số cho number1,2 trong JS)
//B2: tính tổng result = number1 + number2
//B3: Hiển thị kết quả. (id cho ô kết quả)
function tinhtong() {
    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);
    let result = number1 + number2;
    document.getElementById("result1").innerText = "Tổng bằng = " + result
}
function tinhhieu() {
    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);
    let result = number1 - number2;
    document.getElementById("result1").innerText = "Hiệu bằng = " + result
}
function tinhnhan() {
    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);
    let result = number1 * number2;
    document.getElementById("result1").innerText = "Tích bằng = " + result
}
function tinhchia() {
    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);
    let result = number1 / number2;
    document.getElementById("result1").innerText = "Thương bằng = " + result
}
//Cách làm 2: Theo như cách làm 1 thì sẽ lặp mã 4 lần. cách làm 2 sẽ dùng hàm điều kiện, nếu option là + thì tiến hành +
// Trong HTML: Viết 1 select có 4 option +-*/ tạo 1 ô button "tính toán"
// Trong JS:
// Tạo function tinhtoan trong đó tạo khối lệnh.
//Lấy giá trị của number1, number2 và pheptinh, lấy phép tính so sánh với các phép +-*/ để ra kết quả tương ứng
// Nếu là + thì result = number1 +number2 tương tự nếu là nhân thì nhân là chia thì chia, in ra kết quả
  function tinhtoan() {
      let number1 = Number(document.getElementById("number1").value);
      let number2 = Number(document.getElementById("number2").value);
      let luachon = document.getElementById("pheptinh").value;
      let result2;
      if (luachon==="Phepcong") {
          result2 = number1 + number2;
      }
      else if (luachon==="Pheptru") {
          result2 =number1 - number2;
      }
      else if (luachon==="Phepnhan"){
          result2 = number1*number2;
      }
      else result2 = number1/number2;
      document.getElementById("result2").innerText = "Kết quả = " + result2

  }
  //Cách làm 3:Dùng Switch case, ta có 4 case cong, tru, nhan,chia, khớp case ở đâu thực thi lệnh ở đó và kết thúc.
//trong HTML tạo 4 option như cách làm 2.
//trong JS
// B1: tạo function calculate và hiển thị kết quả.
// B2: lấy và gán giá trị cho các biến
// B3:viết câu lệnh switch case

function calculate() {
    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);
    let tinh = document.getElementById("tinh").value;
    let result3;
    switch (tinh) {
        case "cong":
            result3 = number1+number2;
            break;
        case "tru":
            result3 = number1-number2;
            break;
        case "nhan":
            result3 = number1*number2;
            break;
        case "chia":
            result3 = number1/number2;
    }
    document.getElementById("result3").innerText = "Kết quả = "+result3
    }

