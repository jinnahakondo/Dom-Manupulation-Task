const productContainer = document.getElementById("productContainer");
const popupEl = document.querySelector("#popup")



// product data
const products = [
    {
        id: 1,
        title: "Mechanical Keyboard",
        description: "RGB Gaming Keyboard",
        badge: "Keyboard",
        image: "https://dummyimage.com/600x400/111827/ffffff&text=Mechanical+Keyboard",
        price: 120,
        stock: 8,
    },
    {
        id: 2,
        title: "Mechanical Mouse",
        description: "RGB Gaming Mouse",
        badge: "Mouse",
        image: "https://dummyimage.com/600x400/111827/ffffff&text=Mechanical+Mouse",
        price: 90,
        stock: 10,
    },
    {
        id: 3,
        title: "Gaming Headphone",
        description: "Surround Sound Headset",
        badge: "Audio",
        image: "https://dummyimage.com/600x400/111827/ffffff&text=Mechanical+Headphone",
        price: 150,
        stock: 6,
    },
    {
        id: 4,
        title: "Gaming Chair",
        description: "Ergonomic Comfort Chair",
        badge: "Furniture",
        image: "https://dummyimage.com/600x400/111827/ffffff&text=Gaming+Chair",
        price: 300,
        stock: 4,
    },
    {
        id: 5,
        title: "Gaming Monitor",
        description: "144Hz Ultra Smooth Display",
        badge: "Display",
        image: "https://dummyimage.com/600x400/111827/ffffff&text=Mechanical+Monitor",
        price: 250,
        stock: 5,
    },
    {
        id: 6,
        title: "Gaming Mousepad",
        description: "Large RGB Mousepad",
        badge: "Accessory",
        image: "https://dummyimage.com/600x400/111827/ffffff&text=Mechanical+Mousepad",
        price: 40,
        stock: 12,
    }
];


// create all cards
products.forEach((product) => {

    const card = document.createElement("div");


    // local state for each card
    let quantity = 1;
    let stock = product.stock;


    card.innerHTML = `
    
    <div class="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden w-full max-w-sm">

        <!-- image -->
        <img
            class="w-full h-48 object-cover"
            src="${product.image}"
            alt="${product.title}"
        >

        <div class="p-5 space-y-4">

            <!-- title + heart -->
            <div class="flex justify-between items-start">

                <div>
                    <h2 class="font-bold text-lg">
                        ${product.title}
                    </h2>

                    <p class="text-sm text-slate-400">
                        ${product.description}
                    </p>
                </div>

                <button class="wishlistBtn text-xl">
                    <i class="fa-regular fa-heart"></i>
                </button>

            </div>

            <!-- price -->
            <div class="flex justify-between">

                <span class="text-slate-400">
                    Price
                </span>

                <span class="font-bold text-cyan-400">
                    $<span class="unitPrice">
                        ${product.price}
                    </span>
                </span>

            </div>

            <!-- stock -->
            <div class="flex justify-between">

                <span class="text-slate-400">
                    Remaining Stock
                </span>

                <span class="text-yellow-400 font-semibold">
                    <span class="stock">
                        ${stock} Left
                    </span> 
                </span>

            </div>

            <!-- quantity -->
            <div class="flex justify-between items-center">

                <span class="text-slate-400">
                    Quantity
                </span>

                <div class="flex gap-3 items-center">

                    <button class="minusBtn bg-slate-800 w-8 h-8 rounded-lg">
                        -
                    </button>

                    <span class="quantity font-bold">
                        ${quantity}
                    </span>

                    <button class="plusBtn bg-slate-800 w-8 h-8 rounded-lg">
                        +
                    </button>

                </div>

            </div>

            <!-- total -->
            <div class="flex justify-between border-t border-slate-800 pt-4">

                <span>
                    Total
                </span>

                <span class="font-bold text-cyan-400">
                    $<span class="total-price">
                        ${quantity * product.price}
                    </span>
                </span>

            </div>

            <!-- add to cart -->
            <button class="cartBtn w-full bg-cyan-600 rounded-xl py-3 font-semibold">
                Add To Cart
            </button>

        </div>

    </div>
    `;


    // append card
    productContainer.appendChild(card);



    // DOM elements
    const plusBtn = card.querySelector(".plusBtn");

    const minusBtn = card.querySelector(".minusBtn");

    const quantityEl = card.querySelector(".quantity");

    const stockEl = card.querySelector(".stock");

    const totalPriceEl = card.querySelector(".total-price");

    const heartBtn = card.querySelector(".wishlistBtn");

    const cartBtn = card.querySelector(".cartBtn");




    // update UI function
    function updateUI() {

        quantityEl.innerText = quantity;

        stockEl.innerText = `${stock} Left`;

        totalPriceEl.innerText =
            quantity * product.price;

        if (stock === 0) {

            plusBtn.disabled = true;
            cartBtn.disabled = true;

            plusBtn.classList.add("opacity-50", "cursor-not-allowed");
            cartBtn.classList.add("opacity-50", "cursor-not-allowed");

            stockEl.innerText = "Out Of Stock";

        } else {

            plusBtn.disabled = false;
            cartBtn.disabled = false;

            plusBtn.classList.remove("opacity-50", "cursor-not-allowed");
            cartBtn.classList.remove("opacity-50", "cursor-not-allowed");
        }


        if (quantity === 1) {
            minusBtn.disabled = true;
            minusBtn.classList.add("opacity-50", "cursor-not-allowed");

        } else {

            minusBtn.disabled = false;
            minusBtn.classList.remove("opacity-50", "cursor-not-allowed");

        }
    }




    // PLUS BUTTON
    plusBtn.addEventListener("click", () => {

        if (stock > 0) {

            quantity++;

            stock--;

            updateUI();
        }
    });



    // MINUS BUTTON
    minusBtn.addEventListener("click", () => {
        quantity--;
        stock++;
        updateUI();
    });



    // HEART TOGGLE
    heartBtn.addEventListener("click", () => {

        const icon =
            heartBtn.querySelector("i");

        icon.classList.toggle("fa-regular");

        icon.classList.toggle("fa-solid");

        icon.classList.toggle("text-red-500");
    });


    // ADD TO CART
    cartBtn.addEventListener("click", () => {

        popupEl.classList.remove("hidden")

        setTimeout(() => {
            popupEl.classList.add("hidden")
        }, 2000)
    });

});