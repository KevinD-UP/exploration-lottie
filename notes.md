## Example JSON document for the overlays

```json
{
  "width": 1920,
  "height": 1080,
  "state": 1,
  "timeline": [
    {
      "id": "2300144_121397_1674224412595",
      "fileId": "2300144_121397_1674224412595",
      "state": 3,
      "mediaWidth": 1920,
      "mediaHeight": 1080,
      "type": "video",
      "active": true,
      "start": 0,
      "duration": 10.16,
      "end": 10.16,
      "trimStart": 0,
      "trimEnd": 10.16,
      "trimDuration": 10.16,
      "animationFunction": "ease",
      "mode": "free",
      "backgroundMode": false,
      "playbackRate": 1,
      "keyframes": [
        {
          "start": 0,
          "crop": {
            "x": 50,
            "y": 50,
            "width": 100,
            "height": 100,
            "rotation": 0
          },
          "position": {
            "x": 50,
            "y": 50,
            "width": 100,
            "height": 100,
            "rotation": 0,
            "radius": 0
          },
          "filters": [],
          "volume": 100
        }
      ],
      "effects": { "in": false, "out": false }
    }
  ],
  "media": [
    {
      "id": "2300144_121397_1674224470358",
      "type": "text",
      "text": "[color=104911]Te[/color]x[backgroundColor=104911]t[/backgroundColor]",
      "active": true,
      "lineWidth": 66.67,
      "lineHeight": 8.291,
      "fontId": "0",
      "textColor": "#ffffff",
      "textSize": 24,
      "duration": 2.54,
      "textAlign": "center",
      "trimStart": 0,
      "trimEnd": 2.54,
      "trimDuration": 2.54,
      "start": 5.07919,
      "end": 7.61919,
      "animationFunction": "ease",
      "customizations": [],
      "keyframes": [
        {
          "start": 0,
          "position": {
            "x": 34.605,
            "y": 73.115,
            "width": 66.67,
            "height": 8.291,
            "rotation": 0,
            "radius": 0
          },
          "backgroundColor": "#000000",
          "backgroundOpacity": 0.5,
          "filters": []
        }
      ],
      "fontSize": 24
    },
    {
      "id": "2300144_121397_1674224447224",
      "fileId": "2300144_121397_1674224447224",
      "mediaWidth": 1500,
      "mediaHeight": 1101,
      "type": "image",
      "active": true,
      "start": 1.227556,
      "duration": 2.54,
      "end": 3.767556,
      "trimStart": 0,
      "trimEnd": 2.54,
      "trimDuration": 2.54,
      "animationFunction": "ease",
      "mode": "free",
      "backgroundMode": false,
      "playbackRate": 1,
      "keyframes": [
        {
          "start": 0,
          "crop": {
            "x": 50,
            "y": 50,
            "width": 100,
            "height": 100,
            "rotation": 0
          },
          "position": {
            "x": 76.4206679488487,
            "y": 27.236872854795166,
            "width": 30.577562095300433,
            "height": 39.90030925244297,
            "rotation": 0,
            "radius": 0
          },
          "filters": [],
          "volume": 100
        }
      ],
      "effects": { "in": false, "out": false },
      "customizations": []
    }
  ]
}
```

## Possible fragment for a media lottie-keyword-animation


```json
{
  "id": "2300144_121397_1674224470358",
  "type": "lottie-keyword-animation",
  "animationId": 123,
  "text": "Hello world",
  "active": true,
  "lineWidth": 66.67,
  "lineHeight": 8.291,
  "fontId": "0",
  "textColor": "#ffffff",
  "textSize": 24,
  "duration": 2.54,
  "textAlign": "center",
  "trimStart": 0,
  "trimEnd": 2.54,
  "trimDuration": 2.54,
  "start": 5.07919,
  "end": 7.61919,
  "animationFunction": "ease",
  "customizations": [],
  "keyframes": [
    {
      "start": 0,
      "position": {
        "x": 34.605,
        "y": 73.115,
        "width": 66.67,
        "height": 8.291,
        "rotation": 0,
        "radius": 0
      },
      "backgroundColor": "#000000",
      "backgroundOpacity": 0.5,
      "filters": []
    }
  ],
  "fontSize": 24
}
```

## Possible fragment for a media lottie-image-animation

```json
{
  "id": "2300144_121397_1674224447224",
  "fileId": "2300144_121397_1674224447224",
  "mediaWidth": 1500,
  "mediaHeight": 1101,
  "type": "lottie-image-animation",
  "animationId": 123,
  "active": true,
  "start": 1.227556,
  "duration": 2.54,
  "end": 3.767556,
  "trimStart": 0,
  "trimEnd": 2.54,
  "trimDuration": 2.54,
  "animationFunction": "ease",
  "mode": "free",
  "backgroundMode": false,
  "playbackRate": 1,
  "keyframes": [
    {
      "start": 0,
      "crop": {
        "x": 50,
        "y": 50,
        "width": 100,
        "height": 100,
        "rotation": 0
      },
      "position": {
        "x": 76.4206679488487,
        "y": 27.236872854795166,
        "width": 30.577562095300433,
        "height": 39.90030925244297,
        "rotation": 0,
        "radius": 0
      },
      "filters": [],
      "volume": 100
    }
  ],
  "effects": { "in": false, "out": false },
  "customizations": []
}
```

## Possible fragment for a media lottie-prebuilt-animation

```json
{
  "id": "2300144_121397_1674224447224",
  "fileId": "2300144_121397_1674224447224",
  "mediaWidth": 1500,
  "mediaHeight": 1101,
  "type": "lottie-prebuilt-animation",
  "animationId": 123,
  "active": true,
  "start": 1.227556,
  "duration": 2.54,
  "end": 3.767556,
  "trimStart": 0,
  "trimEnd": 2.54,
  "trimDuration": 2.54,
  "animationFunction": "ease",
  "mode": "free",
  "backgroundMode": false,
  "playbackRate": 1,
  "keyframes": [
    {
      "start": 0,
      "crop": {
        "x": 50,
        "y": 50,
        "width": 100,
        "height": 100,
        "rotation": 0
      },
      "position": {
        "x": 76.4206679488487,
        "y": 27.236872854795166,
        "width": 30.577562095300433,
        "height": 39.90030925244297,
        "rotation": 0,
        "radius": 0
      },
      "filters": [],
      "volume": 100
    }
  ],
  "effects": { "in": false, "out": false },
  "customizations": []
}
```


# Frontend architecture

We will add another component for rendering the Lottie animation on the same layer as the other types of media

# Open questions

Partial personalisation of a text might not be possible with lottie ?

What is the interface of the animation transformer ? Does it expect a set of variables ?

In that case, we might need to use :
- the same naming convention for a variable and a key in the document - $fontId
- a mapping between a key in the document and a variable

# 

The ID of a media could be used to store the generated animation



