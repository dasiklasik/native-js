const sml = document.getElementById("small")
const mdm = document.getElementById("medium")
const big = document.getElementById("big")

const onClickHandler = () => {
    alert('Hey')
}

sml.addEventListener('click', onClickHandler)

mdm.onclick = onClickHandler

mdm.onclick = undefined