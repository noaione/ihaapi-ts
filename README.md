# ihaapi-ts
api.ihateani.me but written in TypeScript

The website are originally written in Python with Sanic as it's backend.<br>
I'm creating this to actually try javascript and typescript.

Currently not deployed publicly.

Running the server: `npm run start`

## Running it yourself
Don't.

I made it not modular so you need to change some files, especially `dbconn/index.ts`

Where I put 2 const because my dumbass use 2 different DB and not one for the same thing.

The database can be hosted anywhere the backend part could be found here: [noaione/vtb-schedule/server](https://github.com/noaione/vtb-schedule/tree/master/server)

`routes/museid.ts` could be deleted since it was specifically for ONE discord server.

## Why do yoo have some deps that aren't even used?
Shut the fuck up.<br>
I'm gonna use it later, just not now because i'm lazy.

## License
MIT License, refer more to the [LICENSE](https://github.com/noaione/ihaapi-ts/blob/master/LICENSE) file.
