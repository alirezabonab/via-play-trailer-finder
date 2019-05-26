import { pickIMDB } from "./viaplay";
import Config from "../config";

test("get IMDB info out of movie info from via play data", () => {
  const mockData = {
    client: {
      module: "movie",
      template: "movie"
    },
    totalProductCount: 1,
    type: "product",
    styles: ["movie-product", "product"],
    _embedded: {
      "viaplay:product": {
        type: "movie",
        publicPath: "50-first-dates-2004",
        content: {
          duration: {
            milliseconds: 5701024,
            readable: "1h 35min"
          },
          images: {
            boxart: {
              url:
                "https://i-viaplay-com.akamaized.net/viaplay-prod/891/1000/1498744504-10bbac093eebb11e20faa5256e2728ff3ad7e51f.jpg?width=199&height=298",
              template:
                "https://i-viaplay-com.akamaized.net/viaplay-prod/891/1000/1498744504-10bbac093eebb11e20faa5256e2728ff3ad7e51f.jpg{?width,height}"
            },
            landscape: {
              url:
                "https://i-viaplay-com.akamaized.net/viaplay-prod/891/1000/1498744504-449ebc7fbb68d1833d1daa2ba6cbab62efcb3eb4.jpg?width=960&height=540",
              template:
                "https://i-viaplay-com.akamaized.net/viaplay-prod/891/1000/1498744504-449ebc7fbb68d1833d1daa2ba6cbab62efcb3eb4.jpg{?width,height}"
            },
            packshot: {
              url:
                "https://i-viaplay-com.akamaized.net/viaplay-prod/891/1000/1498744504-e84ef00d04bf12ce816d25487cfb3123e2fa79a2.jpg?width=960&height=540",
              template:
                "https://i-viaplay-com.akamaized.net/viaplay-prod/891/1000/1498744504-e84ef00d04bf12ce816d25487cfb3123e2fa79a2.jpg{?width,height}"
            },
            hero169: {
              template:
                "https://i-viaplay-com.akamaized.net/viaplay-prod/891/1000/1498744504-449ebc7fbb68d1833d1daa2ba6cbab62efcb3eb4.jpg{?width,height}"
            },
            coverart23: {
              template:
                "https://i-viaplay-com.akamaized.net/viaplay-prod/891/1000/1498744504-10bbac093eebb11e20faa5256e2728ff3ad7e51f.jpg{?width,height}"
            },
            coverart169: {
              template:
                "https://i-viaplay-com.akamaized.net/viaplay-prod/891/1000/1498744504-e84ef00d04bf12ce816d25487cfb3123e2fa79a2.jpg{?width,height}"
            }
          },
          promoVideos: {},
          parentalRating: "12",
          people: {
            actors: [
              "Adam Sandler",
              "Drew Barrymore",
              "Rob Schneider",
              "Sean Astin",
              "Lusia Strus"
            ],
            directors: ["Peter Segal"]
          },
          production: {
            country: "USA",
            year: 2004
          },
          imdb: {
            id: "tt0343660",
            rating: "6.8",
            votes: "303 291",
            url: "http://www.imdb.com/title/tt0343660?ref_ext_viaplay"
          },
          synopsis:
            "När marinbiologen Henry Roth möter den unga kvinnan Lucy Whitmore på ett café är han övertygad om att han funnit den stora kärleken. Således stämmer han träff med Lucy vid samma tidpunkt på samma plats nästa dag.",
          title: "50 First Dates"
        },
        user: {
          starred: false
        },
        system: {
          availability: {
            start: "2019-03-31T22:00:00.000Z",
            end: "2019-06-30T21:59:00.000Z",
            planInfo: {
              isRental: false,
              isPurchase: false
            },
            svod: {
              start: "2019-03-31T22:00:00.000Z",
              end: "2019-06-30T21:59:00.000Z",
              planInfo: {
                isRental: false,
                isPurchase: false
              }
            }
          },
          flags: ["hd", "availableInHd"],
          guid: "20250352",
          productKey: "20250352",
          isKids: false
        },
        _links: {
          self: {
            title: "50 First Dates",
            href:
              "https://content.viaplay.se/pc-se/film/50-first-dates-2004?partial=true"
          },
          "viaplay:page": {
            title: "50 First Dates",
            href: "https://content.viaplay.se/pc-se/film/50-first-dates-2004"
          },
          "viaplay:templatedPage": {
            title: "50 First Dates",
            href:
              "https://content.viaplay.se/{deviceKey}/film/50-first-dates-2004"
          },
          "viaplay:genres": [
            {
              title: "Komedi",
              tagId: "99368193",
              href: "https://content.viaplay.se/pc-se/film/komedi"
            },
            {
              title: "Romantik",
              tagId: "99368206",
              href: "https://content.viaplay.se/pc-se/film/romantik"
            }
          ],
          "viaplay:stream": {
            href:
              "https://play.viaplay.se/api/stream/byguid{?deviceId,deviceName,deviceType,userAgent,availabilityContext,cmaf,cse}&deviceKey=pc-se&guid=20250352&returnurl=https%3A%2F%2Fcontent.viaplay.se%2Fpc-se%2Ffilm%2F50-first-dates-2004%3Fpartial%3Dtrue&producturl=https%3A%2F%2Fcontent.viaplay.se%2Fpc-se%2Ffilm%2F50-first-dates-2004%3Fpartial%3Dtrue&sectionPath=%2Ffilm&defaultAvailabilityContext=svod",
            templated: true
          },
          "viaplay:templatedStream": {
            href:
              "https://play.viaplay.se/api/stream/byguid{?deviceId,deviceName,deviceType,userAgent,deviceKey,availabilityContext,cmaf,cse}&guid=20250352&returnurl=https%3A%2F%2Fcontent.viaplay.se%2Fpc-se%2Ffilm%2F50-first-dates-2004%3Fpartial%3Dtrue&producturl=https%3A%2F%2Fcontent.viaplay.se%2Fpc-se%2Ffilm%2F50-first-dates-2004%3Fpartial%3Dtrue&templatedproducturl=https%3A%2F%2Fcontent.viaplay.se%2F%7BdeviceKey%7D%2Ffilm%2F50-first-dates-2004%3Fpartial%3Dtrue&sectionPath=%2Ffilm&defaultAvailabilityContext=svod",
            templated: true
          },
          "viaplay:peopleSearch": {
            href: 'https://content.viaplay.se/pc-se/search?query="{person}"',
            templated: true
          }
        },
        notice: {
          message: "User must login to view content",
          code: 1002,
          _links: {
            curies: [
              {
                name: "viaplay",
                href: "http://docs.viaplay.tv/rel/{rel}",
                templated: true
              }
            ],
            "viaplay:accountPurchasePackage": {
              href: "/package?recommended=viaplay",
              templated: false,
              redirect: false
            }
          }
        }
      }
    }
  };

  const result = {
    id: "tt0343660",
    rating: "6.8",
    votes: "303 291",
    url: "http://www.imdb.com/title/tt0343660?ref_ext_viaplay"
  };
  expect(pickIMDB(mockData)).toEqual(result);
});
