const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line

const statusSpan1 = document.querySelector('#book1 .status');

const reserveButton1 = document.querySelector('#book1 .reserve');
console.log(reserveButton1);

const checkoutButton1 = document.querySelector('#book1 .checkout');
console.log(checkoutButton1);

const checkinButton1 = document.querySelector('#book1 .checkin');
console.log(checkinButton1);

const statuSpan2 = document.querySelector('#book2 .status');

const reserveButton2 = document.querySelector('#book2 .reserve');
console.log(reserveButton2);

const checkoutButton2 = document.querySelector('#book2 .checkout');
console.log(checkoutButton2);

const checkinButton2 = document.querySelector('#book2 .checkin');
console.log(checkinButton2)

const statusSpan3 = document.querySelector('#book3 .status');

const reserveButton3 = document.querySelector('#book3 .reserve');
console.log(reserveButton3);

const checkoutButton3 = document.querySelector('#book3 .checkout');
console.log(checkoutButton3);

const checkinButton3 = document.querySelector('#book3 .checkin');
console.log(checkinButton3);

checkinButton1.style.color = '';
document.statusSpan1 = STATUS_MAP.color;
reserveButton1.disabled = STATUS_MAP.canReserver ;
checkoutButton1.disabled = STATUS_MAP.canCheckout ;
checkinButton1.enabled = STATUS_MAP.canCheckIn;

checkinButton2.style.color = '';
document.statusSpan2 = STATUS_MAP.color;
reserveButton2.disabled = STATUS_MAP.canReserver ;
checkoutButton2.disabled = STATUS_MAP.canCheckout ;
checkinButton2.enabled = STATUS_MAP.canCheckIn ;

checkinButton3.style.color = '';
document.statusSpan3 = STATUS_MAP.color;
reserveButton3.disabled = STATUS_MAP.canReserver ;
checkoutButton3.disabled = STATUS_MAP.canCheckout ;
checkinButton3.enabled = STATUS_MAP.canCheckIn ;