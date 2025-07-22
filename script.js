function toggle(e) {

    const elem = document.querySelectorAll('.description');
    elem?.forEach((data) => {
        data.style.display = "none"
    })

    try {
        let ele = e?.parentElement?.nextElementSibling?.style;
        ele?.display === "none" ? ele.display = "block" : ele.display = "none";
    }
    catch (e) {
        console.log(e)
    }


}