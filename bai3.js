class Classcustomer {
    constructor(customerid, fullname, type, cardid, date, money) {
        this.customerid = customerid;
        this.fullname = fullname;
        this.type = type;
        this.cardid = cardid;
        this.date = date;
        this.money = money;
    }
    getCustomerid() {
        return this.customerid;
    }
    setCustomerid(customerid) {
        this.customerid = customerid;
    }
    getFullname() {
        return this.fullname;
    }
    setFullname(fullname) {
        this.fullname = fullname;
    }
    getType() {
        return this.type;
    }
    setType(type) {
        this.type = type;
    }
    getCardid() {
        return this.cardid;
    }
    setCardid(cardid) {
        this.cardid = cardid;
    }
    getDate() {
        return this.date;
    }
    setDate(date) {
        this.date = date;
    }
    getMoney() {
        return this.money;
    }
    setMoney(money) {
        this.money = money;
    }

}
let customer1 = new Classcustomer("29C03", "Nguyễn Văn A", "Gửi tiết kiệm không kỳ hạn", +129087065487, "2019-12-01", +3000000000,)
let customer2 = new Classcustomer("15A72", "Trần Văn B", "Gửi tiết kiệm có kỳ hạn", +115202712097, "2024-03-24", +200000000)
let customer3 = new Classcustomer("18G18", "Lê Thị C", "Gưi tiêt kiệm bậc thang",+18197333201, "2021-10-15", +500000000)

let customers = [customer1, customer2, customer3];
function display() {
    let customerid = document.getElementById('customerid').value;
    let fullname = document.getElementById('fullname').value;
    let type = document.getElementById('type').value;
    let cardid = document.getElementById('cardid').value;
    let date = document.getElementById('date').value;
    let money = document.getElementById('money').value;
    let tableContent= ` <tr>
            <th>STT</th>
            <th>Mã số</th>
            <th>Họ và tên</th>
            <th>Loại tiết kiệm</th>
            <th>Chứng minh nhân dân</th>
            <th>Ngày mở sổ</th>
            <th>Số tiền gửi</th>
            <th>Tuỳ chọn</th>
        </tr>`;
    for (let i = 0; i < customers.length; i++) {
        tableContent += ` <tr>
            <td>${i + 1}</td>
            <td>${customers[i].customerid}</td>
            <td>${customers[i].fullname}</td>
            <td>${customers[i].type}</td>
            <td>${customers[i].cardid}</td>
            <td>${customers[i].date}</td>
            <td>${customers[i].money}</td>
            <td>
                <button onclick="editCustomer(${i})" >sửa</button>
                <button onclick="deleteCustomer(${i})">Xóa</button>
            </td>
        </tr>`;
    }
    document.getElementById('list-customer').innerHTML = tableContent;
}
display();

function deleteCustomer(index) {
    let check = confirm("bạn có muốn xóa STT " + (index + 1))
    if (check) {
        customers.splice(index, 1);
        display();
    }else alert("Bạn đã không xoá STT" + (index + 1));

}

function editCustomer(index) {
    editingIndex = index;
    let customer = customers[index];
    document.getElementById('customerid').value = customer.customerid;
    document.getElementById('fullname').value = customer.fullname;
    document.getElementById('type').value = customer.type;
    document.getElementById('cardid').value = customer.cardid;
    document.getElementById('date').value = customer.date;
    document.getElementById('money').value = customer.money;
    document.getElementById('save').innerText = 'Cập nhật';
}
function checkInputs() {
    let customerid = document.getElementById('customerid').value;
    let fullname = document.getElementById('fullname').value;
    let type = document.getElementById('type').value;
    let cardid = document.getElementById('cardid').value;
    let date = document.getElementById('date').value;
    let money= document.getElementById('money').value;

    if (customerid === '' ||fullname === '' || type === '' || cardid === '' || date === '' || money=== '') {
        alert('Vui lòng nhập đầy đủ thông tin');
        return false;
    }
    return true;
}
let editingIndex = -1;
function save() {
    if (!checkInputs()) {
        return;
    }
    let customerid = document.getElementById('customerid').value;
    let fullname = document.getElementById('fullname').value;
    let type = document.getElementById('type').value;
    let cardid = document.getElementById('cardid').value;
    let date = document.getElementById('date').value;
    let money= document.getElementById('money').value;
    if (editingIndex === -1) {
        let customer = new Classcustomer(customerid, fullname, type, cardid, date, money);
        customers.push(customer);
    } else {
        let customer = customers[editingIndex];
        customer.customerid = customerid;
        customer.fullname = fullname;
        customer.type = type;
        customer.cardid = cardid;
        customer.date = date;
        customer.money= money;
        editingIndex = -1;
        document.getElementById('save').innerText = 'Thêm';
    }
    display();

}
function clear() {
    document.getElementById('customerid').value = '';
    document.getElementById('fullname').value = '';
    document.getElementById('type').value = '';
    document.getElementById('cardid').value = '';
    document.getElementById('date').value = '';
    document.getElementById('money').value = '';

}
clear();