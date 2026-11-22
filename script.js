function getFormvalue() {
    //Write your code here
	let form = document.querySelector("#form1");

    let info = new FormData(form);

    let name = info.get("fname").trim();
    let lastName = info.get("lname").trim();

    alert(`${name} ${lastName}`);

}
