const deleteText = document.querySelectorAll('.fa-trash')
const thumbText = document.querySelectorAll('.fa-thumbs-up')
const search = document.querySelectorAll('stateSubmit')


Array.from(deleteText).forEach((element)=>{
    element.addEventListener('click', deleteRapper)
})

Array.from(thumbText).forEach((element)=>{
    element.addEventListener('click', addLike)
})

Array.from(search).forEach((element)=>{
    element.addEventListener('click', searchState)
})