
namespace ntc {
    let names: string[][] = []
    let hex_color: string[] = []
    let RGB: NumberFormat.UInt8LE[][] = []
    let HSL: NumberFormat.UInt8LE[][] = []
    let search_hex_color: string
    let search_color: string
    let true_color: boolean = false

    names = [
        ["000000", "Black"],
        ["004620", "Kaitoke Green"],
        ["00A693", "Persian Green"],
        ["015E85", "Orient"],
        ["036A6E", "Mosque"],
        ["081910", "Black Bean"],
        ["0B1107", "Gordons Green"],
        ["10121D", "Vulcan"],
        ["15736B", "Genoa"],
        ["1B0245", "Tolopea"],
        ["1E385B", "Cello"],
        ["242E16", "Black Olive"],
        ["278A5B", "Eucalyptus"],
        ["2B194F", "Valhalla"],
        ["2F519E", "Sapphire"],
        ["325D52", "Stromboli"],
        ["368716", "La Palma"],
        ["3A686C", "William"],
        ["3C493A", "Lunar Green"],
        ["3F5D53", "Mineral Green"],
        ["4169E1", "Royal Blue"],
        ["460B41", "Loulou"],
        ["4A2A04", "Bracken"],
        ["4D3D14", "Punga"],
        ["4FA83D", "Apple"],
        ["544333", "Judge Gray"],
        ["594433", "Millbrook"],
        ["5F3D26", "Irish Coffee"],
        ["624E9A", "Butterfly Bush"],
        ["65745D", "Willow Grove"],
        ["685E6E", "Salt Box"],
        ["6D0101", "Lonestar"],
        ["701C1C", "Persian Plum"],
        ["71D9E2", "Aquamarine Blue"],
        ["74C365", "Mantis"],
        ["782D19", "Mocha"],
        ["7AC488", "De York"],
        ["7CB0A1", "Acapulco"],
        ["801818", "Falu Red"],
        ["828F72", "Battleship Gray"],
        ["868974", "Bitter"],
        ["8A73D6", "True V"],
        ["8C055E", "Cardinal Pink"],
        ["8EABC1", "Nepal"],
        ["9370DB", "Medium Purple"],
        ["9771B5", "Wisteria"],
        ["9A3820", "Prairie Sand"],
        ["9EA91F", "Citron"],
        ["A23B6C", "Rouge"],
        ["A69279", "Donkey Brown"],
        ["A9B2C3", "Cadet Blue"],
        ["AB917A", "Sandrift"],
        ["ADDFAD", "Moss Green"],
        ["B05D54", "Matrix"],
        ["B35213", "Fiery Orange"],
        ["B6BAA4", "Eagle"],
        ["B94E48", "Chestnut"],
        ["BCC9C2", "Powder Ash"],
        ["BFBED8", "Blue Haze"],
        ["C1BECD", "Gray Suit"],
        ["C45655", "Fuzzy Wuzzy Brown"],
        ["C6E610", "Las Palmas"],
        ["C99415", "Pizza"],
        ["CBD3B0", "Green Mist"],
        ["CEC7A7", "Chino"],
        ["D1D2CA", "Celeste"],
        ["D4CD16", "Bird Flower"],
        ["D7D0FF", "Fog"],
        ["DA6A41", "Red Damask"],
        ["DCD747", "Wattle"],
        ["DEF5FF", "Pattens Blue"],
        ["E1EAD4", "Kidnapper"],
        ["E3F988", "Mindaro"],
        ["E5E0E1", "Bon Jour"],
        ["E7BCB4", "Rose Fog"],
        ["E9CECD", "Oyster Pink"],
        ["EB9373", "Apricot"],
        ["EDCDAB", "Pancho"],
        ["EEEF78", "Manz"],
        ["F0E2EC", "Prim"],
        ["F2552A", "Flamingo"],
        ["F4A460", "Sandy brown"],
        ["F5F3E5", "Ecru White"],
        ["F7F2E1", "Quarter Spanish White"],
        ["F8FACD", "Corn Field"],
        ["FAEAB9", "Astra"],
        ["FBCCE7", "Classic Rose"],
        ["FCF4D0", "Double Pearl Lusta"],
        ["FDE910", "Lemon"],
        ["FEEBF3", "Remy"],
        ["FF0000", "Red"],
        ["FF6FFF", "Blush Pink"],
        ["FFA500", "Web Orange"],
        ["FFC901", "Supernova"],
        ["FFDDCF", "Watusi"],
        ["FFEFA1", "Vis Vis"],
        ["FFF4E0", "Sazerac"],
        ["FFFCEA", "Buttery White"],
        ["FFFFF0", "Ivory"],
        ["FFFFFF", "White"]
    ]

    for (let i: number = 0; i < names.length; i++) {
        hex_color[i] = "#" + names[i][0];
        RGB[i] = rgb(names[i][0]);
        HSL[i] = hsl(RGB[i][0], RGB[i][1], RGB[i][2]);
    }

    function convertToDec(hex: string): NumberFormat.UInt8LE {
        let value: NumberFormat.UInt8LE

        value = 0

        if (parseInt(hex[0]) > 0) {
            value += parseInt(hex[0]) * 16
        }

        if (!parseInt(hex[0])) {
            if (!(hex[0] == "0")) {
                value += (hex.charCodeAt(0) - "A".charCodeAt(0) + 10) * 16
            }
        }

        if (parseInt(hex[1]) > 0) {
            value += parseInt(hex[1])
        }

        if (!parseInt(hex[1])) {
            if (!(hex[1] == "0")) {
                value += (hex.charCodeAt(1) - "A".charCodeAt(0) + 10)
            }
        }

        return value

    }

    function rgb(color: string): NumberFormat.UInt8LE[] {
        let r: number = 0
        let g: number = 0
        let b: number = 0

        let R: string
        let G: string
        let B: string

        R = color.substr(0, 2)
        G = color.substr(2, 2)
        B = color.substr(4, 2)

        r = convertToDec(R)
        g = convertToDec(G)
        b = convertToDec(B)

        return [r, g, b]

    }

    function hsl(r: NumberFormat.UInt8LE, g: NumberFormat.UInt8LE, b: NumberFormat.UInt8LE): NumberFormat.UInt8LE[] {

        let min, max, delta, h, s, l: NumberFormat.UInt8LE;

        r = r / 255
        g = g / 255
        b = b / 255

        min = Math.min(r, Math.min(g, b));
        max = Math.max(r, Math.max(g, b));
        delta = max - min;
        l = (min + max) / 2;

        s = 0;
        if (l > 0 && l < 1)
            s = delta / (l < 0.5 ? (2 * l) : (2 - 2 * l));

        h = 0;

        if (delta > 0) {
            if (max == r && max != g) h += (g - b) / delta;
            if (max == g && max != b) h += (2 + (b - r) / delta);
            if (max == b && max != r) h += (4 + (r - g) / delta);
            h /= 6;
        }
        return [h * 255, s * 255, l * 255]
    }

    /**
    * Calculates name of RGB
    */
    //% color=190 weight=100 icon="\uf1ec" block="calculate RGB name %r| %g| %b|"
    export function name(r: number, g: number, b: number) {
        let hsl2: NumberFormat.UInt8LE[]
        let h, s, l: NumberFormat.UInt8LE
        let ndf1, ndf2, ndf: number
        let cl, df: number
        let count: number

        ndf1 = ndf2 = ndf = 0
        cl = df = -1
        hsl2 = hsl(r, g, b)
        h = hsl2[0]
        s = hsl2[1]
        l = hsl2[2]

        count = 0

        for (let i: number = 0; i < names.length; i++) {
            if (r == RGB[i][0] && g == RGB[i][1] && b == RGB[i][2]) {
                search_hex_color = "0x" + hex_color[i]
                search_color = names[i][1]
                true_color = true
            }

            ndf1 = Math.pow(r - RGB[i][0], 2) + Math.pow(g - RGB[i][1], 2) + Math.pow(b - RGB[i][2], 2);
            ndf2 = Math.pow(h - HSL[i][0], 2) + Math.pow(s - HSL[i][1], 2) + Math.pow(l - HSL[i][2], 2);
            ndf = ndf1 + ndf2 * 2;
            if (df < 0 || df > ndf) {
                df = ndf;
                cl = i;
            }
            count += 1
        }

        if (count == names.length && !true_color) {
            search_hex_color = "0x" + names[cl][0]
            search_color = names[cl][1]
        }
    }

    /**
    * Get name of the color
    */
    //% color=190 weight=100 icon="\uf1ec" block="get color name"
    export function getColor(): string {
        return search_color
    }

    /**
    * Get hex code of color
    */
    //% color=190 weight=100 icon="\uf1ec" block="get hex code of the color"
    export function getHexColor(): string {
        return search_hex_color
    }

    /**
    * Get exactness of color
    */
    //% color=190 weight=100 icon="\uf1ec" block="is the color true"
    export function getTrueColor(): boolean {
        return true_color
    }
}
