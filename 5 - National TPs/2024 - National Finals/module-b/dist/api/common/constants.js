const DEFAULT_PORT = 3000;
const DEFAULT_BASE_URL = 'http://localhost';

const MEMBER = {
  ARGENTINA: {
    name: 'Argentina',
    code: 'AR',
  },
  ARMENIA: {
    name: 'Armenia',
    code: 'AM',
  },
  AUSTRALIA: {
    name: 'Australia',
    code: 'AU',
  },
  AUSTRIA: {
    name: 'Austria',
    code: 'AT',
  },
  AZERBAIJAN: {
    name: 'Azerbaijan',
    code: 'AZ',
  },
  KINGDOM_OF_BAHRAIN: {
    name: 'Kingdom of Bahrain',
    code: 'BH',
  },
  BANGLADESH: {
    name: 'Bangladesh',
    code: 'BD',
  },
  BARBADOS: {
    name: 'Barbados',
    code: 'BB',
  },
  BELARUS: {
    name: 'Belarus',
    code: 'BY',
  },
  BELGIUM: {
    name: 'Belgium',
    code: 'BE',
  },
  BHUTAN: {
    name: 'Bhutan',
    code: 'BT',
  },
  BRAZIL: {
    name: 'Brazil',
    code: 'BR',
  },
  BRUNEI_DARUSSALAM: {
    name: 'Brunei Darussalam',
    code: 'BN',
  },
  CAMBODIA: {
    name: 'Cambodia',
    code: 'KH',
  },
  CANADA: {
    name: 'Canada',
    code: 'CA',
  },
  CHILE: {
    name: 'Chile',
    code: 'CL',
  },
  CHINA: {
    name: 'China',
    code: 'CN',
  },
  COLOMBIA: {
    name: 'Colombia',
    code: 'CO',
  },
  COSTA_RICA: {
    name: 'Costa Rica',
    code: 'CR',
  },
  CROATIA: {
    name: 'Croatia',
    code: 'HR',
  },
  CYPRUS: {
    name: 'Cyprus',
    code: 'CY',
  },
  CZECH_REPUBLIC: {
    name: 'Czech Republic',
    code: 'CZ',
  },
  DENMARK: {
    name: 'Denmark',
    code: 'DK',
  },
  DOMINICAN_REPUBLIC: {
    name: 'Dominican Republic',
    code: 'DO',
  },
  ECUADOR: {
    name: 'Ecuador',
    code: 'EC',
  },
  EGYPT: {
    name: 'Egypt',
    code: 'EG',
  },
  ESTONIA: {
    name: 'Estonia',
    code: 'EE',
  },
  ETHIOPIA: {
    name: 'Ethiopia',
    code: 'ET',
  },
  FINLAND: {
    name: 'Finland',
    code: 'FI',
  },
  FRANCE: {
    name: 'France',
    code: 'FR',
  },
  GEORGIA: {
    name: 'Georgia',
    code: 'GE',
  },
  GERMANY: {
    name: 'Germany',
    code: 'DE',
  },
  GHANA: {
    name: 'Ghana',
    code: 'GH',
  },
  GREECE: {
    name: 'Greece',
    code: 'GR',
  },
  HONG_KONG_CHINA: {
    name: 'Hong Kong, China',
    code: 'HK',
  },
  HUNGARY: {
    name: 'Hungary',
    code: 'HU',
  },
  ICELAND: {
    name: 'Iceland',
    code: 'IS',
  },
  INDIA: {
    name: 'India',
    code: 'IN',
  },
  INDONESIA: {
    name: 'Indonesia',
    code: 'ID',
  },
  IRAN: {
    name: 'Iran',
    code: 'IR',
  },
  IRELAND: {
    name: 'Ireland',
    code: 'IE',
  },
  ISRAEL: {
    name: 'Israel',
    code: 'IL',
  },
  SOUTH_TYROL_ITALY: {
    name: 'South Tyrol, Italy',
    code: 'IT',
  },
  JAMAICA: {
    name: 'Jamaica',
    code: 'JM',
  },
  JAPAN: {
    name: 'Japan',
    code: 'JP',
  },
  JORDAN: {
    name: 'Jordan',
    code: 'JO',
  },
  KAZAKHSTAN: {
    name: 'Kazakhstan',
    code: 'KZ',
  },
  KENYA: {
    name: 'Kenya',
    code: 'KE',
  },
  KOREA: {
    name: 'Korea',
    code: 'KR',
  },
  KUWAIT: {
    name: 'Kuwait',
    code: 'KW',
  },
  KYRGYZSTAN: {
    name: 'Kyrgyzstan',
    code: 'KG',
  },
  LATVIA: {
    name: 'Latvia',
    code: 'LV',
  },
  LIBERIA: {
    name: 'Liberia',
    code: 'LR',
  },
  PRINCIPALITY_OF_LIECHTENSTEIN: {
    name: 'Principality of Liechtenstein',
    code: 'LI',
  },
  LITHUANIA: {
    name: 'Lithuania',
    code: 'LT',
  },
  LUXEMBOURG: {
    name: 'Luxembourg',
    code: 'LU',
  },
  MACAO_CHINA: {
    name: 'Macao, China',
    code: 'MO',
  },
  MADAGASCAR: {
    name: 'Madagascar',
    code: 'MG',
  },
  MALAWI: {
    name: 'Malawi',
    code: 'MW',
  },
  MALAYSIA: {
    name: 'Malaysia',
    code: 'MY',
  },
  MALTA: {
    name: 'Malta',
    code: 'MT',
  },
  MAURITIUS: {
    name: 'Mauritius',
    code: 'MU',
  },
  MEXICO: {
    name: 'Mexico',
    code: 'MX',
  },
  MONGOLIA: {
    name: 'Mongolia',
    code: 'MN',
  },
  MONTENEGRO: {
    name: 'Montenegro',
    code: 'ME',
  },
  MOROCCO: {
    name: 'Morocco',
    code: 'MA',
  },
  MYANMAR: {
    name: 'Myanmar',
    code: 'MM',
  },
  NAMIBIA: {
    name: 'Namibia',
    code: 'NA',
  },
  NETHERLANDS: {
    name: 'Netherlands',
    code: 'NL',
  },
  NEW_ZEALAND: {
    name: 'New Zealand',
    code: 'NZ',
  },
  NIGERIA: {
    name: 'Nigeria',
    code: 'NG',
  },
  NORWAY: {
    name: 'Norway',
    code: 'NO',
  },
  OMAN: {
    name: 'Oman',
    code: 'OM',
  },
  PAKISTAN: {
    name: 'Pakistan',
    code: 'PK',
  },
  PALESTINE: {
    name: 'Palestine',
    code: 'PS',
  },
  PARAGUAY: {
    name: 'Paraguay',
    code: 'PY',
  },
  PHILIPPINES: {
    name: 'Philippines',
    code: 'PH',
  },
  POLAND: {
    name: 'Poland',
    code: 'PL',
  },
  PORTUGAL: {
    name: 'Portugal',
    code: 'PT',
  },
  QATAR: {
    name: 'Qatar',
    code: 'QA',
  },
  ROMANIA: {
    name: 'Romania',
    code: 'RO',
  },
  RUSSIA: {
    name: 'Russia',
    code: 'RU',
  },
  SAUDI_ARABIA: {
    name: 'Saudi Arabia',
    code: 'SA',
  },
  SERBIA: {
    name: 'Serbia',
    code: 'RS',
  },
  SINGAPORE: {
    name: 'Singapore',
    code: 'SG',
  },
  SLOVAKIA: {
    name: 'Slovakia',
    code: 'SK',
  },
  SLOVENIA: {
    name: 'Slovenia',
    code: 'SI',
  },
  SOUTH_AFRICA: {
    name: 'South Africa',
    code: 'ZA',
  },
  SPAIN: {
    name: 'Spain',
    code: 'ES',
  },
  SRI_LANKA: {
    name: 'Sri Lanka',
    code: 'LK',
  },
  SWEDEN: {
    name: 'Sweden',
    code: 'SE',
  },
  SWITZERLAND: {
    name: 'Switzerland',
    code: 'CH',
  },
  CHINESE_TAIPEI: {
    name: 'Chinese Taipei',
    code: 'TW',
  },
  TANZANIA: {
    name: 'Tanzania',
    code: 'TZ',
  },
  THAILAND: {
    name: 'Thailand',
    code: 'TH',
  },
  TRINIDAD_AND_TOBAGO: {
    name: 'Trinidad and Tobago',
    code: 'TT',
  },
  TUNISIA: {
    name: 'Tunisia',
    code: 'TN',
  },
  TURKIYE: {
    name: 'Türkiye',
    code: 'TR',
  },
  UGANDA: {
    name: 'Uganda',
    code: 'UG',
  },
  UKRAINE: {
    name: 'Ukraine',
    code: 'UA',
  },
  UNITED_ARAB_EMIRATES: {
    name: 'United Arab Emirates',
    code: 'AE',
  },
  UNITED_KINGDOM: {
    name: 'United Kingdom',
    code: 'GB',
  },
  UNITED_STATES_OF_AMERICA: {
    name: 'United States of America',
    code: 'US',
  },
  UZBEKISTAN: {
    name: 'Uzbekistan',
    code: 'UZ',
  },
  VENEZUELA: {
    name: 'Venezuela',
    code: 'VE',
  },
  VIETNAM: {
    name: 'Vietnam',
    code: 'VN',
  },
  ZAMBIA: {
    name: 'Zambia',
    code: 'ZM',
  },
};

module.exports = {
  DEFAULT_PORT,
  DEFAULT_BASE_URL,
  MEMBER,
};
