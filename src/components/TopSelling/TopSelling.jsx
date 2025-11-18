import React from 'react';

const plants = [
    {
        img: "Aglaonema.svg",
        name: "Aglaonema Plant",
        des: "The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care.",
        price: "300",
        link: "#"
    },
    {
        img: "Plantain.svg",
        name: "Plantain Lilies",
        des: "Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes,",
        price: "300",
        link: "#"
    },
    {
        img: "Cactus.svg",
        name: "Cactus",
        des: "It is known for their ability to thrive in arid environments",
        price: "300",
        link: "#"
    },
    {
        img: "SwissCheese.svg",
        name: "Swiss cheese Plant",
        des: "It is a popular tropical houseplant known for its distinctive, perforated leaves,",
        price: "400",
        link: "#"
    },
    {
        img: "Sansevieria.svg",
        name: "Sansevieria plant",
        des: "It is a popular indoor plant admired for its striking appearance and low-maintenance nature.",
        price: "450",
        link: "#"
    },
    {
        img: "Agave.svg",
        name: "Agave plant",
        des: "The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms.",
        price: "359",
        link: "#"
    },
]




export default function TopSelling() {
    return <div
        style={{
            paddingTop: "50vh", gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1rem",
        }}
        className="relative grid">
        {plants.map((p, i) => <Card key={i} data={p} />)}
    </div>
}


export function Card({ data }) {

    const { img, name, des, price, link } = data

    const src = `url('${"/Cards/" + img}')`

    return <div className="relative card ">
        <div className="absolute h-full">
            <CurveCardSvg height={"740"} />
        </div>
        <div className="relative flex justify-center items-center flex-col ">
            <div className="relative"
                 style={{
                     height: "450px",
                     width: "450px",
                     backgroundImage: src,
                     backgroundSize: "500px",
                     backgroundPosition: "50% 25%"
                 }}>
            </div>

            <div
                style={{ transform: "translatey(-35%)", padding: "3rem 3.5rem" }}
                className="px-3">
                <h3 style={{ fontSize: "2rem" }}>{name}</h3>
                <p style={{ fontSize: "1.25rem" }}>{des}</p>
                <div style={{
                    display: "flex",
                    marginTop: "1rem",
                    justifyContent: "space-between", alignItems: "center"
                }}>
                    <h3 style={{ fontSize: "2rem" }}>Rs. {price}/-</h3>
                </div>
            </div>
        </div>
    </div >
}


function CurveCardSvg(props) {

    const { width = "512", height = "631", ...otherProps } = props
    console.log("height", height)
    return (
        <svg width={width} height={height} viewBox="0 0 512 631" fill="none" xmlns="http://www.w3.org/2000/svg" {...otherProps}>
            <path
                d="M420.961 1.74976C467.994 -4.70936 511 31.3533 511 78.7761V553.47C511 595.444 476.974 629.47 435 629.47H77C35.0264 629.47 1 595.444 1 553.47V78.7761C1.00007 31.3533 44.0061 -4.70937 91.0391 1.74976C142.32 8.79256 205.927 15.8025 256 15.8025C306.073 15.8025 369.68 8.79256 420.961 1.74976Z"
                fill="white"
                fillOpacity="0.05"
                stroke="url(#paint0_linear_11_94)"
                strokeWidth="2"
            />

            <defs>
                <linearGradient
                    id="paint0_linear_11_94"
                    x1="12"
                    y1="46.9705"
                    x2="453"
                    y2="606.47"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="white" stopOpacity="0.2" />
                    <stop offset="0.52" stopOpacity="0" />
                    <stop offset="1" stopColor="white" stopOpacity="0.2" />
                </linearGradient>
            </defs>

        </svg>
    )
}

