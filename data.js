var APP_DATA = {
  "scenes": [
    {
      "id": "0-salon",
      "name": "Salon",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0422176956672065,
          "pitch": 0.32260430599296797,
          "rotation": 0,
          "target": "2-kuchnia"
        },
        {
          "yaw": 1.9080123300372112,
          "pitch": 0.4343776472742924,
          "rotation": 0,
          "target": "1-korytarz_new"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-korytarz_new",
      "name": "Korytarz_new",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -0.6770347095659641,
        "pitch": 0.19580269518654703,
        "fov": 1.5585319558264286
      },
      "linkHotspots": [
        {
          "yaw": 1.1959686082746561,
          "pitch": 0.38640682123525316,
          "rotation": 0,
          "target": "3-lazienka"
        },
        {
          "yaw": 1.819922876384772,
          "pitch": 0.34506849445212495,
          "rotation": 0,
          "target": "4-lazienka_dodatkowa_lepsza"
        },
        {
          "yaw": 1.5355790609360787,
          "pitch": 0.34526491119466307,
          "rotation": 0,
          "target": "5-sypialnia"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kuchnia",
      "name": "Kuchnia",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.1355588278893975,
          "pitch": 0.3797621945675864,
          "rotation": 0,
          "target": "0-salon"
        },
        {
          "yaw": 3.0608424349175145,
          "pitch": 0.4100138243455671,
          "rotation": 0,
          "target": "1-korytarz_new"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-lazienka",
      "name": "Lazienka",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.055412413336203,
          "pitch": 0.5264187733937131,
          "rotation": 0,
          "target": "1-korytarz_new"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-lazienka_dodatkowa_lepsza",
      "name": "Lazienka_dodatkowa_lepsza",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.364764725680052,
          "pitch": 0.585130590445516,
          "rotation": 0,
          "target": "1-korytarz_new"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-sypialnia",
      "name": "Sypialnia",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.9972546047927793,
          "pitch": 0.3942677579688123,
          "rotation": 0,
          "target": "1-korytarz_new"
        },
        {
          "yaw": 0.5079470919590001,
          "pitch": 0.41586863300972077,
          "rotation": 0,
          "target": "6-biuro"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-biuro",
      "name": "Biuro",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0589814980539973,
          "pitch": 0.43921800617731144,
          "rotation": 0,
          "target": "5-sypialnia"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
