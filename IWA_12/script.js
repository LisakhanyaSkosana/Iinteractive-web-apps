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

status = selector(status)
reserve = selector(reserve)
checkout = selector(checkout)
checkin = selector(checkin)

status = selector(status)
reserve = selector(reserve)
checkout = selector(checkout)
checkin = selector(checkin)

status = selector(status)
reserve = selector(reserve)
checkout = selector(checkout)
checkin = selector(checkin)

checkin.style.color = "none";
document.body.style.color = STATUS_MAP.color;
reserve.style = STATUS_MAP.canReserver ? 'enabled' : 'disabled'
checkout.style = STATUS_MAP.canCheckout ? 'enabled' : 'disabled'
checkin.style = STATUS_MAP.canCheckIn ? 'enabled' : 'disabled'

checkin.style.color = "none";
document.body.style.color = STATUS_MAP.color
reserve.style = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
checkout.style = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
checkin.style = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

checkin.style.color = "none";
document.body.style.color = STATUS_MAP.status.color
reserve.style = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
checkout.style = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
checkin.style = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'