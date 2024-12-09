# Pixel Beat

This is just a small prank app to [rickroll](https://en.wikipedia.org/wiki/Rickrolling) your friends.

## Contributing

### Installing Dependencies

After cloning this repo, install dependecies:

```
pnpm i
```

### Checking code format

```
pnpm check
```

### Testing the app in the browser

To test your work in your browser (with hot reloading!) while developing:

```
pnpm start
# Alternatively to test in a more advanced WebXDC emulator:
pnpm emulator
```

### Building

To package the WebXDC file:

```
pnpm build
```

To package the WebXDC with developer tools inside to debug in Delta Chat, set the `NODE_ENV`
environment variable to "debug":

```
NODE_ENV=debug pnpm build
```

The resulting optimized `.xdc` file is saved in `dist-xdc/` folder.

### Releasing

To automatically build and create a new GitHub release with the `.xdc` file:

```
git tag -a v1.0.1
git push origin v1.0.1
```

## Credits

- [howler.js](https://github.com/goldfire/howler.js) library used for playing sounds
- rickroll animated image taken from: https://giphy.com/gifs/memes-rickroll-potatoz-UeIMji8ti2zeoFI9Wg
- the sound used is a fragment of [Never Gonna Give You Up (8 Bit Remix Cover Version)](https://www.youtube.com/watch?v=9NcPvmk4vfo)
- the app icon was created using characters from: https://opengameart.org/content/3-cyberpunk-characters
