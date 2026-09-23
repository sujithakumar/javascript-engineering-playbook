let userName = 'sujitha';
let address = {
    area: 'chennai',
    state: 'tamil Nadu',
    pincode: 600042
}
let deliveryDate = new Date();
let items = [
    {
        itemName: "Biscuit",
        qty: 2
    },
    {
        itemName: "Chocolate",
        qty: 5
    },
    {
        itemName: "Soap",
        qty: 1
    }
]

clearAll();

function clearAll() {
    localStorage.clear();
    sessionStorage.clear();
}

function clearStore(inp) {
    if (inp === 'L') {
        localStorage.clear();
    } else {
        sessionStorage.clear();
    }
}

function store(inp) {
    if (inp === 'L') {
        localStorage.setItem('userName', userName);
        localStorage.setItem('deliveryDate', deliveryDate);
        localStorage.setItem('address', JSON.stringify(address));
        localStorage.setItem('items', JSON.stringify(items));
        console.log("Local storage items: ", localStorage.length);
    } else {
        sessionStorage.setItem('userName', userName);
        sessionStorage.setItem('deliveryDate', deliveryDate);
        sessionStorage.setItem('address', JSON.stringify(address));
        sessionStorage.setItem('items', JSON.stringify(items));
        console.log("Session storage items: ", sessionStorage.length);
    }
}

function read(inp) {
    let result = {};
    if (inp === 'L') {
        if (localStorage.length > 0) {
            result = {
                'userName': localStorage.getItem('userName'),
                'deliveryDate': localStorage.getItem('deliveryDate'),
                'address': JSON.stringify(JSON.parse(localStorage.getItem('address'))),
                'items': JSON.parse(localStorage.getItem('items'))
            }
            document.getElementById('userName').value = result.userName;
            document.getElementById('deliveryDate').value = result.deliveryDate;
            document.getElementById('address').innerHTML = result.address;
            const tbody = document.querySelector("#itemTable tbody");
            tbody.innerHTML = result.items.map(item => `
                <tr>
                <td>${item.itemName}</td>
                <td>${item.qty}</td>
                </tr>
            `).join("");
        }
        else {
            console.log("Empty Local storage")
        }
    } else {
        const sessionStorageData = {};
        if (sessionStorage.length > 0) {
            for (let i = 0; i < sessionStorage.length; i++) {
                const key = sessionStorage.key(i);
                sessionStorageData[key] = sessionStorage.getItem(key);
            }
            console.table(sessionStorageData);
            document.getElementById('userName').value = sessionStorageData['userName'];
            document.getElementById('deliveryDate').value = sessionStorageData['deliveryDate'];
            document.getElementById('address').innerHTML = sessionStorageData['address'];
            let items = JSON.parse( sessionStorageData['items']);
            const tbody = document.querySelector("#itemTable tbody");
            tbody.innerHTML =items.map(item => `
                <tr>
                <td>${item.itemName}</td>
                <td>${item.qty}</td>
                </tr>
            `).join("");
        
        }
        else {
            console.log("Empty Session storage")
        }
    }
}



