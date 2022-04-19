/**Bài tập 1
 * - Đầu vào: Nhập vào 3 số nguyên
 * 
 * - Xử lý:
 * +Tạo biến: so1, so2, so3, soLonNhat, soLonNhi, soNhoNhat
 * +Lấy số liệu người dùng nhập vào gán vào so1, so2, so3
 * +So sánh 3 số:
 *  nếu:     so1<so2 có 2 trường hợp: 
 *                nếu so2<so3 => soLonNhat=so3 + soLonNhi=so2 + soNhoNhat=so1
 *                ngược lại: so2>so3 => soLonNhat=so2
 *                     nếu so1<so3 => soLonNhi=so3 + soNhoNhat=so1
 *                     ngược lại: soLonNhi=so1 + soNhoNhat=so3
 * ngược lại:so1>so2 có 2 trường hợp:
 *                nếu so1<so3 => soLonNhat=so3 + soLonNhi=so1 + soNhoNhat=so2
 *                ngược lại: so1>so3 => soLonNhat=so1
 *                     nếu so2<so3 => soLonNhi=so3 + soNhoNhat=so2
 *                     ngược lại: soLonNhi=so2 + soNhoNhat=so3   
 * +Xuất kết quả ra UI
 * 
 * - Đầu ra: Sắp xếp thứ tự 3 số vừa nhập                 
 */

document.getElementById("btnBaiTap1").onclick = function() {
    var so1 = document.getElementById("so1").value * 1;
    var so2 = document.getElementById("so2").value * 1;
    var so3 = document.getElementById("so3").value * 1;
    var soLonNhat = 0;
    var soLonNhi = 0;
    var soNhoNhat = 0;
    if (so1 < so2) {
        if (so2 < so3) {
            soLonNhat = so3;
            soLonNhi = so2;
            soNhoNhat = so1
        } else {
            soLonNhat = so2;
            if (so1 < so3) {
                soNhoNhat = so1;
                soLonNhi = so3
            } else {
                soNhoNhat = so3;
                soLonNhi = so1;
            }
        }

    } else {
        if (so1 < so3) {
            soLonNhat = so3;
            soLonNhi = so1;
            soNhoNhat = so2;
        } else {
            soLonNhat = so1;
            if (so2 < so3) {
                soLonNhi = so3;
                soNhoNhat = so2;
            } else {
                soNhoNhat = so3;
                soLonNhi = so2;
            }
        }
    }
    document.getElementById("divInfo1").innerHTML = "Sắp xếp theo thứ tự tăng dần: " + soNhoNhat + "<" + soLonNhi + "<" + soLonNhat;
}

/**Bài tập 2
 * - Đầu vào: Nhập vào ai là người đang dùng máy
 * +Nếu là Bố hãy nhập: B
 * +Nếu là Mẹ hãy nhập: M
 * +Nếu là anh Trai hãy nhập: A
 * +Nếu là em Gái hãy nhập: E
 * 
 * - Xử lý:
 * + Tạo biến: nguoiDung
 * +Lấy số liệu người dùng nhập gán vào biến nguoiDung
 * +Nếu nguoiDung===B => Lời chào: Chào Bố, chúc Bố dùng máy tính vui vẻ!
 * +Nếu nguoiDung===M => Lời chào: Chào Mẹ, chúc Mẹ dùng máy tính vui vẻ!
 * +Nếu nguoiDung===A => Lời chào: Chào anh Trai, chúc anh Trai học tập tốt!
 * +Nếu nguoiDung===E => Lời chào: Chào em Gái, chúc em Gái học tập tốt!  
 * +Xuất kết quả ra UI     
 * 
 * -Đầu ra: In ra lời chào                
 */

document.getElementById("btnBaiTap2").onclick = function() {
    var nguoiDung = document.getElementById("who").value;
    var B = "B";
    var M = "M";
    var A = "A";
    var E = "E";
    if (nguoiDung === B) {
        document.getElementById("divInfo2").innerHTML = "Chào Bố, chúc Bố dùng máy tính vui vẻ!";
    } else if (nguoiDung === M) {
        document.getElementById("divInfo2").innerHTML = "Chào Mẹ, chúc Mẹ dùng máy tính vui vẻ!";
    } else if (nguoiDung === A) {
        document.getElementById("divInfo2").innerHTML = "Chào anh Trai, chúc anh Trai học tập tốt!";
    } else if (nguoiDung === E) {
        document.getElementById("divInfo2").innerHTML = "Chào em Gái, chúc em Gái học tập tốt!";
    } else {
        document.getElementById("divInfo2").innerHTML = "Xin hãy nhập đúng tên người dùng!";
    }
}

/**Bài tập 3
 * - Đầu vào: nhập 3 số nguyên
 * 
 * - Xử lý: 
 * + Tạo biến soA, soB, soC, soChan, soLe
 * + Lấy số liệu người dùng nhập gán vào soA, soB, soC
 * + Gán soChan=0; soLe=0;
 * + Nếu soA%2==-0 (chia lấy dư) => soChan+=soChan
 *       ngược lại soLe+=soLe
 * +Nếu soB%2==0 =>soChan=+soChan
 *          ngược lại soLe+=soLe
 * +Nếu soC%2==0 =>soChan=+soChan
 *          ngược lại soLe+=soLe 
 * +Xuất kết quả ra UI
 * 
 * -Đầu ra: số số chẵn, số số lẻ 
 * 
 */
document.getElementById("btnBaiTap3").onclick = function() {
    var soA = document.getElementById("soA").value * 1;
    var soB = document.getElementById("soB").value * 1;
    var soC = document.getElementById("soC").value * 1;
    var soChan = 0;
    var soLe = 0;
    var A = soA % 2;
    if (A == 0) {
        soChan += 1;
    } else {
        soLe += 1;
    }
    if (soB % 2 == 0) {
        soChan += 1;
    } else {
        soLe += 1;
    }
    if (soC % 2 == 0) {
        soChan += 1;
    } else {
        soLe += 1;
    }
    var result = "";
    result += "Số số chẵn: " + soChan + "</br>";
    result += "Số số lẻ: " + soLe;
    document.getElementById("divInfo3").innerHTML = result;
}

/**Bài tập 4
 * - Đầu vào: nhập 3 cạnh tam giác
 * 
 * - Xử lý: 
 * + Tạo biến A, B, C
 * + Lấy số liệu người dùng nhập gán vào A, B, C
 * 
 * + Nếu A===B===C => Tam giác đều
 *       ngượclại nếu A===B || A===C || B===C
 *                 => Tam giác cân           
 *       ngược lại nếu A*A + B*B = C*C 
 *                   hoặc B*B + C*C = A*A
 *                   hoặc A*A + C*C = B*B
 *                  => Tam giác vuông
 *       ngược lại nếu A<=0||B<=0||C<=0 => Không phải tam giác
 *       ngược lại=> Tam giác thường * 
 * +Xuất kết quả ra UI
 * 
 * -Đầu ra: Loại tam giác 
 * 
 */

document.getElementById("btnBaiTap4").onclick = function() {
    var A = document.getElementById("A").value;
    var B = document.getElementById("B").value;
    var C = document.getElementById("C").value;
    A = parseFloat(A);
    B = parseFloat(B);
    C = parseFloat(C);
    var loaiTamGiac = "";
    if (A === B && B === C && A === C) {
        loaiTamGiac += "Tam giác đều";
    } else if (A === B || A === C || B === C) {
        loaiTamGiac += "Tam giác cân";
    } else if ((A * A + B * B === C * C) || (B * B + C * C === A * A) || (A * A + C * C === B * B)) {
        loaiTamGiac += "Tam giác vuông";
    } else if (A === 0 || B === 0 || C === 0) {
        loaiTamGiac += "Không phải tam giác";
    } else {
        loaiTamGiac += "Tam giác thường";
    }
    var result1 = "";
    result1 += "Đây là tam giác: " + loaiTamGiac;
    document.getElementById("divInfo4").innerHTML = result1;
}