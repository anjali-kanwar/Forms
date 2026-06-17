document
.getElementById("openBtn")
.addEventListener(
    "click",
    openForm
);

function openForm(){

    const form =

    document
    .getElementById(
        "formSelect"
    )
    .value;

    if(form === ""){

        alert(
            "Please select a form."
        );

        return;
    }

    window.location.href =
    form;
}