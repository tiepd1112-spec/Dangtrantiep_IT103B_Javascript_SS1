let tenSach = prompt("Nhap ten sach:");
let soThuTu = prompt("Nhap so thu tu cua sach:");

let tenSachGoc = tenSach;
let tenSachChuanHoa = tenSach.trim().toUpperCase();

let maSach = "LIB- " + tenSachChuanHoa + " - " + soThuTu;

console.log("Ten sach goc: " + tenSachGoc);
console.log("Ma sach sau chuan hoa: " + maSach);
