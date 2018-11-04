//1st slider value box//

var slider1 = document.getElementById("slide1");
var output1 = document.getElementById("budget-value");
output1.innerHTML = "1-5 млн &#8381;";

slider1.oninput = function() {
    if (slider1.value == 1) {
        output1.innerHTML = "до 1 млн &#8381;";
    } else if (slider1.value == 2) {
        output1.innerHTML = "1-5 млн &#8381;";
    } else {
        output1.innerHTML = ">5 млн &#8381;";
    }   
}


//2nd slider value box//

var slider2 = document.getElementById("slide2");
var output2 = document.getElementById("deadlines-value");
output2.innerHTML = slider2.value + " месяцев";

slider2.oninput = function() {
    if (slider2.value == 1) {
        output2.innerHTML = this.value + " месяц";
    } else if (slider2.value <= 4) {
        output2.innerHTML = this.value + " месяца";
    } else {
        output2.innerHTML = this.value + " месяцев";
    }   
}


//textarea autoresize//

$("textarea").autoResize();


//fileadd button coloring onhover//

var fileButton = document.getElementById("file-button");
var buttonClipLogo = document.getElementById("clip-logo");
fileButton.onmouseover = function () {
    buttonClipLogo.src = "/pics/icons/fileAddButton/fileinput-clip-hover.svg";
} 
fileButton.onmouseout = function () {
    buttonClipLogo.src = "/pics/icons/fileAddButton/fileinput-clip.svg";
}


//fileadd maxsize notification + filelist + delete feature//

var fileInput = document.getElementById("fileinput");
var sizeErrorOutput = document.getElementById("size-error");
var allFileSize = 0;
var validetedFiles = [];

var fileList = document.getElementById("files-list");
fileInput.onchange = function() {
    for (var i = 0; i < this.files.length; i++) {
        allFileSize+=this.files[i].size / 1024 / 1024;
        if(allFileSize > 30) {
            sizeErrorOutput.innerHTML = "Максимальный размер прикрепленных файлов не должен превышать 30 МБ!";
            this.value = "";
            allFileSize = 0;
            while (fileList.firstChild) {
                fileList.removeChild(fileList.firstChild);
            }
            validetedFiles = [];
        } else {
            sizeErrorOutput.innerHTML = "";
            validetedFiles.push(this.files[i]);
            var li = document.createElement("li");
            li.innerHTML = "<input type=\"button\" class=\"remove-mark\" id=\"remove_mark-" + i + "\">" + validetedFiles[i].name;
            fileList.appendChild(li);
        }
    }  
}

/*name+phone+submit validation*/

var nameInput = document.getElementById("name");
var nameLabel = document.getElementById("name_label");
var phoneInput = document.getElementById("phone");
var namePattern = /^[a-zA-Zа-яёА-ЯЁ _]+$/u;
var phonePattern = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
function validateButton() {
    var submitButton = document.getElementById("submit");

    if (nameInput.value.length != 0 && phoneInput.value.length != 0 && namePattern.test(nameInput.value) && phonePattern.test(phoneInput.value)) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}
/*coloring nameinput if invalid*/ 
nameInput.onchange = function() {
    if (namePattern.test(nameInput.value) == false) {
        nameInput.style.color = "#FF0000";
        nameLabel.style.color = "#FF0000";
    } else {
        nameInput.style.color = "#FFF";
        nameLabel.style.color = "#525252";
    }
}
/*...same for phone*/ 
phoneInput.onchange = function() {
    if (phonePattern.test(phoneInput.value) == false) {
        phoneInput.style.color = "#FF0000";
    } else {
        phoneInput.style.color = "#FFF";
    }
}

