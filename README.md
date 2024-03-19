<br>
<h1 align="center">Adonis Starter</h1>
<br>

## About adonis-starter

<p>Dasar adonisJs untuk praktikum Mata Kuliah Proyek Perangkat Lunak Informatika USK.</p>

## Installation

1. clone the repository

```bash
git clone https://github.com/frisrsyd/adonis-starter
```
```bash
cd adonis-starter
```

2. Install dependencies

```bash
npm install
```

3. migrate the table

Copy the contents of `.env.example` file to new `.env` file:

```sh
cp .env.example .env
```

or if error, run this

```sh
copy .env.example .env
```

Create an empty database and fill in the `DB_DATABASE`, `DB_USER`, and `DB_PSASWORD` fields in the `.env` file to match the credentials of your newly created database.

following the .env file, change `DB_DATABASE = adonis-starter`, so make the empty database name is `adonis-starter`

Run the migrations:

```sh
node ace migration:run
```

4. run serve with

```bash
node ace serve --watch
```
or
```bash
npm run dev
```

## Contact info

if any problem contact me on <a target="_blank" href="https://api.whatsapp.com/send?phone=6285261297134">whatsapp</a>
