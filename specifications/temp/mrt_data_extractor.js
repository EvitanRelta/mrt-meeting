const stationMetadata = {
    'BP1/NS4': { name: 'Choa Chu Kang', mrtcode: '30' },
    BP10: { name: 'Fajar', mrtcode: '58' },
    BP11: { name: 'Segar', mrtcode: '59' },
    BP12: { name: 'Jelapang', mrtcode: '60' },
    BP13: { name: 'Senja', mrtcode: '61' },
    BP2: { name: 'South View', mrtcode: '50' },
    BP3: { name: 'Keat Hong', mrtcode: '51' },
    BP4: { name: 'Teck Whye', mrtcode: '52' },
    BP5: { name: 'Phoenix', mrtcode: '53' },
    'BP6/DT1': { name: 'Bukit Panjang', mrtcode: '54' },
    BP7: { name: 'Petir', mrtcode: '55' },
    BP8: { name: 'Pending', mrtcode: '56' },
    BP9: { name: 'Bangkit', mrtcode: '57' },
    'CC1/NE6/NS24': { name: 'Dhoby Ghaut', mrtcode: '10' },
    'CC10/DT26': { name: 'MacPherson', mrtcode: '207' },
    CC11: { name: 'Tai Seng', mrtcode: '206' },
    CC12: { name: 'Bartley', mrtcode: '201' },
    'CC13/NE12': { name: 'Serangoon', mrtcode: '106' },
    CC14: { name: 'Lorong Chuan', mrtcode: '203' },
    'CC15/NS17': { name: 'Bishan', mrtcode: '3' },
    CC16: { name: 'Marymount', mrtcode: '205' },
    'CC17/TE9': { name: 'Caldecott', mrtcode: '216' },
    'CC19/DT9': { name: 'Botanic Gardens', mrtcode: '217' },
    CC2: { name: 'Bras Basah', mrtcode: '215' },
    CC20: { name: 'Farrer Road', mrtcode: '218' },
    CC21: { name: 'Holland Village', mrtcode: '219' },
    'CC22/EW21': { name: 'Buona Vista', mrtcode: '20' },
    CC23: { name: 'one-north', mrtcode: '221' },
    CC24: { name: 'Kent Ridge', mrtcode: '222' },
    CC25: { name: 'Haw Par Villa', mrtcode: '223' },
    CC26: { name: 'Pasir Panjang', mrtcode: '224' },
    CC27: { name: 'Labrador Park', mrtcode: '225' },
    CC28: { name: 'Telok Blangah', mrtcode: '226' },
    'CC29/NE1': { name: 'HarbourFront', mrtcode: '116' },
    CC3: { name: 'Esplanade', mrtcode: '214' },
    'CC4/DT15': { name: 'Promenade', mrtcode: '213' },
    CC5: { name: 'Nicoll Highway', mrtcode: '212' },
    CC6: { name: 'Stadium', mrtcode: '211' },
    CC7: { name: 'Mountbatten', mrtcode: '210' },
    CC8: { name: 'Dakota', mrtcode: '209' },
    'CC9/EW8': { name: 'Paya Lebar', mrtcode: '35' },
    'CE1/DT16': { name: 'Bayfront', mrtcode: '229' },
    'CE2/NS27/TE20': { name: 'Marina Bay', mrtcode: '13' },
    'CG1/DT35': { name: 'Expo', mrtcode: '63' },
    'CG/EW4': { name: 'Tanah Merah', mrtcode: '39' },
    CG2: { name: 'Changi Airport', mrtcode: '65' },
    'DT10/TE11': { name: 'Stevens', mrtcode: '314' },
    'DT11/NS21': { name: 'Newton', mrtcode: '7' },
    'DT12/NE7': { name: 'Little India', mrtcode: '111' },
    DT13: { name: 'Rochor', mrtcode: '317' },
    'DT14/EW12': { name: 'Bugis', mrtcode: '31' },
    DT17: { name: 'Downtown', mrtcode: '303' },
    DT18: { name: 'Telok Ayer', mrtcode: '304' },
    'DT19/NE4': { name: 'Chinatown', mrtcode: '114' },
    DT2: { name: 'Cashew', mrtcode: '307' },
    DT20: { name: 'Fort Canning', mrtcode: '318' },
    DT21: { name: 'Bencoolen', mrtcode: '319' },
    DT22: { name: 'Jalan Besar', mrtcode: '320' },
    DT23: { name: 'Bendemeer', mrtcode: '321' },
    DT24: { name: 'Geylang Bahru', mrtcode: '322' },
    DT25: { name: 'Mattar', mrtcode: '323' },
    DT27: { name: 'Ubi', mrtcode: '325' },
    DT28: { name: 'Kaki Bukit', mrtcode: '326' },
    DT29: { name: 'Bedok North', mrtcode: '327' },
    DT3: { name: 'Hillview', mrtcode: '308' },
    DT30: { name: 'Bedok Reservoir', mrtcode: '328' },
    DT31: { name: 'Tampines West', mrtcode: '329' },
    'DT32/EW2': { name: 'Tampines', mrtcode: '41' },
    DT33: { name: 'Tampines East', mrtcode: '331' },
    DT34: { name: 'Upper Changi', mrtcode: '332' },
    DT5: { name: 'Beauty World', mrtcode: '309' },
    DT6: { name: 'King Albert Park', mrtcode: '310' },
    DT7: { name: 'Sixth Avenue', mrtcode: '311' },
    DT8: { name: 'Tan Kah Kee', mrtcode: '312' },
    EW1: { name: 'Pasir Ris', mrtcode: '42' },
    EW10: { name: 'Kallang', mrtcode: '33' },
    EW11: { name: 'Lavender', mrtcode: '32' },
    'EW13/NS25': { name: 'City Hall', mrtcode: '11' },
    'EW14/NS26': { name: 'Raffles Place', mrtcode: '12' },
    EW15: { name: 'Tanjong Pagar', mrtcode: '14' },
    'EW16/NE3/TE17': { name: 'Outram Park', mrtcode: '15' },
    EW17: { name: 'Tiong Bahru', mrtcode: '16' },
    EW18: { name: 'Redhill', mrtcode: '17' },
    EW19: { name: 'Queenstown', mrtcode: '18' },
    EW20: { name: 'Commonwealth', mrtcode: '19' },
    EW22: { name: 'Dover', mrtcode: '64' },
    EW23: { name: 'Clementi', mrtcode: '21' },
    'EW24/NS1': { name: 'Jurong East', mrtcode: '24' },
    EW25: { name: 'Chinese Garden', mrtcode: '25' },
    EW26: { name: 'Lakeside', mrtcode: '26' },
    EW27: { name: 'Boon Lay', mrtcode: '27' },
    EW28: { name: 'Pioneer', mrtcode: '66' },
    EW29: { name: 'Joo Koon', mrtcode: '67' },
    EW3: { name: 'Simei', mrtcode: '40' },
    EW30: { name: 'Gul Circle', mrtcode: '69' },
    EW31: { name: 'Tuas Crescent', mrtcode: '70' },
    EW32: { name: 'Tuas West Road', mrtcode: '71' },
    EW33: { name: 'Tuas Link', mrtcode: '72' },
    EW5: { name: 'Bedok', mrtcode: '38' },
    EW6: { name: 'Kembangan', mrtcode: '37' },
    EW7: { name: 'Eunos', mrtcode: '36' },
    EW9: { name: 'Aljunied', mrtcode: '34' },
    NE10: { name: 'Potong Pasir', mrtcode: '108' },
    NE11: { name: 'Woodleigh', mrtcode: '107' },
    NE13: { name: 'Kovan', mrtcode: '105' },
    NE14: { name: 'Hougang', mrtcode: '104' },
    NE15: { name: 'Buangkok', mrtcode: '103' },
    'NE16/STC': { name: 'Sengkang', mrtcode: '102' },
    'NE17/PTC': { name: 'Punggol', mrtcode: '101' },
    NE18: { name: 'Punggol Coast', mrtcode: '100' },
    NE5: { name: 'Clarke Quay', mrtcode: '113' },
    NE8: { name: 'Farrer Park', mrtcode: '110' },
    NE9: { name: 'Boon Keng', mrtcode: '109' },
    NS10: { name: 'Admiralty', mrtcode: '44' },
    NS11: { name: 'Sembawang', mrtcode: '43' },
    NS12: { name: 'Canberra', mrtcode: '73' },
    NS13: { name: 'Yishun', mrtcode: '22' },
    NS14: { name: 'Khatib', mrtcode: '23' },
    NS15: { name: 'Yio Chu Kang', mrtcode: '1' },
    NS16: { name: 'Ang Mo Kio', mrtcode: '2' },
    NS18: { name: 'Braddell', mrtcode: '4' },
    NS19: { name: 'Toa Payoh', mrtcode: '5' },
    NS2: { name: 'Bukit Batok', mrtcode: '28' },
    NS20: { name: 'Novena', mrtcode: '6' },
    'NS22/TE14': { name: 'Orchard', mrtcode: '8' },
    NS23: { name: 'Somerset', mrtcode: '9' },
    NS28: { name: 'Marina South Pier', mrtcode: '68' },
    NS3: { name: 'Bukit Gombak', mrtcode: '29' },
    NS5: { name: 'Yew Tee', mrtcode: '48' },
    NS7: { name: 'Kranji', mrtcode: '47' },
    NS8: { name: 'Marsiling', mrtcode: '46' },
    'NS9/TE2': { name: 'Woodlands', mrtcode: '45' },
    PE1: { name: 'Cove', mrtcode: '130' },
    PE2: { name: 'Meridian', mrtcode: '131' },
    PE3: { name: 'Coral Edge', mrtcode: '132' },
    PE4: { name: 'Riviera', mrtcode: '133' },
    PE5: { name: 'Kadaloor', mrtcode: '134' },
    PE6: { name: 'Oasis', mrtcode: '135' },
    PE7: { name: 'Damai', mrtcode: '136' },
    PW1: { name: 'Sam Kee', mrtcode: '137' },
    PW2: { name: 'Teck Lee', mrtcode: '138' },
    PW3: { name: 'Punggol Point', mrtcode: '139' },
    PW4: { name: 'Samudera', mrtcode: '140' },
    PW5: { name: 'Nibong', mrtcode: '141' },
    PW6: { name: 'Sumang', mrtcode: '142' },
    PW7: { name: 'Soo Teck', mrtcode: '143' },
    SE1: { name: 'Compassvale', mrtcode: '117' },
    SE2: { name: 'Rumbia', mrtcode: '118' },
    SE3: { name: 'Bakau', mrtcode: '119' },
    SE4: { name: 'Kangkar', mrtcode: '120' },
    SE5: { name: 'Ranggung', mrtcode: '121' },
    SW1: { name: 'Cheng Lim', mrtcode: '122' },
    SW2: { name: 'Farmway', mrtcode: '123' },
    SW3: { name: 'Kupang', mrtcode: '124' },
    SW4: { name: 'Thanggam', mrtcode: '125' },
    SW5: { name: 'Fernvale', mrtcode: '126' },
    SW6: { name: 'Layar', mrtcode: '127' },
    SW7: { name: 'Tongkang', mrtcode: '128' },
    SW8: { name: 'Renjong', mrtcode: '129' },
    TE1: { name: 'Woodlands North', mrtcode: '401' },
    TE12: { name: 'Napier', mrtcode: '412' },
    TE13: { name: 'Orchard Boulevard', mrtcode: '413' },
    TE15: { name: 'Great World', mrtcode: '415' },
    TE16: { name: 'Havelock', mrtcode: '416' },
    TE18: { name: 'Maxwell', mrtcode: '418' },
    TE19: { name: 'Shenton Way', mrtcode: '419' },
    TE22: { name: 'Gardens By the Bay', mrtcode: '422' },
    TE23: { name: 'Tanjong Rhu', mrtcode: '424' },
    TE24: { name: 'Katong Park', mrtcode: '425' },
    TE25: { name: 'Tanjong Katong', mrtcode: '426' },
    TE26: { name: 'Marine Parade', mrtcode: '427' },
    TE27: { name: 'Marine Terrace', mrtcode: '428' },
    TE28: { name: 'Siglap', mrtcode: '429' },
    TE29: { name: 'Bayshore', mrtcode: '430' },
    TE3: { name: 'Woodlands South', mrtcode: '403' },
    TE4: { name: 'Springleaf', mrtcode: '404' },
    TE5: { name: 'Lentor', mrtcode: '405' },
    TE6: { name: 'Mayflower', mrtcode: '406' },
    TE7: { name: 'Bright Hill', mrtcode: '407' },
    TE8: { name: 'Upper Thomson', mrtcode: '408' },
}

/** List of all the stations a station is connected to. */
const connections = {
    'BP1/NS4': ['BP2', 'NS5', 'NS3'],
    BP10: ['BP9', 'BP11'],
    BP11: ['BP10', 'BP12'],
    BP12: ['BP11', 'BP13'],
    BP13: ['BP12', 'BP6/DT1'],
    BP2: ['BP1/NS4', 'BP3'],
    BP3: ['BP2', 'BP4'],
    BP4: ['BP3', 'BP5'],
    BP5: ['BP4', 'BP6/DT1'],
    'BP6/DT1': ['BP5', 'BP7', 'BP13', 'DT2'],
    BP7: ['BP6/DT1', 'BP8'],
    BP8: ['BP7', 'BP9'],
    BP9: ['BP8', 'BP10'],
    'CC10/DT26': ['CC9/EW8', 'CC11', 'DT27', 'DT25'],
    CC11: ['CC10/DT26', 'CC12'],
    CC12: ['CC11', 'CC13/NE12'],
    'CC13/NE12': ['CC12', 'CC14', 'NE11', 'NE13'],
    CC14: ['CC13/NE12', 'CC15/NS17'],
    'CC15/NS17': ['CC14', 'CC16', 'NS16', 'NS18'],
    CC16: ['CC15/NS17', 'CC17/TE9'],
    'CC17/TE9': ['CC16', 'CC19/DT9', 'TE8', 'DT10/TE11'],
    'CC19/DT9': ['CC17/TE9', 'CC20', 'DT8', 'DT10/TE11'],
    CC2: ['CC1/NE6/NS24', 'CC3'],
    CC20: ['CC19/DT9', 'CC21'],
    CC21: ['CC20', 'CC22/EW21'],
    'CC22/EW21': ['CC21', 'CC23', 'EW22', 'EW20'],
    CC23: ['CC22/EW21', 'CC24'],
    CC24: ['CC23', 'CC25'],
    CC25: ['CC24', 'CC26'],
    CC26: ['CC25', 'CC27'],
    CC27: ['CC26', 'CC28'],
    CC28: ['CC27', 'CC29/NE1'],
    'CC29/NE1': ['CC28', 'EW16/NE3/TE17'],
    CC3: ['CC2', 'CC4/DT15'],
    'CC4/DT15': ['CC3', 'CC5', 'CE1/DT16', 'DT14/EW12'],
    CC5: ['CC4/DT15', 'CC6'],
    CC6: ['CC5', 'CC7'],
    CC7: ['CC6', 'CC8'],
    CC8: ['CC7', 'CC9/EW8'],
    'CC9/EW8': ['CC8', 'CC10/DT26', 'EW9', 'EW7'],
    'CE1/DT16': ['CC4/DT15', 'CE2/NS27/TE20', 'DT17'],
    'CG1/DT35': ['CG2', 'CG/EW4', 'DT34'],
    CG2: ['CG1/DT35'],
    'DT10/TE11': ['CC19/DT9', 'DT11/NS21', 'CC17/TE9', 'TE12'],
    'DT11/NS21': ['DT10/TE11', 'DT12/NE7', 'NS20', 'NS22/TE14'],
    'DT12/NE7': ['DT11/NS21', 'DT13', 'NE8', 'CC1/NE6/NS24'],
    DT13: ['DT12/NE7', 'DT14/EW12'],
    'DT14/EW12': ['DT13', 'CC4/DT15', 'EW11', 'EW13/NS25'],
    DT17: ['CE1/DT16', 'DT18'],
    DT18: ['DT17', 'DT19/NE4'],
    'DT19/NE4': ['DT18', 'DT20', 'EW16/NE3/TE17', 'NE5'],
    DT2: ['BP6/DT1', 'DT3'],
    DT20: ['DT19/NE4', 'DT21'],
    DT21: ['DT20', 'DT22'],
    DT22: ['DT21', 'DT23'],
    DT23: ['DT22', 'DT24'],
    DT24: ['DT23', 'DT25'],
    DT25: ['DT24', 'CC10/DT26'],
    DT27: ['CC10/DT26', 'DT28'],
    DT28: ['DT27', 'DT29'],
    DT29: ['DT28', 'DT30'],
    DT3: ['DT2', 'DT5'],
    DT30: ['DT29', 'DT31'],
    DT31: ['DT30', 'DT32/EW2'],
    'DT32/EW2': ['DT31', 'DT33', 'EW1', 'EW3'],
    DT33: ['DT32/EW2', 'DT34'],
    DT34: ['DT33', 'CG1/DT35'],
    DT5: ['DT3', 'DT6'],
    DT6: ['DT5', 'DT7'],
    DT7: ['DT6', 'DT8'],
    DT8: ['DT7', 'CC19/DT9'],
    EW1: ['DT32/EW2'],
    EW10: ['EW9', 'EW11'],
    EW11: ['EW10', 'DT14/EW12'],
    'EW13/NS25': ['EW14/NS26', 'CC1/NE6/NS24', 'DT14/EW12'],
    'EW14/NS26': ['EW13/NS25', 'EW15', 'CE2/NS27/TE20'],
    EW15: ['EW14/NS26', 'EW16/NE3/TE17'],
    'EW16/NE3/TE17': ['EW15', 'EW17', 'CC29/NE1', 'DT19/NE4', 'TE18', 'TE16'],
    EW17: ['EW16/NE3/TE17', 'EW18'],
    EW18: ['EW17', 'EW19'],
    EW19: ['EW18', 'EW20'],
    EW20: ['EW19', 'CC22/EW21'],
    EW22: ['CC22/EW21', 'EW23'],
    EW23: ['EW22', 'EW24/NS1'],
    'EW24/NS1': ['EW23', 'EW25', 'NS2'],
    EW25: ['EW24/NS1', 'EW26'],
    EW26: ['EW25', 'EW27'],
    EW27: ['EW26', 'EW28'],
    EW28: ['EW27', 'EW29'],
    EW29: ['EW28', 'EW30'],
    EW3: ['DT32/EW2', 'CG/EW4'],
    EW30: ['EW29', 'EW31'],
    EW31: ['EW30', 'EW32'],
    EW32: ['EW31', 'EW33'],
    EW33: ['EW32'],
    'CG/EW4': ['EW3', 'EW5', 'CG1/DT35'],
    EW5: ['CG/EW4', 'EW6'],
    EW6: ['EW5', 'EW7'],
    EW7: ['EW6', 'CC9/EW8'],
    EW9: ['CC9/EW8', 'EW10'],
    NE10: ['NE9', 'NE11'],
    NE11: ['NE10', 'CC13/NE12'],
    NE13: ['CC13/NE12', 'NE14'],
    NE14: ['NE13', 'NE15'],
    NE15: ['NE14', 'NE16/STC'],
    'NE16/STC': ['NE15', 'NE17/PTC', 'SW8', 'SW1', 'SE1', 'SE5'],
    'NE17/PTC': ['NE16/STC', 'NE18', 'PW7', 'PW1', 'PE7', 'PE1'],
    NE18: ['NE17/PTC'],
    NE5: ['DT19/NE4', 'CC1/NE6/NS24'],
    'CC1/NE6/NS24': ['NE5', 'DT12/NE7', 'NS23', 'EW13/NS25', 'CC2'],
    NE8: ['DT12/NE7', 'NE9'],
    NE9: ['NE8', 'NE10'],
    NS10: ['NS9/TE2', 'NS11'],
    NS11: ['NS10', 'NS12'],
    NS12: ['NS11', 'NS13'],
    NS13: ['NS12', 'NS14'],
    NS14: ['NS13', 'NS15'],
    NS15: ['NS14', 'NS16'],
    NS16: ['NS15', 'CC15/NS17'],
    NS18: ['CC15/NS17', 'NS19'],
    NS19: ['NS18', 'NS20'],
    NS2: ['EW24/NS1', 'NS3'],
    NS20: ['NS19', 'DT11/NS21'],
    'NS22/TE14': ['DT11/NS21', 'NS23', 'TE13', 'TE15'],
    NS23: ['NS22/TE14', 'CC1/NE6/NS24'],
    'CE2/NS27/TE20': ['EW14/NS26', 'NS28', 'TE22', 'CE1/DT16', 'TE19'],
    NS28: ['CE2/NS27/TE20'],
    NS3: ['NS2', 'BP1/NS4'],
    NS5: ['BP1/NS4', 'NS7'],
    NS7: ['NS5', 'NS8'],
    NS8: ['NS7', 'NS9/TE2'],
    'NS9/TE2': ['NS8', 'NS10', 'TE1', 'TE3'],
    PE1: ['NE17/PTC', 'PE2'],
    PE2: ['PE1', 'PE3'],
    PE3: ['PE2', 'PE4'],
    PE4: ['PE3', 'PE5'],
    PE5: ['PE4', 'PE6'],
    PE6: ['PE5', 'PE7'],
    PE7: ['PE6', 'NE17/PTC'],
    PW1: ['NE17/PTC', 'PW2'],
    PW2: ['PW1', 'PW3'],
    PW3: ['PW2', 'PW4'],
    PW4: ['PW3', 'PW5'],
    PW5: ['PW4', 'PW6'],
    PW6: ['PW5', 'PW7'],
    PW7: ['PW6', 'NE17/PTC'],
    TE1: ['NS9/TE2'],
    TE12: ['DT10/TE11', 'TE13'],
    TE13: ['TE12', 'NS22/TE14'],
    TE15: ['NS22/TE14', 'TE16'],
    TE16: ['TE15', 'EW16/NE3/TE17'],
    TE18: ['EW16/NE3/TE17', 'TE19'],
    TE19: ['TE18', 'CE2/NS27/TE20'],
    TE22: ['TE23', 'CE2/NS27/TE20'],
    TE23: ['TE22', 'TE24'],
    TE24: ['TE23', 'TE25'],
    TE25: ['TE24', 'TE26'],
    TE26: ['TE25', 'TE27'],
    TE27: ['TE26', 'TE28'],
    TE28: ['TE27', 'TE29'],
    TE29: ['TE28'],
    TE3: ['NS9/TE2', 'TE4'],
    TE4: ['TE3', 'TE5'],
    TE5: ['TE4', 'TE6'],
    TE6: ['TE5', 'TE7'],
    TE7: ['TE6', 'TE8'],
    TE8: ['TE7', 'CC17/TE9'],
    SW1: ['NE16/STC', 'SW2'],
    SW2: ['SW1', 'SW3'],
    SW3: ['SW2', 'SW4'],
    SW4: ['SW3', 'SW5'],
    SW5: ['SW4', 'SW6'],
    SW6: ['SW5', 'SW7'],
    SW7: ['SW6', 'SW8'],
    SW8: ['SW7', 'NE16/STC'],
    SE1: ['NE16/STC', 'SE2'],
    SE2: ['SE1', 'SE3'],
    SE3: ['SE2', 'SE4'],
    SE4: ['SE3', 'SE5'],
    SE5: ['SE4', 'NE16/STC'],
}

const data = {
    'BP1/NS4': {
        name: 'Choa Chu Kang',
        connections: {
            BP2: { time: 1 },
            NS5: { time: 2 },
            NS3: { time: 5 },
        },
    },
    BP2: {
        name: 'South View',
        connections: {
            'BP1/NS4': { time: 1 },
            BP3: { time: 0 },
        },
    },
    NS5: {
        name: 'Yew Tee',
        connections: {
            'BP1/NS4': { time: 2 },
            NS7: { time: 7 },
        },
    },
    NS3: {
        name: 'Bukit Gombak',
        connections: {
            'BP1/NS4': { time: 5 },
            NS2: { time: 2 },
        },
    },
    BP10: {
        name: 'Fajar',
        connections: {
            BP9: { time: 1 },
            BP11: { time: 0 },
        },
    },
    BP9: {
        name: 'Bangkit',
        connections: {
            BP10: { time: 1 },
            BP8: { time: 0 },
        },
    },
    BP11: {
        name: 'Segar',
        connections: {
            BP10: { time: 0 },
            BP12: { time: 1 },
        },
    },
    BP12: {
        name: 'Jelapang',
        connections: {
            BP11: { time: 1 },
            BP13: { time: 1 },
        },
    },
    BP13: {
        name: 'Senja',
        connections: {
            BP12: { time: 1 },
            'BP6/DT1': { time: 1 },
        },
    },
    'BP6/DT1': {
        name: 'Bukit Panjang',
        connections: {
            BP13: { time: 1 },
            BP5: { time: 1 },
            BP7: { time: 0 },
            DT2: { time: 2 },
        },
    },
    BP3: {
        name: 'Keat Hong',
        connections: {
            BP2: { time: 0 },
            BP4: { time: 1 },
        },
    },
    BP4: {
        name: 'Teck Whye',
        connections: {
            BP3: { time: 1 },
            BP5: { time: 0 },
        },
    },
    BP5: {
        name: 'Phoenix',
        connections: {
            BP4: { time: 0 },
            'BP6/DT1': { time: 1 },
        },
    },
    BP7: {
        name: 'Petir',
        connections: {
            'BP6/DT1': { time: 0 },
            BP8: { time: 1 },
        },
    },
    DT2: {
        name: 'Cashew',
        connections: {
            'BP6/DT1': { time: 2 },
            DT3: { time: 1 },
        },
    },
    BP8: {
        name: 'Pending',
        connections: {
            BP7: { time: 1 },
            BP9: { time: 0 },
        },
    },
    'CC10/DT26': {
        name: 'MacPherson',
        connections: {
            'CC9/EW8': { time: 1 },
            CC11: { time: 1 },
            DT27: { time: 1 },
            DT25: { time: 1 },
        },
    },
    'CC9/EW8': {
        name: 'Paya Lebar',
        connections: {
            'CC10/DT26': { time: 1 },
            CC8: { time: 2 },
            EW9: { time: 2 },
            EW7: { time: 1 },
        },
    },
    CC11: {
        name: 'Tai Seng',
        connections: {
            'CC10/DT26': { time: 1 },
            CC12: { time: 2 },
        },
    },
    DT27: {
        name: 'Ubi',
        connections: {
            'CC10/DT26': { time: 1 },
            DT28: { time: 2 },
        },
    },
    DT25: {
        name: 'Mattar',
        connections: {
            'CC10/DT26': { time: 1 },
            DT24: { time: 2 },
        },
    },
    CC12: {
        name: 'Bartley',
        connections: {
            CC11: { time: 2 },
            'CC13/NE12': { time: 2 },
        },
    },
    'CC13/NE12': {
        name: 'Serangoon',
        connections: {
            CC12: { time: 2 },
            CC14: { time: 1 },
            NE11: { time: 2 },
            NE13: { time: 2 },
        },
    },
    CC14: {
        name: 'Lorong Chuan',
        connections: {
            'CC13/NE12': { time: 1 },
            'CC15/NS17': { time: 2 },
        },
    },
    NE11: {
        name: 'Woodleigh',
        connections: {
            'CC13/NE12': { time: 2 },
            NE10: { time: 1 },
        },
    },
    NE13: {
        name: 'Kovan',
        connections: {
            'CC13/NE12': { time: 2 },
            NE14: { time: 2 },
        },
    },
    'CC15/NS17': {
        name: 'Bishan',
        connections: {
            CC14: { time: 2 },
            CC16: { time: 2 },
            NS16: { time: 4 },
            NS18: { time: 2 },
        },
    },
    CC16: {
        name: 'Marymount',
        connections: {
            'CC15/NS17': { time: 2 },
            'CC17/TE9': { time: 2 },
        },
    },
    NS16: {
        name: 'Ang Mo Kio',
        connections: {
            'CC15/NS17': { time: 4 },
            NS15: { time: 2 },
        },
    },
    NS18: {
        name: 'Braddell',
        connections: {
            'CC15/NS17': { time: 2 },
            NS19: { time: 1 },
        },
    },
    'CC17/TE9': {
        name: 'Caldecott',
        connections: {
            CC16: { time: 2 },
            'CC19/DT9': { time: 6 },
            TE8: { time: 3 },
            'DT10/TE11': { time: 5 },
        },
    },
    'CC19/DT9': {
        name: 'Botanic Gardens',
        connections: {
            'CC17/TE9': { time: 6 },
            CC20: { time: 1 },
            DT8: { time: 1 },
            'DT10/TE11': { time: 1 },
        },
    },
    TE8: {
        name: 'Upper Thomson',
        connections: {
            'CC17/TE9': { time: 3 },
            TE7: { time: 2 },
        },
    },
    'DT10/TE11': {
        name: 'Stevens',
        connections: {
            'CC17/TE9': { time: 5 },
            'CC19/DT9': { time: 1 },
            'DT11/NS21': { time: 2 },
            TE12: { time: 2 },
        },
    },
    CC20: {
        name: 'Farrer Road',
        connections: {
            'CC19/DT9': { time: 1 },
            CC21: { time: 2 },
        },
    },
    DT8: {
        name: 'Tan Kah Kee',
        connections: {
            'CC19/DT9': { time: 1 },
            DT7: { time: 2 },
        },
    },
    'CC1/NE6/NS24': {
        name: 'Dhoby Ghaut',
        connections: {
            CC2: { time: 1 },
            'DT12/NE7': { time: 1 },
            'EW13/NS25': { time: 1 },
            NE5: { time: 2 },
            NS23: { time: 1 },
        },
    },
    CC2: {
        name: 'Bras Basah',
        connections: {
            'CC1/NE6/NS24': { time: 1 },
            CC3: { time: 1 },
        },
    },
    CC3: {
        name: 'Esplanade',
        connections: {
            CC2: { time: 1 },
            'CC4/DT15': { time: 1 },
        },
    },
    CC21: {
        name: 'Holland Village',
        connections: {
            CC20: { time: 2 },
            'CC22/EW21': { time: 1 },
        },
    },
    'CC22/EW21': {
        name: 'Buona Vista',
        connections: {
            CC21: { time: 1 },
            CC23: { time: 1 },
            EW22: { time: 2 },
            EW20: { time: 1 },
        },
    },
    CC23: {
        name: 'one-north',
        connections: {
            'CC22/EW21': { time: 1 },
            CC24: { time: 1 },
        },
    },
    EW22: {
        name: 'Dover',
        connections: {
            'CC22/EW21': { time: 2 },
            EW23: { time: 2 },
        },
    },
    EW20: {
        name: 'Commonwealth',
        connections: {
            'CC22/EW21': { time: 1 },
            EW19: { time: 2 },
        },
    },
    CC24: {
        name: 'Kent Ridge',
        connections: {
            CC23: { time: 1 },
            CC25: { time: 2 },
        },
    },
    CC25: {
        name: 'Haw Par Villa',
        connections: {
            CC24: { time: 2 },
            CC26: { time: 2 },
        },
    },
    CC26: {
        name: 'Pasir Panjang',
        connections: {
            CC25: { time: 2 },
            CC27: { time: 2 },
        },
    },
    CC27: {
        name: 'Labrador Park',
        connections: {
            CC26: { time: 2 },
            CC28: { time: 1 },
        },
    },
    CC28: {
        name: 'Telok Blangah',
        connections: {
            CC27: { time: 1 },
            'CC29/NE1': { time: 2 },
        },
    },
    'CC29/NE1': {
        name: 'HarbourFront',
        connections: {
            CC28: { time: 2 },
            'EW16/NE3/TE17': { time: 4 },
        },
    },
    'EW16/NE3/TE17': {
        name: 'Outram Park',
        connections: {
            'CC29/NE1': { time: 4 },
            'DT19/NE4': { time: 1 },
            EW15: { time: 1 },
            EW17: { time: 2 },
            TE18: { time: 1 },
            TE16: { time: 1 },
        },
    },
    'CC4/DT15': {
        name: 'Promenade',
        connections: {
            CC3: { time: 1 },
            CC5: { time: 1 },
            'CE1/DT16': { time: 2 },
            'DT14/EW12': { time: 1 },
        },
    },
    CC5: {
        name: 'Nicoll Highway',
        connections: {
            'CC4/DT15': { time: 1 },
            CC6: { time: 2 },
        },
    },
    'CE1/DT16': {
        name: 'Bayfront',
        connections: {
            'CC4/DT15': { time: 2 },
            'CE2/NS27/TE20': { time: 1 },
            DT17: { time: 1 },
        },
    },
    'DT14/EW12': {
        name: 'Bugis',
        connections: {
            'CC4/DT15': { time: 1 },
            DT13: { time: 1 },
            EW11: { time: 1 },
            'EW13/NS25': { time: 1 },
        },
    },
    CC6: {
        name: 'Stadium',
        connections: {
            CC5: { time: 2 },
            CC7: { time: 1 },
        },
    },
    CC7: {
        name: 'Mountbatten',
        connections: {
            CC6: { time: 1 },
            CC8: { time: 1 },
        },
    },
    CC8: {
        name: 'Dakota',
        connections: {
            CC7: { time: 1 },
            'CC9/EW8': { time: 2 },
        },
    },
    EW9: {
        name: 'Aljunied',
        connections: {
            'CC9/EW8': { time: 2 },
            EW10: { time: 2 },
        },
    },
    EW7: {
        name: 'Eunos',
        connections: {
            'CC9/EW8': { time: 1 },
            EW6: { time: 1 },
        },
    },
    'CE2/NS27/TE20': {
        name: 'Marina Bay',
        connections: {
            'CE1/DT16': { time: 1 },
            'EW14/NS26': { time: 1 },
            NS28: { time: 2 },
            TE22: { time: 2 },
            TE19: { time: 1 },
        },
    },
    DT17: {
        name: 'Downtown',
        connections: {
            'CE1/DT16': { time: 1 },
            DT18: { time: 1 },
        },
    },
    'CG1/DT35': {
        name: 'Expo',
        connections: {
            CG2: { time: 7 },
            'CG/EW4': { time: 3 },
            DT34: { time: 1 },
        },
    },
    CG2: {
        name: 'Changi Airport',
        connections: {
            'CG1/DT35': { time: 7 },
        },
    },
    'CG/EW4': {
        name: 'Tanah Merah',
        connections: {
            'CG1/DT35': { time: 3 },
            EW3: { time: 4 },
            EW5: { time: 3 },
        },
    },
    DT34: {
        name: 'Upper Changi',
        connections: {
            'CG1/DT35': { time: 1 },
            DT33: { time: 4 },
        },
    },
    'DT11/NS21': {
        name: 'Newton',
        connections: {
            'DT10/TE11': { time: 2 },
            'DT12/NE7': { time: 2 },
            NS20: { time: 2 },
            'NS22/TE14': { time: 2 },
        },
    },
    TE12: {
        name: 'Napier',
        connections: {
            'DT10/TE11': { time: 2 },
            TE13: { time: 1 },
        },
    },
    'DT12/NE7': {
        name: 'Little India',
        connections: {
            'DT11/NS21': { time: 2 },
            DT13: { time: 0 },
            NE8: { time: 1 },
            'CC1/NE6/NS24': { time: 1 },
        },
    },
    NS20: {
        name: 'Novena',
        connections: {
            'DT11/NS21': { time: 2 },
            NS19: { time: 2 },
        },
    },
    'NS22/TE14': {
        name: 'Orchard',
        connections: {
            'DT11/NS21': { time: 2 },
            NS23: { time: 1 },
            TE13: { time: 1 },
            TE15: { time: 1 },
        },
    },
    DT13: {
        name: 'Rochor',
        connections: {
            'DT12/NE7': { time: 0 },
            'DT14/EW12': { time: 1 },
        },
    },
    NE8: {
        name: 'Farrer Park',
        connections: {
            'DT12/NE7': { time: 1 },
            NE9: { time: 2 },
        },
    },
    EW11: {
        name: 'Lavender',
        connections: {
            'DT14/EW12': { time: 1 },
            EW10: { time: 1 },
        },
    },
    'EW13/NS25': {
        name: 'City Hall',
        connections: {
            'DT14/EW12': { time: 1 },
            'EW14/NS26': { time: 1 },
            'CC1/NE6/NS24': { time: 1 },
        },
    },
    DT18: {
        name: 'Telok Ayer',
        connections: {
            DT17: { time: 1 },
            'DT19/NE4': { time: 1 },
        },
    },
    'DT19/NE4': {
        name: 'Chinatown',
        connections: {
            DT18: { time: 1 },
            DT20: { time: 1 },
            'EW16/NE3/TE17': { time: 1 },
            NE5: { time: 1 },
        },
    },
    DT20: {
        name: 'Fort Canning',
        connections: {
            'DT19/NE4': { time: 1 },
            DT21: { time: 1 },
        },
    },
    NE5: {
        name: 'Clarke Quay',
        connections: {
            'DT19/NE4': { time: 1 },
            'CC1/NE6/NS24': { time: 2 },
        },
    },
    DT3: {
        name: 'Hillview',
        connections: {
            DT2: { time: 1 },
            DT5: { time: 4 },
        },
    },
    DT21: {
        name: 'Bencoolen',
        connections: {
            DT20: { time: 1 },
            DT22: { time: 1 },
        },
    },
    DT22: {
        name: 'Jalan Besar',
        connections: {
            DT21: { time: 1 },
            DT23: { time: 2 },
        },
    },
    DT23: {
        name: 'Bendemeer',
        connections: {
            DT22: { time: 2 },
            DT24: { time: 2 },
        },
    },
    DT24: {
        name: 'Geylang Bahru',
        connections: {
            DT23: { time: 2 },
            DT25: { time: 2 },
        },
    },
    DT28: {
        name: 'Kaki Bukit',
        connections: {
            DT27: { time: 2 },
            DT29: { time: 1 },
        },
    },
    DT29: {
        name: 'Bedok North',
        connections: {
            DT28: { time: 1 },
            DT30: { time: 3 },
        },
    },
    DT30: {
        name: 'Bedok Reservoir',
        connections: {
            DT29: { time: 3 },
            DT31: { time: 2 },
        },
    },
    DT5: {
        name: 'Beauty World',
        connections: {
            DT3: { time: 4 },
            DT6: { time: 2 },
        },
    },
    DT31: {
        name: 'Tampines West',
        connections: {
            DT30: { time: 2 },
            'DT32/EW2': { time: 2 },
        },
    },
    'DT32/EW2': {
        name: 'Tampines',
        connections: {
            DT31: { time: 2 },
            DT33: { time: 2 },
            EW1: { time: 4 },
            EW3: { time: 2 },
        },
    },
    DT33: {
        name: 'Tampines East',
        connections: {
            'DT32/EW2': { time: 2 },
            DT34: { time: 4 },
        },
    },
    EW1: {
        name: 'Pasir Ris',
        connections: {
            'DT32/EW2': { time: 4 },
        },
    },
    EW3: {
        name: 'Simei',
        connections: {
            'DT32/EW2': { time: 2 },
            'CG/EW4': { time: 4 },
        },
    },
    DT6: {
        name: 'King Albert Park',
        connections: {
            DT5: { time: 2 },
            DT7: { time: 2 },
        },
    },
    DT7: {
        name: 'Sixth Avenue',
        connections: {
            DT6: { time: 2 },
            DT8: { time: 2 },
        },
    },
    EW10: {
        name: 'Kallang',
        connections: {
            EW9: { time: 2 },
            EW11: { time: 1 },
        },
    },
    'EW14/NS26': {
        name: 'Raffles Place',
        connections: {
            'EW13/NS25': { time: 1 },
            EW15: { time: 2 },
            'CE2/NS27/TE20': { time: 1 },
        },
    },
    EW15: {
        name: 'Tanjong Pagar',
        connections: {
            'EW14/NS26': { time: 2 },
            'EW16/NE3/TE17': { time: 1 },
        },
    },
    EW17: {
        name: 'Tiong Bahru',
        connections: {
            'EW16/NE3/TE17': { time: 2 },
            EW18: { time: 2 },
        },
    },
    TE18: {
        name: 'Maxwell',
        connections: {
            'EW16/NE3/TE17': { time: 1 },
            TE19: { time: 1 },
        },
    },
    TE16: {
        name: 'Havelock',
        connections: {
            'EW16/NE3/TE17': { time: 1 },
            TE15: { time: 1 },
        },
    },
    EW18: {
        name: 'Redhill',
        connections: {
            EW17: { time: 2 },
            EW19: { time: 2 },
        },
    },
    EW19: {
        name: 'Queenstown',
        connections: {
            EW18: { time: 2 },
            EW20: { time: 2 },
        },
    },
    EW23: {
        name: 'Clementi',
        connections: {
            EW22: { time: 2 },
            'EW24/NS1': { time: 6 },
        },
    },
    'EW24/NS1': {
        name: 'Jurong East',
        connections: {
            EW23: { time: 6 },
            EW25: { time: 2 },
            NS2: { time: 3 },
        },
    },
    EW25: {
        name: 'Chinese Garden',
        connections: {
            'EW24/NS1': { time: 2 },
            EW26: { time: 2 },
        },
    },
    NS2: {
        name: 'Bukit Batok',
        connections: {
            'EW24/NS1': { time: 3 },
            NS3: { time: 2 },
        },
    },
    EW26: {
        name: 'Lakeside',
        connections: {
            EW25: { time: 2 },
            EW27: { time: 3 },
        },
    },
    EW27: {
        name: 'Boon Lay',
        connections: {
            EW26: { time: 3 },
            EW28: { time: 1 },
        },
    },
    EW28: {
        name: 'Pioneer',
        connections: {
            EW27: { time: 1 },
            EW29: { time: 4 },
        },
    },
    EW29: {
        name: 'Joo Koon',
        connections: {
            EW28: { time: 4 },
            EW30: { time: 3 },
        },
    },
    EW30: {
        name: 'Gul Circle',
        connections: {
            EW29: { time: 3 },
            EW31: { time: 2 },
        },
    },
    EW31: {
        name: 'Tuas Crescent',
        connections: {
            EW30: { time: 2 },
            EW32: { time: 2 },
        },
    },
    EW32: {
        name: 'Tuas West Road',
        connections: {
            EW31: { time: 2 },
            EW33: { time: 2 },
        },
    },
    EW33: {
        name: 'Tuas Link',
        connections: {
            EW32: { time: 2 },
        },
    },
    EW5: {
        name: 'Bedok',
        connections: {
            'CG/EW4': { time: 3 },
            EW6: { time: 3 },
        },
    },
    EW6: {
        name: 'Kembangan',
        connections: {
            EW5: { time: 3 },
            EW7: { time: 1 },
        },
    },
    NE10: {
        name: 'Potong Pasir',
        connections: {
            NE9: { time: 2 },
            NE11: { time: 1 },
        },
    },
    NE9: {
        name: 'Boon Keng',
        connections: {
            NE10: { time: 2 },
            NE8: { time: 2 },
        },
    },
    NE14: {
        name: 'Hougang',
        connections: {
            NE13: { time: 2 },
            NE15: { time: 2 },
        },
    },
    NE15: {
        name: 'Buangkok',
        connections: {
            NE14: { time: 2 },
            'NE16/STC': { time: 1 },
        },
    },
    'NE16/STC': {
        name: 'Sengkang',
        connections: {
            NE15: { time: 1 },
            'NE17/PTC': { time: 2 },
            SW8: { time: 1 },
            SW1: { time: 1 },
            SE1: { time: 1 },
            SE5: { time: 1 },
        },
    },
    'NE17/PTC': {
        name: 'Punggol',
        connections: {
            'NE16/STC': { time: 2 },
            NE18: { time: 2 },
            PW7: { time: 1 },
            PW1: { time: 1 },
            PE7: { time: 1 },
            PE1: { time: 1 },
        },
    },
    SW8: {
        name: 'Renjong',
        connections: {
            'NE16/STC': { time: 1 },
            SW7: { time: 1 },
        },
    },
    SW1: {
        name: 'Cheng Lim',
        connections: {
            'NE16/STC': { time: 1 },
            SW2: { time: 0 },
        },
    },
    SE1: {
        name: 'Compassvale',
        connections: {
            'NE16/STC': { time: 1 },
            SE2: { time: 1 },
        },
    },
    SE5: {
        name: 'Ranggung',
        connections: {
            'NE16/STC': { time: 1 },
            SE4: { time: 1 },
        },
    },
    NE18: {
        name: 'Punggol Coast',
        connections: {
            'NE17/PTC': { time: 2 },
        },
    },
    PW7: {
        name: 'Soo Teck',
        connections: {
            'NE17/PTC': { time: 1 },
            PW6: { time: 0 },
        },
    },
    PW1: {
        name: 'Sam Kee',
        connections: {
            'NE17/PTC': { time: 1 },
            PW2: { time: 0 },
        },
    },
    PE7: {
        name: 'Damai',
        connections: {
            'NE17/PTC': { time: 1 },
            PE6: { time: 1 },
        },
    },
    PE1: {
        name: 'Cove',
        connections: {
            'NE17/PTC': { time: 1 },
            PE2: { time: 0 },
        },
    },
    NS23: {
        name: 'Somerset',
        connections: {
            'CC1/NE6/NS24': { time: 1 },
            'NS22/TE14': { time: 1 },
        },
    },
    NS10: {
        name: 'Admiralty',
        connections: {
            'NS9/TE2': { time: 2 },
            NS11: { time: 4 },
        },
    },
    'NS9/TE2': {
        name: 'Woodlands',
        connections: {
            NS10: { time: 2 },
            NS8: { time: 2 },
            TE1: { time: 2 },
            TE3: { time: 2 },
        },
    },
    NS11: {
        name: 'Sembawang',
        connections: {
            NS10: { time: 4 },
            NS12: { time: 2 },
        },
    },
    NS12: {
        name: 'Canberra',
        connections: {
            NS11: { time: 2 },
            NS13: { time: 2 },
        },
    },
    NS13: {
        name: 'Yishun',
        connections: {
            NS12: { time: 2 },
            NS14: { time: 2 },
        },
    },
    NS14: {
        name: 'Khatib',
        connections: {
            NS13: { time: 2 },
            NS15: { time: 8 },
        },
    },
    NS15: {
        name: 'Yio Chu Kang',
        connections: {
            NS14: { time: 8 },
            NS16: { time: 2 },
        },
    },
    NS19: {
        name: 'Toa Payoh',
        connections: {
            NS18: { time: 1 },
            NS20: { time: 2 },
        },
    },
    TE13: {
        name: 'Orchard Boulevard',
        connections: {
            'NS22/TE14': { time: 1 },
            TE12: { time: 1 },
        },
    },
    TE15: {
        name: 'Great World',
        connections: {
            'NS22/TE14': { time: 1 },
            TE16: { time: 1 },
        },
    },
    NS28: {
        name: 'Marina South Pier',
        connections: {
            'CE2/NS27/TE20': { time: 2 },
        },
    },
    TE22: {
        name: 'Gardens By the Bay',
        connections: {
            'CE2/NS27/TE20': { time: 2 },
            TE23: { time: 4 },
        },
    },
    TE19: {
        name: 'Shenton Way',
        connections: {
            'CE2/NS27/TE20': { time: 1 },
            TE18: { time: 1 },
        },
    },
    NS7: {
        name: 'Kranji',
        connections: {
            NS5: { time: 7 },
            NS8: { time: 2 },
        },
    },
    NS8: {
        name: 'Marsiling',
        connections: {
            NS7: { time: 2 },
            'NS9/TE2': { time: 2 },
        },
    },
    TE1: {
        name: 'Woodlands North',
        connections: {
            'NS9/TE2': { time: 2 },
        },
    },
    TE3: {
        name: 'Woodlands South',
        connections: {
            'NS9/TE2': { time: 2 },
            TE4: { time: 7 },
        },
    },
    PE2: {
        name: 'Meridian',
        connections: {
            PE1: { time: 0 },
            PE3: { time: 0 },
        },
    },
    PE3: {
        name: 'Coral Edge',
        connections: {
            PE2: { time: 0 },
            PE4: { time: 0 },
        },
    },
    PE4: {
        name: 'Riviera',
        connections: {
            PE3: { time: 0 },
            PE5: { time: 1 },
        },
    },
    PE5: {
        name: 'Kadaloor',
        connections: {
            PE4: { time: 1 },
            PE6: { time: 0 },
        },
    },
    PE6: {
        name: 'Oasis',
        connections: {
            PE5: { time: 0 },
            PE7: { time: 1 },
        },
    },
    PW2: {
        name: 'Teck Lee',
        connections: {
            PW1: { time: 0 },
            PW3: { time: 0 },
        },
    },
    PW3: {
        name: 'Punggol Point',
        connections: {
            PW2: { time: 0 },
            PW4: { time: 1 },
        },
    },
    PW4: {
        name: 'Samudera',
        connections: {
            PW3: { time: 1 },
            PW5: { time: 0 },
        },
    },
    PW5: {
        name: 'Nibong',
        connections: {
            PW4: { time: 0 },
            PW6: { time: 0 },
        },
    },
    PW6: {
        name: 'Sumang',
        connections: {
            PW5: { time: 0 },
            PW7: { time: 0 },
        },
    },
    TE23: {
        name: 'Tanjong Rhu',
        connections: {
            TE22: { time: 4 },
            TE24: { time: 2 },
        },
    },
    TE24: {
        name: 'Katong Park',
        connections: {
            TE23: { time: 2 },
            TE25: { time: 2 },
        },
    },
    TE25: {
        name: 'Tanjong Katong',
        connections: {
            TE24: { time: 2 },
            TE26: { time: 1 },
        },
    },
    TE26: {
        name: 'Marine Parade',
        connections: {
            TE25: { time: 1 },
            TE27: { time: 2 },
        },
    },
    TE27: {
        name: 'Marine Terrace',
        connections: {
            TE26: { time: 2 },
            TE28: { time: 2 },
        },
    },
    TE28: {
        name: 'Siglap',
        connections: {
            TE27: { time: 2 },
            TE29: { time: 2 },
        },
    },
    TE29: {
        name: 'Bayshore',
        connections: {
            TE28: { time: 2 },
        },
    },
    TE4: {
        name: 'Springleaf',
        connections: {
            TE3: { time: 7 },
            TE5: { time: 4 },
        },
    },
    TE5: {
        name: 'Lentor',
        connections: {
            TE4: { time: 4 },
            TE6: { time: 2 },
        },
    },
    TE6: {
        name: 'Mayflower',
        connections: {
            TE5: { time: 2 },
            TE7: { time: 1 },
        },
    },
    TE7: {
        name: 'Bright Hill',
        connections: {
            TE6: { time: 1 },
            TE8: { time: 2 },
        },
    },
    SW2: {
        name: 'Farmway',
        connections: {
            SW1: { time: 0 },
            SW3: { time: 1 },
        },
    },
    SW3: {
        name: 'Kupang',
        connections: {
            SW2: { time: 1 },
            SW4: { time: 1 },
        },
    },
    SW4: {
        name: 'Thanggam',
        connections: {
            SW3: { time: 1 },
            SW5: { time: 1 },
        },
    },
    SW5: {
        name: 'Fernvale',
        connections: {
            SW4: { time: 1 },
            SW6: { time: 0 },
        },
    },
    SW6: {
        name: 'Layar',
        connections: {
            SW5: { time: 0 },
            SW7: { time: 1 },
        },
    },
    SW7: {
        name: 'Tongkang',
        connections: {
            SW6: { time: 1 },
            SW8: { time: 1 },
        },
    },
    SE2: {
        name: 'Rumbia',
        connections: {
            SE1: { time: 1 },
            SE3: { time: 0 },
        },
    },
    SE3: {
        name: 'Bakau',
        connections: {
            SE2: { time: 0 },
            SE4: { time: 1 },
        },
    },
    SE4: {
        name: 'Kangkar',
        connections: {
            SE3: { time: 1 },
            SE5: { time: 1 },
        },
    },
}

async function generateTravelTimeMap() {
    const result = {}
    const pairs = new Set()

    // Collect all unique station pairs from connections
    for (const station of Object.keys(connections)) {
        for (const connected of connections[station]) {
            const pair = [station, connected].sort().join('|')
            pairs.add(pair)
        }
    }

    // Process each pair to fetch travel time and populate result
    for (const pair of Array.from(pairs)) {
        const [stationA, stationB] = pair.split('|')

        // Retrieve mrtcodes from stationMetadata
        const mrtcodeA = stationMetadata[stationA].mrtcode
        const mrtcodeB = stationMetadata[stationB].mrtcode

        // Fetch and parse travel time
        const htmlResponse = await fetchMRTInfo(mrtcodeA, mrtcodeB)
        const travelTime = parseHtmlAndGetTravelTime(htmlResponse)

        // Ensure stationA is in result
        if (!result[stationA]) {
            result[stationA] = {
                name: stationMetadata[stationA].name,
                connections: {},
            }
        }
        result[stationA].connections[stationB] = { time: travelTime }

        // Ensure stationB is in result
        if (!result[stationB]) {
            result[stationB] = {
                name: stationMetadata[stationB].name,
                connections: {},
            }
        }
        result[stationB].connections[stationA] = { time: travelTime }
    }

    return result
}

// Example usage:
generateTravelTimeMap().then((result) => console.log(result))
