# DNSaaDB

## Intro
DNS as a DataBase is a PoC that uses Vercel's DNS API as a simple DB.

Check it out at: [dns-aa-db.vercel.app](https://dns-aa-db.vercel.app)

## How it works
We are using Vercel's DNS to store each ToDo item as a TXT record with a random ([nanoId](https://github.com/ai/nanoid)) hostname.
Each ToDo object is represented using [MODL](https://www.modl.uk/) which is DNS-friendly.

To recover all ToDos we are using Vercel's DNS API to list them. 
This is a little cheat because we are not using real DNS to recover all the values.
We could use nodejs's dns.resolve() to query DNS, but we would need to know the hostnames in advanced.

