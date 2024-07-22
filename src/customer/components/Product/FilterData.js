import { GitHub } from "@mui/icons-material";

export const color =[
    "white",
    "Black",
    "Red",
    "Marun",
    "Being",
    "Pink",
    "Green",
    "Yellow",
]

export const filters = [
    {
        id: "color",
        name: "Color",
        options: [
            {value: "white", label: "White"},
            {value: "beige", label: "Beige"},
            {value: "blue", label: "Blue"},
            {value: "brown", label: "Brown"},
            {value: "green", label: "Green"},
            {value: "purple", label: "Purple"},
            {value: "yellow", label: "Yellow"},
        ],
    },
    {
        id: "size",
        name: "Size",
        options: [
            { value: "S", label: "S" },
            { value: "M", label: "M" },
            { value: "L", label: "L" },
        ],
    },
];

export const singleFilter= [
    {
        id: "price",
        name: "Price",
        options: [
            { value: "159-399", label: "$159 To $399" },
            { value: "169-399", label: "$169 To $399" },
            { value: "179-399", label: "$179 To $399" },
            { value: "189-399", label: "$189 To $399" },
            { value: "199-399", label: "$199 To $399" },
        ],
    },
    {
        id: "discout",
        name: "Discount Range",
        options: [
            {
                value: "10",
                label: "10% And Above",
            },
            { value: "20", label: "20% And Above"},
            { value: "30", label: "30% And Above"},
            { value: "40", label: "40% And Above"},
            { value: "50", label: "50% And Above"},
            { value: "60", label: "60% And Above"},
            { value: "70", label: "70% And Above"},
        ]
    },
    {
        id: "stock",
        name: "Availability",
        options: [
            { value: "in_stock", label: "In Stock"},
            { value: "out_of_stock", label: "Out Of Stock"},
        ],

    },
]
