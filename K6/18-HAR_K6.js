// Creator: WebInspector 537.36

import { sleep, group } from 'k6'
import http from 'k6/http'

export const options = {}

export default function main() {
  let response

  group('page_4 - https://petstore.octoperf.com/actions/Catalog.action', function () {
    response = http.get('https://petstore.octoperf.com/actions/Catalog.action', {
      headers: {
        accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'es-ES,es;q=0.9',
        cookie: 'JSESSIONID=C03B5A1E82611108CA0D3A94C30B92C4',
        referer:
          'https://petstore.octoperf.com/actions/Catalog.action?viewProduct=&productId=K9-PO-02',
        'sec-ch-ua': '"Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-user': '?1',
        'upgrade-insecure-requests': '1',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
      },
    })
    response = http.get('https://petstore.octoperf.com/css/jpetstore.css', {
      headers: {
        'sec-ch-ua': '"Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"',
        Referer: 'https://petstore.octoperf.com/actions/Catalog.action',
        'sec-ch-ua-mobile': '?0',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://petstore.octoperf.com/images/logo-topbar.gif', {
      headers: {
        'sec-ch-ua': '"Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"',
        Referer: 'https://petstore.octoperf.com/actions/Catalog.action',
        'sec-ch-ua-mobile': '?0',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://petstore.octoperf.com/images/cart.gif', {
      headers: {
        'sec-ch-ua': '"Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"',
        Referer: 'https://petstore.octoperf.com/actions/Catalog.action',
        'sec-ch-ua-mobile': '?0',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://petstore.octoperf.com/images/separator.gif', {
      headers: {
        'sec-ch-ua': '"Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"',
        Referer: 'https://petstore.octoperf.com/actions/Catalog.action',
        'sec-ch-ua-mobile': '?0',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://petstore.octoperf.com/images/sm_fish.gif', {
      headers: {
        'sec-ch-ua': '"Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"',
        Referer: 'https://petstore.octoperf.com/actions/Catalog.action',
        'sec-ch-ua-mobile': '?0',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://petstore.octoperf.com/images/sm_dogs.gif', {
      headers: {
        'sec-ch-ua': '"Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"',
        Referer: 'https://petstore.octoperf.com/actions/Catalog.action',
        'sec-ch-ua-mobile': '?0',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://petstore.octoperf.com/images/sm_reptiles.gif', {
      headers: {
        'sec-ch-ua': '"Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"',
        Referer: 'https://petstore.octoperf.com/actions/Catalog.action',
        'sec-ch-ua-mobile': '?0',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://petstore.octoperf.com/images/sm_cats.gif', {
      headers: {
        'sec-ch-ua': '"Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"',
        Referer: 'https://petstore.octoperf.com/actions/Catalog.action',
        'sec-ch-ua-mobile': '?0',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://petstore.octoperf.com/images/sm_birds.gif', {
      headers: {
        'sec-ch-ua': '"Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"',
        Referer: 'https://petstore.octoperf.com/actions/Catalog.action',
        'sec-ch-ua-mobile': '?0',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://petstore.octoperf.com/images/fish_icon.gif', {
      headers: {
        accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'es-ES,es;q=0.9',
        cookie: 'JSESSIONID=C03B5A1E82611108CA0D3A94C30B92C4',
        referer: 'https://petstore.octoperf.com/actions/Catalog.action',
        'sec-ch-ua': '"Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'image',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'same-origin',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
      },
    })
    response = http.get('https://petstore.octoperf.com/images/dogs_icon.gif', {
      headers: {
        accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'es-ES,es;q=0.9',
        cookie: 'JSESSIONID=C03B5A1E82611108CA0D3A94C30B92C4',
        referer: 'https://petstore.octoperf.com/actions/Catalog.action',
        'sec-ch-ua': '"Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'image',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'same-origin',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
      },
    })
    response = http.get('https://petstore.octoperf.com/images/cats_icon.gif', {
      headers: {
        accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'es-ES,es;q=0.9',
        cookie: 'JSESSIONID=C03B5A1E82611108CA0D3A94C30B92C4',
        referer: 'https://petstore.octoperf.com/actions/Catalog.action',
        'sec-ch-ua': '"Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'image',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'same-origin',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
      },
    })
    response = http.get('https://petstore.octoperf.com/images/reptiles_icon.gif', {
      headers: {
        accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'es-ES,es;q=0.9',
        cookie: 'JSESSIONID=C03B5A1E82611108CA0D3A94C30B92C4',
        referer: 'https://petstore.octoperf.com/actions/Catalog.action',
        'sec-ch-ua': '"Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'image',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'same-origin',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
      },
    })
    response = http.get('https://petstore.octoperf.com/images/birds_icon.gif', {
      headers: {
        accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'es-ES,es;q=0.9',
        cookie: 'JSESSIONID=C03B5A1E82611108CA0D3A94C30B92C4',
        referer: 'https://petstore.octoperf.com/actions/Catalog.action',
        'sec-ch-ua': '"Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'image',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'same-origin',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
      },
    })
    response = http.get('https://petstore.octoperf.com/images/splash.gif', {
      headers: {
        accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'es-ES,es;q=0.9',
        cookie: 'JSESSIONID=C03B5A1E82611108CA0D3A94C30B92C4',
        referer: 'https://petstore.octoperf.com/actions/Catalog.action',
        'sec-ch-ua': '"Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'image',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'same-origin',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
      },
    })
    response = http.get(
      'https://avira-pwm-extensions.s3.eu-central-1.amazonaws.com/icon-negative-list.json'
    )
  })

  group(
    'page_5 - https://petstore.octoperf.com/actions/Catalog.action?viewCategory=&categoryId=FISH',
    function () {
      response = http.get(
        'https://petstore.octoperf.com/actions/Catalog.action?viewCategory=&categoryId=FISH',
        {
          headers: {
            accept:
              'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'es-ES,es;q=0.9',
            cookie: 'JSESSIONID=C03B5A1E82611108CA0D3A94C30B92C4',
            referer: 'https://petstore.octoperf.com/actions/Catalog.action',
            'sec-ch-ua': '"Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'sec-fetch-dest': 'document',
            'sec-fetch-mode': 'navigate',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-user': '?1',
            'upgrade-insecure-requests': '1',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get('https://petstore.octoperf.com/css/jpetstore.css', {
        headers: {
          'sec-ch-ua': '"Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"',
          Referer:
            'https://petstore.octoperf.com/actions/Catalog.action?viewCategory=&categoryId=FISH',
          'sec-ch-ua-mobile': '?0',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
          'sec-ch-ua-platform': '"Windows"',
        },
      })
      response = http.get('https://petstore.octoperf.com/images/logo-topbar.gif', {
        headers: {
          'sec-ch-ua': '"Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"',
          Referer:
            'https://petstore.octoperf.com/actions/Catalog.action?viewCategory=&categoryId=FISH',
          'sec-ch-ua-mobile': '?0',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
          'sec-ch-ua-platform': '"Windows"',
        },
      })
      response = http.get('https://petstore.octoperf.com/images/cart.gif', {
        headers: {
          'sec-ch-ua': '"Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"',
          Referer:
            'https://petstore.octoperf.com/actions/Catalog.action?viewCategory=&categoryId=FISH',
          'sec-ch-ua-mobile': '?0',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
          'sec-ch-ua-platform': '"Windows"',
        },
      })
      response = http.get('https://petstore.octoperf.com/images/separator.gif', {
        headers: {
          'sec-ch-ua': '"Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"',
          Referer:
            'https://petstore.octoperf.com/actions/Catalog.action?viewCategory=&categoryId=FISH',
          'sec-ch-ua-mobile': '?0',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
          'sec-ch-ua-platform': '"Windows"',
        },
      })
      response = http.get('https://petstore.octoperf.com/images/sm_fish.gif', {
        headers: {
          'sec-ch-ua': '"Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"',
          Referer:
            'https://petstore.octoperf.com/actions/Catalog.action?viewCategory=&categoryId=FISH',
          'sec-ch-ua-mobile': '?0',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
          'sec-ch-ua-platform': '"Windows"',
        },
      })
      response = http.get('https://petstore.octoperf.com/images/sm_dogs.gif', {
        headers: {
          'sec-ch-ua': '"Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"',
          Referer:
            'https://petstore.octoperf.com/actions/Catalog.action?viewCategory=&categoryId=FISH',
          'sec-ch-ua-mobile': '?0',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
          'sec-ch-ua-platform': '"Windows"',
        },
      })
      response = http.get('https://petstore.octoperf.com/images/sm_reptiles.gif', {
        headers: {
          'sec-ch-ua': '"Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"',
          Referer:
            'https://petstore.octoperf.com/actions/Catalog.action?viewCategory=&categoryId=FISH',
          'sec-ch-ua-mobile': '?0',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
          'sec-ch-ua-platform': '"Windows"',
        },
      })
      response = http.get('https://petstore.octoperf.com/images/sm_cats.gif', {
        headers: {
          'sec-ch-ua': '"Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"',
          Referer:
            'https://petstore.octoperf.com/actions/Catalog.action?viewCategory=&categoryId=FISH',
          'sec-ch-ua-mobile': '?0',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
          'sec-ch-ua-platform': '"Windows"',
        },
      })
      response = http.get('https://petstore.octoperf.com/images/sm_birds.gif', {
        headers: {
          'sec-ch-ua': '"Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"',
          Referer:
            'https://petstore.octoperf.com/actions/Catalog.action?viewCategory=&categoryId=FISH',
          'sec-ch-ua-mobile': '?0',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
          'sec-ch-ua-platform': '"Windows"',
        },
      })
      response = http.get(
        'https://avira-pwm-extensions.s3.eu-central-1.amazonaws.com/icon-negative-list.json'
      )
      response = http.get(
        'https://avira-pwm-extensions.s3.eu-central-1.amazonaws.com/icon-negative-list.json'
      )
    }
  )

  group(
    'page_6 - https://petstore.octoperf.com/actions/Catalog.action?viewProduct=&productId=FI-SW-01',
    function () {
      response = http.get(
        'https://petstore.octoperf.com/actions/Catalog.action?viewProduct=&productId=FI-SW-01',
        {
          headers: {
            accept:
              'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'es-ES,es;q=0.9',
            cookie: 'JSESSIONID=C03B5A1E82611108CA0D3A94C30B92C4',
            referer:
              'https://petstore.octoperf.com/actions/Catalog.action?viewCategory=&categoryId=FISH',
            'sec-ch-ua': '"Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'sec-fetch-dest': 'document',
            'sec-fetch-mode': 'navigate',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-user': '?1',
            'upgrade-insecure-requests': '1',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get('https://petstore.octoperf.com/css/jpetstore.css', {
        headers: {
          'sec-ch-ua': '"Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"',
          Referer:
            'https://petstore.octoperf.com/actions/Catalog.action?viewProduct=&productId=FI-SW-01',
          'sec-ch-ua-mobile': '?0',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
          'sec-ch-ua-platform': '"Windows"',
        },
      })
      response = http.get('https://petstore.octoperf.com/images/logo-topbar.gif', {
        headers: {
          'sec-ch-ua': '"Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"',
          Referer:
            'https://petstore.octoperf.com/actions/Catalog.action?viewProduct=&productId=FI-SW-01',
          'sec-ch-ua-mobile': '?0',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
          'sec-ch-ua-platform': '"Windows"',
        },
      })
      response = http.get('https://petstore.octoperf.com/images/cart.gif', {
        headers: {
          'sec-ch-ua': '"Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"',
          Referer:
            'https://petstore.octoperf.com/actions/Catalog.action?viewProduct=&productId=FI-SW-01',
          'sec-ch-ua-mobile': '?0',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
          'sec-ch-ua-platform': '"Windows"',
        },
      })
      response = http.get('https://petstore.octoperf.com/images/separator.gif', {
        headers: {
          'sec-ch-ua': '"Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"',
          Referer:
            'https://petstore.octoperf.com/actions/Catalog.action?viewProduct=&productId=FI-SW-01',
          'sec-ch-ua-mobile': '?0',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
          'sec-ch-ua-platform': '"Windows"',
        },
      })
      response = http.get('https://petstore.octoperf.com/images/sm_fish.gif', {
        headers: {
          'sec-ch-ua': '"Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"',
          Referer:
            'https://petstore.octoperf.com/actions/Catalog.action?viewProduct=&productId=FI-SW-01',
          'sec-ch-ua-mobile': '?0',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
          'sec-ch-ua-platform': '"Windows"',
        },
      })
      response = http.get('https://petstore.octoperf.com/images/sm_dogs.gif', {
        headers: {
          'sec-ch-ua': '"Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"',
          Referer:
            'https://petstore.octoperf.com/actions/Catalog.action?viewProduct=&productId=FI-SW-01',
          'sec-ch-ua-mobile': '?0',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
          'sec-ch-ua-platform': '"Windows"',
        },
      })
      response = http.get('https://petstore.octoperf.com/images/sm_reptiles.gif', {
        headers: {
          'sec-ch-ua': '"Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"',
          Referer:
            'https://petstore.octoperf.com/actions/Catalog.action?viewProduct=&productId=FI-SW-01',
          'sec-ch-ua-mobile': '?0',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
          'sec-ch-ua-platform': '"Windows"',
        },
      })
      response = http.get('https://petstore.octoperf.com/images/sm_cats.gif', {
        headers: {
          'sec-ch-ua': '"Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"',
          Referer:
            'https://petstore.octoperf.com/actions/Catalog.action?viewProduct=&productId=FI-SW-01',
          'sec-ch-ua-mobile': '?0',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
          'sec-ch-ua-platform': '"Windows"',
        },
      })
      response = http.get('https://petstore.octoperf.com/images/sm_birds.gif', {
        headers: {
          'sec-ch-ua': '"Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"',
          Referer:
            'https://petstore.octoperf.com/actions/Catalog.action?viewProduct=&productId=FI-SW-01',
          'sec-ch-ua-mobile': '?0',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
          'sec-ch-ua-platform': '"Windows"',
        },
      })
      response = http.get(
        'https://avira-pwm-extensions.s3.eu-central-1.amazonaws.com/icon-negative-list.json'
      )
    }
  )

  // Automatically added sleep
  sleep(1)
}
