/**
 * Fetches MRT rail information in HTML format based on the provided start and end station codes.
 *
 * @param {string} mrtcode_start - The code for the starting MRT station.
 * @param {string} mrtcode_end - The code for the ending MRT station.
 * @returns {Promise<string>} - A promise that resolves to the HTML string of the response.
 */
export async function fetchMRTInfo(mrtcode_start, mrtcode_end) {
    const response = await fetch('https://svc.simplygo.com.sg/eservice/eguide/rail_info.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
        },
        body: new URLSearchParams({
            mrtcode_start: mrtcode_start,
            mrtcode_end: mrtcode_end,
            submit: 'Submit',
        }),
    })

    return await response.text()
}

/**
 * Parses the MRT rail information HTML string, and extracts the travel time
 * to go from the start to end station.
 *
 * @param {string} htmlString - The HTML string to parse.
 * @returns {number} - The parsed travel time contained in the HTML.
 */
export function parseHtmlAndGetTravelTime(htmlString) {
    const parser = new DOMParser()
    const doc = parser.parseFromString(htmlString, 'text/html')
    const element = doc.querySelector('#Content-eservice > div > table:nth-child(3) > tbody > tr:nth-child(2) > td:nth-child(3)')
    return parseInt(element.innerText.trim(), 10)
}

// // Example usage:
// ;(async () => {
//     const mrtcode_start = '2'
//     const mrtcode_end = '2'
//     const htmlResponse = await fetchMRTInfo(mrtcode_start, mrtcode_end)

//     try {
//         const result = parseHtmlAndGetInt(htmlResponse)
//         console.log('Parsed Integer:', result)
//     } catch (error) {
//         console.error('Error:', error.message)
//     }
// })()

/**
 * Validates that every edge in the given graph has a corresponding reverse edge.
 *
 * @example
 * // Example input data format:
 * const data = {
 *     "DT8": ["DT7", "CC19/DT9"],  // DT8 is connected to DT7 and CC19/DT9
 *     "DT7": ["DT8"],              // DT7 is connected to DT8
 * };
 *
 * validateBidirection(data); // Returns `false` because not all edges are bidirectional.
 *
 * @param {Object} data - The graph represented as an object where keys are node IDs (station codes)
 *                        and values are arrays of connected node IDs (adjacent stations).
 * @returns {boolean} - Returns `true` if every edge has a corresponding reverse edge, otherwise `false`.
 */
export function validateBidirection(data) {
    for (const [station, connections] of Object.entries(data)) {
        for (const connectedStation of connections) {
            // Check if the connected station exists in the data
            if (!data[connectedStation]) {
                console.error(`Connected station "${connectedStation}" does not exist in the data.`)
                return false
            }

            // Check if the original station is in the connected station's list
            if (!data[connectedStation].includes(station)) {
                console.error(
                    `Station "${station}" is not in the connections of "${connectedStation}".`
                )
                return false
            }
        }
    }
    return true
}

/**
 * Validates a single station code string based on the format and multi-code rule.
 *
 * The format check ensures that the string contains only uppercase letters, numbers, and slashes.
 * The multi-code rule states that if a station code contains multiple codes separated by a slash (e.g., "CC19/DT9"),
 * the individual codes must be arranged in alphabetical order. For example, "CC19/DT9" is valid because "CC19" comes
 * before "DT9" alphabetically, whereas "DT9/CC19" would be invalid.
 *
 * @param {string} code - The station code string to validate.
 * @returns {boolean} - Returns true if the station code is valid according to the format and multi-code rule, otherwise false.
 */
export function validateStationCode(code) {
    const isValidString = (str) => /^[A-Z0-9/]+$/.test(str)

    if (!isValidString(code)) {
        console.error(`Invalid characters found in code: ${code}`)
        return false
    }

    if (code.includes('/')) {
        const parts = code.split('/')
        const sortedParts = parts.sort((a, b) => a.localeCompare(b))
        const sortedCode = sortedParts.join('/')

        if (code !== sortedCode) {
            console.error(
                `Multi-code "${code}" is not in alphabetical order. Expected: "${sortedCode}".`
            )
            return false
        }
    }

    return true
}

/**
 * Validates the station codes based on the multi-code rule.
 *
 * The multi-code rule states that if a station code contains multiple codes separated by a slash (e.g., "CC19/DT9"),
 * the individual codes must be arranged in alphabetical order. For example, "CC19/DT9" is valid because "CC19" comes
 * before "DT9" alphabetically, whereas "DT9/CC19" would be invalid.
 *
 * @example
 * // Example input data format:
 * const data = {
 *     "DT8": ["DT7", "CC19/DT9"],  // DT8 is connected to DT7 and CC19/DT9
 *     "DT7": ["DT8"],              // DT7 is connected to DT8
 * };
 *
 * @param {Object} data - The object containing station codes as keys and their connections as values.
 * @returns {boolean} - Returns true if all station codes are valid according to the multi-code rule, otherwise false.
 */
export function validateStationCodes(data) {
    const allCodes = new Set()

    for (const [key, values] of Object.entries(data)) {
        allCodes.add(key)
        values.forEach((value) => {
            allCodes.add(value)
        })
    }

    const verified = new Set()

    for (const code of allCodes) {
        if (!validateStationCode(code)) return false

        verified.add(code)
    }

    if (allCodes.size !== verified.size) {
        console.error(
            `The number of verified codes (${verified.size}) does not match the number of original codes (${allCodes.size}).`
        )
        return false
    }

    return true
}

// /**
//  * Parses a string of HTML option elements and extracts station information.
//  * Each option element should contain a station name and its corresponding MRT code.
//  *
//  * @example
//  * // Example output:
//  * {
//  *   NS10: { name: 'Admiralty', mrtcode: '44' },
//  *   EW9: { name: 'Aljunied', mrtcode: '34' },
//  * }
//  *
//  * @param {string} input - The HTML string containing option elements.
//  * @returns {Object} - An object with station codes as keys and objects containing "name" and "mrtcode" as values.
//  */
// function parseStations(input) {
//     const regex = /<option value="(\d+)">([^[]+)\s\[([^\]]+)\]<\/option>/g
//     const stations = {}
//     let match

//     while ((match = regex.exec(input)) !== null) {
//         const mrtcode = match[1]
//         const name = match[2].trim()
//         const code = match[3]
//         stations[code] = { name, mrtcode }
//     }

//     return stations
// }

// // Example usage:
// const input = `<option value="44">Admiralty [NS10]</option>
//   <option value="34">Aljunied [EW9]</option>
//   <option value="2">Ang Mo Kio [NS16]</option>
//   <option value="119">Bakau [SE3]</option>`

// const result = parseStations(input)
// console.log(result)
