
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
        ["0000FF", "Blue"],
        ["0076A3", "Allports"],
        ["00FF00", "Green"],
        ["016162", "Blue Stone"],
        ["02A4D3", "Cerulean"],
        ["056F57", "Watercourse"],
        ["09230F", "Palm Green"],
        ["0B1304", "Black Forest"],
        ["7C881A", "Trendy Green"],
        ["7F7589", "Mobster"],
        ["808080", "Gray"],
        ["837050", "Shadow"],
        ["864D1E", "Bull Shot"],
        ["888D65", "Avocado"],
        ["8B0723", "Monarch"],
        ["8C5738", "Potters Clay"],
        ["8E775E", "Domino"],
        ["908D39", "Sycamore"],
        ["C9B93B", "Earls Green"],
        ["C9C0BB", "Silver Rust"],
        ["C9FFA2", "Reef"],
        ["C9FFE5", "Aero Blue"],
        ["CA3435", "Flush Mahogany"],
        ["CABB48", "Turmeric"],
        ["CADCD4", "Paris White"],
        ["CAE00D", "Bitter Lemon"],
        ["CAE6DA", "Skeptic"],
        ["CB8FA9", "Viola"],
        ["CBCAB6", "Foggy Gray"],
        ["D5D195", "Winter Hazel"],
        ["D5F6E3", "Granny Apple"],
        ["D69188", "My Pink"],
        ["D6C562", "Tacha"],
        ["D6CEF6", "Moon Raker"],
        ["D6D6D1", "Quill Gray"],
        ["D6FFDB", "Snowy Mint"],
        ["D7C498", "Pavlova"],
        ["D7D0FF", "Fog"],
        ["D84437", "Valencia"],
        ["E0B646", "Anzac"],
        ["E0C095", "Calico"],
        ["E0FFFF", "Baby Blue"],
        ["E16865", "Sunglo"],
        ["E1BC64", "Equator"],
        ["E1C0C8", "Pink Flare"],
        ["E1E6D6", "Periglacial Blue"],
        ["E1EAD4", "Kidnapper"],
        ["E1F6E8", "Tara"],
        ["E25465", "Mandy"],
        ["E2725B", "Terracotta"],
        ["E8F2EB", "Gin"],
        ["E8F5F2", "Aqua Squeeze"],
        ["E96E00", "Clementine"],
        ["E97451", "Burnt Sienna"],
        ["E97C07", "Tahiti Gold"],
        ["E9CECD", "Oyster Pink"],
        ["E9E3E3", "Ebb"],
        ["E9F8ED", "Ottoman"],
        ["E9FFFD", "Clear Day"],
        ["EA88A8", "Carissma"],
        ["EAAE69", "Porsche"],
        ["EAB33B", "Tulip Tree"],
        ["F0D52D", "Golden Dream"],
        ["F0DC82", "Buff"],
        ["F0E2EC", "Prim"],
        ["F0E68C", "Khaki"],
        ["F0EEFD", "Selago"],
        ["F0EEFF", "Titan White"],
        ["F0F8FF", "Alice Blue"],
        ["F0FCEA", "Feta"],
        ["F18200", "Gold Drop"],
        ["F19BAB", "Wewak"],
        ["F7DBE6", "We Peep"],
        ["F7F2E1", "Quarter Spanish White"],
        ["F7F5FA", "Whisper"],
        ["F7FAF7", "Snow Drift"],
        ["F8B853", "Casablanca"],
        ["F8C3DF", "Chantilly"],
        ["F8D9E9", "Cherub"],
        ["F8DD5C", "Energy Yellow"],
        ["F8E4BF", "Givry"],
        ["F8F0E8", "White Linen"],
        ["F8F4FF", "Magnolia"],
        ["FCF4DC", "Pearl Lusta"],
        ["FCFBF3", "Bianca"],
        ["FCFEDA", "Moon Glow"],
        ["FCFFE7", "China Ivory"],
        ["FCFFF9", "Ceramic"],
        ["FD0E35", "Torch Red"],
        ["FD5B78", "Wild Watermelon"],
        ["FD7B33", "Crusta"],
        ["FD7C07", "Sorbus"],
        ["FD9FA2", "Sweet Pink"],
        ["FF0000", "Red"],
        ["FFA194", "Mona Lisa"],
        ["FFA500", "Web Orange"],
        ["FFA6C9", "Carnation Pink"],
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
