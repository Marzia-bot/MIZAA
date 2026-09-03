const MIZA_PRODUCTS = [
    {id:"p01",name:"Petal Sculpt Dress",category:"Dresses",price:8490,old:9990,rating:4.9,sizes:["XS","S","M","L"],colors:["Rose","Sage"],image:"Pink Petal Dream Gown.jfif",tag:"New"},
    {id:"p02",name:"Sage Atelier Dress",category:"Dresses",price:9290,old:0,rating:4.8,sizes:["S","M","L"],colors:["Sage"],image:"Sage Atelier Dress.jfif"},
    {id:"p03",name:"Blush Motion Top",category:"Tops",price:4290,old:4990,rating:4.7,sizes:["XS","S","M","L"],colors:["Blush","Ivory"],image:"Blush Motion Top.jfif",tag:"Sale"},
    {id:"p04",name:"Muse Draped Top",category:"Tops",price:4590,old:0,rating:4.8,sizes:["S","M","L"],colors:["Rose","Cream"],image:"Muse Draped Top.jfif"},
    {id:"p05",name:"Studio Wide-Leg Denim",category:"Jeans",price:6990,old:7990,rating:4.6,sizes:["26","28","30","32"],colors:["Indigo"],image:"Studio Wide-Leg Denim.jfif"},
    {id:"p06",name:"Quiet Hour Jeans",category:"Jeans",price:6490,old:0,rating:4.7,sizes:["26","28","30","32"],colors:["Stone"],image:"Quiet Hour Jeans.jfif"},
    {id:"p07",name:"Sculpt Mini Bag",category:"Bags",price:5990,old:6990,rating:4.9,sizes:["One Size"],colors:["Forest","Blush"],image:"Sculpt Mini Bag.jfif",tag:"Best Seller"},
    {id:"p08",name:"Moss Frame Tote",category:"Bags",price:7490,old:0,rating:4.8,sizes:["One Size"],colors:["Moss"],image:"Moss Frame Tote.jfif"},
    {id:"p09",name:"Linea Sling Heels",category:"Heels",price:7990,old:8990,rating:4.8,sizes:["36","37","38","39","40"],colors:["Sage","Nude"],image:"Linea Sling Heels Sage.jfif"},
    {id:"p10",name:"Petite Bow Heels",category:"Heels",price:7290,old:0,rating:4.6,sizes:["36","37","38","39"],colors:["Rose"],image:"Petite Bow Heels.jfif"},
    {id:"p11",name:"Muse Everyday Sneakers",category:"Footwear",price:5590,old:0,rating:4.5,sizes:["36","37","38","39","40"],colors:["Cream"],image:"Muse Everyday Sneakers.jfif"},
    {id:"p12",name:"Garden Walk Loafers",category:"Footwear",price:6190,old:6990,rating:4.7,sizes:["36","37","38","39","40"],colors:["Green"],image:"Garden Walk Loafers.jfif",tag:"Sale"},
    {id:"p13",name:"Petal Drop Earrings",category:"Jewelry",price:2890,old:0,rating:4.9,sizes:["One Size"],colors:["Gold"],image:"Petal Drop Earrings.jfif"},
    {id:"p14",name:"Contour Chain Set",category:"Accessories",price:3490,old:3990,rating:4.8,sizes:["One Size"],colors:["Champagne"],image:"Contour Chain Set.jfif"},
    {id:"p15",name:"MIZA Ribbon Scarf",category:"Scarves",price:2490,old:0,rating:4.6,sizes:["One Size"],colors:["Rose","Sage"],image:"MIZA Ribbon Scarf.jfif"},
    {id:"p16",name:"Soft Structure Skirt",category:"Skirts",price:5190,old:0,rating:4.7,sizes:["XS","S","M","L"],colors:["Ivory"],image:"Classy Silk Skirt.jfif"},
    {id:"p17",name:"Sunday Co-ord Set",category:"Co-ords",price:8990,old:10490,rating:4.8,sizes:["S","M","L"],colors:["Sage"],image:"Sunday Co-ord Set.jfif",tag:"Edit"},
    {id:"p18",name:"Muse Cropped Jacket",category:"Jackets",price:9990,old:11490,rating:4.9,sizes:["S","M","L"],colors:["Olive"],image:"Muse Cropped Jacket.jfif"},
    {id:"p19",name:"Cloudline Knit",category:"Knitwear",price:5790,old:0,rating:4.6,sizes:["S","M","L"],colors:["Cream"],image:"Cloudline Knit.jfif"},
    {id:"p20",name:"Frame Oval Sunglasses",category:"Eyewear",price:3290,old:0,rating:4.7,sizes:["One Size"],colors:["Forest"],image:"Frame Oval Sunglasses.jfif"},
    {id:"p21",name:"Soft Crown Cap",category:"Headwear",price:2190,old:2490,rating:4.5,sizes:["One Size"],colors:["Sage"],image:"Soft Crown Cap.jfif"},
    {id:"p22",name:"Atelier Leather Belt",category:"Belts",price:2790,old:0,rating:4.6,sizes:["S","M","L"],colors:["Olive"],image:"Atelier Leather Belt.jfif"},
    {id:"p23",name:"Rosewood Denim Shirt",category:"Denim",price:4890,old:5590,rating:4.7,sizes:["S","M","L"],colors:["Denim"],image:"Rosewood Denim Shirt.jfif"},
    {id:"p24",name:"Lumiere Crossbody",category:"Bags",price:6790,old:0,rating:4.9,sizes:["One Size"],colors:["Blush"],image:"Lumiere Crossbody.jfif",tag:"New"},
    {id:"p25",name:"Black Rose Dress",category:"Dresses",price:7490,old:0,rating:4.8,sizes:["XS","S","M","L"],colors:["Black"],image:"Black Rose Dress.jpg",showInShop:false},
    {id:"p26",name:"Elegant Black Dress",category:"Dresses",price:7990,old:0,rating:4.8,sizes:["XS","S","M","L"],colors:["Black"],image:"black-dress.jfif",showInShop:false},
    {id:"p27",name:"Velvet Moon Bag",category:"Bags",price:6490,old:7999,rating:4.8,sizes:["One Size"],colors:["Black"],image:"Velvet Moon Bag.jfif",showInShop:false},
    {id:"p28",name:"Luna Soft Tote",category:"Bags",price:7290,old:0,rating:4.9,sizes:["One Size"],colors:["lavender","Black"],image:"Luna Soft Tote.jfif",showInShop:false},
    {id:"p29",name:" super Elegant Outerwear",category:"Outerwear",price:9999,old:12000,rating:4.9,sizes:["One Size"],colors:["Peach"],image:"Outerwear.jfif",showInShop:false},
    {id:"p30",name:"Tie Denim Top",category:"Denim",price:5999,old:7999,rating:4.8,sizes:["S","M","L"],colors:["Indigo"],image:"Denim Top Indigo.jfif",showInShop:false},
    {id:"p31",name:"Abel Denim Button Up Top - Dark Blue",category:"Denim",price:5000,old:6999,rating:4.8,sizes:["S","M","L"],colors:["Dark Blue"],image:"Abel Denim Button Up Top - Dark Blue.jfif",showInShop:false},
    {id:"p32",name:"New Black Denim Jeans",category:"Denim",price:3999,old:0,rating:4.9,sizes:["S","M","L"],colors:["Black"],image:"New Black Denim Jeans.jfif",showInShop:false},
    {id:"p33",name:"Stylish Danim  Trenchcoat",category:"Denim",price:7000,old:0,rating:4.7,sizes:["S","M","L"],colors:["Indigo"],image:"Stylish Danim  Trenchcoat.jfif",showInShop:false},
    {id:"p34",name:"Cutted Denim Skirt",category:"Denim",price:3000,old:5999,rating:4.9,sizes:["S","M","L"],colors:["Indigo"],image:"Cutted Denim Skirt.jfif",showInShop:false},
    {id:"p35",name:"Long Beautiful Denim Skirt",category:"Denim",price:9999,old:12000,rating:5,sizes:["M","L"],colors:["Indigo"],image:"Long Beautiful Denim Skirt.jfif",showInShop:false},
    {id:"p36",name:"Denim Corset Belt",category:"Denim",price:999,old:2999,rating:4.8,sizes:["S","M","L"],colors:["Indigo"],image:"Denim Corset Belt.jfif",showInShop:false},
    {id:"p37",name:"Denim Mini Skirt Summer Vibes",category:"Denim",price:7999,old:9999,rating:4.9,sizes:["S","M"],colors:["Indigo"],image:"Denim Mini Skirt Summer Vibes.jfif",showInShop:false},
    {id:"p38",name:"Classic Three Quarter Sleeves Jean Jacket",category:"Denim",price:3000,old:4999,rating:4.8,sizes:["S","M","L"],colors:["Indigo"],image:"Classic Three Quarter Sleeves Jean Jacket.jfif",showInShop:false},
    {id:"p39",name:"Denim Skirt With No Cuts",category:"Denim",price:5000,old:6000,rating:4.7,sizes:["S","M","L"],colors:["Indigo"],image:"Denim Skirt With No Cuts.jfif",showInShop:false},
    {id:"p40",name:"Studio Denim Mini Dress",category:"Denim",price:5999,old:7999,rating:4.8,sizes:["S","M","L"],colors:["Indigo"],image:"Studio Denim Mini Dress.jfif",showInShop:false},
    {id:"p41",name:"Women’s Flared Denim Jeans",category:"Denim",price:7999,old:8999,rating:4.8,sizes:["S","M","L"],colors:["Indigo"],image:"Women’s Flared Denim Jeans.jfif",showInShop:false},
    {id:"p42",name:"Light Blue Wide-Leg Jeans",category:"Denim",price:6000,old:7999,rating:4.8,sizes:["S","M","L"],colors:["Light Blue"],image:"Light Blue Wide-Leg Jeans.jfif",showInShop:false},
    {id:"p43",name:"Mid-Wash Wide-Leg Jeans",category:"Denim",price:4000,old:0,rating:4.7,sizes:["S","M","L"],colors:["Light Blue"],image:"Mid-Wash Wide-Leg Jeans.jfif",showInShop:false},
    {id:"p44",name:"Dark Blue Wide-Leg Jeans",category:"Denim",price:6999,old:0,rating:4.9,sizes:["S","M","L"],colors:["Dark Blue"],image:"Dark Blue Wide-Leg Jeans.jfif",showInShop:false},
    {id:"p45",name:"Denim Peplum Top",category:"Denim",price:4999,old:0,rating:4.8,sizes:["S","M","L"],colors:["Dark Blue"],image:"Denim Peplum Top.jfif",showInShop:false},
    {id:"p46",name:"Denim Maxi Dress",category:"Denim",price:8999,old:0,rating:4.8,sizes:["S","M","L"],colors:["Dark Blue"],image:"Denim Maxi Dress.jfif",showInShop:false},
    {id:"p47",name:"Denim Puff Sleeves Jumpsuit",category:"Denim",price:8000,old:0,rating:4.8,sizes:["S","M","L"],colors:["Light Blue"],image:"Denim Puff Sleeves Jumpsuit.jfif",showInShop:false},
    {id:"p48",name:"Pleated Denim Skirt",category:"Denim",price:7999,old:0,rating:4.8,sizes:["S","M"],colors:["Light Blue"],image:"Pleated Denim Skirt.jfif",showInShop:false},
    {id:"p49",name:"Burgundy Two-Piece Set",category:"Co-ords",price:8999,old:0,rating:4.8,sizes:["S","M","L"],colors:["Burgundy"],image:"Burgundy Two-Piece Set.jfif",showInShop:false},
    {id:"p50",name:"Black & White Contrast Two-Piece Set",category:"Co-ords",price:9499,old:0,rating:4.9,sizes:["S","M","L"],colors:["Black & White"],image:"Black & White Contrast Two-Piece Set.jfif",showInShop:false},
    {id:"p51",name:"Sage Green Linen Co-ord Set",category:"Co-ords",price:8499,old:0,rating:4.8,sizes:["S","M","L"],colors:["Sage Green"],image:"Sage Green Linen Co-ord Set.jfif",showInShop:false},
    {id:"p52",name:"Ivory Textured Co-ord Set",category:"Co-ords",price:8799,old:0,rating:4.7,sizes:["S","M","L"],colors:["Ivory"],image:"Ivory Textured Co-ord Set.jfif",showInShop:false},
    {id:"p53",name:"Charcoal Wrap Front Fitted Co-ord Set",category:"Co-ords",price:9299,old:0,rating:4.8,sizes:["S","M","L"],colors:["Charcoal"],image:"Charcoal Wrap Front Fitted  Co-ord Set.jfif",showInShop:false},
    {id:"p54",name:"Powder Blue Pleated Co-ord Set",category:"Co-ords",price:8999,old:0,rating:4.9,sizes:["S","M","L"],colors:["Powder Blue"],image:"Powder Blue Pleated Co-ord Set.jfif",showInShop:false},
    {id:"p55",name:"Cream & Beige Minimal Co-ord Set",category:"Co-ords",price:8499,old:0,rating:4.8,sizes:["S","M","L"],colors:["Cream & Beige"],image:"Cream & Beige Minimal Co-ord Set.jfif",showInShop:false},
    {id:"p56",name:"Blue Floral Co-ord Set",category:"Co-ords",price:8299,old:0,rating:4.7,sizes:["S","M","L"],colors:["Blue"],image:"Blue Floral Co-ord Set.jfif",showInShop:false},
    {id:"p57",name:"Neutral Beige Three-Piece Set",category:"Co-ords",price:9999,old:0,rating:4.9,sizes:["S","M","L"],colors:["Neutral Beige"],image:"Neutral Beige Three-Piece Set.jfif",showInShop:false},
    {id:"p58",name:"Vintage Gold & Silver Snake-Shaped Watch",category:"Accessories",price:5999,old:0,rating:4.8,sizes:["Free Size"],colors:["Gold","Silver"],image:"Vintage Gold & Silver Snake-Shaped Watch.jfif",showInShop:false},
    {id:"p59",name:"Sapphire Crystal Tennis Bracelet",category:"Accessories",price:3499,old:0,rating:4.7,sizes:["Free Size"],colors:["Silver","Blue"],image:"Sapphire Crystal Tennis Bracelet.jfif",showInShop:false},
    {id:"p60",name:"Elegant Heart-Shaped Diamond Bangle",category:"Accessories",price:2999,old:0,rating:4.8,sizes:["Free Size"],colors:["Silver"],image:"Elegant Heart-Shaped Diamond Bangle.jfif",showInShop:false},
    {id:"p61",name:"Turquoise Beaded Hand Chain",category:"Accessories",price:2299,old:0,rating:4.6,sizes:["Free Size"],colors:["Gold","Turquoise"],image:"Turquoise Beaded Hand Chain.jfif",showInShop:false},
    {id:"p62",name:"Pink Raga Titan Bracelet Watch",category:"Accessories",price:7499,old:0,rating:4.9,sizes:["Free Size"],colors:["Pink","Gold"],image:"Pink Raga Titan Bracelet Watch.jfif",showInShop:false},
    {id:"p63",name:"Floral Crystal Hand Harness",category:"Accessories",price:2799,old:0,rating:4.7,sizes:["Free Size"],colors:["Gold","Crystal"],image:"Floral Crystal Hand Harness.jfif",showInShop:false},
    {id:"p64",name:"Minimal Silver Ring Set",category:"Accessories",price:1999,old:0,rating:4.6,sizes:["Free Size"],colors:["Silver"],image:"Minimal Silver Ring Set.jfif",showInShop:false},
    {id:"p65",name:"Rose Gold Beaded Hand Chain",category:"Accessories",price:2499,old:0,rating:4.7,sizes:["Free Size"],colors:["Rose Gold"],image:"Rose Gold Beaded Hand Chain.jfif",showInShop:false},
    {id:"p66",name:"Blush Bow Handbag",category:"Bags",price:6499,old:7499,rating:4.6,sizes:["One Size"],colors:["Pink"],image:"Blush Bow Handbag.jfif",showInShop:false},
    {id:"p67",name:"Black Quilted Gold Chain Bag",category:"Bags",price:8299,old:9499,rating:4.8,sizes:["One Size"],colors:["Black"],image:"Black Quilted Gold Chain Bag.jfif",showInShop:false},
    {id:"p68",name:"Classic Black Structured Bag",category:"Bags",price:7199,old:7999,rating:4.5,sizes:["One Size"],colors:["Black"],image:"Classic Black Structured Bag.jfif",showInShop:false},
    {id:"p69",name:"Burgundy Leather Shoulder Bag",category:"Bags",price:5899,old:6999,rating:4.7,sizes:["One Size"],colors:["Burgundy"],image:"Burgundy Leather Shoulder Bag.jfif",showInShop:false},
    {id:"p70",name:"Plum Luxe Handbag Set",category:"Bags",price:8999,old:10499,rating:4.9,sizes:["One Size"],colors:["Plum"],image:"Plum Luxe Handbag Set.jfif",showInShop:false},
    {id:"p71",name:"Mocha Vintage Tote",category:"Bags",price:6799,old:7799,rating:4.4,sizes:["One Size"],colors:["Brown"],image:"Mocha Vintage Tote.jfif",showInShop:false},
    {id:"p72",name:"Celestial White Mini Bag",category:"Bags",price:5499,old:6299,rating:4.6,sizes:["One Size"],colors:["White"],image:"Celestial White Mini Bag.jfif",showInShop:false},
    {id:"p73",name:"Pearl Beaded Evening Bag",category:"Bags",price:7699,old:8999,rating:4.8,sizes:["One Size"],colors:["Pearl White"],image:"Pearl Beaded Evening Bag.jfif",showInShop:false},
    {id:"p74",name:"Ivory Chain Handle Bag",category:"Bags",price:6199,old:7299,rating:4.5,sizes:["One Size"],colors:["Ivory"],image:"Ivory Chain Handle Bag.jfif",showInShop:false},
    {id:"p75",name:"Luxury Red Bag",category:"Bags",price:8999,old:9999,rating:4.5,sizes:["One Size"],colors:["Red"],image:"Luxury Red Bag.jfif",showInShop:false},
    {id:"p76",name:"Midnight Paisley Reversible Scarf",category:"Scarves",price:2499,old:2999,rating:4.7,sizes:["Free Size"],colors:["Blue"],image:"Midnight Paisley Reversible Scarf.jfif",showInShop:false},
    {id:"p77",name:"Vintage Leopard Print Scarf",category:"Scarves",price:2199,old:2699,rating:4.6,sizes:["Free Size"],colors:["Brown"],image:"Vintage Leopard Print Scarf.jfif",showInShop:false},
    {id:"p78",name:"Monochrome Feeling Scarf",category:"Scarves",price:1999,old:2499,rating:4.5,sizes:["Free Size"],colors:["Black"],image:"Monochrome Feeling Scarf.jfif",showInShop:false},
    {id:"p79",name:"Blush Floral Silk Scarf",category:"Scarves",price:2799,old:3299,rating:4.8,sizes:["Free Size"],colors:["Blush"],image:"Blush Floral Silk Scarf.jfif",showInShop:false},
    {id:"p80",name:"Cherry Blossom Dream Scarf",category:"Scarves",price:2599,old:3099,rating:4.7,sizes:["Free Size"],colors:["Pink"],image:"Cherry Blossom Dream Scarf.jfif",showInShop:false},
    {id:"p81",name:"Ivory Cashmere Feel Scarf",category:"Scarves",price:2899,old:3499,rating:4.9,sizes:["Free Size"],colors:["Ivory"],image:"Ivory Cashmere Feel Scarf.jfif",showInShop:false},
    {id:"p82",name:"Cloud White Ruffle Scarf",category:"Scarves",price:2299,old:2799,rating:4.6,sizes:["Free Size"],colors:["White"],image:"Cloud White Ruffle Scarf.jfif",showInShop:false},
    {id:"p83",name:"Plum Luxe Draped Scarf",category:"Scarves",price:2399,old:2899,rating:4.8,sizes:["Free Size"],colors:["Plum"],image:"Plum Luxe Draped Scarf.jfif",showInShop:false},
    {id:"p84",name:"Champagne Satin Scarf",category:"Scarves",price:2699,old:3199,rating:4.7,sizes:["Free Size"],colors:["Champagne"],image:"Champagne Satin Scarf.jfif",showInShop:false},
    {id:"p85",name:"Blush Embroidered Knit Sweater",category:"Knitwear",price:6499,old:0,rating:4.7,sizes:["S","M","L"],colors:["Cream"],image:"Blush Embroidered Knit Sweater.jfif",showInShop:false},
    {id:"p86",name:"Crochet Charm Knit Cardigan",category:"Knitwear",price:6799,old:0,rating:4.6,sizes:["S","M"],colors:["Ivory"],image:"Crochet Charm Knit Cardigan.jfif",showInShop:false},
    {id:"p87",name:"Pink Ribbed Tie Sleeve Sweater",category:"Knitwear",price:5999,old:0,rating:4.7,sizes:["S","M","L"],colors:["Pink"],image:"Pink Ribbed Tie Sleeve Sweater.jfif",showInShop:false},
    {id:"p90",name:"Pink Daisy Balloon Sleeve Cardigan",category:"Knitwear",price:7499,old:0,rating:4.9,sizes:["S","M","L"],colors:["Pink"],image:"Pink Daisy Balloon Sleeve Cardigan.jfif",showInShop:false},
    {id:"p91",name:"Sera Free Crochet Cardigan",category:"Knitwear",price:6999,old:0,rating:4.6,sizes:["S","M","L"],colors:["Blue"],image:"Sera Free Crochet Cardigan.jfif",showInShop:false},
    {id:"p92",name:"Striped Zipper Turtleneck Sweater",category:"Knitwear",price:6599,old:0,rating:4.7,sizes:["S","M","L"],colors:["Cream","Brown"],image:"Striped Zipper Turtleneck Sweater.jfif",showInShop:false},
    {id:"p93",name:"Cherry Blossom Crochet Cardigan",category:"Knitwear",price:7399,old:0,rating:4.8,sizes:["S","M","L"],colors:["Cream","Red"],image:"Cherry Blossom Crochet Cardigan.jfif",showInShop:false},
    {id:"p94",name:"Ivory Bell Sleeve Crochet Top",category:"Knitwear",price:5799,old:0,rating:4.6,sizes:["S","M"],colors:["Ivory"],image:"Ivory Bell Sleeve Crochet Top.jfif",showInShop:false},
    {id:"p95",name:"Cozy Ribbed Wool Knit Sweater",category:"Knitwear",price:6899,old:0,rating:4.8,sizes:["S","M","L"],colors:["Beige"],image:"Cozy Ribbed Wool Knit Sweater.jfif",showInShop:false},
    {id:"p96",name:"Classic Pattern Knit Cardigan",category:"Knitwear",price:7199,old:0,rating:4.7,sizes:["S","M","L"],colors:["Cream","Black"],image:"Classic Pattern Knit Cardigan.jfif",showInShop:false},
    {id:"p97",name:"Brown Floral Crochet Cardigan",category:"Knitwear",price:7599,old:0,rating:4.9,sizes:["S","M","L"],colors:["Brown"],image:"Brown Floral Crochet Cardigan.jfif",showInShop:false},
    {id:"p98",name:"Chunky Floral Crochet Cardigan",category:"Knitwear",price:7799,old:0,rating:4.8,sizes:["S","M","L"],colors:["Cream"],image:"Chunky Floral Crochet Cardigan.jfif",showInShop:false},
    {id:"idp99",name:"Mocha Flow A-Line Skirt",category:"Skirts",price:6490,old:7490,rating:4.8,sizes:["S","M","L"],colors:["Mocha"],image:"Mocha Flow A-Line Skirt.jfif",showInShop:false},
    {id:"idp100",name:"Blush Tiered Mini Skirt",category:"Skirts",price:5290,old:5990,rating:4.7,sizes:["XS","S","M"],colors:["Blush Pink"],image:"Blush Tiered Mini Skirt.jfif",showInShop:false},
    {id:"idp101",name:"Ivory Cascade Ruffle Skirt",category:"Skirts",price:7290,old:8290,rating:4.9,sizes:["S","M","L"],colors:["Ivory"],image:"Ivory Cascade Ruffle Skirt.jfif",showInShop:false},
    {id:"idp102",name:"Charcoal Grace High-Waist Skirt",category:"Skirts",price:6890,old:7890,rating:4.8,sizes:["S","M","L"],colors:["Charcoal"],image:"Charcoal Grace High-Waist Skirt.jfif",showInShop:false},
    {id:"idp103",name:"Ivory Breeze Pleated Skirt",category:"Skirts",price:5990,old:6990,rating:4.7,sizes:["XS","S","M","L"],colors:["White"],image:"Ivory Breeze Pleated Skirt.jfif",showInShop:false},
    {id:"idp104",name:"Linen Bow Detail Midi Skirt",category:"Skirts",price:6790,old:7790,rating:4.9,sizes:["S","M","L"],colors:["Ivory"],image:"Linen Bow Detail Midi Skirt.jfif",showInShop:false},
    {id:"idp105",name:"Mocha Bloom Layered Maxi Skirt",category:"Skirts",price:8490,old:9490,rating:4.8,sizes:["S","M","L"],colors:["Mocha","Cream"],image:"Mocha Bloom Layered Maxi Skirt.jfif",showInShop:false},
    {id:"idp106",name:"Noir Sparkle Pleated Skirt",category:"Skirts",price:5790,old:6790,rating:4.6,sizes:["XS","S","M"],colors:["Black"],image:"Noir Sparkle Pleated Skirt.jfif",showInShop:false},
    {id:"idp107",name:"Mocha Heritage Plaid Skirt",category:"Skirts",price:6290,old:7290,rating:4.8,sizes:["S","M","L"],colors:["Brown","Cream"],image:"Mocha Heritage Plaid Skirt.jfif",showInShop:false},
    {id:"idp108",name:"Midnight Pleat Flare Skirt",category:"Skirts",price:6590,old:7590,rating:4.7,sizes:["S","M","L"],colors:["Navy Blue"],image:"Midnight Pleat Flare Skirt.jfif",showInShop:false},
    {id:"idp109",name:"Luna Strappy Flat Sandals",category:"Footwear",price:4290,old:4990,rating:4.8,sizes:["36","37","38","39","40"],colors:["Beige"],image:"Sandálias Rasteiras Femininas, Elegantes Metálicas para Festa, Férias, Moda de Vanguarda Básica, Casual, Praia, Fofa, Casamento, Ao Ar Livre, Sexy, Estilo Chinês Deslumbrante, Rua, Confortável….jfif",tag:"New"},
    {id:"idp110",name:"Noir Chain Detail Loafers",category:"Footwear",price:5490,old:6290,rating:4.9,sizes:["36","37","38","39","40"],colors:["Black"],image:"17873729766796015.jfif",tag:"New"},
    {id:"idp111",name:"Cloudstep Classic Sneakers",category:"Footwear",price:6990,old:7990,rating:4.8,sizes:["36","37","38","39","40"],colors:["White"],image:"New Balance 530.jfif",tag:"New"},
    {id:"idp112",name:"Floral Charm Pointed Flats",category:"Footwear",price:4790,old:5590,rating:4.7,sizes:["36","37","38","39","40"],colors:["Beige"],image:"Minimalist Aesthetic Floral Juttis.jfif",tag:"New"},
    {id:"idp113",name:"Azure Wide-Leg Jeans",category:"Jeans",price:7990,old:8990,rating:4.8,sizes:["S","M","L"],colors:["Light Blue"],image:"1147643917682875271.jfif",showInShop:false},
    {id:"idp114",name:"Midnight Wide-Leg Jeans",category:"Jeans",price:7490,old:8490,rating:4.7,sizes:["S","M","L"],colors:["Dark Blue"],image:"734720126789368753.jfif",showInShop:false},
    {id:"idp115",name:"Black Flare Jeans",category:"Jeans",price:8290,old:9290,rating:4.9,sizes:["S","M","L"],colors:["Black"],image:"362187995055140295.jfif",showInShop:false},
    {id:"idp116",name:"Sky Blue Flare Jeans",category:"Jeans",price:7890,old:8990,rating:4.8,sizes:["S","M","L"],colors:["Sky Blue"],image:"480688960243155272.jfif",showInShop:false},
    {id:"idp117",name:"Indigo Contrast-Stitch Jeans",category:"Jeans",price:8590,old:9790,rating:4.9,sizes:["S","M","L"],colors:["Indigo"],image:"77687162317821877.jfif",showInShop:false},
    {id:"idp118",name:"Classic Dark Blue Wide-Leg Jeans",category:"Jeans",price:7690,old:8690,rating:4.7,sizes:["S","M","L"],colors:["Dark Blue"],image:"Classic Dark Blue Wide-Leg Jeans.jfif",showInShop:false},
    {id:"idp119",name:"Vintage Blue Wide-Leg Jeans",category:"Jeans",price:8190,old:9290,rating:4.8,sizes:["S","M","L"],colors:["Blue"],image:"Vintage Blue Wide-Leg Jeans.jfif",showInShop:false},
    {id:"idp120",name:"Aesthetic Ice Blue Baggy Jeans",category:"Jeans",price:8390,old:9490,rating:4.9,sizes:["S","M","L"],colors:["Ice Blue"],image:"Aesthetic Ice Blue Baggy Jeans.jfif",showInShop:false},
    {id:"idp121",name:"Midnight Anti-Skinny Jeans",category:"Jeans",price:7790,old:8890,rating:4.8,sizes:["S","M","L"],colors:["Midnight Blue"],image:"Midnight Anti-Skinny Jeans.jfif",showInShop:false},
    {id:"idp122",name:"Leopard Buckle Belt",category:"Belts",price:3490,old:0,rating:4.7,sizes:["S","M","L"],colors:["Brown"],image:"Leopard Buckle Belt.jfif",showInShop:false},
    {id:"idp123",name:"Elegant Punk Rivet Leather Belt",category:"Belts",price:4290,old:4990,rating:4.8,sizes:["S","M","L"],colors:["Gray"],image:"Elegant Punk Rivet Leather Belt.jfif",showInShop:false},
    {id:"idp124",name:"Streets Ahead Italian Leather Belt",category:"Belts",price:5990,old:6990,rating:4.9,sizes:["S","M","L"],colors:["Brown"],image:"Streets Ahead Italian Leather Belt.jfif",showInShop:false},
    {id:"idp125",name:"Classic Brown Silver Buckle Belt",category:"Belts",price:3890,old:4490,rating:4.7,sizes:["S","M","L"],colors:["Dark Brown"],image:"Classic Brown Silver Buckle Belt.jfif",showInShop:false},
    {id:"idp126",name:"Minimal Gold Accent Leather Belt",category:"Belts",price:3290,old:0,rating:4.6,sizes:["S","M","L"],colors:["Black"],image:"Minimal Gold Accent Leather Belt.jfif",showInShop:false},
    {id:"idp127",name:"Star Buckle Punk Waist Belt",category:"Belts",price:2990,old:3590,rating:4.8,sizes:["S","M","L"],colors:["Black"],image:"Star Buckle Punk Waist Belt.jfif",showInShop:false},
    {id:"idp128",name:"Golden Chain Link Belt",category:"Belts",price:4590,old:5290,rating:4.9,sizes:["S","M","L"],colors:["Gold"],image:"Golden Chain Link Belt.jfif",showInShop:false},
    {id:"idp129",name:"Orange Punk Pin Buckle Belt",category:"Belts",price:3790,old:0,rating:4.7,sizes:["S","M","L"],colors:["Orange"],image:"Orange Punk Pin Buckle Belt.jfif",showInShop:false},
    {id:"idp130",name:"Reversible Faux Leather Skinny Belt",category:"Belts",price:3190,old:3890,rating:4.6,sizes:["S","M","L"],colors:["Black","Beige"],image:"Reversible Faux Leather Skinny Belt.jfif",showInShop:false},
    {id:"idp131",name:"Crystal Star Chain Belt",category:"Belts",price:4890,old:5590,rating:4.8,sizes:["S","M","L"],colors:["Silver"],image:"Crystal Star Chain Belt.jfif",showInShop:false},
    {id:"idp132",name:"Vintage Bohemian Chain Belt",category:"Belts",price:4390,old:4990,rating:4.9,sizes:["S","M","L"],colors:["Gold"],image:"Vintage Bohemian Chain Belt.jfif",showInShop:false},
    {id:"idp133",name:"Earthline Wool Jacket",category:"Outerwear",price:8990,old:10490,rating:4.8,sizes:["S","M","L"],colors:["Brown"],image:"Earthline Wool Jacket.jfif",showInShop:false},
{id:"idp134",name:"Ivory Patchwork Collar Coat",category:"Outerwear",price:9490,old:10990,rating:4.7,sizes:["S","M","L"],colors:["Ivory"],image:"Ivory Patchwork Collar Coat.jfif",showInShop:false},
{id:"idp135",name:"Cream Belted Turtleneck Cape",category:"Outerwear",price:8290,old:9790,rating:4.9,sizes:["S","M","L"],colors:["Cream"],image:"Cream Belted Turtleneck Cape.jfif",showInShop:false},
{id:"idp136",name:"Rosewood Button Cardigan",category:"Outerwear",price:6790,old:7990,rating:4.8,sizes:["S","M","L"],colors:["Pink"],image:"Rosewood Button Cardigan.jfif",showInShop:false},
{id:"idp137",name:"Cozy Beige Winter Coat",category:"Outerwear",price:9990,old:11990,rating:4.9,sizes:["S","M","L"],colors:["Beige"],image:"Cozy Beige Winter Coat.jfif",showInShop:false},
{id:"idp138",name:"Camel Elegance Fit Coat",category:"Outerwear",price:9290,old:10990,rating:4.8,sizes:["S","M","L"],colors:["Camel"],image:"Camel Elegance Fit Coat.jfif",showInShop:false},
{id:"idp139",name:"Alden Short Trench Jacket",category:"Outerwear",price:7490,old:8990,rating:4.7,sizes:["S","M","L"],colors:["Taupe"],image:"Alden Short Trench Jacket.jfif",showInShop:false},
{id:"idp140",name:"Burgundy Cropped Jacket",category:"Outerwear",price:6990,old:8490,rating:4.8,sizes:["S","M","L"],colors:["Burgundy"],image:"Burgundy Cropped Jacket.jfif",showInShop:false},
{id:"idp141",name:"Pinterest...",category:"Eyewear",price:4290,old:4990,rating:4.8,sizes:["One Size"],colors:["Black"],image:"Pinterest….jfif",showInShop:false},
{id:"idp142",name:"Shop All Accessories",category:"Eyewear",price:2990,old:0,rating:4.6,sizes:["One Size"],colors:["Green"],image:"Shop All Accessories.jfif",showInShop:false},
{id:"idp143",name:"Party Butterfly & Bead Decor",category:"Eyewear",price:3890,old:4590,rating:4.9,sizes:["One Size"],colors:["Gold"],image:"Party Butterfly & Bead Decor.jfif",showInShop:false},
{id:"idp144",name:"Yves Saint Laurent Women",category:"Eyewear",price:7490,old:8990,rating:4.8,sizes:["One Size"],colors:["Black"],image:"Yves Saint Laurent Women.jfif",showInShop:false},
{id:"idp145",name:"Hailey Rose Gold Cat Eye Eyeglasses",category:"Eyewear",price:5190,old:0,rating:4.7,sizes:["One Size"],colors:["Rose Gold"],image:"Hailey Rose Gold Cat Eye Eyeglasses.jfif",showInShop:false},
{id:"idp146",name:"47428602326058814",category:"Eyewear",price:3490,old:3990,rating:4.5,sizes:["One Size"],colors:["Brown"],image:"47428602326058814.jfif",showInShop:false},
{id:"idp147",name:"13792342604766154",category:"Eyewear",price:4290,old:0,rating:4.6,sizes:["One Size"],colors:["Black"],image:"13792342604766154.jfif",showInShop:false},
{id:"idp148",name:"Envy Luxury Rhinestone Butterfly Rimless Sunglasses",category:"Eyewear",price:5990,old:6990,rating:4.9,sizes:["One Size"],colors:["Blue"],image:"Envy Luxury Rhinestone Butterfly Rimless Sunglasses.jfif",showInShop:false},
{id:"idp149",name:"BOTTEGA VENETA EYEWEAR",category:"Eyewear",price:8290,old:9490,rating:4.8,sizes:["One Size"],colors:["Black"],image:"BOTTEGA VENETA EYEWEAR.jfif",showInShop:false},
{id:"idp150",name:"548883079346688",category:"Eyewear",price:4690,old:0,rating:4.7,sizes:["One Size"],colors:["Black"],image:"5488830793466888.jfif",showInShop:false},
{id:"idp151",name:"Summer classes",category:"Eyewear",price:3790,old:4490,rating:4.6,sizes:["One Size"],colors:["Blue"],image:"Summer classes.jfif",showInShop:false},
{id:"idp152",name:"Classic Black Stiletto Heels",category:"Heels",price:8490,old:9990,rating:4.8,sizes:["36","37","38","39","40"],colors:["Black"],image:"15833036185360162.jfif",showInShop:false},
{id:"idp153",name:"Elegant Pointed Toe Heels",category:"Heels",price:8290,old:9490,rating:4.7,sizes:["36","37","38","39","40"],colors:["Black"],image:"1111896595493436477.jfif",showInShop:false},
{id:"idp154",name:"Pointed Toe Stiletto Heel Women",category:"Heels",price:8790,old:9990,rating:4.8,sizes:["36","37","38","39","40"],colors:["Black"],image:"Pointed Toe Stiletto Heel Women.jfif",showInShop:false},
{id:"idp155",name:"Women Satin Pointed Toe Heels",category:"Heels",price:8990,old:10490,rating:4.9,sizes:["36","37","38","39","40"],colors:["Satin"],image:"Women Satin Pointed Toe.jfif",showInShop:false},
{id:"idp156",name:"Chic Classic Pointed Heels",category:"Heels",price:8190,old:9290,rating:4.7,sizes:["36","37","38","39","40"],colors:["Black"],image:"19069998418451047.jfif",showInShop:false},
{id:"idp157",name:"Trendy Pointed Toe Thin High Heels",category:"Heels",price:9290,old:10990,rating:4.9,sizes:["36","37","38","39","40"],colors:["Black"],image:"Trendy Pointed-toe Thin High Heels.jfif",showInShop:false},
{id:"idp158",name:"CHANEL Classic Heels",category:"Heels",price:9990,old:11990,rating:4.9,sizes:["36","37","38","39","40"],colors:["Black"],image:"CHANEL.jfif",showInShop:false},
{id:"idp159",name:"LAVENDER Satin Heels",category:"Heels",price:8690,old:9990,rating:4.8,sizes:["36","37","38","39","40"],colors:["Lavender"],image:"LAVENDER.jfif",showInShop:false},
{id:"idp160",name:"Elegant Statement High Heels",category:"Heels",price:9090,old:10490,rating:4.7,sizes:["36","37","38","39","40"],colors:["Gold"],image:"844493676873064.jfif",showInShop:false},
{id:"idp161",name:"Beautiful Grass Green Satin Heels",category:"Heels",price:8790,old:9990,rating:4.9,sizes:["36","37","38","39","40"],colors:["Grass Green"],image:"Beautiful Grass Green Satin.jfif",showInShop:false},
{id:"idp162",name:"Absolute Rose Gold Perfection Heels",category:"Heels",price:9490,old:10990,rating:4.9,sizes:["36","37","38","39","40"],colors:["Rose Gold"],image:"Absolute rose gold perfection.jfif",showInShop:false},
{id:"idp163",name:"Photography Inspired Heels",category:"Heels",price:8390,old:9590,rating:4.7,sizes:["36","37","38","39","40"],colors:["Pink"],image:"Photography.jfif",showInShop:false},
{id:"idp164",name:"Tall Long and Glam Heels",category:"Heels",price:9290,old:10490,rating:4.8,sizes:["36","37","38","39","40"],colors:["Black"],image:"Tall, Long and Glam.jfif",showInShop:false},
{id:"idp165",name:"Heart Detail Elegant Heels",category:"Heels",price:8590,old:9790,rating:4.8,sizes:["36","37","38","39","40"],colors:["Black"],image:"♡.jfif",showInShop:false},
{id:"idp166",name:"Shade Deep Matte Black Heels",category:"Heels",price:8990,old:10290,rating:4.9,sizes:["36","37","38","39","40"],colors:["Matte Black"],image:"Shade_ Deep matte black.jfif",showInShop:false},
{id:"idp167",name:"Classic Black Fashion Heels",category:"Heels",price:8290,old:9490,rating:4.7,sizes:["36","37","38","39","40"],colors:["Black"],image:"575968239867098316.jfif",showInShop:false},
{id:"idp168",name:"Best Wedding Shoes for Every Style",category:"Heels",price:9490,old:10990,rating:4.9,sizes:["36","37","38","39","40"],colors:["White"],image:"Best Wedding Shoes for Every Style.jfif",showInShop:false},
{id:"idp169",name:"12 Iconic Designer Wedding Shoes",category:"Heels",price:9990,old:11990,rating:4.9,sizes:["36","37","38","39","40"],colors:["White"],image:"12 Iconic Designer wedding shoes.jfif",showInShop:false},
{id:"idp170",name:"Elegant Bridal Pointed Heels",category:"Heels",price:9190,old:10490,rating:4.8,sizes:["36","37","38","39","40"],colors:["White"],image:"28921622600051318.jfif",showInShop:false},
{id:"idp171",name:"Bridal Shoes You'll Totally Love",category:"Heels",price:9390,old:10790,rating:4.9,sizes:["36","37","38","39","40"],colors:["White"],image:"Bridal Shoes You'll Totally Love!.jfif",showInShop:false},
{id:"idp172",name:"Luxury Black Bow High Heels",category:"Heels",price:9790,old:11490,rating:4.9,sizes:["36","37","38","39","40"],colors:["Black"],image:"Luxury Black Bow High Heels.jfif",showInShop:false},
{id:"idp173",name:"Glamorous Classic High Heels",category:"Heels",price:8890,old:9990,rating:4.8,sizes:["36","37","38","39","40"],colors:["Black"],image:"777504323217233042.jfif",showInShop:false},
{id:"idp174",name:"YSL Elegant High Heels",category:"Heels",price:9990,old:11990,rating:4.9,sizes:["36","37","38","39","40"],colors:["Black"],image:"YSL.jfif",showInShop:false},
{id:"idp175",name:"Classic Ribbed Knit Top",category:"Tops",image:"76490893665715083.jfif",showInShop:false},
{id:"idp176",name:"Elegant Draped Neck Top",category:"Tops",image:"1033083602072211293.jfif",showInShop:false},
{id:"idp177",name:"Soft Casual Knit Top",category:"Tops",image:"14988611255673563.jfif",showInShop:false},
{id:"idp178",name:"Sweetra Elegant Decollete Top",category:"Tops",image:"Sweetra Elegant Decollete.jfif",showInShop:false},
{id:"idp179",name:"Frenchie Square Collar Top",category:"Tops",image:"Frenchie Square Collar Short.jfif",showInShop:false},
{id:"idp180",name:"Summer Di Laurentis Top",category:"Tops",image:"summer di laurentis.jfif",showInShop:false},
{id:"idp181",name:"Asymmetrical Metal Detail Fitted Top",category:"Tops",image:"Asymmetrical Metal Detail Fitted Top.jfif",showInShop:false},
{id:"idp182",name:"Chic Fitted Sleeve Top",category:"Tops",image:"660692207880073704.jfif",showInShop:false},
{id:"idp183",name:"TEENGIRL Summer White Pleated Top",category:"Tops",image:"TEENGIRL Summer White Sweet Pleate.jfif",showInShop:false},
{id:"idp184",name:"Ideas Blusas Lindas Top",category:"Tops",image:"Ideas blusas lindas.jfif",showInShop:false},
{id:"idp185",name:"Black Off Shoulder Jersey Top",category:"Tops",image:"Off shoulder jersey top in black.jfif",showInShop:false},
{id:"idp186",name:"Minimalist Casual Fitted Top",category:"Tops",image:"15129348745480820.jfif",showInShop:false},
{id:"idp187",name:"Women's Fashion Sale Top",category:"Tops",image:"Women's Clothing, Women Fashion Sale.jfif",showInShop:false},
{id:"idp188",name:"Elegant Everyday Blouse",category:"Tops",image:"811985007862747391.jfif",showInShop:false},
{id:"idp189",name:"Blue Selena Shirt",category:"Tops",image:"BLUE SELENA SHIRT - Blue _ L.jfif",showInShop:false},
{id:"idp190",name:"Elegant Classic Top",category:"Tops",image:"Elegant Top.jfif",showInShop:false},
{id:"idp191",name:"SHEIN MOD Bow 2-In-1 Top",category:"Tops",image:"SHEIN MOD Break Bow 2 In 1 Women.jfif",showInShop:false},
{id:"idp192",name:"Modern Casual Button Top",category:"Tops",image:"6122149489293572.jfif",showInShop:false},
{id:"idp193",name:"Cool Brands Casual Top",category:"Tops",image:"3 Cool Brands To Know.jfif",showInShop:false},
{id:"idp194",name:"Lunar Ribbon Jewelry",category:"Jewelry",price:3490,old:3990,rating:5,sizes:[],colors:[],image:"lunar ribbon.jfif",showInShop:false},
{id:"idp195",name:"Women's Bracelet Collection",category:"Jewelry",price:2990,old:0,rating:5,sizes:[],colors:[],image:"Women's Bracelets.jfif",showInShop:false},
{id:"idp196",name:"Classic Bracelet",category:"Jewelry",price:2490,old:2990,rating:5,sizes:[],colors:[],image:"bracelet.jfif",showInShop:false},
{id:"idp197",name:"Exclusive Yellow Gold Ladies Jewelry",category:"Jewelry",price:6490,old:7490,rating:5,sizes:[],colors:[],image:"Exclusive Yellow Gold Ladies.jfif",showInShop:false},
{id:"idp198",name:"Golden Statement Jewelry",category:"Jewelry",price:4990,old:0,rating:5,sizes:[],colors:[],image:"618611698868666322.jfif",showInShop:false},
{id:"idp199",name:"23 Jewellery Pieces Collection",category:"Jewelry",price:7990,old:8990,rating:5,sizes:[],colors:[],image:"23 Jewellery Pieces Under.jfif",showInShop:false},
{id:"idp200",name:"Golden Jewelry Collection",category:"Jewelry",price:4490,old:4990,rating:5,sizes:[],colors:[],image:"29203097581567385.jfif",showInShop:false},
{id:"idp201",name:"Elegant Jewelry Collection",category:"Jewelry",price:5290,old:0,rating:5,sizes:[],colors:[],image:"592716001003305748.jfif",showInShop:false},
{id:"idp202",name:"Airy Romantic Floral Jewelry",category:"Jewelry",price:3790,old:4290,rating:5,sizes:[],colors:[],image:"An airy and romantic floral.jfif",showInShop:false},
{id:"idp203",name:"Promise Ring Collection",category:"Jewelry",price:3290,old:3990,rating:5,sizes:[],colors:[],image:"Promise Rings_ 22 The Most.jfif",showInShop:false},
{id:"idp204",name:"Disney World Jewelry",category:"Jewelry",price:2990,old:0,rating:5,sizes:[],colors:[],image:"disney world jewellery.jfif",showInShop:false},
{id:"idp205",name:"Statement Jewelry Piece",category:"Jewelry",price:3990,old:4490,rating:5,sizes:[],colors:[],image:"254875660156850476.jfif",showInShop:false},
{id:"idp206",name:"Red Necklace",category:"Jewelry",price:4590,old:5290,rating:5,sizes:[],colors:[],image:"red necklace.jfif",showInShop:false},
{id:"idp207",name:"Elegant Korean Flower Jewelry",category:"Jewelry",price:3490,old:0,rating:5,sizes:[],colors:[],image:"Elegant Korean Flower Jewellery.jfif",showInShop:false},
{id:"idp208",name:"Classic Jewelry Collection",category:"Jewelry",price:4290,old:4790,rating:5,sizes:[],colors:[],image:"44543483806206668.jfif",showInShop:false},
{id:"idp209",name:"Our Favorite Things Jewelry",category:"Jewelry",price:3190,old:0,rating:5,sizes:[],colors:[],image:"Our Favorite Things on Sale to.jfif",showInShop:false},
{id:"idp210",name:"Cute Jewelry Collection",category:"Jewelry",price:2790,old:3290,rating:5,sizes:[],colors:[],image:"GRAB FREE Cute Nails Here.jfif",showInShop:false},
{id:"idp211",name:"Royal Sapphire Elegance Jewelry Set",category:"Jewelry",price:8490,old:9990,rating:5,sizes:[],colors:[],image:"Royal Sapphire Elegance Jewelry Set.jfif",showInShop:false},
{id:"idp212",name:"Elegant Jewelry",category:"Jewelry",price:3890,old:0,rating:5,sizes:[],colors:[],image:"Elegant Jewelry.jfif",showInShop:false},
{id:"idp213",name:"Elegant Pearl and Gold Vine Jewelry",category:"Jewelry",price:5990,old:6990,rating:5,sizes:[],colors:[],image:"Elegant Pearl and Gold Vine Jewelry.jfif",showInShop:false},
{id:"idp214",name:"Elegant Textured Jacket",category:"Jackets",price:7490,old:8990,rating:4.8,sizes:["S","M","L"],colors:["Black","Beige"],image:"2955556003065492.jfif",showInShop:false},
{id:"idp215",name:"Classic Wedding Jacket",category:"Jackets",price:8990,old:10990,rating:4.9,sizes:["S","M","L"],colors:["White","Cream"],image:"wedding jacket.jfif",showInShop:false},
{id:"idp216",name:"Pink Denim Jacket",category:"Jackets",price:6490,old:7990,rating:4.7,sizes:["S","M","L"],colors:["Pink","Purple"],image:"Pink Denim Jacket purple-L.jfif",showInShop:false},
{id:"idp217",name:"Modern Casual Jacket",category:"Jackets",price:6990,old:8490,rating:4.8,sizes:["S","M","L"],colors:["Black","Blue"],image:"393502086214543279.jfif",showInShop:false},
{id:"idp218",name:"Classic Everyday Jacket",category:"Jackets",price:6790,old:7990,rating:4.7,sizes:["S","M","L"],colors:["Blue","Black"],image:"1234.jfif",showInShop:false},
{id:"idp219",name:"Chic Structured Jacket",category:"Jackets",price:8290,old:9990,rating:4.9,sizes:["S","M","L"],colors:["Black","Grey"],image:"443745369558578987.jfif",showInShop:false},
{id:"idp220",name:"Refined Button Jacket",category:"Jackets",price:7890,old:9490,rating:4.8,sizes:["S","M","L"],colors:["Brown","Black"],image:"583356958066448067.jfif",showInShop:false},
{id:"idp221",name:"Chic Olive Jacket",category:"Jackets",price:7290,old:8790,rating:4.8,sizes:["S","M","L"],colors:["Olive","Khaki"],image:"Chic olive jacket look.jfif",showInShop:false},
{id:"idp222",name:"Sleek Casual Jacket",category:"Jackets",price:6990,old:8490,rating:4.7,sizes:["S","M","L"],colors:["Black","Grey"],image:"429390145741627759.jfif",showInShop:false},
{id:"idp223",name:"Contemporary Layered Jacket",category:"Jackets",price:8190,old:9790,rating:4.8,sizes:["S","M","L"],colors:["Black","Brown"],image:"55098795472147800.jfif",showInShop:false},
{id:"idp224",name:"Cropped Gabardine Jacket",category:"Jackets",price:7490,old:8990,rating:4.9,sizes:["S","M","L"],colors:["Beige","Camel"],image:"Gabardina cropped.jfif",showInShop:false},
{id:"idp225",name:"Cotton Padded Jacket",category:"Jackets",price:8490,old:9990,rating:4.8,sizes:["S","M","L"],colors:["Cream","Black"],image:"Cotton Padded Jacket.jfif",showInShop:false},
{id:"idp226",name:"Classic Padded Jacket",category:"Jackets",price:8790,old:10490,rating:4.9,sizes:["S","M","L"],colors:["Black","Beige"],image:"71424344084867385.jfif",showInShop:false},
{id:"idp227",name:"Lightweight Everyday Jacket",category:"Jackets",price:6290,old:7490,rating:4.7,sizes:["S","M","L"],colors:["Grey","Black"],image:"Lightweight Jacket.jfif",showInShop:false},
{id:"idp228",name:"Classic Ribbed Beanie",category:"Headwear",price:1490,image:"21.jfif",showInShop:false},
{id:"idp229",name:"Soft Knit Winter Beanie",category:"Headwear",price:1690,image:"22.jfif",showInShop:false},
{id:"idp230",name:"Cozy Cuffed Beanie",category:"Headwear",price:1590,image:"23.jfif",showInShop:false},
{id:"idp231",name:"Premium Cable Knit Beanie",category:"Headwear",price:2190,image:"24.jfif",showInShop:false},
{id:"idp232",name:"Minimal Wool Beanie",category:"Headwear",price:1890,image:"25.jfif",showInShop:false},
{id:"idp233",name:"Everyday Knit Cap",category:"Headwear",price:1390,image:"26.jfif",showInShop:false},
{id:"idp234",name:"Classic Baseball Cap",category:"Headwear",price:1790,image:"27.jfif",showInShop:false},
{id:"idp235",name:"Casual Cotton Cap",category:"Headwear",price:1590,image:"28.jfif",showInShop:false},
{id:"idp236",name:"Structured Everyday Cap",category:"Headwear",price:1990,image:"29.jfif",showInShop:false},
{id:"idp237",name:"Minimal Logo Cap",category:"Headwear",price:1890,image:"30.jfif",showInShop:false},
{id:"idp238",name:"Classic Curved Brim Cap",category:"Headwear",price:1690,image:"31.jfif",showInShop:false},
{id:"idp239",name:"Vintage Washed Cap",category:"Headwear",price:1990,image:"32.jfif",showInShop:false},
{id:"idp240",name:"Premium Baseball Cap",category:"Headwear",price:2290,image:"33.jfif",showInShop:false},
{id:"idp241",name:"Everyday Adjustable Cap",category:"Headwear",price:1790,image:"34.jfif",showInShop:false},
{id:"idp242",name:"Soft Casual Bucket Hat",category:"Headwear",price:1890,image:"35.jfif",showInShop:false},
{id:"idp243",name:"Classic Cotton Bucket Hat",category:"Headwear",price:1990,image:"36.jfif",showInShop:false},
{id:"idp244",name:"Minimal Summer Bucket Hat",category:"Headwear",price:1790,image:"37.jfif",showInShop:false},
{id:"idp245",name:"Black Halter Flare Dress",category:"Dresses",price:3499,oldPrice:4299,image:"58.jfif",showInShop:false},
{id:"idp246",name:"White Layered Mini Dress",category:"Dresses",price:3299,oldPrice:3999,image:"57.jfif",showInShop:false},
{id:"idp247",name:"Floral Embroidered Ball Gown",category:"Dresses",price:5999,oldPrice:6999,image:"56.jfif",showInShop:false},
{id:"idp248",name:"Pink Floral Ball Gown",category:"Dresses",price:5499,oldPrice:6499,image:"55.jfif",showInShop:false},
{id:"idp249",name:"Blue Floral Princess Gown",category:"Dresses",price:5299,oldPrice:6299,image:"54.jfif",showInShop:false},
{id:"idp250",name:"Sage Green Wrap Dress",category:"Dresses",price:3799,oldPrice:4499,image:"53.jfif",showInShop:false},
{id:"idp251",name:"White Pink Bow Dress",category:"Dresses",price:3599,oldPrice:4299,image:"52.jfif",showInShop:false},
{id:"idp252",name:"Brown Puff Sleeve Dress",category:"Dresses",price:4199,oldPrice:4999,image:"51.jfif",showInShop:false},
{id:"idp253",name:"Pink Ruffle Midi Dress",category:"Dresses",price:3699,oldPrice:4399,image:"50.jfif",showInShop:false},
{id:"idp254",name:"White Blue Floral Dress",category:"Dresses",price:3899,oldPrice:4699,image:"49.jfif",showInShop:false},
{id:"idp255",name:"Lavender Off Shoulder Gown",category:"Dresses",price:5799,oldPrice:6799,image:"38.jfif",showInShop:false},
{id:"idp256",name:"Burgundy Tiered Dress",category:"Dresses",price:4599,oldPrice:5499,image:"39.jfif",showInShop:false},
{id:"idp257",name:"Blush Pink Tulle Gown",category:"Dresses",price:6299,oldPrice:7499,image:"40.jfif",showInShop:false},
{id:"idp258",name:"Black Pleated Midi Dress",category:"Dresses",price:3999,oldPrice:4799,image:"41.jfif",showInShop:false},
{id:"idp259",name:"Black Sheer Sleeve Dress",category:"Dresses",price:4299,oldPrice:5099,image:"42.jfif",showInShop:false},
{id:"idp260",name:"Blush Pink Puff Sleeve Dress",category:"Dresses",price:4199,oldPrice:4999,image:"43.jfif",showInShop:false},
{id:"idp261",name:"Pink Lace Midi Dress",category:"Dresses",price:4499,oldPrice:5299,image:"44.jfif",showInShop:false},
{id:"idp262",name:"Blue Floral Flare Dress",category:"Dresses",price:4399,oldPrice:5199,image:"45.jfif",showInShop:false},
{id:"idp263",name:"Blue Watercolor Maxi Dress",category:"Dresses",price:4799,oldPrice:5699,image:"46.jfif",showInShop:false},
{id:"idp264",name:"Navy White Sleeve Dress",category:"Dresses",price:4099,oldPrice:4899,image:"47.jfif",showInShop:false},
{id:"idp265",name:"White Red Floral Dress",category:"Dresses",price:3799,oldPrice:4499,image:"48.jfif",showInShop:false},
];

const CATEGORY_META = {
    Dresses:["dresses.html","Soft silhouettes, sculpted lines and romantic movement."],
    Tops:["tops.html","Everyday layers refined through proportion, texture and detail."],
    Jeans:["jeans.html","Modern denim with a relaxed editorial attitude."],
    Bags:["bags.html","Quietly distinctive shapes designed to finish the look."],
    Shoes:["shoes.html","Polished essentials for every MIZA mood."],
    Heels:["heels.html","Elevated footwear with a graceful feminine edge."],
    Footwear:["footwear.html","Comfort and character, designed to move with you."],
    Accessories:["accessories.html","Small details that turn an outfit into a point of view."],
    Headwear:["headwear.html","Finishing pieces with an understated fashion attitude."],
    Eyewear:["eyewear.html","Graphic frames for your everyday signature."],
    Skirts:["skirts.html","Fluid proportions and modern feminine shapes."],
    "Co-ords":["coords.html","Easy matching sets made for effortless styling."],
    Jackets:["jackets.html","Structured layers that make the silhouette."],
    Outerwear:["jackets.html","Statement layers for transitional dressing."],
    Knitwear:["knitwear.html","Soft textures with an elevated finish."],
    Denim:["denim.html","The MIZA take on timeless denim."],
    Jewelry:["jewelry.html","Delicate shine inspired by botanical forms."],
    Belts:["belts.html","Minimal finishing touches with sculptural hardware."],
    Scarves:["scarves.html","Soft color and movement around the neckline."]
};

function money(value) { return `Pr. ${Number(value).toLocaleString("en-PK")}`; }
function getCart() { return JSON.parse(localStorage.getItem("mizaCart") || "[]"); }
function saveCart(cart) { localStorage.setItem("mizaCart", JSON.stringify(cart)); updateCounts(); }
function getWishlist() { return JSON.parse(localStorage.getItem("mizaWishlist") || "[]"); }
function saveWishlist(items) { localStorage.setItem("mizaWishlist", JSON.stringify(items)); updateCounts(); }
function productById(id) { return MIZA_PRODUCTS.find(p => p.id === id); }

function productCard(product) {
    const wished = getWishlist().includes(product.id);
    return `
        <article class="product-card reveal">
            <div class="product-media">
                <a href="product.html?id=${product.id}" aria-label="View ${product.name}">
                    <img src="./${product.image}" alt="${product.name}">
                </a>
                ${product.old ? `<span class="sale-tag">-${Math.round((1 - product.price / product.old) * 100)}%</span>` : ""}
                <div class="product-tools">
                    <button type="button" onclick="toggleWishlist('${product.id}')" aria-label="${wished ? "Remove from wishlist" : "Add to wishlist"}">${wished ? "♥" : "♡"}</button>
                    <button type="button" onclick="addToCart('${product.id}')" aria-label="Add ${product.name} to cart">+</button>
                </div>
            </div>
            <div class="product-info">
                <a href="product.html?id=${product.id}"><h3>${product.name}</h3></a>
                <p>${product.category} · ★ ${product.rating}</p>
                <div class="price"><span>${money(product.price)}</span>${product.old ? `<span class="old-price">${money(product.old)}</span>` : ""}</div>
            </div>
        </article>`;
}

function renderProducts(target, products) {
    const el = typeof target === "string" ? document.querySelector(target) : target;
    if (!el) return;
    el.innerHTML = products.map(productCard).join("");
    observeReveals();
}

function addToCart(id, quantity = 1) {
    const product = productById(id); if (!product) return;
    const cart = getCart(); const existing = cart.find(item => item.id === id);
    if (existing) existing.quantity += quantity; else cart.push({id, quantity});
    saveCart(cart); toast(`${product.name} added to your bag.`);
}
function removeFromCart(id) { saveCart(getCart().filter(item => item.id !== id)); renderCart(); }
function changeQuantity(id, amount) {
    const cart = getCart(); const item = cart.find(entry => entry.id === id); if (!item) return;
    item.quantity += amount;
    if (item.quantity <= 0) saveCart(cart.filter(entry => entry.id !== id)); else saveCart(cart);
    renderCart();
}
function toggleWishlist(id) {
    const list = getWishlist(); const exists = list.includes(id);
    saveWishlist(exists ? list.filter(item => item !== id) : [...list, id]);
    toast(exists ? "Removed from wishlist." : "Saved to your wishlist.");
    renderProducts(document.querySelector("#productGrid"), MIZA_PRODUCTS); renderWishlist();
}
function updateCounts() {
    const cartCount = getCart().reduce((sum, item) => sum + item.quantity, 0), wishCount = getWishlist().length;
    document.querySelectorAll("[data-cart-count]").forEach(el => el.textContent = cartCount);
    document.querySelectorAll("[data-wish-count]").forEach(el => el.textContent = wishCount);
}
function toast(message) {
    let el = document.querySelector(".toast");
    if (!el) { el = document.createElement("div"); el.className = "toast"; document.body.appendChild(el); }
    el.textContent = message; el.classList.add("show"); clearTimeout(window.mizaToastTimer);
    window.mizaToastTimer = setTimeout(() => el.classList.remove("show"), 2600);
}

function renderCart() {
    const target = document.querySelector("#cartItems"); if (!target) return;
    const cart = getCart();
    if (!cart.length) { target.innerHTML = `<div class="empty"><h3>Your bag is waiting for something beautiful.</h3><p>Explore the latest MIZA edit and find your next piece.</p><a class="btn" href="shop.html" style="margin-top:18px;">Continue Shopping</a></div>`; document.querySelector("#cartSummary")?.replaceChildren(); return; }
    target.innerHTML = cart.map(item => { const p = productById(item.id); return `
        <div class="info-card" style="display:grid;grid-template-columns:110px 1fr auto;gap:18px;align-items:center;margin-bottom:12px;">
            <img src="./${p.image}" alt="${p.name}" style="width:110px;height:130px;object-fit:cover;">
            <div><a href="product.html?id=${p.id}"><h3>${p.name}</h3></a><p>${p.category}</p><div class="price">${money(p.price)}</div>
            <div class="qty" style="margin-top:10px;"><button onclick="changeQuantity('${p.id}',-1)" aria-label="Decrease quantity">−</button><span>${item.quantity}</span><button onclick="changeQuantity('${p.id}',1)" aria-label="Increase quantity">+</button></div></div>
            <button class="icon-btn" onclick="removeFromCart('${p.id}')" aria-label="Remove item">×</button></div>`; }).join("");
    const subtotal = cart.reduce((sum, item) => sum + productById(item.id).price * item.quantity, 0), shipping = subtotal >= 12000 ? 0 : 350, total = subtotal + shipping;
    document.querySelector("#cartSummary").innerHTML = `<div class="info-card"><h3>Bag Summary</h3><div style="display:flex;justify-content:space-between;margin-top:18px;"><span>Subtotal</span><strong>${money(subtotal)}</strong></div><div style="display:flex;justify-content:space-between;margin-top:8px;"><span>Shipping</span><strong>${shipping ? money(shipping) : "FREE"}</strong></div><hr style="margin:18px 0;border:0;border-top:1px solid var(--line);"><div style="display:flex;justify-content:space-between;font-size:1.15rem;"><span>Total</span><strong>${money(total)}</strong></div><a class="btn" href="checkout.html" style="width:100%;margin-top:20px;">Proceed to Checkout</a></div>`;
}

function renderWishlist() {
    const target = document.querySelector("#wishlistGrid"); if (!target) return;
    const products = getWishlist().map(productById).filter(Boolean);
    if (!products.length) { target.innerHTML = `<div class="empty" style="grid-column:1/-1;"><h3>Your wishlist is empty.</h3><p>Save pieces you love and come back to them anytime.</p><a class="btn" href="shop.html" style="margin-top:18px;">Explore Shop</a></div>`; return; }
    renderProducts(target, products);
}

function renderProductDetail() {
    const target = document.querySelector("#productDetail"); if (!target) return;
    const params = new URLSearchParams(location.search), p = productById(params.get("id")) || MIZA_PRODUCTS[0];
    target.innerHTML = `
        <div class="detail">
            <div class="gallery reveal">
                <img id="mainProductImage" src="./${p.image}" alt="${p.name}">
                <img src="./${p.image}" alt="${p.name} alternate view">
                <img src="./editorial.svg" alt="MIZA editorial detail">
                <img src="./${p.image}" alt="${p.name} styling view">
            </div>
            <div class="detail-copy reveal">
                <span class="eyebrow">${p.category}</span>
                <h1 style="margin-top:18px;">${p.name}</h1>
                <div class="rating">★★★★★ <span style="color:#697164;">${p.rating} · 48 reviews</span></div>
                <div class="price" style="font-size:1.25rem;">${money(p.price)} ${p.old ? `<span class="old-price">${money(p.old)}</span>` : ""}</div>
                <p class="lead">A considered MIZA piece designed around quiet confidence, tactile detail and effortless movement. Style it your way and make it part of your everyday art.</p>
                <div class="option-group"><h4>Size</h4><div class="option-list">${p.sizes.map((s,i) => `<button class="option ${i === 0 ? "active" : ""}" onclick="selectOption(this)">${s}</button>`).join("")}</div></div>
                <div class="option-group"><h4>Color</h4><div class="option-list">${p.colors.map((c,i) => `<button class="option ${i === 0 ? "active" : ""}" onclick="selectColor(this, '${String(c).replace(/'/g, "\\'")}', '${p.id}')">${c}</button>`).join("")}</div></div>
                <div class="btn-row"><div class="qty"><button onclick="detailQty(-1)" aria-label="Decrease quantity">−</button><span id="detailQty">1</span><button onclick="detailQty(1)" aria-label="Increase quantity">+</button></div><button class="btn" onclick="addDetailToCart('${p.id}')">Add to Bag</button><button class="btn alt" onclick="toggleWishlist('${p.id}')">♡ Wishlist</button></div>
                <div class="detail-tabs">
                    <div class="info-card"><h3>Description</h3><p>Designed in the MIZA studio language: soft color, architectural balance and a feminine sense of movement.</p></div>
                    <div class="info-card"><h3>Material & Details</h3><p>Premium fashion construction with carefully finished seams and considered proportions. Product composition can be updated with your own supplier specifications.</p></div>
                    <div class="info-card"><h3>Care</h3><p>Follow the garment care label. Store away from direct sunlight and allow delicate pieces to rest between wears.</p></div>
                    <div class="info-card"><h3>Shipping & Returns</h3><p>Standard delivery is available across Pakistan. Returns and exchanges are handled according to the MIZA returns policy.</p><a href="shipping.html" style="color:var(--green);font-weight:700;">Shipping information →</a></div>
                </div>
            </div>
        </div>
        <div class="section-head" style="margin-top:100px;"><div><span class="eyebrow">You may also love</span><h2 style="margin-top:15px;">Complete the Look</h2></div></div>
        <div class="product-grid stagger visible">${MIZA_PRODUCTS.filter(x => x.id !== p.id).slice(0,4).map(productCard).join("")}</div>`;
    observeReveals();
}

/*
   COLOR IMAGE SYSTEM
   ------------------
   Add color variants beside a product's normal image using one of these names:
   Product Name Color.ext
   Product Name-Color.ext
   Product Name_Color.ext
   BaseImage Color.ext
   BaseImage-Color.ext
   BaseImage_Color.ext
   The extension can also differ from the base image (jpg/png/webp/jpeg).
   If no matching variant exists, the normal product image stays visible.
*/
function selectColor(button, color, productId) {
    selectOption(button);
    const product = productById(productId);
    const mainImage = document.querySelector("#mainProductImage");
    if (!product || !mainImage || !color) return;

    const baseName = product.image.replace(/\.[^.]+$/, "");
    const productName = product.name.trim();
    const colorName = color.trim();
    const candidates = [
        `${productName} ${colorName}`,
        `${productName}-${colorName}`,
        `${productName}_${colorName}`,
        `${baseName} ${colorName}`,
        `${baseName}-${colorName}`,
        `${baseName}_${colorName}`
    ];
    const extensions = [".jfif", ".jpg", ".jpeg", ".png", ".webp"];
    const paths = [];
    candidates.forEach(name => extensions.forEach(ext => paths.push(`./${name}${ext}`)));

    let index = 0;
    const tryNext = () => {
        if (index >= paths.length) {
            mainImage.src = `./${product.image}`;
            return;
        }
        const test = new Image();
        const path = paths[index++];
        test.onload = () => { mainImage.src = path; };
        test.onerror = tryNext;
        test.src = path;
    };
    tryNext();
}

function selectOption(btn) { btn.parentElement.querySelectorAll(".option").forEach(el => el.classList.remove("active")); btn.classList.add("active"); }
function detailQty(amount) { const el = document.querySelector("#detailQty"); if (!el) return; el.textContent = Math.max(1, Number(el.textContent) + amount); }
function addDetailToCart(id) { addToCart(id, Number(document.querySelector("#detailQty")?.textContent || 1)); }

function renderShop() {
    const grid = document.querySelector("#productGrid"); if (!grid) return;
    const params = new URLSearchParams(location.search), requestedCategory = params.get("category"), searchBox = document.querySelector("#shopSearch");
    if (requestedCategory) { const category = requestedCategory.toLowerCase(); const filtered = MIZA_PRODUCTS.filter(p => p.category.toLowerCase() === category || p.category.toLowerCase().includes(category)); if (searchBox) searchBox.value = requestedCategory; renderProducts(grid, filtered); }
    else renderProducts(grid, MIZA_PRODUCTS.filter(p => p.showInShop !== false));
    const apply = () => {
        const q = (document.querySelector("#shopSearch")?.value || "").toLowerCase().trim(), cat = document.querySelector("#categoryFilter")?.value || "all", price = document.querySelector("#priceFilter")?.value || "all", sort = document.querySelector("#sortFilter")?.value || "newest";
        let items = MIZA_PRODUCTS.filter(p => {
            const matchesQ = !q || `${p.name} ${p.category} ${p.colors.join(" ")}`.toLowerCase().includes(q);
            const matchesCat = cat === "all" || p.category === cat;
            const matchesPrice = price === "all" || (price === "under5000" && p.price < 5000) || (price === "5000to8000" && p.price >= 5000 && p.price <= 8000) || (price === "over8000" && p.price > 8000);
            return matchesQ && matchesCat && matchesPrice;
        });
        if (sort === "low") items.sort((a,b) => a.price - b.price); if (sort === "high") items.sort((a,b) => b.price - a.price); if (sort === "rating") items.sort((a,b) => b.rating - a.rating);
        if (!items.length) grid.innerHTML = `<div class="empty" style="grid-column:1/-1;"><h3>No products found.</h3><p>Try another search or reset the filters.</p></div>`; else renderProducts(grid, items);
    };
    ["#shopSearch","#categoryFilter","#priceFilter","#sortFilter"].forEach(selector => { document.querySelector(selector)?.addEventListener("input", apply); document.querySelector(selector)?.addEventListener("change", apply); });
    document.querySelector("#resetFilters")?.addEventListener("click", () => { document.querySelector("#shopSearch").value = ""; document.querySelector("#categoryFilter").value = "all"; document.querySelector("#priceFilter").value = "all"; document.querySelector("#sortFilter").value = "newest"; apply(); });
}
function renderCategoryPage() {
    const grid = document.querySelector("#categoryGrid");
    const category = document.body.dataset.category;
    if (!grid || !category) return;

    let products;

    if (category === "Shoes") {
        products = MIZA_PRODUCTS.filter(p => p.category === "Shoes" || p.category === "Heels" || p.category === "Footwear");
    } else {
        products = MIZA_PRODUCTS.filter(p => p.category === category);
    }

    renderProducts(grid, products);
}
function renderCheckout() {
    const target = document.querySelector("#checkoutSummary"); if (!target) return; const cart = getCart();
    if (!cart.length) { target.innerHTML = `<div class="empty"><h3>Your bag is empty.</h3><a class="btn" href="shop.html" style="margin-top:18px;">Shop MIZA</a></div>`; document.querySelector("#checkoutForm")?.classList.add("empty"); return; }
    const subtotal = cart.reduce((sum, item) => sum + productById(item.id).price * item.quantity, 0), shipping = subtotal >= 12000 ? 0 : 350;
    target.innerHTML = `<div class="info-card"><h3>Order Summary</h3>${cart.map(item => { const p = productById(item.id); return `<div style="display:flex;justify-content:space-between;gap:12px;margin-top:13px;"><span>${p.name} × ${item.quantity}</span><strong>${money(p.price * item.quantity)}</strong></div>`; }).join("")}<hr style="margin:18px 0;border:0;border-top:1px solid var(--line);"><div style="display:flex;justify-content:space-between;"><span>Subtotal</span><strong>${money(subtotal)}</strong></div><div style="display:flex;justify-content:space-between;margin-top:7px;"><span>Shipping</span><strong>${shipping ? money(shipping) : "FREE"}</strong></div><div style="display:flex;justify-content:space-between;margin-top:12px;font-size:1.2rem;"><span>Total</span><strong>${money(subtotal + shipping)}</strong></div></div>`;
}
function submitCheckout(event) {
    event.preventDefault(); const form = event.currentTarget; if (!form.checkValidity()) { form.reportValidity(); return; }
    const order = {number:"MZ-" + Date.now().toString().slice(-8),date:new Date().toLocaleDateString("en-PK"),email:form.email.value,total:document.querySelector("#checkoutSummary strong:last-child")?.textContent || "",status:"Order Placed"};
    localStorage.setItem("mizaLastOrder", JSON.stringify(order)); localStorage.removeItem("mizaCart"); location.href = "order-success.html";
}
function initOrderSuccess() {
    const el = document.querySelector("#orderInfo"); if (!el) return; const order = JSON.parse(localStorage.getItem("mizaLastOrder") || "{}");
    el.innerHTML = `<div class="info-card" style="text-align:center;"><div style="font-size:3rem;color:var(--green);">✓</div><h2 style="font-family:'Playfair Display',serif;color:var(--green);font-size:2.8rem;margin:10px 0;">Thank you for your order.</h2><p>Your MIZA edit is now being prepared with care.</p><div style="margin:25px auto;max-width:420px;text-align:left;background:var(--pink-soft);padding:22px;"><p><strong>Order:</strong> ${order.number || "MZ-00000000"}</p><p><strong>Date:</strong> ${order.date || new Date().toLocaleDateString("en-PK")}</p><p><strong>Status:</strong> Order Placed</p><p><strong>Estimated delivery:</strong> 3–6 working days</p></div><div class="btn-row" style="justify-content:center;"><a class="btn" href="shop.html">Continue Shopping</a><a class="btn alt" href="order-tracking.html">Track Order</a><a class="btn alt" href="account.html">My Account</a></div></div>`;
}
function trackOrder(event) {
    event.preventDefault(); const number = document.querySelector("#trackingNumber").value.trim(), email = document.querySelector("#trackingEmail").value.trim(), result = document.querySelector("#trackingResult"); if (!number || !email) return;
    result.innerHTML = `<div class="info-card"><h3>Tracking for ${number}</h3><p style="margin-top:5px;color:#6b7366;">Updates simulated for ${email}.</p><div class="timeline">${["Order Placed","Confirmed","Packed","Shipped","Out for Delivery"].map((s,i) => `<div class="timeline-step"><strong>${s}</strong><span>${i === 0 ? "Complete" : i === 1 ? "Complete" : "Upcoming"}</span></div>`).join("")}</div></div>`;
}
function initFAQ() { document.querySelectorAll(".faq-question").forEach(btn => btn.addEventListener("click", () => btn.closest(".faq-item").classList.toggle("open"))); }
function initForms() {
    document.querySelectorAll("[data-demo-form]").forEach(form => form.addEventListener("submit", event => { event.preventDefault(); if (!form.checkValidity()) { form.reportValidity(); return; } const notice = form.querySelector(".notice"); if (notice) { notice.textContent = "Thank you — your message has been received."; notice.classList.add("show"); } form.reset(); }));
    document.querySelector("#newsletterForm")?.addEventListener("submit", event => { event.preventDefault(); const input = event.currentTarget.querySelector("input"); if (!input.checkValidity()) { input.reportValidity(); return; } toast("Welcome to the MIZA edit."); event.currentTarget.reset(); });
}
function initMobileNav() {
    const toggle = document.querySelector("#mobileToggle"), nav = document.querySelector("#mainNav");
    toggle?.addEventListener("click", () => { nav.classList.toggle("open"); toggle.setAttribute("aria-expanded", nav.classList.contains("open")); });
    document.querySelector(".category-wrap > button")?.addEventListener("click", event => { if (window.innerWidth <= 820) event.currentTarget.parentElement.classList.toggle("open"); });
}
function initHeader() { const header = document.querySelector(".site-header"); window.addEventListener("scroll", () => header?.classList.toggle("scrolled", window.scrollY > 20)); }
function observeReveals() {
    const elements = document.querySelectorAll(".reveal:not(.observed)");
    if (!("IntersectionObserver" in window)) { elements.forEach(el => el.classList.add("visible")); return; }
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add("visible", "observed"); observer.unobserve(entry.target); } }), {threshold:.12});
    elements.forEach(el => observer.observe(el));
    document.querySelectorAll(".stagger:not(.observed)").forEach(el => { const observer2 = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add("visible", "observed"); observer2.unobserve(entry.target); } }), {threshold:.08}); observer2.observe(el); });
}
function initSearchShortcut() { document.querySelector("#headerSearch")?.addEventListener("click", () => { if (location.pathname.endsWith("shop.html")) document.querySelector("#shopSearch")?.focus(); else location.href = "shop.html?focus=search"; }); }

document.addEventListener("DOMContentLoaded", () => {
    updateCounts(); initMobileNav(); initHeader(); initSearchShortcut(); initForms(); initFAQ(); observeReveals(); renderShop(); renderCategoryPage(); renderCart(); renderWishlist(); renderProductDetail(); renderCheckout(); initOrderSuccess();
    document.querySelector("#trackingForm")?.addEventListener("submit", trackOrder);
    document.querySelector("#checkoutForm")?.addEventListener("submit", submitCheckout);
});
