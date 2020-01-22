const alertCloseButtons = document.querySelectorAll('.alert .close');

const closeAlert = currentTarget => {
    const alertClassList = currentTarget.parentNode.classList;
    alertClassList.remove('show');
    alertClassList.remove('alert-slide-out');
    alertClassList.add('alert-slide-in');
};

alertCloseButtons.forEach(closeButton => closeButton.addEventListener('click', e => closeAlert(e.currentTarget)));

const showAlert = (type, message) => {
    const alert = document.querySelector(`.alert-${type}`);
    const oldSpan = alert.querySelector(':scope > span');
    if (oldSpan) oldSpan.remove();

    const newSpan = document.createElement('span');
    newSpan.innerHTML = message;

    alert.appendChild(newSpan);
    alert.classList.add('show');
    alert.classList.remove('alert-slide-in');
    alert.classList.add('alert-slide-out');

    window.setTimeout(() => closeAlert(alert.querySelector(':scope > button')), 2000);
};
