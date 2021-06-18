var inputName, inputAddress, productName, unitPrice, inputQuantity, amount, alertBox, formLabel, formLabelError;
function loadElements() {
    inputName = document.getElementById("inputName");
    inputAddress = document.getElementById("inputAddress");
    productName = document.getElementById("inputProduct");
    unitPrice = document.getElementById("unitPrice");
    inputQuantity = document.getElementById("inputQuantity");
    amount = document.getElementById("amount");
    alertBox = document.getElementById("alert-box");
    formLabel = document.getElementsByClassName("element-label");
    formLabelError = document.getElementsByClassName("element-label-error");
}
window.onload = loadElements;
function getPrice(selected) {
    unitPrice.value = selected.value;
}
function calculateAmount() {
    var calcAmount = unitPrice.value * inputQuantity.value;
    amount.value = calcAmount.toFixed(2);
}
function validateForm() {
    if (inputName.value == "") {
        formLabel[0].style.color = "red";
        formLabelError[0].style.opacity = "1";
        return false;
    }
    if (inputAddress.value == "") {
        formLabel[1].style.color = "red";
        formLabelError[1].style.opacity = "1";
        return false;
    }
    if (productName.value == "") {
        formLabel[2].style.color = "red";
        formLabelError[2].style.opacity = "1";
        return false;
    }
    if (inputQuantity.value == "" || inputQuantity.value == "0") {
        formLabel[4].style.color = "red";
        formLabelError[4].style.opacity = "1";
        return false;
    }
    resetLabels();
    resetFields();
    openAlertBox();
}
function resetFields() {
    inputName.value = "";
    inputAddress.value = "";
    unitPrice.value = "";
    productName.value = "";
    inputQuantity.value = "";
    amount.value = "";
}
function checkValue(input) {
    if (input.value != "") {
        resetLabels();
    }
}
function resetLabels() {
    var i;
    for (i = 0; i < formLabel.length;i++) {
        formLabel[i].style.color = "#323130";
        formLabelError[i].style.opacity = "0";
    }    
}
function openAlertBox() {
    alertBox.style.opacity = "1";
    setTimeout(closeAlertBox, 5000);
}
function closeAlertBox() {
    alertBox.style.opacity = "0";    
}
