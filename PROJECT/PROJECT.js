const container=document.getElementById('container')

let htmlHeaderString='<div class="header">'

htmlHeaderString+=`<marquee behavior="slide" direction="left" scrollamount="20"><h4 class="slogon">Arulmigu karukkuvel Ayyanar Thunai</h4>
<div class="name_board">
    <img src="./Karkuvel_Ayyanar.jpg" class="logo">
    <h1 class="shop_name">Mariyappan Rice shop</h1>
</div></marquee>`


let htmlString='<div class="d-flex">'

const arrayObject=[
    {name:'Barnyard Millet',
     desc:'Good for diabetes, cardiovascular diseases, obesity, skin problems, cancer and celiac disease.',
     quantity:'1 kg - Rs. 120'
    },
    {name:'Kodo Millet',
     desc:'Good for asthma, blood pressure, heart attack, diabetic heart disease and for postmenopausal in females.',
     quantity:'1 kg - Rs. 110'
    },
    {name:'Little Millet',
     desc:'Antioxidants that boost immunity, healthy bones, muscle, nerve function and protect against infections and diseases.',
     quantity:'1 kg - Rs. 120'
    },
    {name:'Foxtail Millet',
     desc:'Helps in maintaining a healthy heart, skin and hair growth and smooth functioning of the nervous system.',
     quantity:'1 kg - Rs. 120'
    },
    {name:'Proso Millet',
     desc:'Helps in lower blood pressure and reduces the risk of stroke, heart attack and atherosclerosis.',
     quantity:'1 kg - Rs. 100'
    },
    {name:'Great Millet',
     desc:'Protecting cardiovascular health, onset of diabetes, maintain a healthy weight, and managing inflammation in the gut.',
     quantity:'1 kg - Rs. 50'
    },
    {name:'Finger Millet',
     desc:'Beneficial in conditions of anxiety, depression, insomnia, blood pressure, liver disorders, asthma and heart weakness.',
     quantity:'1 kg - Rs. 50'
    },
    {name:'Pearl Millet',
     desc:'Regular consumption of this millet helps reduce LDL cholesterol, preventing the formation of arterial blockages.',
     quantity:'1 kg - Rs. 45'
    },
    {name:'Wheat',
     desc:'They help maintain skin elasticity by stimulating collagen production and soothe irritations and redness.',
     quantity:'1 kg - Rs. 50'
    },
    {name:'Vermicelli',
     desc:'Keep your heart healthy and go for vermicelli. Low cholesterol foods decrease our risk of heart disease.',
     quantity:'1 kg - Rs. 20'
    },
    {name:'Barley',
     desc:'Eating 3.6 grams of barley daily as a source of dietary fiber seems to reduce the risk of heart disease.',
     quantity:'1 kg - Rs. 120'
    },
    {name:'Rice',
    desc:'Ponni boiled rice enhances cardiovascular health, and blood circulation, and is helpful to diabetics.',
    quantity:'1 kg - Rs. 120'
   }
]

function Redirect() {
    window.location= './product_shopping_page.js';
}

arrayObject.forEach((item)=>{
    htmlString+=`<div class="box">
        <div class="image">
            <img src="./${item.name}.jpg" class="image_style">
        </div>
        <div class="name">
            <h2 class="name_style">${item.name}</h2>
        </div>
        <div class="price_details">
            <h3 class="quantity_style">${item.quantity}</h3>
        </div>
        <div class="desc">
            <p class="desc_style">${item.desc}</p>
        </div>
        <div class="button">
            <button type="button" class="btn btn-primary buy_now_button" onclick="Redirect()">Buy Now</button>
        </div>
    </div>`
})


container.innerHTML=htmlHeaderString+'</div>'+htmlString+'</div>'