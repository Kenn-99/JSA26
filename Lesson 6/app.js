// Lưu trữ dữ liệu sản phẩm trong Local Storage
var sanPham = {
    ten: "Faxtex Product Sample",
    gia: "10.000.000",
    mau: ["green", "red", "black"],
    anh: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROY-DW7YafTuj_cowZRyUc_XDqzcQYoMGRsw&usqp=CAU",
}
localStorage.setItem("sanPham", JSON.stringify(sanPham))
// Tạo trang sản phẩm từ dữ liệu trong Local Storage
var sanPhamTrongKho = JSON.parse(localStorage.getItem("sanPham"))

// Tạo ra 1 element trong JS 
var khungSanPham = document.createElement("div")
khungSanPham.classList.add("khung-san-pham")

// Render thẻ div ra trong HTML
document.body.appendChild(khungSanPham)

var anhSanPham = document.createElement("img")
anhSanPham.src = sanPhamTrongKho.anh
khungSanPham.appendChild(anhSanPham)

var khungThongTin = document.createElement("div")
khungThongTin.classList.add("khung-thong-tin")
khungSanPham.appendChild(khungThongTin)

var tenSanPham = document.createElement("h1")
tenSanPham.textContent = sanPhamTrongKho.ten
khungThongTin.appendChild(tenSanPham)

var giaSanPham = document.createElement("h2")
giaSanPham.textContent = sanPhamTrongKho.gia
khungThongTin.appendChild(giaSanPham)

var khungMau = document.createElement("div")
khungMau.classList.add("khung-mau")
khungThongTin.appendChild(khungMau)

sanPhamTrongKho.mau.forEach(function (element) {
    var mauSanPham = document.createElement("div")
    mauSanPham.style.backgroundColor = element
    khungMau.appendChild(mauSanPham)
})