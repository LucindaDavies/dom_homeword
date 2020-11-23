document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded')

    const form = document.querySelector('#new-booking-form')
    form.addEventListener('submit', handleFormSave)

    const deleteButton = document.createElement('button')
    const body = document.querySelector('body')
    deleteButton.textContent = 'delete'
    deleteButton.classList.add('delete')
    body.appendChild(deleteButton)
    deleteButton.addEventListener('click', handleDelete)
    
})

const handleFormSave = function (event) {
    event.preventDefault()

    const childrenList = document.querySelector('#children-booked-in')
    const listItem = document.createElement('li')
    childrenList.appendChild(listItem)

    const childName = document.createElement('p')
    childName.textContent = `Childs Name: ${event.target.name.value}`
    listItem.appendChild(childName)

    const childAge = document.createElement('p')
    childAge.textContent = `Age: ${event.target.age.value}`
    listItem.appendChild(childAge)

    const dayAttending = document.createElement('p')
    dayAttending.textContent = `Booked In: ${event.target.attending.value}`
    listItem.appendChild(dayAttending)

    document.querySelector('#new-booking-form').reset()
    


}

const handleDelete = function () {
    const childrenList = document.querySelector('#children-booked-in')
    childrenList.innerHTML = ""
}
