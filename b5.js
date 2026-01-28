let tenSach = prompt("Nhap ten sach:");
let namXuatBan = prompt("Nhap nam xuat ban:");
let namHienTai = prompt("Nhap nam hien tai:");

namXuatBan = Number(namXuatBan);
namHienTai = Number(namHienTai);

let tuoiSach = namHienTai - namXuatBan;

console.log("Sach: " + tenSach);
console.log("Nam xuat ban: " + namXuatBan);
console.log("Tuoi cua sach: " + tuoiSach + " nam");
